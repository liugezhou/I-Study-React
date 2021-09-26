import React, { PureComponent } from 'react';

export default class Parent extends PureComponent {
  state = { carname: 'TomCar' };
  changeCar = () => {
    this.setState({ carname: 'ZhouCar' });
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.carname !== this.state.carname
  // }
  render() {
    const { carname } = this.state;
    console.log('父组件');
    return (
      <div>
        <h4>我是Parent组件</h4>
        <span>{carname}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carname={carname}/>
      </div>
    );
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.carname !== this.props.carname
  // }
  render() {
    console.log('子组件');
    return (
      <div>
        <h4>我是Child组件</h4>
        <h5>我接收到的车是：{this.props.carname}</h5>
      </div>
    );
  }
}
