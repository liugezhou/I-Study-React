import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '写代码', done: false },
    ],
  };
  addTodo = (todoObj) => {
    const { todos } = this.state;
    let newTodos = [todoObj, ...todos];
    // newTodos.unshfit(todoObj);
    this.setState({
      todos: newTodos,
    });
  };
  //数据匹配处理
  updateTodo = (id, done) => {
    const { todos } = this.state;
    let newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, done };
      } else {
        return todo;
      }
    });
    this.setState({
      todos: newTodos,
    });
  };
  deleteItem = (id) => {
    const { todos } = this.state;
    let newTodos = todos.filter((todo) => {
      return id !== todo.id;
    });
    this.setState({
      todos: newTodos,
    });
  };
  checkedAll = (done)=>{
    const { todos } = this.state;
    let newTodos = todos.map((todo) => {
       return {...todo,done}
    });
    this.setState({
      todos: newTodos,
    });
  }
  handleClearAllDone = ()=>{
    const { todos } = this.state;
    let newTodos = todos.filter((todo) => {
       return !todo.done 
    });
    this.setState({
      todos: newTodos,
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteItem={this.deleteItem}
          />
          <Footer todos={todos} checkedAll={this.checkedAll} clearAllDone={this.handleClearAllDone}/>
        </div>
      </div>
    );
  }
}
