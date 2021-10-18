const chalk=require('chalk')
console.log('app is loading');
const express=require('express');
const app=express();
const PORT=8080;
app.listen(PORT)
console.log('after listening');
app.get("/",(req,res)=>{
    console.log(req.url);
    res.send('<h1> index </h1>')
})
app.get("/about",(req,res)=>{
    res.send('<h1> about </h1>')
})