import Home from '../../client/components/home'
import { renderPage } from '../util/htmlTemplate'
import { homeReducer } from '../../client/reducers/home'

const index = (ctx, next) => {
  const dataOptions = { reducer: homeReducer }
  ctx.body = renderPage(ctx, Home, 'home', dataOptions)
}

export default {
  index
}
