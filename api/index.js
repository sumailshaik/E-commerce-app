const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("DB Connection Sucessfull!"))
.catch(err=>console.log(err));

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);

app.get("/", (req,res)=>{
    res.json("this is to test")
})

app.listen(8800, ()=>{
    console.log("Server is running at 8800 port")
})

