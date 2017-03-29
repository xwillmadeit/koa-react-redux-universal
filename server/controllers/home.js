import Home from '../../client/components/home'
import { renderPage } from '../util/htmlTemplate'
import { homeReducer } from '../../client/reducers/home'

const index = (ctx, next) => {
  ctx.body = renderPage(ctx, Home, 'home', homeReducer)
}

export default {
  index
}
