import app from "./app.js"
import connectDB from "./database/db.connect.js"
import dotenv from "dotenv"

dotenv.config()

connectDB()
.then(() => {
    console.log("DB connected successfully!");

    app.listen(process.env.PORT, () => {
        console.log("Server is running!");
    })
})
.catch((error) => {
    console.log(error);
})