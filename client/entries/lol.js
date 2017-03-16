import React from 'react'
import ReactDOM from 'react-dom'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import Lol from '../components/lol'

if (localStorage.getItem('jwtToken')) {
	setAuthorizationToken(localStorage.getItem('jwtToken'))
}

ReactDOM.render(
	<Lol />,
	document.getElementById('root')
)
