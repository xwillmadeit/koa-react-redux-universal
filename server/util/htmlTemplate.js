import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router-dom'
import { bundleFolder } from '../config/constants'

export const renderPage = (ctx, Module, bundleName, reducer) => {
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

  	return getHtmlTemplate(html, bundleName, preloadedState)
}

export const getHtmlTemplate = (html, bundleName, preloadedState) => {

	const reduxScript = typeof preloadedState !== 'undefined' ? `
		<script>
      		window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    	</script>
	` : ``

	const vendorBundleScript = `
		<script src="${bundleFolder}/vendor.bundle.js"></script>
	`

	const moduleBundleScript = `
		<script src="${bundleFolder}/${bundleName}"></script>
	`

	return `
    <!doctype html>
    <html>
      <head>
        <title>${bundleName.split('.')[0]} Page</title>
      </head>
      <body>
        <div id="root">${html}</div>
        ${reduxScript}
        ${vendorBundleScript}
        ${moduleBundleScript}
      </body>
    </html>
    `
}