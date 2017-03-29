const Koa = require('koa')
const webpack = require('webpack')
const argv = require('minimist')
const { resolve } = require('path')
const serve = require('koa-static')
const webpackOnlyClientConfig = require('../wepback/client.config')
const webpackConfig = require('../webpack.config')
const koaWebpack = require('koa-webpack')

const app = new Koa()

if (argv(process.argv.slice(2)).client === 'only') {
  const onlyClientCompiler = webpack(webpackOnlyClientConfig)

  const middleware = koaWebpack({
    compiler: onlyClientCompiler,
    dev: {
      noInfo: true,
      stats: { colors: true },
      publicPath: webpackOnlyClientConfig.output.publicPath
    }
  })

  app.use(middleware)

  app.use(serve(resolve(__dirname + '/public')))
} else {
  const compiler = webpack(webpackConfig)

  const middleware = koaWebpack({
    compiler: compiler,
    dev: {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true }
    }
  })

  app.use(middleware)
}

app.listen(4001, () => {
  console.log('webpack dev server is running at 4001...')
})
