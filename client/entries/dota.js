import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Dota from '../components/dota'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter>
				<Component />
			</BrowserRouter>
		</AppContainer>,
		document.getElementById('root')
	)
}

render(Dota)

if (module.hot) {
  module.hot.accept('../components/dota', () => { render(Dota) })
}
