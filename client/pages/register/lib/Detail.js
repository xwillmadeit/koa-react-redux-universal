import React, { Component } from 'react'
import { Form, Input, Row, Col, Checkbox, Button } from 'antd'

const FormItem = Form.Item

class RegistrationForm extends Component {
  state = {
    confirmDirty: false
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  updateStep = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      this.props.updateStep({
        step: 'prev',
        userInfo: {
          ...this.props.userInfo,
          ...values
        }
      })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            initialValue: this.props.userInfo.email,
            rules: [{
              type: 'email', message: ' 邮箱 不是有效的电子邮件地址.',
            }, {
              required: true, message: '请填写真实邮箱，用于找回密码',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="身份证"
          hasFeedback
        >
          {getFieldDecorator('identity', {
            initialValue: this.props.userInfo.identity,
            rules: [{
              required: true, message: 'Please input your identity!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="姓名"
          hasFeedback
        >
          {getFieldDecorator('fullname', {
            initialValue: this.props.userInfo.fullname,
            rules: [{ required: true, message: 'Please input your fullname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="验证码"
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                initialValue: this.props.userInfo.captcha,
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input size="large" />
              )}
            </Col>
            <Col span={12}>
              <Button size="large">Get captcha</Button>
            </Col>
          </Row>
        </FormItem>

        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            initialValue: this.props.userInfo.agreement,
            valuePropName: 'checked',
          })(
            <Checkbox>我接受<a>《VPGAME用户协议》</a></Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">注册</Button>
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" size="large" onClick={this.updateStep}>上一步</Button>
        </FormItem>
      </Form>
    )
  }
}

RegistrationForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  updateStep: React.PropTypes.func.isRequired,
  userInfo: React.PropTypes.object.isRequired
}

export default Form.create()(RegistrationForm)
