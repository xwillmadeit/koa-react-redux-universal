import Lol from '../../client/pages/lol/home'
import { renderPage } from '../util/htmlTemplate'

const index = ctx => {
  ctx.body = renderPage(ctx, Lol, 'lol')
}

export default {
  index
}
