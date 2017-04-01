import Router from 'koa-router'
import register from '../controllers/register'

const router = Router({
  prefix: '/register'
})

router.get('/', register.index)

export default router
