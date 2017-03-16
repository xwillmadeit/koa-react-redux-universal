import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Dota from '../components/dota'

ReactDOM.render(
	<BrowserRouter>
		<Dota />
	</BrowserRouter>,
	document.getElementById('root')
)
