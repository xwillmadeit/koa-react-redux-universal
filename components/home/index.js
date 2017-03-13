import React, { Component } from 'react'

export default class Hello extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: 'this is a server side rendering react...'
		}

		this.handleClick = this.handleClick.bind(this)
	}

    componentDidMount() {
        console.log('component did mount')
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
                        <script src="/js/vendor.bundle.js" />
                        <script src="/js/home.bundle.js" />
                    </div>
                </body>
            </html>
		)
	}
}

