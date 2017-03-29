import Lol from '../../client/components/lol'
import { renderPage } from '../util/htmlTemplate'

const index = async (ctx, next) => {
  ctx.body = renderPage(ctx, Lol, 'lol')
}

export default {
  index
}
