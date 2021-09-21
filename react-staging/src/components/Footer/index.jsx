import React, { Component } from 'react';
import './index.css';
export default class Footer extends Component {
  handledCheckAll = (event) => {
    this.props.checkedAll(event.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    const allLen = todos.length;
    const len = todos.filter((item) => item.done).length;
    return (
      <div className="todo-footer">
        <label htmlFor="">
          <input
            type="checkbox"
            checked={len === allLen && allLen > 0}
            onChange={this.handledCheckAll}
          />
        </label>
        <span>
          <span>已完成{len}</span>/全部{allLen}
        </span>
        <button
          className="btn btn-danger"
          onClick={this.handleClearAllDone}
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}
