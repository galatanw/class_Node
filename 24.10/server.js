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
console.log(userDom.data);
functuality.func(userDom.dataw)


app.get('/',(req,res)=> {
let acceptedStatus=[];
let unacceptedStatuse=[]
userDom.sorted(acceptedStatus,unacceptedStatuse,userDom.data)

res.render('content',{accepted:acceptedStatus,unaccepted:unacceptedStatuse})
})
app.listen(port,()=>{`listening to ${port}`})