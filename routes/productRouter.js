const express = require("express")
const { addNewProduct, getAllProduct } = require("../controllers/productController")
const isLoggedIn = require("../middlewares/isLoggedIn")
const isVerified = require("../middlewares/isVerified")
const isSeller = require("../middlewares/isSeller")
const productRouter = express.Router()

productRouter.get("/", getAllProduct)
productRouter.post("/", isLoggedIn, isVerified, isSeller, addNewProduct)

module.exports = productRouter
