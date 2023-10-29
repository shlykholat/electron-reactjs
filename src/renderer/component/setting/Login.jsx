/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component, useEffect } from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Card, Form, Input, Button, Typography, message } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import { login_in_action } from './action'
import base64Img from './page/bg.jpg'

const Login = ({ login_in_action }) => {

  const onFinish = (values) => {
    const { password } = values
    login_in_action({ password }, res => {
      console.log(res)
    })
  }
  return (
    <Row id="login-container" type="flex" justify="center" align="middle" style={{ minHeight: '100vh', backgroundImage: `url("${base64Img}")`, backgroundSize: 'cover' }} >
      <Col>
        <Card>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
          >
            <Form.Item style={{textAlign: 'center'}}>
              <Typography.Title level={2} type='primary'>Login</Typography.Title>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    login_in_action: (payload, cb) => dispatch(login_in_action(payload, cb))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
