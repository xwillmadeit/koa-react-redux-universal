import { SERVER_URL } from '../../config/api'

const getFullServerUrl = url => `${SERVER_URL}/${url}`

const prefixServiceUrl = src => {
  Object.keys(src).forEach(key => {

    if (typeof src[key] === 'object') {
      prefixServiceUrl(src[key])
    }

    if (typeof src[key] === 'string') {
      src[key] = getFullServerUrl(src[key])
    }
  })
}

export default prefixServiceUrl
