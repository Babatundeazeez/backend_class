const { errorMonitor } = require("nodemailer/lib/xoauth2")

const handleDuplicateError = (err)=>{
    const errorKey = Object.keys(err.keyValue)[0]
    const errorValue = Object.values(err.keyValue)[0]
    const messageObj = new Error(`${errorKey} of ${errorValue} already exists`)

    const error = {
        statusCode: 400,
        message: messageObj.message
    }

    return error
}

const errorHandler = (err, req, res, next)=>{
   
    // DUPLICATE ERROR
    if(err.code === 11000){
        const error = handleDuplicateError(err)
        res.status(error.statusCode).json({
            message: error.message
        })
    } else {
        res.status(500).json({message: "Something went wrong"})
    }
}

module.exports = errorHandler