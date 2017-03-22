import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import Lol from '../components/lol'

if (localStorage.getItem('jwtToken')) {
	setAuthorizationToken(localStorage.getItem('jwtToken'))
}

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	)
}

render(Lol)

if (module.hot) {
  module.hot.accept('../components/lol', () => { render(Lol) })
}
