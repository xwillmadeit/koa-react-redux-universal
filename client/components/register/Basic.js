import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.updateStep({
          step: 'next',
          userInfo: values
        })
      }
    })
  }

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致')
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
        >
          {getFieldDecorator('username', {
            initialValue: this.props.userInfo.username,
            rules: [{ required: true, message: '5-20个字符，支持中文，字母，数字，下划线和竖线!', whitespace: false }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="登录密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            initialValue: this.props.userInfo.password,
            rules: [{
              required: true, message: '请输入7-20字符的密码。',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            initialValue: this.props.userInfo.password,
            rules: [{
              required: true, message: '请输入确认密码',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" size="large" onClick={this.handleSubmit}>下一步</Button>
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
