require("dotenv").config();
const mongoose=require("mongoose")

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
      
          console.log("MongoDB connection SUCCESS");
        
    } catch (error) {

        console.log("connection failed!")
        process.exit(1)
        
    }
};
module.exports=connectDb;