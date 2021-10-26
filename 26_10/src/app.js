const express=require('express')
const path=require('path')
const app=express()
const axios=require('axios')

const PORT=8080
const publicLocation=path.join(__dirname,'..','public')
app.use(express.json())
app.use(express.static(publicLocation))
const tasksArray=[]
let freeId=0
const WEATHER_API_KEY=process.env.OPEN_WEATHER_API_KEY
app.get('/home',(req,res)=>{
    const city=req.query.city
    const WEATHER_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
    axios
    .get(WEATHER_URL)
    .then((response)=>{
        if(response.status==200||response){
            console.log(response);
            res.send(response.data)
            return
        }    
        res.send('staus error')
    })
    .catch((err)=>{console.log(err);res.send('error invailid city')})
    .then()
})


app.get('/:id',(req,res)=>{
    const id=req.params.id
    const task=tasksArray.find((taska)=>taska.id==id)
    console.log(task)
    res.send(task)
})
app.post('/:id',(req,res)=>{
    const id=req.params.id
    const task={name:id,id:freeId,date:new Date(),completed:false}
    tasksArray.push(task)
    freeId++
    res.send(task)
})
app.delete('/:id',(req,res)=>{
    const id=req.params.id 
    console.log(id);

    const task=tasksArray.findIndex((taska)=>taska.id==id)
    console.log(task);
   const deleted= tasksArray.splice(task,1)
    res.send([tasksArray,deleted])
})
console.log();

app.listen(PORT,()=>`LISTENING TO ${PORT}`)