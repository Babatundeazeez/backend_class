const express = require("express")
const { addNewProduct, getAllProduct } = require("../controllers/productController")
const isLoggedIn = require("../middlewares/isLoggedIn")
const productRouter = express.Router()

productRouter.get("/", getAllProduct)
productRouter.post("/", isLoggedIn,  addNewProduct)

module.exports = productRouter
