import 'babel-polyfill'
import WebpackIsomorphicTools from 'webpack-isomorphic-tools'
import { resolve } from 'path'
import webpackIsomorphicConfig from '../isomorphic-config'

const dirRoot = resolve(process.cwd())

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicConfig)
  .server(dirRoot, () => {
      require('./server')
  })
