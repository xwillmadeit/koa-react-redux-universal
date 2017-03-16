import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import webpackMiddleware from 'koa-webpack-dev-middleware'
import authenticate from './middlewares/authenticate'
import secret from './middlewares/jwtSecret'
import Home from '../client/components/home'
import Dota from '../client/components/dota'
import Lol from '../client/components/lol'
import { homeReducer } from '../client/reducers/home'
import { renderPage } from './util/htmlTemplate'

const router = new Router()
const protectedRouter = new Router()

//initialize app instance
const app = new Koa()
app.use(bodyParser())
app.use(serve(path.resolve(__dirname + '/public')))
app.use(router.routes()).use(router.allowedMethods())

if (process.env.NODE_ENV === 'dev') {
	app.use(webpackMiddleware(webpack(webpackConfig), {
		publicPath: '/public/js',
		lazy: true
	}))
}

router.get('/', (ctx, next) => {
	ctx.body = renderPage(Home, 'home.bundle.js', homeReducer)
})

router.get('/home', (ctx, next) => {
	ctx.body = renderPage(Home, 'home.bundle.js', homeReducer)
})

router.get('/lol', (ctx, next) => {
	ctx.body = renderPage(Lol, 'lol.bundle.js')
})

router.get('/dota', (ctx, next) => {
	ctx.body = renderPage(Dota, 'dota.bundle.js')
})

router.post('/login', authenticate, (ctx, next) => {
	ctx.body = ctx.authenticateData
})

app.use(secret)
app.use(protectedRouter.routes()).use(protectedRouter.allowedMethods())

protectedRouter.get('/lol/users', async(ctx, next) => {
	console.log(ctx.state.user)
	ctx.body = { users: [ { name: 'jack' }, { name: 'bob' } ]}
})

// fallback 404 page
app.use(async (ctx, next) => {
	ctx.body = 'Page not exists...'
})

app.listen(4000, () => {
	console.log('app is running at 4000...')
})
