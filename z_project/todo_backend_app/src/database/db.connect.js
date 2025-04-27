import mongoose from "mongoose"
import DBName from "../temp.js"

const connectDB = async function(){
    try {
        const requestInatance = await mongoose.connect(`${process.env.MONGODB_URL}/${DBName}`)
        console.log(requestInatance.connection.host);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB