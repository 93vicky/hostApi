const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true, "price must be provided"],

    },
  
    image:{
        type:String,
        required:true,
    },
    featured:{
        type:Boolean,
        default:false,
    },
    category:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple", "samsung", "hp", "sony", "vivo", "oppo"],
            message:`{VALUE} is not supported`
        }
    }
});

const Pritem = mongoose.model("Pritem", productSchema);

module.exports = Pritem;