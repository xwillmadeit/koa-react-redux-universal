import { resolve } from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import authenticate from './middlewares/authenticate'
import secret from './middlewares/jwtSecret'
import Home from '../client/components/home'
import Dota from '../client/components/dota'
import Lol from '../client/components/lol'
import { homeReducer } from '../client/reducers/home'
import { renderPage } from './util/htmlTemplate'

// initialize app instance
const app = new Koa()
const router = new Router()
const protectedRouter = new Router()

app.use(logger())
app.use(bodyParser())

app.use(async (ctx, next) => {
	if (__DEV__) {
	 	webpackIsomorphicTools.refresh()
	}
	await next()
})

app.use(serve(resolve(__dirname + '/public')))
app.use(router.routes()).use(router.allowedMethods())

router.get('/', (ctx, next) => {
	ctx.body = renderPage(ctx, Home, 'home', homeReducer)
})

router.get('/home', (ctx, next) => {
	ctx.body = renderPage(ctx, Home, 'home', homeReducer)
})

router.get('/lol', (ctx, next) => {
	ctx.body = renderPage(ctx, Lol, 'lol')
})

router.get('/dota', (ctx, next) => {
	ctx.body = renderPage(ctx, Dota, 'dota')
})

router.get('/dota/:subpage', (ctx, next) => {
	ctx.body = renderPage(ctx, Dota, 'dota')
})

router.post('/login', authenticate, (ctx, next) => {
	ctx.body = ctx.authenticateData
})

app.use(secret)
app.use(protectedRouter.routes()).use(protectedRouter.allowedMethods())

protectedRouter.get('/lol/users', async(ctx, next) => {
	ctx.body = { users: [ { name: 'jack' }, { name: 'bob' } ]}
})

// fallback 404 page
app.use(async (ctx, next) => {
	ctx.body = 'Page not exists...'
})

app.listen(4000, () => {
	console.log('app is running at 4000...')
})
