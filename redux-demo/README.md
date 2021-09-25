### 快捷键 
> 插件：ES7 React/Redux/GraphQL/React-Native snippets 
> + imn: import 'module' 
> + imp: import moduleName from 'module'  
> + imd:import {  } from 'module'   
> + rcc：初始化一个jsx[UI组件]    

### redux
>  01_src_纯react版  
>  使用state属性，实现增减操作。  

>  02_src_redux精简版  
> + 使用redux，需要安装redux：yarn add redux  
> + 使用redux的第一步是需要创建一个store, createstore,传入的参数为reducer。    
> + store中数据获取：调用store.getState() 
> + store提交更新：store.dispatch，传入两个参数，分别为type和data。 
> + store中数据发生改变，会引发store.subscribe调用，该方法传入一个回调函数作为参数，可以通过store.subscribe引发state更新，而触发render。

> 03_src-redux异步action  
> version1
> + 添加action文件，专门用于创建action对象  
> + 添加constan文件，放置容易写错的type。 
> version2
> + 异步action：action为函数。同步action：Object的一般对象。  
> + 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。  
> + 具体编码：yarn add redux-thunk,在store中引入thunk，并将中间件applyMiddleware从redux中引入，将thunk作为applyMiddleware的参数，合并后的函数以第二个参数的形式传递给creatStore.  
> + 异步action不是必须要写的，完全可以组件自身等待异步任务的结果再去分发同步action。

> 04_src_react_redux的基本使用  
> + react-redux库是react官方为更方便的使编码程序可以写redux相关操作而出品的。  
> + react-redux将组件分为两类：容器组件和UI组件   
> + UI组件外侧都应包裹一个容器组件，他们是父子关系，其中容器组件才是真正和redux打交道的，这里面可以随意使用redux的api，而UI组件不能使用任何redux中的api。   
> + 容器组件会传给UI组件：1)redux中保存的状态.2)用作操作状态的方法,传递通过props传递。  

> + 创建一个容器组件，使用react-redux中的connect函数。格式为connect(a,b)(UI)  
> + connect函数，分别需要传入两个参数：a:mapStateToProps,b:mapDispatchToProps,UI为引入的UI组件。 
> + 容器组件传给UI组件中的store不是在容器组件中直接引入的，而是在标签上通过props传递进去的：App.jsx中：`<Count store={store} />`  

> 05_src_react_优化1   
> + 所有注释去掉  
> + mapDispatchToProps也可以是一个对象(react-redux可以自动dispatch)--见代码优化    
> + store.subscribe可以在index.js中删除，这是因为react-redux在调用connect方法[容器组件中]的时候，就已经默认拥有了检测redux中状态的改变--重新render的作用。  
> + App.jsx中 `<Count store={store} />`,如果有多个组件，必须一遍又一遍的这样声明，因此可以直接在入口文件：index.js中使用reac-redux的Provider组件：直接在Provider组件中传入store   

> 06_src_react_优化2_文件整合   
> 文件层面的优化：将容器组件与UI组件整合成一个文件。详细整合见代码。  

> 07_src_react_优化2_手写练习  
> 通过06的代码，删除src下全部代码，手写一遍，这个下面可以作为下次操作的文件：任意练习。 

