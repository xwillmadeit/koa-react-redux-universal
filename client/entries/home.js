import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Home from '../pages/home'
import { homeReducer } from '../reducers/home'

const preloadedState = window.PRELOADED_STATE

delete window.PRELOADED_STATE

const store = createStore(homeReducer, preloadedState)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Home)

if (module.hot) {
  module.hot.accept('../pages/home', () => { render(Home) })
}
