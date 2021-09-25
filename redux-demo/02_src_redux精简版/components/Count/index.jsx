import React, { Component } from 'react';
import './index.css';
import store from '../../redux/store';

export default class Count extends Component {
  state = { count: 0 };
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch({
      type: 'increment',
      data: value * 1,
    });
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch({
      type: 'decrement',
      data: value * 1,
    });
  };
  incrementIdOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({
        type: 'increment',
        data: value * 1,
      });
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch({
        type: 'increment',
        data: value * 1,
      });
    }, 100);
  };
  render() {
    return (
      <div className="main">
        <h1>当前求和为：{store.getState()}</h1>
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
