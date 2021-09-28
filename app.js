const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const router = require("./routes/api");

dotenv.config();

app.use(express.static("public"));
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

app.use("/api", router);

app.get("/",express.json(), (req, res)=>{
    res.render("index")
})

app.get("/cadastro",express.json(), (req, res)=>{
    res.render("cadastro")
})

app.get("/email",express.json(), (req, res)=>{
    res.render("email")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server running..");
})