import Koa from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import views from 'koa-views'
import path from 'path'

import Demo from './app/main'
const app = new Koa()
// 将/public文件夹设置为静态路径
app.use(require('koa-static')(__dirname + '/public'))
// 将ejs设置为我们的模板引擎
app.use(views(path.resolve(__dirname, './views'), { map: { html: 'ejs' } }))

// response
app.use(async ctx => {
  let str = renderToString(<Demo />)
  await ctx.render('index', {
    root: str,
  })
})

app.listen(3000)

console.log('系统启动，端口：8080')
