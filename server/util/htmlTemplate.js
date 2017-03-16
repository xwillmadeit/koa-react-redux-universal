import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { bundleFolder } from '../config/constants'

export const renderPage = (Module, bundleName, reducer) => {
	let html,
		preloadedState

	if (typeof reducer !== 'undefined') {
		const store = createStore(reducer)

		html = renderToString(
		    <Provider store={store}>
      			<Module />
		    </Provider>
	  	)

	  	preloadedState = store.getState()
	} else {
		html = renderToString(
  			<Module />
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