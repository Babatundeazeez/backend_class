const express = require("express")
const app = express()

// ROUTES
const userRouter = require("./routes/userRouter")
const categoryRouter = require("./routes/categoryRouter")

app.use(express.json())

const connectToDb = require("./config/connectToDb")
connectToDb()

// listen to port
app.listen(4003, ()=>{
    console.log('listening to port 4003');
})

// M = MODEL, V = VIEW,  C = CONTROLLER, R = ROUTES

app.use("/api/users", userRouter)
app.use("/api/categories", categoryRouter)