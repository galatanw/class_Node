console.log('app is runnig');
const fs=require('fs')
const file=JSON.parse(fs.readFileSync('./content/person.json',"utf-8"))
console.log(file)