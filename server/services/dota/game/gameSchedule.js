import fetch from '../../../util/fetch'
import { DotaAPI } from '../../../api'

const getGameSchedule = () => {
  return fetch(DotaAPI.GAME_LIST, 'get')
}

export default getGameSchedule
