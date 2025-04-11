import app from "./app.js";
import dotenv from "dotenv"
import DBConnect from "./database/db.connect.js";

dotenv.config()

DBConnect()
.then(() => {
    console.log("DB connected successfully!");

    app.listen(process.env.PORT, () => {
        console.log("server is running on port", process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})
