/**
 * 1.该文件是用于创建一个为Count组件服务的reducer，reducer本质就是一个函数
 * 2.reducer函数会接受两个参数，分别为：之前的状态(preState),动作对象(action)
 */

 export default  function countReducer(preState, action) {
  const { type, data } = action;
  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return preState ? preState : 28;
  }
}
