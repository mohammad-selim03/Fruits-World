const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const dbConnect = require("./dbConnect")
require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

function createToken(user) {
  const token = jwt.sign(
    {
      email: user.email,
    },
    "zobayed",
    { expiresIn: "1h" }
  );
  return token;
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  const verify = jwt.verify(token, "zobayed");
  console.log(verify);
  if (!verify?.email) {
    return res.send("You are not authorization");
  }
  req.user = verify.email;
  next();
}

const uri = process.env.DATABASE_URL;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const productDB1 = client.db("productDB1");
    const userDb = client.db("userDb");
    const fruitsCollection = productDB1.collection("fruitsCollection");
    const userCollection = userDb.collection("userCollection");

    // product routes
    app.post("/fruits", verifyToken, async (req, res) => {
      const fruitsData = req.body;
      const result = await fruitsCollection.insertOne(fruitsData);
      res.send(result);
    });

    
    app.get("/fruits", async (req, res) => {
      const fruitsData = fruitsCollection.find();
      const result = await fruitsData.toArray();
      res.send(result);
    });
    app.get("/fruits/:id", async (req, res) => {
      const id = req.params.id;
      const fruitsData = await fruitsCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(fruitsData);
    });
    app.patch("/fruits/:id",  async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;
      const fruitsData = await fruitsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      res.send(fruitsData);
    });
    app.delete("/fruits/:id", verifyToken, async (req, res) => {
      const id = req.params.id;

      const fruitsData = await fruitsCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(fruitsData);
    });

    // user
    app.post("/user", async (req, res) => {
      const user = req.body;

      const token = createToken(user);
      console.log(token);
      const isUserExist = await userCollection.findOne({ email: user?.email });
      if (isUserExist?._id) {
        return res.send({
          statu: "success",
          message: "Login success",
          token,
        });
      }
      await userCollection.insertOne(user);

      res.send({ token });
    });

    app.get("/user/get/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const result = await userCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;

      const result = await userCollection.findOne({ email });
      res.send(result);
    });

    app.patch("/user/:email", async (req, res) => {
      const email = req.params.email;
      const userData = req.body;
      const result = await userCollection.updateOne(
        { email },
        { $set: userData },
        { upsert: true }
      );
      res.send(result);
    });

    console.log("Database is connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Route is Working");
});

app.listen(port, (req, res) => {
  console.log("App is listening on Port : ", port);
});
