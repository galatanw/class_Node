const http=require('http')
const fs=require('fs')
const file=JSON.parse(fs.readFileSync(`./book.json`,'utf-8'))
http.createServer((req,responde)=>{
switch(req.url) {
    case "/":
        responde.writeHead(200)
        responde.write(JSON.stringify(file))
        responde.wr
        break
    case "/about":
        responde.writeHead(200)
        responde.write('welcome to home about')
        break

    case "/blog":
        responde.writeHead(200)
        responde.write('welcome to home blog')
        break
    case "/post":
        responde.writeHead(200)
        responde.write('welcome to home post')
        break
    default:
        responde.writeHead(404)
        responde.write('page not found')
        break
}
responde.end()
}
)
.listen(2000)