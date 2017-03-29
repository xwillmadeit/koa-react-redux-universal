import Dota from '../../client/components/dota'
import { renderPage } from '../util/htmlTemplate'

const index = (ctx, next) => {
  ctx.body = renderPage(ctx, Dota, 'dota')
}

export default {
  index
}
