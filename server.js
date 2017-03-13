import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import React from 'react'
import { renderToString } from 'react-dom/server'
import webpack from 'webpack'
import webpackConfig from './webpack.config'
import webpackMiddleware from 'koa-webpack-dev-middleware'

import Home from './components/home'
import Dota from './components/dota'
import Lol from './components/lol'

const router = new Router()

router.get('/', (ctx, next) => {
	ctx.body = renderToString(<Home />)
})

router.get('/lol', (ctx, next) => {
	ctx.body = renderToString(<Lol />)
})

router.get('/dota', (ctx, next) => {
	ctx.body = renderToString(<Dota />)
})

//initialize app instance
const app = new Koa()

app.use(serve(path.resolve(__dirname + '/public')))
app.use(router.routes()).use(router.allowedMethods())
app.use(webpackMiddleware(webpack(webpackConfig), {
	publicPath: "/js",
}))

app.listen(4000, () => {
	console.log('app is running at 4000...')
})
