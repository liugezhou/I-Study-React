### 快捷键 
> 插件：ES7 React/Redux/GraphQL/React-Native snippets 
> + imn: import 'module' 
> + imp: import moduleName from 'module'  
> + imd:import {  } from 'module'   
> + rcc：初始化一个jsx    

### redux
>  01_src_纯react版  
>  使用state属性，实现增减操作。  

>  02_src_redux迷你版  
> + 使用redux，需要安装redux：yarn add redux  
> + 使用redux的第一步是需要创建一个store, createstore,传入的参数为reducer。    
> + store中数据获取：调用store.getState() 
> + store提交更新：store.dispatch，传入两个参数，分别为type和data。 
> + store中数据发生改变，会引发store.subscribe调用，该方法传入一个回调函数作为参数，可以通过store.subscribe引发state更新，而触发render。