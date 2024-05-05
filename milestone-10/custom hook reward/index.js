const express = require('express')
const cors = require('cors')
const app = express()
const port =3000

//middleware

app.use(cors())
app.use(express.json())
//


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://custom-hook:Mm8Tu0q08ZmbZdmC@cluster0.iwngqer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("learnDB");
    const haiku = database.collection("custom-hook");
    app.post('/user',async(req,res)=>{
        const user = req.body
        const result = await haiku.insertOne(user)
        res.send(result)
    })

    app.delete('/user/:id',async(req,res)=>{
        const id = req.params.id
        const qurey = {_id:new ObjectId(id)}
        const result =await haiku.deleteOne(qurey)
        res.send(result)
    })

    app.get('/user',async(req,res)=>{
        const cursor =  haiku.find()
        const result = await cursor.toArray()
        res.send(result)

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('This is get Route')
})
app.listen(port,()=>console.log('listening port 3000'))