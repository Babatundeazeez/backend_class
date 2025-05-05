const MiddlewareTwo = (req, res, next)=>{
    console.log("middleware 2...")
    next()
}

module.exports = MiddlewareTwo