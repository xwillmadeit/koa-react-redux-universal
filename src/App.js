import React, { Component } from 'react'
import Hello from './Hello'

export default class App extends Component {
	render() {
		return (
			<div>
				<h2>this is a server side rendering example</h2>
				<Hello title="welcome to the ssr world" />
			</div>
		)
	}
}
