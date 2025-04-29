const express = require("express")
const userRouter= express.Router()
const {getAllUsers, getSingleUser, deleteUser} = require("../controllers/usercontroller")

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getSingleUser)
userRouter.delete("/:id", deleteUser)


module.exports= userRouter