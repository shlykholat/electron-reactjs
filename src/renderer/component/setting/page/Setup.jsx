/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Row, Col, Input, Button, message, Typography } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import {
  SettingOutlined,
  SaveOutlined
} from '@ant-design/icons'
import { getBaseConstant, updateBaseConstant } from '../action'
import _ from 'lodash'

const Detail = ({ getBaseConstant, updateBaseConstant }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [baseConstant, setBaseConstant] = useState({})
  const onSave = (type) => {
    updateBaseConstant({ type, base_value: baseConstant[type] }, res => {
      if (res.success) {
        messageApi.success('Update success!!!');
      } else {
        messageApi.error('Something went wrong');
      }
    })
  }
  const onChangeInput = e => {
    setBaseConstant({
      ...baseConstant,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    getBaseConstant(res => {
      if (res.success) {
        setBaseConstant({ 
          ...baseConstant,
          serviceUrl: _.find(res.data, { type: 'serviceUrl' })['base_value'],
          imagePath: _.find(res.data, { type: 'imagePath' })['base_value']
        })
      }
    })
  }, [])
  return <Row>
    {contextHolder}
    <Col md={24}>
      <Row gutter={5} >
        <Col><SettingOutlined /></Col>
        <Col> Settings </Col>
      </Row>
      <Row style={{ marginTop: 5 }} gutter={20}>
        <Col md={12}>
          <Row gutter={5}>
            <Typography>-Red-Gate service url</Typography>
            <Col md={20}>
              <Input value={baseConstant?.serviceUrl} addonBefore="http://" addonAfter=".com:14145" name='serviceUrl' onChange={onChangeInput} />
            </Col>
            <Col md={4}>
              <Button style={{ width: '100%' }} icon={<SaveOutlined />} type="primary" onClick={() => onSave('serviceUrl')}></Button>
            </Col>
          </Row>
        </Col>
        <Col md={12}>
          <Row gutter={5}>
            <Typography>-Image path</Typography>
            <Col md={20}>
              <Input value={baseConstant?.imagePath} addonBefore="//" name='imagePath' onChange={onChangeInput} />
            </Col>
            <Col md={4}>
              <Button style={{ width: '100%' }} icon={<SaveOutlined />} type="primary" onClick={() => onSave('imagePath')}></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>

}

const mapDispatchToProps = dispatch => {
  return {
    getBaseConstant: (cb) => dispatch(getBaseConstant(cb)),
    updateBaseConstant: (data, cb) => dispatch(updateBaseConstant(data, cb))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(Detail))
