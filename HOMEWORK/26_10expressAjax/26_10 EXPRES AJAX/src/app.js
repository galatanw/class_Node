const express=require('express')
const path=require('path')
const app=express()
const axios=require('axios')
const PORT=8080
const publicLocation=path.join(__dirname,'..','public')
app.use(express.static(publicLocation))
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
app.listen(PORT,()=>`LISTENING TO ${PORT}`)