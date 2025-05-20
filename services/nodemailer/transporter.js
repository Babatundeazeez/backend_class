// create tranport using nodemailer
const nodemailer = require("nodemailer")
// smtp => simple mail transfer protocol

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: false,
    port: 587,
    auth: {
        user: process.env.nodemailer_email,
        pass: process.env.nodemailer_pass
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

const sendMail = ()=>{
    transporter.sendMail({
        to: "peter.babs.dev@gmail.com",
        subject: "Welcome to Jumia",
        sender: "Jumia jumia@gmail.com",
        replyTo: "timiebabs@gmail.com",
        // text: "Welcome to our wesite. we are glad to have you"
        html: `
            <div style="">
                <h1>Welcome</h1>
                <P>Welcome to our website. start buying</P>
                <button style="background: red; color: white; padding: .5rem 1rem; border: none; border-radius: 5px;">Start Buying</button>
                <a href="https://jumia.com">Visit our website</a>
            </div>
        
        `
    })
}

// sendMail()