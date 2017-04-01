import React, { Component } from 'react'
import './index.scss'
import Basic from './lib/Basic'
import Detail from './lib/Detail'

class RegisterPage extends Component {
  state = {
    step: 1,
    userInfo: {
      username: '',
      password: '',
      email: '',
      identity: '',
      fullname: '',
      captcha: '',
      agreement: false
    }
  }

  updateStep = ({ step, userInfo }) => {
    if (step === 'next') {
      this.setState({
        ...this.state,
        step: this.state.step + 1,
        userInfo
      })
    } else {
      this.setState({
        ...this.state,
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

export default RegisterPage

