import mongoose from "mongoose";
import DBName from "../temp.js";

const DBConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DBName}`)
        console.log(connectionInstance.connection.host);
        // console.log("DB connected successfully!");
    } catch (error) {
        console.log(error);   
    }
}

export default DBConnect