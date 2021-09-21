### react-basic
> react基础知识。 
> 组件三大属性等。

### react-staging
> node版本 v12.16.1   
> 切换镜像源: npm config set registry https://registry.npm.taobao.org   
> 使用npx create-react-app react-staging构建项目。  
##### branch说明
##### 001: 脚手架文件精简后代码演示    

##### 002: TodoList--demo
> 相关知识点：  
> + 1.拆分组件、实现静态组件，注意：className、style的写法  
> + 2.动态初始化列表，如何确定将数据放在哪个组件的state中 
>      ----某个组件使用，放在自身的state中 
>      ----某些组件使用：放在他们共同的父组件state中(官方将此操作称为：状态提升)  
> + 3.关于父子组件的通信  
>     ---- [父组件] 给 [自组件] 传递数据，通过props传递   
>     ---- [自组件] 给 [父组件] 传递数据，通过props传递，要求父组件提交传给子组件一个函数 
> + 4.注意 defaultChecked和checked的区别，defaultChecked只执行初始化的一次，checked需要有onChange事件。类似的还有defaultValue和value 
> + 5.状态在哪里，状态操作的方法就在哪里。

