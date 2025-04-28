const express = require("express")
const app = express()

app.use(express.json())

const PORT = 4005
app.listen(PORT, ()=>{
    console.log("Listening on port " + PORT)
})


// baseurl
// endpoint
// http://localhost:4005

app.get('/users', (req, res)=>{
    res.status(200).json({
        message:"All users fetfhed successfuly!"
    })
})

// ADD NEW USER
app.post("/users", (req, res)=>{
    // console.log(req.originalUrl);
    // console.log(req.method);
    console.log(req.body)
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.headers);
    

    res.status(201).json({
        message: "Added user"
    })
})

app.patch("/users", (req, res)=>{
    res.json({
        message: "User account updated"
    })
})

app.delete("/users", (req, res)=>{
    res.json({
        message:"User account deleted"
    })
})

const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
]

app.get("/products", (req, res)=>{
    res.json(products)
})
   