/* eslint-disable react/prop-types */
import React from 'react'
import { Menu } from 'antd'
import {
  UploadOutlined,
  UnorderedListOutlined,
  SolutionOutlined,
  HomeOutlined,
  SettingOutlined
} from '@ant-design/icons'
import _ from 'lodash'
const { SubMenu } = Menu
const menuArray = [{
  name: 'Dashboard',
  value: 'dashboard/home',
  icon: HomeOutlined
}, {
  name: 'Clone',
  value: 'upload',
  icon: UploadOutlined,
  children: [{
    name: 'List',
    value: 'list',
    icon: UnorderedListOutlined
  }, {
    name: 'History',
    value: 'detail',
    icon: SolutionOutlined
  }]
}, {
  name: 'Settings',
  value: 'setting/setup',
  icon: SettingOutlined
}]
const CustomerMenu = ({ selectedKey, select }) => {
  const openedKeys = menuArray.map(item => item.value)
  return (<Menu theme="dark" selectedKeys={[selectedKey]} defaultOpenKeys={openedKeys} mode="inline" onSelect={select}>
      {
        menuArray.map(({ name, value, icon: Icon, children }) => {
          if (_.isEmpty(children)) {
            return <Menu.Item key={`/${value}`} icon={Icon ? <Icon/> : ''}>{name}</Menu.Item>
          } else {
            return (<SubMenu key={value} icon={Icon ? <Icon/> : ''} title={name}>
            {
            children.map(({ name, value: c_value, icon: Icon }) => {
              return <Menu.Item key={`/${value}/${c_value}`} icon={Icon ? <Icon/> : ''}>{name}</Menu.Item>
            })
          }
            </SubMenu>)
          }
        })
      }
  </Menu>)
}
export default CustomerMenu
