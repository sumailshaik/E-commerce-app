const router = require("express").Router();
const Order = require("../models/Order");
const verify = require("../verifyToken");

//CREATE

router.post("/",verify, async (req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        const newOrder = new Order(req.body);

        try{
            const savedOrder = await newOrder.save();
            res.status(200).json(savedOrder)
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json("You are not allowed!")
    }
})

// Update

router.put("/:id",verify, async (req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        
        try{
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, 
                {
                    $set: req.body,
                },
                { new: true }
                );
            res.status(200).json(updatedOrder)
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json("You are not allowed!")
    }
});

//Delete

router.delete("/:id",verify, async (req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        
        try{
            await Order.findByIdAndDelete(req.params.id);
            res.status(200).json("The movie has been deleted...")
        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(403).json("You are not allowed!")
    }
});

//GET

router.get("/find/:id",verify, async (req,res) => {
        try{
            const order = await Order.findById(req.params.id);
            res.status(200).json(order)
        }catch(err){
            res.status(500).json(err);
        }
});



// GET ALL

router.get("/",verify, async (req,res) => {
    if(req.user.isAdmin){

        try{
            const orders = await Order.find()
            res.status(200).json(orders.reverse())
        }catch(err){
            res.status(500).json(err);
        } 

    }else{
        res.status(403).json("You are not allowed!")
    }
    

});

module.exports = router