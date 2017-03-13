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
			<html>
                <head>
                    <title>Dota Page</title>
                </head>
                <body>
                    <div>
                        <h1>Dota Page</h1>
                        <button onClick={this.handleClick}>click me</button>
                        <script src="/js/vendor.bundle.js" />
                        <script src="/js/dota.bundle.js" />
                    </div>
                </body>
            </html>
		)
	}
}
