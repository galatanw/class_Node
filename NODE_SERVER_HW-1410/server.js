const http=require('http')
const fs=require('fs')
function ReadFile(err,data,res){
    if(err){
        res.writeHead(404)
        res.write('page not fonud')
    }else{
        res.writeHead(200)
        res.write(data)
    }
    res.end()

}
function ArrayObject (err,data,res)
    {
        if(err){
            res.writeHead(404)
            res.write('page not fonud')
        }
        else{
        res.writeHead(200)
        data=JSON.parse(data)
        for (const iterator of data) {
            res.write(
            `<h1> ${iterator.product}</h1>
            <h5> price: ${iterator.price}</h5>
            <img src="${iterator.img}"height="300px" width="300px"px>
                `   
            )
        }}
        res.end()
    }
    
function singleObject(err,data,res){
    if(err){
        res.writeHead(404)
        res.write('page not fonud')
    }
    else{
    res.writeHead(200)
    data=JSON.parse(data)
        res.write(
        `<h1> ${data.product}</h1>
        <h5> price: ${data.price}</h5>
        <img src="${data.img}"height="300px" width="300px"px>
            `   
        )
        }
    res.end()

}
    
const server = http.createServer((req,res)=>{
  try{
    switch(req.url){
        case "/":
         fs.readFile('./public/index.html',"utf-8",(err,data)=>ReadFile(err,data,res))
                break
        case "/about":
            fs.readFile('./public/about.html',"utf-8",(err,data)=>ReadFile(err,data,res))
                break
        
        case "/sales":
            fs.readFile('./public/sales.html',"utf-8",(err,data)=>ReadFile(err,data,res))
            break
                           
        case "/products":
            fs.readFile("./public/products.json","utf-8",(err,data)=>ArrayObject(err,data,res))
                break
        case "/product":
            fs.readFile('./public/product.json',"utf-8",(err,data)=>singleObject(err,data,res))
                break
            }
        }
  catch(err){
      res.writeHead(404)
      res.write('error',console.error(err))
      res.end()
    }
})
.listen(2000)


