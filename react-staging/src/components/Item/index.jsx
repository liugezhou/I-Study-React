import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
  state = {
    mouse: false,
  };
  // 勾选/取消勾选
  hanldeCheck = (id) => {
    return (event) => {
      const checked = event.target.checked;
      this.props.updateTodo(id, checked);
    };
  };
  //鼠标移入、移出回调
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };
  handleDelete = (id) => {
    return () => {
      if(window.confirm('确定删除吗?')){
        this.props.deleteItem(id)
      }
    };
  };
  render() {
    const { todo } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.hanldeCheck(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? '' : 'none' }}
          onClick={this.handleDelete(todo.id)}
        >
          删除
        </button>
      </li>
    );
  }
}
