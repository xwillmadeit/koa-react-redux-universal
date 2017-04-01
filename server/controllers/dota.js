import Dota from '../../client/pages/dota/home'
import { renderPage } from '../util/htmlTemplate'
import { GameService } from '../services/dota'
import getDataFromApi from '../util/getDataFromApi'

const index = async (ctx, next) => {

  const propsData = await getDataFromApi(
    [
      GameService.gameList(),
      GameService.gameSchedule()
    ],
    [
      "gameList",
      "gameSchedule"
    ]
  )

  const dataOptions = { propsData }

  ctx.body = renderPage(ctx, Dota, 'dota', dataOptions)
}

export default {
  index
}
