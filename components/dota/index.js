import React, { Component } from 'react'

export default class Dota extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		alert('dota page');
	}

	render() {
		return (
            <div>
                <h1>Dota Page</h1>
                <button onClick={this.handleClick}>click me</button>
            </div>
		)
	}
}
