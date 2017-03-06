import React, { Component } from 'react'

export default class Hello extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: 'this is a server side rendering react...'
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		this.setState({
			title: 'wow, the title changed!!!'
		})
	}

	render() {
		return (
			<html>
                <head>
                    <title>react universal</title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body>
                    <div>
                        <h1>Hello World!</h1>
                        <p>{this.state.title}</p>
                        <button onClick={this.handleClick}>Click Me</button>
                        <ul>
                        	<li><a href="/lol">Lol</a></li>
                        	<li><a href="/dota">Dota</a></li>
                        </ul>
                        <script src="/dist/home.bundle.js" />
                    </div>
                </body>
            </html>
		)
	}
}
