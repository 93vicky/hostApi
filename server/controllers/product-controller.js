// getting product schema from models
const Pritem = require("../models/productSchema");

const getAllProduct = async(req, res) =>{

    let Products;

    try{

        const {company, name, featured, sort, select} = req.query;
        const objectQuery = {};

        if(company){
            objectQuery.company = company;
        }

        if(featured){
            objectQuery.featured = featured;
        }

        if(name){
            objectQuery.name = {$regex : name, $options : "i"};
        }

        let apiData = Pritem.find(objectQuery);

        if(sort){
            let sortFix = sort.replace(",", "");
            apiData = apiData.sort(sortFix);
        }

        if(select){
            let selectFix = select.replace(",", "");
            apiData = apiData.select(selectFix);
        }


        Products = await apiData.select(select);
        if(!Products){
            res.status(404).json({msg:"no products found"})
        }
    }catch(error){
        console.log(error)
    }

    res.status(200).json(Products)
}

const getAllTestingProduct = async(req, res) =>{
    res.status(200).json({msg:"Hello all testing products"})
}

module.exports = {getAllProduct, getAllTestingProduct};
