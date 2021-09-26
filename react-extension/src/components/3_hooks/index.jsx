import React from 'react';
import ReactDOM from 'react-dom';
// 类式组件
// class Demo extends React.Component {
//   state = {
//     count: 0,
//   };
//   myRef = React.createRef()
//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 10000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//   }
//   show=()=>{
//     alert(this.myRef.current.value)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h3>当前求和为:{this.state.count}</h3>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     );
//   }
// }

// 函数式组件
function Demo() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Tom');
  const myRef = React.useRef()
  function add() {
    setCount((count) => count + 1);
  }
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 10000);
    return ()=>{
      console.log('componentWillUnmount')
      clearInterval(timer)
    }
  }, []);
  function changeName() {
    setName('LiuTom');
  }
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  function prompt(){
    console.log(myRef.current.value)
  }
  return (
    <div>
      <h3>当前求和为:{count}</h3>
      <h3>我的名字是：{name}</h3>
      <input type="text" ref={myRef} />
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我改名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={prompt}>点我提示input内容</button>
    </div>
  );
}
export default Demo;
