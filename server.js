import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './views/home'
import Dota from './views/dota'
import Lol from './views/lol'

const router = new Router()

router.get('/', (ctx, next) => {
	ctx.body = renderToString(<App />)
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

app.listen(4000, () => {
	console.log('app is running at 4000...')
})