require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db/connect");

// getting database Pritems to insert json file in this database
const Pritem = require("./models/productSchema");

// getting product json file

const ProductJson = require("./product.json");

const start = async() =>{
    console.log("hello")
    try{
        
        await connectDB(process.env.MONGODB_URL);
        await Pritem.deleteMany();
        await Pritem.create(ProductJson);
       

    }catch(err){
        console.log(err)
    }
}

start();
