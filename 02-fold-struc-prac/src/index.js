import app from "./app.js";

const PORT = 3000

app.listen(PORT, function() {
    console.log("Server is running on PORT ", PORT);
    console.log(`http://localhost:${PORT}`);
})