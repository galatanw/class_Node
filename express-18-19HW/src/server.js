const express=require('express')
const path=require('path')
const app=express()
app.listen(8080)
app.get('/',((req,res)=>{
    let filePath=path.join(__dirname,'../public','index.html')
    res.sendFile(filePath)
}))

app.get('/about',((req,res)=>{
    let filePath=path.join(__dirname,'../public','about.html')
    res.sendFile(filePath)
}))
app.get('/courses',((req,res)=>{
    let filePath=path.join(__dirname,'../public','about.html')
    res.sendFile(filePath)
}))
app.get('/mentoring',((req,res)=>{
    let filePath=path.join(__dirname,'../public','mentoring.html')
    res.sendFile(filePath)
}))
app.get('/testimonials',((req,res)=>{
    let filePath=path.join(__dirname,'../public','testimonials.html')
    res.sendFile(filePath)
}))
app.get('/contact',((req,res)=>{
    let filePath=path.join(__dirname,'../public','contact.html')
    res.sendFile(filePath)
}))
app.get('/events',((req,res)=>{
    let filePath=path.join(__dirname,'../public','events.html')
    res.sendFile(filePath)
}))
app.get('/css/style.css',((req,res)=>{
    let filePath=path.join(__dirname,'../public','css','style.css')
    res.sendFile(filePath,{'content-type':'text/css'})
}))
app.get('*',((req,res)=>{
    res.sendFile('<h4>error page missing</h4>')
}))
