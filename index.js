// import express
const express = require("express")
// app
const app = express()
const userRouter = require("./routes/userRouter")
app.use(express.json())

const connectToDb = require("./config/connectToDb")
connectToDb()

// listen to port
app.listen(4003, ()=>{
    console.log('listening to port 4003');
})

// M = MODEL, V = VIEW,  C = CONTROLLER, R = ROUTES

app.use("/api/users", userRouter)