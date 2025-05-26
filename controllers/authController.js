const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
const sendVerificationEmail = require("../services/nodemailer/sendVerificationEmail")
const generateRandomString = require("../utils/randomString")

const signup = async (req, res, next) => {
    // hash password
    const { password, email, name } = req.body

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)
        // send the body with the hashedpassword

        // generate toekn
        const token = generateRandomString(8)
        const verificationExp = Date.now() + 300000

        const user = await userModel.create({ ...req.body, password: hashedpassword, verificationToken: token, verificationExp })

        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "could not sign up"
            })
        }
        
        const userFirstName = name.split(" ")[0]

        // send verification email  
        sendVerificationEmail(email, userFirstName, token)
        

        res.status(201).json({
            status: "success",
            message: "Sign up successful. Check your email to verify your account",
            // user
        })

    } catch (error) {
        // console.log(error)
        next(error)
    }
}

const verifyEmail = async (req, res, next)=>{
    const {token} = req.params
    try {
        // find the user with the verification token
        const user = await userModel.findOne({verificationToken: token})
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "This token is invalid or has been verified"
            })
        }

        // compare the current time with the expiration time
        if(user.verificationExp < Date.now()){
            return res.status(403).json({
                status: "error",
                message: "Verification time has expired"
            })
        }
        await userModel.findByIdAndUpdate(user._id, {verificationExp: null, verificationToken: null, isVerified: true})
        res.status(200).json({
            status: "success",
            message: "Your email has been verified"
        })

    } catch (error) {
        console.log(error)
        next(error)
    }
}

const login = async (req, res, next) => {
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
        next(error)
    }
}


module.exports = {
    signup,
    verifyEmail,
    login
}