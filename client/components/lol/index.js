import React, { Component } from 'react'
import axios from 'axios'
import setAuthorizationToken from '../../utils/setAuthorizationToken'

export default class Lol extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            users: []
        }

        this.handleClick = this.handleClick.bind(this)
        this.getLolUsers = this.getLolUsers.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(e) {
        e.preventDefault()

        axios.post('http://localhost:4000/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            alert('Login！')
            const { token } = res.data
            localStorage.setItem('jwtToken', token)
            setAuthorizationToken(token)
        }).catch(() => alert('login failed！'))
    }

    getLolUsers() {
        axios.get('http://localhost:4000/lol/users')
            .then(res => {
                this.setState({
                    users: res.data.users
                })
            })
            .catch(() => alert('login first！'))
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

	render() {
		return (
            <div>
                <h2>lol page...</h2>

                <form>
                    <div>
                        <label htmlFor="username">username</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={this.state.username}
                            onChange={this.handleChange} 
                            id="username" />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input 
                            type="text" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.handleChange} 
                            id="password" />
                    </div>
                    <button onClick={this.handleClick}>login</button>
                </form>

                <button onClick={this.getLolUsers}>Get Lol Users</button>

                { this.state.users.map(user => <p key={user.name}>{user.name}</p>)}
            </div>
		)
	}
}
