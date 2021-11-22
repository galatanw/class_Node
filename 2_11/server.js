const express=require('express'),
app=express(),
PORT=8080;
app.use(express.json())
const ultis=require('./ultis')
app.delete("/:ID",(req,res)=>{
    ultis.findOneDelete(req,res)
}
)
app.patch("/:ID",(req,res)=>{
    ultis.findOneAndUpdate(req,res)
}
)
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
})