import env from '../../config/env'

export const bundleFolder = '/public/js'

export const devBundleFolder = `http://${env.webpackHost}:${env.webpackPort}/public/js`