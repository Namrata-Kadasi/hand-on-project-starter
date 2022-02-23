const Joi=require("@hapi/joi");

const registerValidation =(data)=> {
  const schema =Joi.object({
    email : Joi.string().required().email(),
    password : Joi.string().min(6).required()
  });
  return schema.validate(data);
}

const apiValidation =(data)=> {
  const schema =Joi.object({
    apiname : Joi.string().required().min(2),
    apiendpoint : Joi.string().required(),
    apidescription : Joi.string().required().min(4),
  });
  return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.apiValidation = apiValidation;
