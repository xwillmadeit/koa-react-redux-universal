import React, { Component } from 'react'
import LoginForm from '../login/loginForm'
import '../../styles/main.css'
import '../../styles/lol.css'

export default class Lol extends Component {
    state = {
        users: []
    }

    submit = () => {
        alert('server not done...')
    }

	render() {
		return (
            <div>
                <h2>lol page...</h2>

                <LoginForm submit={this.submit} />
            </div>
		)
	}
}
