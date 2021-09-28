const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const router = require("./routes/api");

dotenv.config();

app.use("/api", router);
app.use(express.json(), express.static("public"));
app.set("views", path.join(__dirname, "public")); //template engine(EJS)
app.set("view engine", "ejs"); //template engine(EJS)

app.get("/", (req, res)=>{
    res.render("index") //Renderizando EJS(arquivo index)
})

app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
})

app.get("/email", (req, res)=>{
    res.render("email")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server running..");
})