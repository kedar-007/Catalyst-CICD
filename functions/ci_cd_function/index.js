const express = require("express");

const app = express();

app.use(express.json());


app.get("/health-check",(req,res) =>{
	res.send("server running")
})

app.get("/hi",(req,res) =>{
	res.send("Hi Catalyst")
})

app.get("/testing",(req,res) =>{
	res.send("Testing endpoint")
})

module.exports = app;