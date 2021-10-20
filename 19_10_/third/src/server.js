const express=require('express'),path=require('path'),app=express(),PORT= 8080   
const filePath = path.join(__dirname,'..','public')
app.use(express.static(filePath))
app.listen(PORT,()=>{
    console.log(`srver listens on port:${PORT}`);
})
app.get("/city",((req,res)=>{
    console.log(req.query);
res.send((`hi ${req.query.city}`))
}))
