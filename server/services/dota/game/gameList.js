import fetch from '../../../util/fetch'

const getGameList = () => {
  return fetch('https://api.github.com/users/xwillmadeit', 'get')
}

export default getGameList
