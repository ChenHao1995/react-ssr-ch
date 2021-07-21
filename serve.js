const Koa = require('koa');
const path = require('path');
const Router = require('koa-router')
const app = new Koa();
const ReactDOMServer = require('react-dom/server');
// const Routers = require('./src/routers-serve').default;
// const staticM = require('koa-static');
const staticM = require('koa-static-router')
const fs = require('fs');
import React,{ Component } from 'react'
import {
    StaticRouter,
    Switch,
    Route,
  } from 'react-router-dom'
import App from './src/App'
import routerConfig from './src/router-config'

const router = new Router()

router.get(/^\//, async (ctx,next) => {
    // console.log(ctx)
    if(!ctx.request.url.includes('dist')){
        const htmlString = ReactDOMServer.renderToString(
        <StaticRouter location={ctx.request.url} context={{}}>
            <App/>
            <Switch>
                {routerConfig.map((router) =>{
                    return  <Route path={router.path} component={require(path.resolve('./src',router.componentPath)).default}>
                    </Route>
                })}
            </Switch>
        </StaticRouter>
        )
        const htmlText = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'),'utf-8')
        ctx.type = 'html';
        // console.log(htmlText.replace('<div id="root"></div>',`<div id="root">${htmlString}</div>`))
        ctx.body =htmlText.replace('<div id="root"></div>',`<div id="root">${htmlString}</div>`);
    } else {
        console.log('--dist--',ctx.request.url)
        next()
    }
})

// 静态服务
app.use(staticM({
    dir:'dist', 
    router:'/dist'
}))

app.use(router.routes()).use(router.allowedMethods());

app.listen(3099,() =>{
    console.log('port 3099')
});