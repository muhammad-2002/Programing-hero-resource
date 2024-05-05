const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()

//middleware
app.use(cors())
app.use(express.json())


//database 


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mango_details:asdASD@cluster0.iwngqer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    const database = client.db("insertDB");
    const Mango = database.collection("Mango");
    app.get('/mongos',async(req,res)=>{
        const cursor = Mango.find();
        const result = await cursor.toArray()
        
        res.send(result)
    })
    app.get('/mongos/:id',async(req,res)=>{
        const id = req.params.id
        const query = { _id:new ObjectId(id)};
        const result =await Mango.findOne(query)
        res.send(result)
    })

    app.put('/mongos/:id',async(req,res)=>{
        const id = req.params.id;
        const mango = req.body
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              name:mango.name,
              prise:mango.prise,
              category:mango.category,
            },
          };
        const result = await Mango.updateOne(filter, updateDoc, options);
        res.send(result)
    })

    app.delete('/mongos/:id',async(req,res)=>{
        const id = req.params.id;
        const query = { _id:new ObjectId(id) };
        const result = await Mango.deleteOne(query);
        res.send(result)

    })

    app.post('/mongos',async(req,res)=>{
        const mangos = req.body
        console.log(mangos)
        const result = await Mango.insertOne(mangos)
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

//Router 


// listening app
app.listen(port,()=>console.log(`listening port : ${port}`))