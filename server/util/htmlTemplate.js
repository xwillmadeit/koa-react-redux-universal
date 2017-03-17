import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router-dom'

export const renderPage = (ctx, Module, moduleName, reducer) => {
	let html,
		preloadedState,
		context = {}

	if (typeof reducer !== 'undefined') {
		const store = createStore(reducer)

		html = renderToString(
			<StaticRouter>
			    <Provider store={store}>
	      			<Module />
			    </Provider>
		    </StaticRouter>
	  	)

	  	preloadedState = store.getState()
	} else {
		html = renderToString(
		 	<StaticRouter location={ctx.request.url} context={context}>
  				<Module />
  			</StaticRouter>
	  	)
	}

  	return getHtmlTemplate(html, moduleName, preloadedState)
}

const getHtmlTemplate = (html, moduleName, preloadedState) => {

	const assets = webpackIsomorphicTools.assets()

	// styles
	const vendorStyleHTML = assets.styles.vendor ? `
		<link href="${assets.styles.vendor}" rel="stylesheet" type="text/css" />
	` : ``

	const moduleStyleHTML = assets.styles[moduleName] ? `
		<link href="${assets.styles[moduleName]}" rel="stylesheet" type="text/css" />
	` : ``

	// scripts
	const reduxScriptHTML = typeof preloadedState !== 'undefined' ? `
		<script>
      		window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    	</script>
	` : ``

	const vendorScriptHTML =  `
		<script src="${assets.javascript.vendor}"></script>
	`

	const moduleScriptHTML = `
		<script src="${assets.javascript[moduleName]}"></script>
	`

	return `
    <!doctype html>
    <html>
      <head>
      	<meta charset="utf-8" />
      	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>${moduleName} Page</title>
        ${vendorStyleHTML}
        ${moduleStyleHTML}
      </head>
      <body>
        <div id="root">${html}</div>
        ${reduxScriptHTML}
        ${vendorScriptHTML}
        ${moduleScriptHTML}
      </body>
    </html>
    `
}