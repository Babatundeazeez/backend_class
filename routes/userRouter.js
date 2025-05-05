const express = require("express")
const userRouter= express.Router()
const {getAllUsers, getSingleUser, deleteUser, addUser} = require("../controllers/usercontroller")
const MiddlewareOne = require("../middlewares/middleware1")
const MiddlewareTwo = require("../middlewares/middleware2")

userRouter.get("/", getAllUsers)
userRouter.get("/:id", MiddlewareOne, MiddlewareTwo, getSingleUser)
userRouter.delete("/:id", deleteUser)

userRouter.post("/", addUser)


module.exports= userRouter