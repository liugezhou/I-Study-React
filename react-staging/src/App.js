import React,{Component} from 'react'
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}

export default App;
