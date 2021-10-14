    if(process.argv[2]==undefined||process.argv[3]==undefined){
        console.error("wrong input");
        return
    }
const name=process.argv[2]
const age=Number(process.argv[3])
let persons=
[
    {name:"avi"  , age:21},
    {name:"Yossi" , age:33},
    {name:"Mickey" , age:120}
]
const person={name:name,age:age}
persons.push(person)
console.log(persons);
const fs=require('fs');
const fileName="person.json"


fs.writeFileSync(`./content/${fileName}`,`${JSON.stringify(persons)}`)
