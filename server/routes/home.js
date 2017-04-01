import Router from 'koa-router'
import home from '../controllers/home'

const router = Router({
  prefix: '/home'
})

router.get('/', home.index)

export default router
