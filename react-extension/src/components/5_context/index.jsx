import React, { Component } from 'react'
import './index.css'
// 创建context上下文
const {Provider,Consumer} = React.createContext() 

export default class Demo5 extends Component {
  state = {user:'Tom',age:18}
  render() {
    const {user,age} = this.state
    return (
      <div className="A">
        <h4>我是A组件</h4>
        <h4>我的用户名是：{user}</h4>
        <Provider value={{user,age}}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        <h4>我是B组件</h4>
        {/* <h4>我从A组件接收到的用户名是：{this.props.user}</h4> */}
        <C/>
      </div>
    )
  }
}

// class C extends Component {
//   // 声明接收context
//   static contextType = MyContext
//   render() {
//      const {user,age} = this.context
//     return (
//       <div className="C">
//         <h4>我是C组件</h4>
//         <h4>我从A组件接收到的用户名是：{user}</h4>
//         <h4>我从A组件接收到的用年龄是：{age}</h4>
//       </div>
//     )
//   }
// }

function C(){
  return (
      <div className="C">
        <h4>我是C组件</h4>
        <h4>我从A组件接收到的用户名是：
          <Consumer>
          {
            value => {
              return value.user
            }
          }
          </Consumer>
        </h4>
        <h4>我从A组件接收到的用年龄是：
        <Consumer>
          {
            value => {
              return value.age
            }
          }
          </Consumer>
        </h4>
      </div>
  )
}