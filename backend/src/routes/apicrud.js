const router=require('express').Router();
const Api = require("../models/createapi.js");

router.post("/create", async (req,res) =>{

  const api= new Api({
    apiname : req.body.apiname,
    apiendpoint : req.body.apiendpoint,
    apidescription :req.body.apidescription
  });
try{
 await api.save();
  res.send("Api Inserted");
}catch(err){
  res.status(400).send(err);
};
});

router.get("/read", async (req,res) =>{
Api.find({},(err,result)=>{
  if(err){
    res.send(err);
  }
  res.send(result);
})
});

router.put("/update", async (req,res) =>{
const id=req.body.id;
const newApiName = req.body.newapiname;
const newApiEndpoint = req.body.newapiendpoint;
const newApiDescription = req.body.newapidescription;
try{
await Api.findById(id, (error, updatedApi)=> {
   updatedApi.apiname = newApiName
   updatedApi.apiendpoint = newApiEndpoint
   updatedApi.apidescription = newApiDescription
   updatedApi.save();
   res.send("Api updated");
 }).clone();
}catch(err){
  res.status(400).send(err);
};
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Api.findByIdAndRemove(id).exec();
  res.send("deleted successfully");
})


module.exports=router;
