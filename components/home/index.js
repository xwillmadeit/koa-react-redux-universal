import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../actions/home'

class Hello extends Component {
	constructor(props) {
		super(props)

		this.incre = this.incre.bind(this)
		this.decre = this.decre.bind(this)
	}

    componentDidMount() {
        console.log('component did mount')
    }

	incre() {
		this.props.incre(20)
	}

	decre() {
		this.props.decre(3)
	}

	render() {
		return (
            <div>
                <h1>Hello World...</h1>
                <p>{this.props.counter}</p>
                <button onClick={this.incre}>++</button>
                <button onClick={this.decre}>--</button>
                <ul>
                	<li><a href="/lol">Lol</a></li>
                	<li><a href="/dota">Dota</a></li>
                </ul>
            </div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		incre: (num) => {
			dispatch(increment(num))
		},
		decre: (num) => {
			dispatch(decrement(num))
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)

