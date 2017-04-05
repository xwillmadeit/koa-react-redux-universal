import Register from '../../client/pages/register'
import { renderPage } from '../util/htmlTemplate'

const index = ctx => {
  ctx.body = renderPage(ctx, Register, 'register')
}

export default {
  index
}
