const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const app = new Koa()
const ReactDOMServer = require('react-dom/server')
// const Routers = require('./src/routers-serve').default;
// const staticM = require('koa-static');
const staticM = require('koa-static-router')
const fs = require('fs')
import React,{ Component } from 'react'
import {
  StaticRouter,
  Switch,
  Route,
  matchPath
} from 'react-router-dom'
import App from './src/App'
// import routerConfig from './src/router-config'
import serveRouterConfig from './src/serve-router-config'
// import StrongRoute from './src/strongRouter'
import ServeRouter from './src/serveRouter'

const router = new Router()

router.get(/^\//, async (ctx,next) => {
  // console.log(ctx)
  if(!ctx.request.url.includes('dist')){
    console.log('访问路径 ctx.request.path',ctx.request.path)
    // 数据预取
    const promises = []
    let serveDataConfig = {}
    serveRouterConfig.some(route => {
      const match = matchPath(ctx.request.path, route)
      console.log('---------react-router-match---------',match)
      if (match)  {
        if (route.getServeData) {
          promises.push(route.getServeData(match))
        }
        serveDataConfig = {
          ...serveDataConfig,
          ...match
        }
      }
      return match
    })
    await Promise.all(promises).then(data => {
      if(data && data[0]){
        console.log('服务端返回数据',data[0])
        serveDataConfig.data = data[0]
      }
    })


    const htmlString = ReactDOMServer.renderToString(
      <StaticRouter location={ctx.request.url} context={{}}>
        <App/>
        <Switch>
          {serveRouterConfig.map((router) => {
            console.log(router)
            return  <ServeRouter {...router} serveData={serveDataConfig.data || null} isSsr={true}>
            </ServeRouter>
          })}
        </Switch>
      </StaticRouter>
    )
    let htmlText = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'),'utf-8')
    htmlText = htmlText.replace('<script id="__pre-server-data" type="application/json"></script>',`<script id="__pre-server-data" type="application/json">${JSON.stringify(serveDataConfig.data || {})}</script>`)
    ctx.type = 'html'
    // console.log(htmlText.replace('<div id="root"></div>',`<div id="root">${htmlString}</div>`))
    ctx.body =htmlText.replace('<div id="root"></div>',`<div id="root">${htmlString}</div>`)
  } else {
    console.log('--dist--路径-----',ctx.request.url)
    next()
  }
})

// 静态服务
app.use(staticM({
  dir:'dist', 
  router:'/dist'
}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3099,() =>{
  console.log('port 3099')
})