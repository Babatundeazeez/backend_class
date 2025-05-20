const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user")

const signup = async (req, res) => {
    // hash password
    const { password } = req.body

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)
        // send the body with the hashedpassword
        const user = await userModel.create({ ...req.body, password: hashedpassword })
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "could not sign up"
            })
        }

        // send verification email
        
        

        res.status(201).json({
            status: "success",
            message: "Sign up successful. You can login now",
            // user
        })

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        // fetch the user with the email
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "Email or password incorrect"
            })
        }

        // verify if the password is correct
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (!passwordCorrect) {
            return res.status(400).json({
                status: "error",
                message: "Email or password incorrect"
            })
        }

        // generate an accessToken for the user
        const accessToken = jwt.sign({id: user._id, email: user.email}, process.env.jwt_secret, {
            expiresIn: process.env.jwt_exp
        })

        res.status(200).json({
            status: "success",
            message: "Login successful",
            accessToken
        })

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    signup,
    login
}