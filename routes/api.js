const express = require("express");
const cors = require("cors");
const path = require("path");
const router = express.Router();
const posts = require("../model/alunos")
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

let options = {origin: "http://localhost:3001"};

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

router.use(cors(options));
router.use("/email", express.urlencoded({extended: true}), express.static(path.join(__dirname, "public/email.ejs")))
//Como existe a tag 'form' no email.ejs, O modo de encode é o 'urlencoded'. Vem direto para já, sem a necessidade de um arquivo .js

router.get("/cadastro", (req, res)=>{
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/cadastro/new", express.json(), (req, res)=>{ 
//IMPORTANTÍSSIMO: 
    //Use "express.urlencoded({extended: true})" quando vai usar a tag 'form'
    //Use "express.json()" quando não for usar a tag 'form'
    //OBS: o '.json' espera que envie o request(req) como string e não em formato de formulário.
    let name = req.body.name;
    let age = req.body.age;
    let group = req.body.group;

    posts.newPost(name, age, group) //name, age, group como argumentos
    res.send("Aluno Matriculado")
})

router.post("/email", (req, res)=>{
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: subject,
        text: message
    }).then((info)=>{
        console.log(info);
        res.send("Email enviado com sucesso")
    }).catch((error)=>{
        console.log(error);
        res.send("Erro ao enviar o email")
    })
})

module.exports = router;