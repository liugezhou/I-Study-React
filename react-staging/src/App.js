import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {
  getStudentData = () => {
    axios.get('/api1/students').then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.log('失败了', error);
      }
    )
  }
  getCarData = () => {
    axios.get('/api2/cars').then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.log('失败了', error);
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}
