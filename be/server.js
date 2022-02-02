const express=require("express");
const dotenv=require("dotenv")
const app=express();
dotenv.config()
const cors=require("cors")
const connectDb=require("./config/db")
const productRoute=require("./routes/productRoutes")

connectDb();
const PORT=process.env.PORT;
app.use(cors)
app.use(express.json())
app.use("/api/products",productRoute)

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})