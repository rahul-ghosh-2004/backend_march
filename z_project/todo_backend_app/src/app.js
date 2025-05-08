import express from "express"
import cors from "cors"

// POST, GET, PUT, PATCH, DELETE
// Types of Status Code
// 400, 200, 300, 500

// http://localhost:3000
// https://vinita.blog.com

// https://vinita1.blog.com
// https://vinita2.blog.com

const app = express();

// We restrict our backend
app.use(cors({
    origin: "*"
}))

// Now you can receive the json data
/*
{
    "fullname": "",
    "email": "",
    "password": ""
}
*/
// My server can accept json data.
app.use(express.json({
    limit: "1mb"
}))

// Accept the data passed through URL
// https://product.amazon.in/?productid=0828792;productName=Nothing-mobile;price=15000
app.use(express.urlencoded({
    limit: "1mb",
    extended: true
}))

// Store the static files inside the public folder
app.use(express.static("public"))



import router from "./routes/todo.route.js";

app.use("/api/v1/todo", router)






export default app