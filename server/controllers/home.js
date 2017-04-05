import Home from '../../client/pages/home'
import { renderPage } from '../util/htmlTemplate'
import { homeReducer } from '../../client/reducers/home'

const index = ctx => {
  const dataOptions = { reducer: homeReducer }
  ctx.body = renderPage(ctx, Home, 'home', dataOptions)
}

export default {
  index
}
