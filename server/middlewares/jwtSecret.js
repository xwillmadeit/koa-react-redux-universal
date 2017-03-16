import jwt from 'koa-jwt'
import jwtSecret from '../config/jwtSecret'

export default jwt({
  secret: jwtSecret
})