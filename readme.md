### react-basic
> react基础知识。 
> 组件三大属性等。

### react-http
> 请求后端服务的示例代码，比如以下项目分支的003.
### react-staging
> node版本 v12.16.1   
> 切换镜像源: npm config set registry https://registry.npm.taobao.org   
> 使用npx create-react-app react-staging构建项目。  

#### 仓库代码branch说明与简要笔记
#### 001--脚手架文件精简后代码演示    

##### 002--TodoList--demo
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

##### 003--React-ajax  
> + 方法一  
> 在package.json中追加一下配置： "proxy":"http://localhost:5000"     
> 
> 优点：配置简单，前端请求资源时可以不加任何前缀  
> 缺点：不能配置多个代理。  
> 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000(优先匹配前端资源)
>
> + 方法二：
> 第一步：在src下创建配置文件：src/setupProxy.js  
> 编写具体配置规则如下：  
```
const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    proxy('/api1',{                     //遇见 /api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000',  //请求转发给谁
      changeOrigin:true,                //控制服务器收到的请求头中Host字段的值
      pathRewrite:{                     //去除请求前缀，重写请求路径
        '^/api1':''
      }
    }),
    proxy('/api2',{
      target: 'http://localhost:5001',
      changeOrigin:true,
      pathRewrite:{
        '^/api2':''
      }
    })
  )
}
```

##### 004--Github搜索案例
> 后端服务使用 react-http中的server.js服务。  
> 本实例主要是练习axios的请求以及父子组件传值、三元运算符使用等。   
> 通过输入 Github的英文名称进行User的头像搜索、点击跳转。 

##### 005--发布订阅消息   
> 本分支通过Github搜索案例使用pubsub-js这个库，学习发布订阅消息。   
> 流程如下：    
> npm i -S pubsub-js    
> 订阅消息核心代码：  
```
componentDidMount(){
  this.token = PubSub.subscribe('github',(_,stateObj)=>{
    this.setState(stateObj)
  })
}
componentWillUnmount(){
  PubSub.unsubscribe(this.token)
}
```
> 发布消息核心代码：    
```
search = ()=>{
  const {keyWordElement:{value:keyWord}} = this
  this.props.updateAppState({isFirst:false,isLoading:true})
  axios.get(`/api1/search/users?q=${keyWord}`).then(
    response => {
      this.props.updateAppState({isLoading:false,users:response.data.items})
    },
    error => {
      this.props.updateAppState({isLoading:false,err:error.message})
    }
  )
}
```

##### 006--扩展：fetch请求
> + xhr :jQuery -- 写法简单、回调地狱。 axios -- Promise    
> + fetch: 内置原生函数、Promise、不使用XMLHttpRequest：关注分离思想、兼容性不好。