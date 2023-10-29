/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Row, Col, Tag, Select, TimePicker } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import {
  ClockCircleOutlined
} from '@ant-design/icons'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

class Home extends Component {
  render() {
    return <Row>
      <Col md={8}>
        <Row>
          <Tag color="processing" icon={<ClockCircleOutlined />}>Image creation schedule</Tag>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col md={10}>
            Month:
          </Col>
          <Col md={14}>
            <Select
              defaultValue={-1}
              style={{
                width: '100%'
              }}
              options={[
                { value: -1, label: 'Every month' },
                { value: 0, label: 'January' },
                { value: 1, label: 'February' },
                { value: 2, label: 'March' },
                { value: 3, label: 'April' },
                { value: 4, label: 'May' },
                { value: 5, label: 'June' },
                { value: 6, label: 'July' },
                { value: 7, label: 'August' },
                { value: 8, label: 'September' },
                { value: 9, label: 'October' },
                { value: 10, label: 'November' },
                { value: 11, label: 'December' }
              ]}
            />
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col md={10}>
            Week:
          </Col>
          <Col md={14}>
            <Select
              defaultValue={0}
              style={{
                width: '100%'
              }}
              mode='multiple'
              options={[
                { value: -1, label: 'Every Week' },
                { value: 0, label: 'SUN' },
                { value: 1, label: 'MON' },
                { value: 2, label: 'TUE' },
                { value: 3, label: 'WED' },
                { value: 4, label: 'THU' },
                { value: 5, label: 'FRI' },
                { value: 6, label: 'SAT' }
              ]}
            />
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col md={10}>
            Time:
          </Col>
          <Col md={14}>
            <TimePicker style={{width: '100%'}} defaultValue={dayjs('00:00:00', 'HH:mm:ss')} />
          </Col>
        </Row>
      </Col>
      <Col md={14}></Col>
    </Row>
  }
}
const mapStateToProps = (state) => ({ user: state.user })
export default withRouter(connect(mapStateToProps, null)(Home))
