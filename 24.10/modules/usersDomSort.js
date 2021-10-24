console.log('app is loading');
const fs = require('fs')
const path = require('path')
users = path.join(__dirname, '..', 'files', 'users.json')
let data

try {
  data = JSON.parse(fs.readFileSync(users, 'utf8'))
}
catch (err) { console.log('error users file'); }


const sorted = function sort(TRUESTATUSE, FALSESTATUSE,dat) {
  for (const iterator of dat) {
    if (iterator.isCompleted == true) { TRUESTATUSE.push(iterator) }
    else { FALSESTATUSE.push(iterator) }
  }
}

module.exports={
  data:data,
sorted:sorted}