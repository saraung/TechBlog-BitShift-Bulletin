import mongoose from "mongoose";
import  dotenv from 'dotenv';
dotenv.config();

console.log("mongo url "+process.env.MONGO_URI)

const connectDB= async()=>{
    try {
        
        await mongoose.connect(process.env.MONGO_URI)
        // console.log(process.env.MONGO_URI)
        console.log("connected to db")

    } catch (error) {
        console.log(`ERROR :${error.message}`);
        process.exit(1)
    }
};


export default connectDB;