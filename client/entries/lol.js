import React from 'react'
import ReactDOM from 'react-dom'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import Lol from '../components/lol'

if (localStorage.getItem('jwtToken')) {
	setAuthorizationToken(localStorage.getItem('jwtToken'))
}

const render = Component => {
	ReactDOM.render(
		<Component />,
		document.getElementById('root')
	)
}

render(Lol)

if (module.hot) {
  module.hot.accept('../components/lol', () => { render(Lol) })
}
