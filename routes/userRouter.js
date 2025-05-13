const express = require("express")
const userRouter= express.Router()
const {getAllUsers, deleteUser, addUser, getUserById, getUserByQuery, updateUser} = require("../controllers/usercontroller")
const MiddlewareOne = require("../middlewares/middleware1")
const MiddlewareTwo = require("../middlewares/middleware2")

userRouter.get("/", getAllUsers)
userRouter.get("/query", getUserByQuery)
userRouter.get("/:id", getUserById)
userRouter.delete("/:id", deleteUser)
userRouter.patch("/:id", updateUser)

// userRouter.post("/", addUser)


module.exports= userRouter