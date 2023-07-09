const express=require('express')
const router=express.Router()
const db=require('./db')


router.get('/',(request,response)=>{
    const stmt='select * from movies'


    db.query(stmt,(error,data)=>{

        console.log(data);

        if (error) {
            response.send('error')
          } else {
            response.send(data)
          }
    })
})

module.exports=router