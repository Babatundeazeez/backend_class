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
    deleteUser
}