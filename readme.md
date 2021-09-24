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

##### 007--React路由
> 路由分类--后端路由[key:value(function)]、前端路由[key:value(component)]。  
> + 需要使用：yarn add react-router-dom   
> + `<BrowserRouter><App/></BrowserRouter>`   
> + `<HashRouter><App/></HashRouter>`   
> + `<Link to="/home"> || <NavLink activeClassName="liugezhou"> || <MyNavlink “标签题内容是一个特殊的属性”/>`   
> NaviLink可以实现路由链接的高亮，通过activeCalssName指定样式名   
> 标签体内容是一个特殊的标签属性  
> 通过this.props.children可以获取标签体内容

> + `<Route path="/about" component={About} />`

> 路由组件与一般组件  
> + 写法不同：一般组件`<Demo/>`  路由组件：`<Route path="/demo" component={Demo}>`  
> + 存放位置不同：一般组件:components,路由组件:pages  
> + 接收到的props不同： 一般组件为标签传递，路由组件主要接收三个固定属性：history/location/match  
>  history:
>   go: ƒ go(n)   
>   goBack: ƒ goBack()  
>   goForward: ƒ goForward()  
>   push: ƒ push(path, state)  
>   replace: ƒ replace(path, state)  
> location: 
>   pathname: "/about"  
>   search: ""  
>   state: undefined  
> match:  
>   params: {}  
>   path: "/about"  
>   url: "/about" 

##### 008--Switch选择路由 ｜ 样式丢失问题 ｜ 精准匹配 ｜ 路由重定向
> Switch组件引自 react-router-dom,将<Route>包围其中，可以提高路由匹配效率：单一匹配，匹配好不会继续匹配。   

> 关于样式丢失
> + 在public/index.html中引入样式不写 ./  写/  
> + 在public/index.html中引入样式不写 ./  写%PUBLIC_URL%/【只有React认PUBLICK_URL】   
> + 使用HashRouter模式(少见)。

> React路由默认是模糊匹配，实现精准匹配[不推荐]：<Route exect/>
> 精准匹配开启会导致无法继续匹配二级路由。

> 路由重定向：引用react-router-dom的组件Redirect  
> 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由--使用to

##### 009--嵌套路由 | 向组件传递数据三种方式
> 也叫二级路由  
> + 注册子路由时要写上父路由的path值。  
> + 路由的匹配是按照注册路由的顺序进行的。  

> 传递参数的三种方式：  
> + 传递params参数 :路由链接--传递参数时直接携带参数值，注册路由-接收使用:name/:id的方式。组件中使用this.props.match.params.   
> + 传递search参数：路由链接--以 urlencoded[参数格式为a=1&b=2]格式携带参数，注册路由:正常注册。组件中使用this.props.location.search解析   
> + 传递state参数：路由链接 --以to={pathname:'/home',state:'{参数对象}'}携带参数，注册路由：正常注册。组件中使用this.props.location.state解析参数，刷新也可以保留参数   

> 知识点：push与replace 
> 默认开启push模式，开启replace模式需要声明：replace  
> 本分支下 src/pages/Home/Message/index.jsx中的： 
> <Link replace to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

##### 010--编程式路由导航 | withRouter的使用
>  this.props.history.push(`path`)  
> + pathg1:`/home/message/detail/${id}/${title}`  
> + path2:`/home/message/detail/id=${id}&title=${title}`  
> + path3:'/home/message/detail',{id,title} 
>  this.props.history.goBack()  
>  this.props.history.goForard()  
>  this.props.history.go()

> 一般组件变路由组件,在Header组件中使用：：  
> export default withRouter(Header)   
> + withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
> + withRouter的返回值是一个新组件

> BrowserHistory和HashHistory的区别： 
> + 底层原理不一样：BrowserHistory使用的是H5的history API，不兼容IE9及以下版本。HashHistory使用的的是URL的哈希值。    
> + path表现形式不一样。  
> + 刷新后对路由state参数的影响：BroswerHistory没有影响，HashHistory刷新后会导致路由state参数丢失。  