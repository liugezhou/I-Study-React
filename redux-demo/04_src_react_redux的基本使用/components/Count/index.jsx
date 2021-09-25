import React, { Component } from 'react';
import './index.css';
import { INCREMENT, DECREMENT, AINCREMENT } from '../../redux/constant';

export default class Count extends Component {
  state = { count: 0 };
  increment = () => {
    const { value } = this.selectNumber;
    this.props[INCREMENT](value * 1);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props[DECREMENT](value * 1);
  };
  incrementIdOdd = () => {
    const { value } = this.selectNumber;
    const count = this.props.count;
    if (count % 2 !== 0) {
      this.props[INCREMENT](value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props[AINCREMENT](value * 1, 1000);
  };
  render() {
    console.log('UI组件接收到的props是：', this.props);
    return (
      <div className="main">
        <h1>当前求和为：{this.props.count}</h1>
        <div className="content">
          <select ref={(c) => (this.selectNumber = c)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIdOdd}>当前求和为基数 + </button>
          <button onClick={this.incrementAsync}>异步+</button>
        </div>
      </div>
    );
  }
}
