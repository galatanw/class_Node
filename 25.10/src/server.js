const express =require('express')
const app=express()
const PORT=8080
const path= require('path')
const exp_hbs=require('hbs')
const publicPath=path.join(__dirname,"..",'public')
const viewsPath=path.join(__dirname,"..","templates","views")
const partialsPath=path.join(__dirname,"..","templates","partials")
app.use(express.static(publicPath))
obj=
[{
    name:"gal",
    property:"gal"
},
{
    name:"BRANO",
    property:"gal"
}]
objJSON=JSON.stringify(obj)
app.get("/test",(req,res)=>{
res.send(obj)
})
app.listen(PORT,()=>{`LISTEING TO PORT ${PORT}`})
