const express = require('express')
const app = express()

app.use((request,response,next)=>{
  console.log('服务器2接收到请求了')
  next()
})

app.get('/cars',(request,response)=>{
  const cars = [
    {id:'001',name:'宝马',price:199},
    {id:'002',name:'奔驰',price:299},
    {id:'003',name:'奥迪',price:399},
  ]
  response.send(cars)
})

app.listen(5001,(err)=>{
  if(!err) {
    console.log('服务器2启动成功！端口5001')
  }
})