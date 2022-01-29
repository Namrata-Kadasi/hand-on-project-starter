const router=require('express').Router();
const User = require("../models/user.js");
const {registerValidation}=require("./validation.js");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

let userActive = false;

router.get("/login", async (req,res) =>{
res.send(userActive);
});

router.post("/login", async (req,res) =>{

const {error} = registerValidation(req.body);
if(error){
  return res.send({
    status : 400,
    description : error.details[0].message
  });
}

const existUser  = await User.findOne({email: req.body.email});
if(existUser){
  if(await bcrypt.compare(req.body.password,existUser.password)){
    const token = jwt.sign({_id : existUser._id},process.env.JWT_SECRET);
    await res.setHeader("auth-token",token);
    userActive=true;
    return res.send({
      token : token,
      status:200
    });
  }else return res.send({
    status : 400,
    description : "Wrong password"
  });
}

else{

const salt=await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.password,salt);

  const user= new User({
    email : req.body.email,
    password : hashPassword
  });
try{
  const savedUser = await user.save();
  userActive=true;
  res.send({user : user._id, status:200});
}catch(err){
  res.status(400).send(err);
}};
});



module.exports=router;
