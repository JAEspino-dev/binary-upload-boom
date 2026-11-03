require("dotenv").config({ path: "./config/.env" });

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
console.log("Cloudinary configuration:");
console.log("Cloud name:", cloudinary.config().cloud_name);
console.log("API key:", cloudinary.config().api_key);
console.log("API secret loaded:", !!cloudinary.config().api_secret);
module.exports = cloudinary;
