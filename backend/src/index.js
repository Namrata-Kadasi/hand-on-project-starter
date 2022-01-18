const express=require("express");
const dotenv=require("dotenv");
dotenv.config();
const app=express();
app.listen(process.env.PORT,function(){
  console.log("Server has started at port "+process.env.PORT);
});
