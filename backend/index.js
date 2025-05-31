const express = require("express");
const passwordRoute = require("./routes/password");
const { connectMongoDb } = require("./connection");
const cors = require("cors");

const app = express();
const port = 2000;

//Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDb
connectMongoDb("mongodb://localhost:27017/password-manager")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/password", passwordRoute);

app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
