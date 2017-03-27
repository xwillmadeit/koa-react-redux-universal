import React, { Component } from 'react'

export default class loginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submit({
      username: this.state.username,
      password: this.state.password
    })
  }

  render() {
    return (
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
          <span>(password)</span>
        </div>
        <button onClick={this.handleSubmit}>login</button>
      </form>
    )
  }
}

loginForm.propTypes = {
  submit: React.PropTypes.func.isRequired
}
