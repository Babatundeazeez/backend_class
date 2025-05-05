const userModel = require("../models/user")

const addUser = async (req, res)=>{
    console.log(req.body)
    try {
        const user = await userModel.create(req.body)

        if(!user){
           return res.status(400).json({
            status: "error",
            message: "User was not created"
           }) 
        }

        res.status(201).json({
            status: "success",
            message: "User created successfully",
            user
        })


    } catch (error) {
        console.log(error)
    }
}

const getAllUsers = (req, res)=>{
    res.json("all users")
}

const getSingleUser = (req, res)=>{
    res.json("single user")
}

const deleteUser = (req, res)=>{
    res.json("deleted user")
}

module.exports = {
    getAllUsers,
    getSingleUser,
    deleteUser,
    addUser
}