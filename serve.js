const Koa = require('koa');
const path = require('path');
const Router = require('koa-router')
const app = new Koa();
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App').default;
// const staticM = require('koa-static');
const staticM = require('koa-static-router')
const fs = require('fs');
import React from 'react'

const router = new Router()





console.log(App)


console.log(path.resolve(__dirname, 'dist'))





// ReactDOMServer.renderToString(element)
const htmlString = ReactDOMServer.renderToString(<App/>)
console.log(htmlString,'----')
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// response

router.get('/', async (ctx) => {
    const htmlText = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'),'utf-8')
    ctx.type = 'html';
    console.log(htmlText.replace('<div id="root"></div>',`<div id="root">${htmlString}</div>`))
    ctx.body =htmlText.replace('<div id="root"></div>',`<div id="root">${htmlString}</div>`);
})

app.use(router.routes()).use(router.allowedMethods());

// 静态服务
app.use(staticM({
    dir:'dist',    
    router:'/dist'    
}))

app.listen(3099,() =>{
    console.log('port 3099')
});