import React, { Component } from 'react'

export default class demo extends Component {
  state = {
    count:1
  }
  add = ()=>{
    /* 对象式的setState
    stateChange为状态改变对象 {count:count + 1}
    setState引起react后续动作是异步的:react状态的更新是异步的
    */
  //  const count = this.state.count
   // this.setState({
    //   count:count + 1
    // },()=>{
    //   console.log(this.state.count)
    // })
    // console.log(this.state.count)
    /**
     * 函数式setState:
     */
    this.setState((state)=>({count:state.count + 10 }))
  }
  render() {
    return (
      <div>
        <h3>当前求和为：{this.state.count}</h3>
        <button onClick={this.add}>点我 +1</button>
      </div>
    )
  }
}
