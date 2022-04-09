const mongoose = require("mongoose")
 
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        max:250,
    },
    category: {
        type: String,
        require: true,
        max:250
    },
    desc: {
        type: String,
        max: 1080,
    },
    seller: {
        type: String,
        require: true,
        max:250,
    },
    price: {
        type: Number,
        require: true,
    },
    discount: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        default: "",
    },
    offer: {
        type: Array,
    },
    rating: {
        type: Number,
    },
    reviews: {
        type: Number,
    },
    isAssured: {
        type: Boolean,
        default: true
    }

}, { timestamps: true}
)

module.exports = mongoose.model("Product", ProductSchema)