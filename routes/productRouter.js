const express = require("express")
const { addNewCategory, getAllCategories } = require("../controllers/categoryController")
const categoryRouter = express.Router()

categoryRouter.get("/", getAllCategories)
categoryRouter.post("/", addNewCategory)

module.exports = categoryRouter
