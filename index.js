const express = require("express")
const app = express()
const cors = require("cors")

// ROUTES
const userRouter = require("./routes/userRouter")
const categoryRouter = require("./routes/categoryRouter")

app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: ["http:localhost:5173", "jumia.com"],
//     methods: ["GET", "POST"]
// }))

const productRouter = require("./routes/productRouter")
const authRouter = require("./routes/authRouter")

require("./config/connectToDb")
require("./services/nodemailer/transporter")

// listen to port
app.listen(4003, ()=>{
    console.log('listening to port 4003');
})


// M = MODEL, V = VIEW,  C = CONTROLLER, R = ROUTES

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/products", productRouter)


// PROTECTED ROUTES
// MIDDLEWARE => A function that is executed before the final request handler