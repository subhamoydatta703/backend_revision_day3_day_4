const express = require("express");
const path = require("path");

const app= express();

const port = 8080;

app.set("views", path.join(__dirname, "/views"))

app.set("view engine", "ejs");

app.get('/',(req, res)=>{
    // res.send("<h1>Hello</h1>");
    res.render("home.ejs")
})

app.get('/random',(req, res)=>{
    // res.send("<h1>Hello</h1>");
    let val = Math.floor(Math.random()*10)
    res.render("random.ejs", {val})
})


app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
    
})