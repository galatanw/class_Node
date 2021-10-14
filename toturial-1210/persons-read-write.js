console.log('read-write');
const fs = require('fs')
const file=fs.readFileSync('./content/person.json')
console.log(file);
fileObj= JSON.parse(file)
fileObj[2].name='change'
newFile=JSON.stringify(fileObj)
console.log(newFile);
fs.writeFileSync('content/person.json',newFile)