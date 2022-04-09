const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        default: "",
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min:6
    },
    phone: {
        type: Number,
        min:10,
    },
    image: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true}
)

module.exports = mongoose.model("User", UserSchema)