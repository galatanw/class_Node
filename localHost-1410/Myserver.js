const http=require('http')
const fs=require('fs')
const   cars = JSON.parse(fs.readFileSync("cars.json",'utf-8'))
const server=http.createServer((req,res)=>{
    if(req.url=="/"||req.url=='cars'){
        res.writeHead(200)
        res.write(JSON.stringify(cars))
    }
    else{
        res.writeHead(404)
        res.write('page not found')
    
    }
    res.end()}
    )
.listen(2000)
console.log(JSON.stringify(cars))