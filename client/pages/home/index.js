import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../actions/home'
import '../../styles/common.scss'
import Footer from '../../components/footer'

class Hello extends Component {
  componentDidMount() {
    console.log('component did mount')
  }

  incre = () => {
    this.props.incre(3)
  }

  decre = () => {
    this.props.decre(2)
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
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incre: num => dispatch(increment(num)),
    decre: num => dispatch(decrement(num))
  }
}

Hello.propTypes = {
  incre: React.PropTypes.func.isRequired,
  decre: React.PropTypes.func.isRequired,
  counter: React.PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
