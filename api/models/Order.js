const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    products : [
        {
            productId : { type : String },
            quantity: { type: Number, default: 1}
        }
    ],
    Total: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
        
}, { timestamps: true}
)

module.exports = mongoose.model("Order", OrderSchema)