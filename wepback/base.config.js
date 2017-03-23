const { readdirSync } = require('fs')
const { resolve } = require('path')

const appRoot = process.cwd()

const entryPath = 'client/entries'

// ['dota.js', 'home.js', 'lol.js']
const entryFiles = readdirSync(resolve(appRoot, entryPath))
// ['dota', 'home', 'lol']
const getEntryModule = () => entryFiles.map(file => file.split('.')[0])

const getEntryFile = module => resolve(appRoot, `${entryPath}/${module}.js`)

const getEntryFileWithHot = module => {
  return [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    getEntryFile(module)
  ]
}

const getEntry = hot => {
  return getEntryModule().reduce((entryObj, module) => {
          if (hot) {
              entryObj[module] = getEntryFileWithHot(module)
          } else {
              entryObj[module] = getEntryFile(module)
          }
          
          return entryObj
        }, {})
}

const publicPath = 
  process.env.NODE_ENV === 'production' ? 'http://localhost:4000/' : 'http://localhost:4001/'

const vendors = [
	'react', 
	'react-dom', 
	'redux', 
	'react-redux'
]

const jsRules = {
    test: /\.js$/,
    exclude: resolve(appRoot, 'node_modules'),
    use: [
        'babel-loader',
        'eslint-loader'
    ]
}

const cssRulesOption = {
  fallback: 'style-loader',
  use: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      }
    },
    'postcss-loader',
    'sass-loader'
  ]
}

module.exports = {
	vendors,
  getEntryModule,
  getEntry,
  publicPath,
  jsRules,
  cssRulesOption
}
