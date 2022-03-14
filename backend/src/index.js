const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const bgRemApi = require("./routes/bgremoverapi.js");
const apiCrud = require("./routes/apicrud.js");

dotenv.config();
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json({limit: '50mb'}));

mongoose.connect(process.env.MONGODB_URL)
  .then(function() {
    console.log("Connected to Mongo DB database");
  })
  .catch(function(err) {
    console.log("Error connecting to database" + err);
  });

app.use("/", authRoute);
app.use("/api", bgRemApi);
app.use("/crud", apiCrud);

if(process.env.NODE_ENV == "production"){
app.use(express.static("frontend/build"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("Server has started at port " + PORT);
});
