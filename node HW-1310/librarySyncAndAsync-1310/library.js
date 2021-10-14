// // שאלה 1
const fs=require('fs')
const functions = require("./module")
    let data=fs.readFileSync("./librarySyncAndAsync/libraryData.txt",'utf-8')


data=JSON.parse(data)
console.log(data);
functions.update(data)
functions.add(data,'bookZ','GAL',200)
functions.delete(data,'bookZ')
console.log(data);
fs.writeFileSync('./librarySyncAndAsync/libraryData.txt',JSON.stringify(data))




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// שאלה 2



