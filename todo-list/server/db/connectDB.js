import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected 😊");
    console.log("MONGO_URI:", process.env.MONGO_URI);
  } catch (err) {
    console.error(err);
  }
};


export default connectDB;
