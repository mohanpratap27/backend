import mongoose from "mongoose";
import { DB_NAME } from "../constanants.js";

const connectDB = async () =>{
    try {
         const connectionInstances=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connectd !!  DB Host ${connectionInstances.connection.host}`)       
    } catch (error) {
        console.log("Mongo Db connection error", error);
        process.exit(1)
    }
}


export default connectDB