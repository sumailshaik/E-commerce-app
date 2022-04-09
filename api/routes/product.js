const router = require("express").Router();
const Product = require("../models/Product");
const verify = require("../verifyToken");

//CREATE

router.post("/",verify, async (req,res) => {
    if(req.user.isAdmin){
        const newProduct = new Product(req.body);

        try{
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct)
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json("You are not allowed!")
    }
})

// Update

router.put("/:id",verify, async (req,res) => {
    if(req.user.isAdmin){
        console.log("is user admin", req.user.isAdmin )
        try{
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, 
                {
                    $set: req.body,
                },
                { new: true }
                );
            res.status(200).json(updatedProduct)
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json("You are not allowed!")
    }
});

//Delete

router.delete("/:id",verify, async (req,res) => {
    if(req.user.isAdmin){
        
        try{
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("The movie has been deleted...")
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json("You are not allowed!")
    }
});

//GET

router.get("/find/:id", async (req,res) => {
        try{
            const product = await Product.findById(req.params.id);
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err);
        }
});



// GET ALL

router.get("/", async (req,res) => {
    let category = req.query.category 
    
    try{
        let products;
        if(category){
            products = await Product.find({category: category})
        }else{
            products = await Product.find()
        }
        res.status(200).json(products.reverse())
    }catch(err){
        res.status(500).json(err);
    }
});

// get random

router.get("/random", async (req,res) => {
    try{
        const products = await Product.aggregate([
            { $sample: {size:10}}
        ])
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router