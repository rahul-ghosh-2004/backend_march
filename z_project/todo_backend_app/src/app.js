import express from "express"
import cors from "cors"

const app = express();

// We restrict our backend
app.use(cors({
    origin: "*"
}))

// Now you can receive the json data
app.use(express.json({
    limit: "1mb"
}))

// Accept the data passed through URL
app.use(express.urlencoded({
    limit: "1mb",
    extended: true
}))

// Store the static files inside the public folder
app.use(express.static("public"))

export default app