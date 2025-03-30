// 1. Import the express package
import express from "express"

const app = express()

app.get("/", function(req, res) {
    res.json({
        "class": "Backend + MERN",
        "timing": "06:30 PM",
        "Batch": "March",
        "Instructor": "RG",
        "domain": ["MERN", "REACT NATIVE", "APP WRITE", "FIREBASE", "FRONTEND", "NODEJS, DJANGO"]
    })
})

app.get("/login", (req, res) => {
    res.send("Welcome to the login page!")
})

app.get("/logout", (req, res) => {
    res.send("Welcome to the logout page!")
})

app.get("/home", (req, res) => {
    res.send("Welcome to the Home Page!")
})

export default app