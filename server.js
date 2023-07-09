const express= require('express')
const cors=require('cors')

const app=express()

app.use(cors('*'))
app.use(express.json())

// app.get('/',(request,response)=>{
//     response.send('welcome')
// })

const movieRouter=require('./movies')
app.use('/',movieRouter);
app.listen(11111, '0.0.0.0', () => {
    console.log('server started on port 11111')
  })
