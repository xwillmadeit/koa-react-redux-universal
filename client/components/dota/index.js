import React from 'react'
import { 
	NavLink,
	Route
} from 'react-router-dom'
import tu from '../../images/1.jpg'
import '../../styles/main.scss'

const Dota = () => (
    <div>
    	<h1>Dota Pages...</h1>
    	<nav>
    		<NavLink activeStyle={{ color: 'red' }} to="/dota/about1">dota about1</NavLink>
    		<NavLink activeStyle={{ color: 'red' }} to="/dota/about2">dota about2</NavLink>
    	</nav>
        
        <Route path="/dota/about1" render={() => <div><img src={tu} /></div>} />
        <Route path="/dota/about2" render={() => <div>dota about2</div>} />
    </div>
)

export default Dota
