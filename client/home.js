import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from '../components/home'
import { homeReducer } from '../reducers/home'

const preloadedState = window.PRELOADED_STATE

delete window.PRELOADED_STATE

const store = createStore(homeReducer, preloadedState)

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	/* eslint-disable comma-dangle */
	document.getElementById('root')
)
