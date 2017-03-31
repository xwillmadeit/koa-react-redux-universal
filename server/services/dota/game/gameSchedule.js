import fetch from '../../../util/fetch'

const getGameSchedule = () => {
  return fetch('https://api.github.com/users/xwillmadeit', 'get')
}

export default getGameSchedule
