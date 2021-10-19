const fs=require('fs')
const functions = require("./module")
let data=fs.readFileSync("C:/Users/ester/OneDrive/שולחן העבודה/NODE.JS/node HW-1310/librarySyncAndAsync-1310/libraryData.txt",'utf-8')


data=JSON.parse(data)
console.log(data);
functions.update(data)
functions.add(data,'bookZ','GAL',200)
functions.delete(data,'bookT')
console.log(data);
fs.writeFileSync("C:/Users/ester/OneDrive/שולחן העבודה/NODE.JS/node HW-1310/librarySyncAndAsync-1310/libraryData.txt",JSON.stringify(data))






