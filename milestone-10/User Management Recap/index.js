const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.json())

// users
const users = [
    {id:1,name:"Muhammad Masum Billah",role:"Software Engineer"},
    {id:2,name:"Murad Kham",role:"Enterpreneur"},
    {id:3,name:"Nusrat jahan noon",role:"Model"},
]
//method 

app.get('/',(req,res)=>{
    res.send("Your are arive home")
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log(req.body)
    const newUsr = req.body
    newUsr.id = users.length + 1
    users.unshift(newUsr)
    res.send(users)
})



app.listen(PORT, ()=>console.log(`leastning port : ${PORT}`))