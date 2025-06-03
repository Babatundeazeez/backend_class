const cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")
dotenv.config()

cloudinary.config({
    api_key: 281312645724914,
    cloud_name: process.env.cloudinary_name,
    api_secret: process.env.cloudinary_secret
})

module.exports = cloudinary