const mongoose = require('mongoose');

const ApiSchema = mongoose.Schema({
  apiname: {
    type: String,
    required: true
  },
  apiendpoint:{
    type: String,
    required: true
  },
  apidescription: {
    type: String,
    required: true
  }
});

const Api = mongoose.model('api', ApiSchema);

module.exports = Api;
