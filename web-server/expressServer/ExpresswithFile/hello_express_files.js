
console.log('app is loading');
const express=require('express');
const path=require('path');
const app=express();
const PORT=8080;
app.listen(PORT)
console.log('after listening');
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.render=('public/index',{text:'hellow world'})
        console.log(__dirname);
        let index=path.join(__dirname,'public','index')
        res.sendFile(index)
        })


app.get("/about",(req,res)=>{
    let index=path.join(__dirname,'public','about.html')
    res.sendFile(index)
})

app.get("/support",(req,res)=>{
    let index=path.join(__dirname,'public','support.html')
    // res.download('public/index.html')
    res.sendFile(index)
})

