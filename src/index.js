import Koa from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './App'

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = renderToString(<App />)
})

app.listen(4000, () => {
	console.log('app is running at 4000...')
})

