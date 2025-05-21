// create tranport using nodemailer
const nodemailer = require("nodemailer")
// smtp => simple mail transfer protocol

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: false,
    port: 587,
    auth: {
        user: "timiebabs@gmail.com",
        pass: "opad vdhq trls sabb"
    }
})

module.exports = transporter

transporter.verify((err, success)=>{
    if(success){
        console.log("Ready to send email message")
    }else{
        console.log(err)
    }
})

