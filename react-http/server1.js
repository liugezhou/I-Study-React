const express = require('express')
const app = express()

app.use((request,response,next)=>{
  console.log('服务器1接收到请求了')
  console.log(request.get('Host'))
  next()
})

app.get('/students',(request,response)=>{
  const cars = [
    {id:'001',name:'tom',age:19},
    {id:'002',name:'jerry',age:29},
    {id:'003',name:'tony',age:39},
  ]
  response.send(cars)
})

app.listen(5000,(err)=>{
  if(!err) {
    console.log('服务器1启动成功！端口5000')
  }
})