import { readdirSync } from 'fs'
import { basename, resolve } from 'path'
import koaRouter from 'koa-router'
import home from '../controllers/home'

const router = koaRouter()

const filename = basename(module.filename)

readdirSync(__dirname)
	.filter(file => file !== filename)
	.forEach(file => {
		const route = require(resolve(__dirname, file))
		router.use(route.routes()).use(route.allowedMethods())
	})

router.get('/', home.index)

router.get('*', async(ctx, next) => {
	ctx.body = 'Page not exists...'
})

export default router