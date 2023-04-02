const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');

require("dotenv").config();

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;

//method (secured)
const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.re3ha3x.mongodb.net/backend`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connect = async () => {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error(err);
  }
}
connect();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", require("./routes/blogs"));
app.use("/api", require("./routes/projects"));
app.use("/api", require("./routes/uses.js"));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
