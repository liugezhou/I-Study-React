import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import './index.css';
export default class Header extends Component {
  static propTypes ={
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    };
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj);
    target.value = ""
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholeder="输入任务名称，回车确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
