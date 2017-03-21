import Router from 'koa-router'
import lol from '../controllers/lol'

const router = Router({
	prefix: '/lol'
})

router.get('/', lol.index)

export default router