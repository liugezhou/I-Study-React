import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import { WechatOutlined,SearchOutlined } from "@ant-design/icons";
import './App.less';
const { RangePicker } = DatePicker;
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Primary Button</Button>
        <Button type="dashed">Primary Button</Button>
        <Button type="link">Primary Button</Button>
        <Button type="text">Primary Button</Button>
        <Button type="default">Primary Button</Button>
        <WechatOutlined />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <DatePicker />
        <RangePicker showTime />
      </div>
    )
  }
}
