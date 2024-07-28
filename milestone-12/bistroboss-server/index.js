const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iwngqer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful
    const menuCollection = client.db("BistroBoss").collection("Menu");
    const userCollection = client.db("BistroBoss").collection("users");
    const reviewCollection = client.db("BistroBoss").collection("review");
    const cartCollection = client.db("BistroBoss").collection("cart");
    const paymentCollection = client.db("BistroBoss").collection("payment");
    //jwt implement
    app.post("/jwt", async (req, res) => {
      const token = jwt.sign(
        {
          token: req.body.email,
        },
        process.env.TOKEN_SEERECT_KEY,
        { expiresIn: "1hr" }
      );
      res.send({ token });
    });

    const verifyToken = (req, res, next) => {
      const token = req.headers.authorization;
      console.log(token);

      if (!token) {
        return res.status(401).send({ message: "UnAuthorized" });
      }
      const accessToken = token.split(" ")[1];
      if (accessToken) {
        jwt.verify(
          accessToken,
          process.env.TOKEN_SEERECT_KEY,
          (err, decoded) => {
            if (err) {
              return res.status(401).send({ message: "forbidden access" });
            }
            req.decode = decoded;
            next();
          }
        );
      }
    };
    const verifyAdmin = async (req, res, next) => {
      const email = req.decode?.token;
      const query = { email: email };
      const admin = await userCollection.findOne(query);
      const isAdmin = admin?.role === "admin";
      if (!isAdmin) {
        return res.status(401).send({ message: "Forbidden Access" });
      }
      next();
    };

    // all menu data load
    app.get("/menu", async (req, res) => {
      try {
        const request = await menuCollection.find().toArray();

        res.send(request);
      } catch (err) {
        console.log(err);
      }
    });

    app.get("/order-status", async (req, res) => {
      const result = await paymentCollection
        .aggregate([
          {
            $unwind: "$menuId",
          },
          {
            $lookup: {
              form: "menu",
              localField: "menuId",
              foreignField: "_id",
              as: "menuDetails",
            },
          },
          // {
          //   $unwind: "$menuDetails",
          // },
          // {
          //   $group: {
          //     _id: "menuDetails.category",
          //     Quantity: { $sum: 1 },
          //     Revenue: { $sum: "$menuDetails.price" },
          //   },
          // },
        ])
        .toArray();
        res.send(result)
    });

    // admin dashboard data

    app.get("/admin-home", verifyToken, verifyAdmin, async (req, res) => {
      const order = await paymentCollection.estimatedDocumentCount();
      const customer = await userCollection.estimatedDocumentCount();
      const products = await menuCollection.estimatedDocumentCount();
      const result = await paymentCollection
        .aggregate([
          {
            $group: {
              _id: null,
              totalRevenue: {
                $sum: "$price",
              },
            },
          },
        ])
        .toArray();
      const Revenue = result.length > 0 ? result[0].totalRevenue : 0;
      res.send({ order, customer, products, Revenue });
    });

    // delete a data menu collection
    app.delete("/menu/admin/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    });
    app.get("/review", async (req, res) => {
      try {
        const request = await reviewCollection.find().toArray();

        res.send(request);
      } catch (err) {
        console.log(err);
      }
    });

    app.post("/carts", async (req, res) => {
      const cart = req.body;
      const result = await cartCollection.insertOne(cart);
      res.send(result);
    });
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = { userEmail: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/payment-details/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = {
        email: email,
      };

      if (email !== req.decode.token) {
        return res.status(403).send("forbidden access");
      }
      const result = await paymentCollection.find(query).toArray();
      res.send(result);
    });
    app.delete("/cart/:id", (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = cartCollection.deleteOne(query);
      res.send(result);
    });

    //payment intent
    app.post("/create-payment-intent", async (req, res) => {
      const items = req.body;
      const price = items?.price;
      const amount = parseInt(price * 100);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    //payment info
    app.post("/payment", async (req, res) => {
      const payment = req.body;
      const payments = await paymentCollection.insertOne(payment);
      const query = {
        _id: {
          $in: payment.cardsId.map((id) => new ObjectId(id)),
        },
      };
      const deleteCart = await cartCollection.deleteMany(query);
      res.send({ payments, deleteCart });
    });
    //user related Api
    app.post("/dashboard/users", async (req, res) => {
      const user = req.body;
      const email = user.email;
      const query = { email: email };
      const isExist = await userCollection.findOne(query);
      if (isExist) {
        return res.send({ message: "User Already exist", insertId: null });
      }
      const result = await userCollection.insertOne(user);

      res.send(result);
    });
    app.get("/dashboard/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    app.delete("/dashboard/admin/all-users/:id", verifyToken, (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = userCollection.deleteOne(query);
      res.send(result);
    });
    app.post(
      "/dashboard/admin/add-item",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const data = req.body;
        const result = await menuCollection.insertOne(data);
        res.send(result);
      }
    );

    app.patch("/dashboard/admin/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    app.get("/dashboard/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const decodeEmail = req.decode?.token;

      if (email !== decodeEmail) {
        return res.status(403).send({ message: "forbidden access" });
      }
      const query = { email: email };
      const result = await userCollection.findOne(query);

      let isAdmin = false;
      if (result) {
        isAdmin = result?.role === "admin";
      }

      res.send({ isAdmin });
    });

    app.get("/menu/admin/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.findOne(query);
      res.send(result);
    });
    // patch all item

    app.patch("/update-data/admin/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const item = req.body;
      console.log(item);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...item,
        },
      };

      const result = await menuCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Data finded");
});
//middleware

app.listen(port, () => console.log(`listening port ${port}`));
