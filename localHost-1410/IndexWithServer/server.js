const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
    fs.readFile('./public/index.html','utf8',(err,data)=>{
        if(err){
            res.writeHead(404)
            res.write('page not found')
        }
        else{
            res.writeHead(200)
            res.write(data)
        }
        res.end()
    })    
})
.listen(2000)