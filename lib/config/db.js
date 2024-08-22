import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amirhosein:Am@123456@cluster0.whyzv.mongodb.net/BlogApp')
    console.log("db connected")
}