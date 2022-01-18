const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const app=express();
mongoose.connect(process.env.MONGODB_URL)
.then(function(){
  console.log("Connected to Mongo DB database");
})
.catch(function(err){
  console.log("Error connecting to database"+err);
});
app.listen(process.env.PORT,function(){
  console.log("Server has started at port "+process.env.PORT);
});
