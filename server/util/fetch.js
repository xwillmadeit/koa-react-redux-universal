import axios from 'axios'

const fetch = async (url, method, data) => {
  try {
    const resp = await axios({ method, url, data })
    return resp.data
  } catch (e) {
    return 'whoops...'
  }
}

export default fetch
