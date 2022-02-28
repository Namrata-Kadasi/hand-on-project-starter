const router=require('express').Router();
const Api = require("../models/createapi.js");
const {apiValidation}=require("./validation.js");

router.post("/create", async (req,res) =>{

  const {error} = apiValidation(req.body);
  if(error){
    return res.send({
      status : 400,
      description : error.details[0].message
    });
  }

  const api= new Api({
    apiname : req.body.apiname,
    apiendpoint : req.body.apiendpoint,
    apidescription :req.body.apidescription
  });
try{
 await api.save();
 return res.send({
   status : 200,
   description : "Api Inserted"
 });
}catch(err){
  return res.send({
    status : 400,
    description : error.details[0].message
  });
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
   return res.send({
     status : 200,
     description : "Api updated"
   });
 }).clone();
}catch(err){
  return res.send({
    status : 400,
    description : error.details[0].message
  });
}
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Api.findByIdAndRemove(id).exec();
  res.send("deleted successfully");
})

router.get("/getvalues", async (req,res) =>{
const existApi  = await Api.findOne({_id: req.body.id});
return res.send({
  status : 200,
  prevapiname: existApi.apiname,
  prevapiendpoint: existApi.apiendpoint,
  prevapidescription: existApi.apidescription,
  description : "Values sent"
});
});

module.exports=router;
