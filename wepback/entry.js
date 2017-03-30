const { readdirSync } = require('fs')
const { resolve } = require('path')
const basicConfig = require('./config')
const { entryPath } = basicConfig
const appRoot = process.cwd()

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

module.exports = {
  getEntryModule,
  getEntry
}
