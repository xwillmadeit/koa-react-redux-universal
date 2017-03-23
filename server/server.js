import { resolve } from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import favicon from 'koa-favicon'
import router from './routes'

const app = new Koa()

app.use(async (ctx, next) => {
	if (process.env.NODE_ENV !== 'production') {
	 	webpackIsomorphicTools.refresh()
	}
	await next()
})

app.use(logger())
app.use(bodyParser())
app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(serve(resolve(__dirname + '/public')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
	console.log('app is running at 4000...')
})
