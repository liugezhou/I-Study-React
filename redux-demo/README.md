### 快捷键 
> 插件：ES7 React/Redux/GraphQL/React-Native snippets 
> + imn: import 'module' 
> + imp: import moduleName from 'module'  
> + imd:import {  } from 'module'   
> + rcc：初始化一个jsx    

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