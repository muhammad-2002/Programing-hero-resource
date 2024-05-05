const express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors =require('cors')
const port = process.env.PORT || 5000
const app = express()


//middleware
app.use(cors())
app.use(express.json())







const uri = "mongodb+srv://masum:cAWm45xQPmYkmdoT@cluster0.iwngqer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


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
  await client.connect()
    const database = client.db("insertDB");
    const usersCollection = database.collection( "users");
    app.post('/users', async (req, res) => {
        const user = req.body;
        console.log(user)
        const result = await usersCollection.insertOne(user);
        res.send(result);
      });
      
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.log);



//method 
app.get('/',(req,res)=>{
    res.send("SIMPLE CRUD OPERATION")
})
//listening

app.listen(port,()=>console.log(`listening prot :${port}`))