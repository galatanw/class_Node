const express=require('express'),path=require('path'),app=express(),PORT= 8080   
const filePath = path.join(__dirname,'..','public')
app.use(express.static(filePath))
app.listen(PORT)
