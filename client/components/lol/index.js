import React, { Component } from 'react'
import axios from 'axios'
import setAuthorizationToken from '../../utils/setAuthorizationToken'
import LoginForm from '../login/loginForm'

export default class Lol extends Component {
    state = {
        users: []
    }

    submit = ({ username, password }) => {
        axios.post('http://localhost:4000/login', {
            username,
            password
        }).then(res => {
            alert('Login！')
            const { token } = res.data
            localStorage.setItem('jwtToken', token)
            setAuthorizationToken(token)
        }).catch(() => alert('login failed！'))
    }

    getLolUsers = () => {
        axios.get('http://localhost:4000/lol/users')
            .then(res => {
                this.setState({
                    users: res.data.users
                })
            })
            .catch(() => alert('login first！'))
    }

	render() {
		return (
            <div>
                <h2>lol page...</h2>

                <LoginForm submit={this.submit} />

                <button onClick={this.getLolUsers}>Get Lol Users</button>

                { this.state.users.map(user => <p key={user.name}>{user.name}</p>)}
            </div>
		)
	}
}
