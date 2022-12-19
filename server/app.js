require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect");

// getting product routes
const product_routes = require("./routes/product-routes");

const PORT = process.env.PORT || 5001;

// creating midleware fro product api

app.use("/api/products", product_routes);

app.get("/", (req, res) =>{
    console.log("hello from server")
})

const start = async() =>{
    try{

        await connectDB(process.env.MONGODB_URL);

       app.listen(PORT, ()=>{
        console.log(`server is running on ${PORT}`)
       })
    }catch(error){
        console.log(error)
    }
}

start();