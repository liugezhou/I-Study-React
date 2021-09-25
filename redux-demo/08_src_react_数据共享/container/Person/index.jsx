import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADDPERSON } from '../../redux/constant';
import { nanoid } from 'nanoid';
import { addPerson } from '../../redux/actions/person';
import './index.css';
class Person extends Component {
  addPerson = () => {
    const name = this.name.value;
    const age = this.age.value * 1;
    const personObj = { id: nanoid(), name, age };
    this.props[ADDPERSON](personObj);
    this.name.value =''
    this.age.value=''
  };
  render() {
    return (
      <div className="person_main">
        <h2>Person组件,上方求和为：{this.props.count}</h2>
        <div className="person_form">
          <input
            ref={(c) => (this.name = c)}
            type="text"
            placeholder="请输入名字"
          />
          <input
            ref={(c) => (this.age = c)}
            type="text"
            placeholder="请输入年龄"
          />
          <button onClick={this.addPerson}>添加</button>
        </div>
        <br />
        <ul>
          {this.props.persons.map((p) => {
            return (
              <li key={p.id}>
                {p.id}:{p.name}今年{p.age}岁了
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.personsData,count:state.countData }), 
  {
  [ADDPERSON]: addPerson,
})(Person);
