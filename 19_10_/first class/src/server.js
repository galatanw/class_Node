const exprees=require('express')
const app=exprees()
const path=require('path')
const PORT=8080
let filePath= path.join(__dirname,'../public')
app.use(exprees.static(filePath))
console.log(filePath);
app.listen(PORT)
