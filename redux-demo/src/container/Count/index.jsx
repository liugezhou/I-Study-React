import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT,AINCREMENT } from '../../redux/constant';
import { add, substract,aysncAdd } from '../../redux/actions/count';
class CountUI extends Component {
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
    const {count} = this.props
    if (count % 2 !== 0) {
      this.props[INCREMENT](value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props[AINCREMENT](value*1,500)
  };
  render() {
    return (
      <div className="main">
        <h2>Count组件</h2>
        <h3>当前求和为：{this.props.count}，下方组件总人数为:{this.props.persons.length}</h3>
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

export default connect(
  state => ({ count: state.countData,persons:state.personsData }), 
  {
    [INCREMENT]: add,
    [DECREMENT]: substract,
    [AINCREMENT]:aysncAdd
})(CountUI);
