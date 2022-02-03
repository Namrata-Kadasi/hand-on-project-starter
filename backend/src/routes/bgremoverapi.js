const express = require("express");
const axios = require('axios');
const FormData = require('form-data');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.post("/upload", (req, res) => {
  // Image should be in base64 format from the frontend
  // data:image/jpeg , jkjlkjjkljkjlkjlkjh
  const { image } = req.body;
  const imageData = image.substring(image.indexOf(",") + 1);

  // Base64 image request related form data for Remove Background API
  // image_file_b64 is a variable for base64 image.
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file_b64", imageData);

  // Axios post request to remove.bg with the formData
  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    responseType: "buffer",
    headers: {
      ...formData.getHeaders(),
      "X-Api-Key": process.env.REMOVEBG_API,
      Accept: "application/json",

    },
     encoding: null,
  })

    .then((response) => {
      return res.status(200).json({
        image: response.data.data.result_b64, // This variable returns base64 image result from remove.bg api
      });
    })
    .catch((error) => {
      return console.error("Request failed:", error);
    });
});

module.exports=app;
