import React, { Component } from 'react'
import Basic from './Basic'
import Detail from './Detail'
import '../../styles/register.scss'

class Register extends Component {
  state = {
    step: 1,
    userInfo: {
      username: '',
      password: ''
    }
  }

  updateStep = ({ step, userInfo }) => {
    if (step === 'next') {
      this.setState({
        step: this.state.step + 1,
        userInfo
      })
    } else {
      this.setState({
        step: this.state.step - 1,
        userInfo
      })
    }
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        <h2>欢迎注册</h2>
        <h4><span className={this.state.step === 1 ? 'register-active-step' : ''}>注册账户</span> -
            <span className={this.state.step === 2 ? 'register-active-step' : ''}>填写信息</span> -
            <span className={this.state.step === 3 ? 'register-active-step' : ''}>注册成功</span></h4>
        {this.state.step === 1 ? <Basic updateStep={this.updateStep} {...this.state} /> : ''}
        {this.state.step === 2 ? <Detail updateStep={this.updateStep} {...this.state} /> : ''}
      </div>
    )
  }
}

export default Register
