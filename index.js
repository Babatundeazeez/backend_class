// import express
const express = require("express")
// app
const app = express()
const userRouter = require("./routes/userRouter")
// listen to port
app.listen(4003, ()=>{
    console.log('listening to port 4003');
})

app.use("/api/users", userRouter)