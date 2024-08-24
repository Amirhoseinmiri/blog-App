import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/blog-app");
  console.log("db connected");
};
// export const connectDB = async () => {
//   if (mongoose.connections[0].readyState) {
//     return true;
//   }
//   try {
//     await mongoose.connect(
//       "mongodb+srv://amirhoseinmiri444:Am@123456@cluster0.t6vfv.mongodb.net/Blog_app"
//     );
//     console.log("Mpngo db connected");
//     return true;
//   } catch (error) {
//     console.log(error);
//   }
// };
