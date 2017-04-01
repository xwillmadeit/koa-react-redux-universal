import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Lol from '../pages/lol/home'

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
  module.hot.accept('../pages/lol/home', () => { render(Lol) })
}
