import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb COnnected: ${conn.connection.host}`);
  } catch (error) {
    console.log("In catch");
    console.log(`Error:${error.message}`);
  }
};
export default connectDb;
