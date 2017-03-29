import Router from 'koa-router'
import dota from '../controllers/dota'

const router = Router({
  prefix: '/dota'
})

router.get('/', dota.index)

router.get('/:subpage', dota.index)

export default router
