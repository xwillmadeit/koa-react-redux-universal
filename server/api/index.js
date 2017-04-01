import DotaAPI from './dota'
import LolAPI from './lol'
import RegisterAPI from './register'

import prefixServiceUrl from '../util/prefixServerURL'

// 所有引入的 API 都需要添加到下面数组中
[
  DotaAPI,
  LolAPI,
  RegisterAPI
].forEach(api => prefixServiceUrl(api))

export default {
  DotaAPI,
  LolAPI,
  RegisterAPI
}
