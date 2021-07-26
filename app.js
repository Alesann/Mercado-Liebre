const path = require('path');
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log("Todo correcto");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

const publicPath = path.resolve(__dirname, "./public")

app.use(express.static("public"));