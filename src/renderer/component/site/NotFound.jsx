import React from 'react'
import { Result, Button } from 'antd'
import { history } from '../../history'
import 'antd/dist/antd.css'
const NotFound = () => {
  return (<Result
    status="404"
    title="404"
    subTitle="Not found page！"
    extra={<Button type="primary" onClick={() => history.push('/')}>Go back</Button>}
  />)
}
export default NotFound
