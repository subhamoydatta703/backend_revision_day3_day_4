const express = require("express");

const app= express();

const port = 8080;

app.set("view engine", "ejs");

app.get('/',(req, res)=>{
    // res.send("<h1>Hello</h1>");
    res.render("home.ejs")
})

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
    
})