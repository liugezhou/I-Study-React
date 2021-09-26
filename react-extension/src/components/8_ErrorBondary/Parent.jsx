import React, { Component } from 'react';
import Child from './Chid';
export default class Parent extends Component {
  state = {
    hasError: '',
  };
  static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
  }
  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}
      </div>
    );
  }
}
