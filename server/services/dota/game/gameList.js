import fetch from '../../../util/fetch'
import { DotaAPI } from '../../../api'

const getGameList = () => {
  return fetch(DotaAPI.GAME_LIST, 'get')
}

export default getGameList
