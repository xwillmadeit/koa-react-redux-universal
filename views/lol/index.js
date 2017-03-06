import React, { Component } from 'react'

export default class Lol extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        alert('lol page');
    }
	render() {
		return (
			<html>
                <head>
                    <title>Lol Page</title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body>
                    <div>
                        <h1>Lol Page</h1>
                        <button onClick={this.handleClick}>click me</button>
                        <script src="/dist/lol.bundle.js" />
                    </div>
                </body>
            </html>
		)
	}
}
