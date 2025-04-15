import app from "./app.js";
import DBConnect from "./database/db.connect.js";
import dotenv from "dotenv"

dotenv.config()

// First mera DB connection hona chaiyeh
// Success --> Server ko start karo
// Failure --> Server ko start mat karo

DBConnect()
.then(() => {
    console.log("DB connected!");

    app.listen(process.env.PORT, () => {
        console.log("Server is started!");
    })
})
.catch((error) => {
    console.log(error);
}) 