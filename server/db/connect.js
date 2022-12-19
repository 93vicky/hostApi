const mongoose = require("mongoose");

/* uri = "mongodb+srv://vicky:vicky123@cluster0.dn9qwuj.mongodb.net/todoapp?retryWrites=true&w=majority"; */

const connectDB = (uri) =>{
    console.log("db connected")
    mongoose.set('strictQuery', true);
    return mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
};

module.exports = connectDB;