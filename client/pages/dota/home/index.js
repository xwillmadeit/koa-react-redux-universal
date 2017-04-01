import React from 'react'
import {
  NavLink,
  Route
} from 'react-router-dom'

const Dota = props => (
  <div>
    <h1>{JSON.stringify(props.gameList)}</h1>
    <nav>
      <NavLink activeStyle={{ color: 'red' }} to="/dota/about1">dota about1</NavLink>
      <NavLink activeStyle={{ color: 'red' }} to="/dota/about2">dota about2</NavLink>
    </nav>

    <Route path="/dota/about1" render={() => <div>dota about1</div>} />
    <Route path="/dota/about2" render={() => <div>dota about2</div>} />
  </div>
)

Dota.propTypes = {
  gameList: React.PropTypes.object.isRequired
}

export default Dota
