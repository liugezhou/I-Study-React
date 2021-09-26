import React, { PureComponent } from 'react';

export default class Parent extends PureComponent {
  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        {/* <A>
          <B/>
        </A> */}
        <A render={(name)=><B name={name}/>}/>
      </div>
    );
  }
}
class A extends PureComponent {
  state = {name:'Tom'}
  
  render() {
    const {name} = this.state
    return (
      <div className="B">
        <h4>我是A组件</h4>
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends PureComponent {
  render() {
    return (
      <div className="C">
        <h4>我是B组件</h4>
        {this.props.name}
      </div>
    )
  }
}