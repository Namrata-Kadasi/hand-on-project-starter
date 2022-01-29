const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");

dotenv.config();
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL)
  .then(function() {
    console.log("Connected to Mongo DB database");
  })
  .catch(function(err) {
    console.log("Error connecting to database" + err);
  });

app.use("/", authRoute);

app.listen(process.env.PORT, function() {
  console.log("Server has started at port " + process.env.PORT);
});
