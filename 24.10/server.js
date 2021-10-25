const express=require('express')
const app=express()
const port=8080
const path= require('path')
const handlebar=require('express-handlebars')
app.set('view engine','hbs')
app.engine('hbs',handlebar({
    layoutsDir:__dirname+'/views/layouts',
    extname:'hbs',
    defaultLayout:'index',
    partialsDir:__dirname+'/views/partials'

}))
app.use(express.static('public'))
const functuality=require('./modules/usersFunctuality')
const userDom=require('./modules/usersDomSort')
const domFunctuality=require('./modules/DOMfunctiality')
const { METHODS } = require('http')
const { sorted, data } = require('./modules/usersDomSort')
functuality.func(userDom.data)


app.get('/',(req,res)=> {
let acceptedStatus=[];
let unacceptedStatuse=[]
userDom.sorted(acceptedStatus,unacceptedStatuse,userDom.data)
let t=new Date().toDateString()
res.render('content',{home:true,date:t})
})
app.get('/sorted',(req,res)=> {
    let acceptedStatus=[];
    let unacceptedStatuse=[]
    userDom.sorted(acceptedStatus,unacceptedStatuse,userDom.data)
    
    res.render('content',{accepted:acceptedStatus,unaccepted:unacceptedStatuse,sorted:true})
    })
app.get('/create',(req,res)=>{
   domFunctuality.add(userDom.data,req)  
   let myData=[]
    userDom.sorted(myData,myData,userDom.data)  
    res.render('content',{toDoList:myData,crud:true ,method:"create"})

})
app.get('/update',(req,res)=>{
    domFunctuality.updateUser(userDom.data,req)    
    let myData=[]
    userDom.sorted(myData,myData,userDom.data)
     res.render('content',{toDoList:myData,crud:true ,method:"update"})
 
 })
 app.get('/delete',(req,res)=>{
     domFunctuality.deleteUser(userDom.data,req)    
    let myData=[]
    userDom.sorted(myData,myData,userDom.data)
     res.render('content',{toDoList:myData,crud:true ,method:"delete"})
 
 })
 app.get('/read',(req,res)=>{
     domFunctuality.readUsers(userDom.data)    
    let myData=[]
    userDom.sorted(myData,myData,userDom.data)
     res.render('content',{toDoList:myData,crud:true ,method:"read"})
 
 })
app.listen(port,()=>{`listening to ${port}`})