import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Dota from '../components/dota'

const render = Component => {
	ReactDOM.render(
		<BrowserRouter>
			<Component />
		</BrowserRouter>,
		document.getElementById('root')
	)
}

render(Dota)

if (module.hot) {
  module.hot.accept('../components/dota', () => { render(Dota) })
}
