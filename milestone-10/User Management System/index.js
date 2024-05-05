const express = require('express');
const cors = require('cors')
const app = express()
const PORT = process.env.PORT ||3000
//users
const users =[
    {id:1,name:"Muhammad Masum Billah",role:"Admin"},
    {id:2,name:"Muhammad Murad ",role:"Admin"},
    {id:3,name:"Muhammad Muskan ",role:"viwer"}
]
//middleware
app.use(cors())
app.use(express.json())
//method
app.get('/', (req, res) => {
    res.send('Users Management server is running')
});
app.get('/users',(req,res)=>{
    res.send(users)
})
//POST Method

app.post('/users',(req,res)=>{
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length +1
    users.push(newUser)
    res.send(users)

})


app.listen(PORT,()=>console.log("listaning Prot 3000"))