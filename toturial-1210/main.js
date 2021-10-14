console.log('app is');
// const os=require("os")
// let user=os.userInfo()
// console.log(user)
// let time=os.uptime()
// console.log(time/60);
// const user ={
//     name:os.type(),
//     user:os.userInfo(),
//     timeOn:`${os.uptime()/60/24} days`,
//     freemem:`${os.freemem()/1000000000} gb`,
//     totalmem:`${os.totalmem()/1000000000} gb`,
//     releseSoftware:os.release()
// }
// console.log(user);

// const path = require('path')
// console.log(path.sep);
// const text=path.join('/content/','text.txt')
// const lastPart=path.basename(text)
// const full=path.resolve(__dirname,/content/,'text.txt')



// const syncFs=require('fs')
// const text=syncFs.readFileSync('./content/text.txt','utf-8')
// console.log(text);
// syncFs.writeFileSync('./content/addedByNode.txt','created by node')

// adding a third parameter equals to {flag:'a'} would add to the file and wont overwrite it


// const asyncFs=require('fs')
// asyncFs.readFile("./content/text.txt","utf8",(err,result)=>{
//     if (err) {
//         console.log("error");
//         return
//     }
//     const first=result
//     asyncFs.readFile("./content/addedByNode.txt","utf8",(err,result)=>{
//         if (err) {
//             console.log("error");
//             return
//         }
//         const second=result
//     asyncFs.writeFile('./content/newJs.txt',
//     `result is ${first},${second}`,{flag:"a"},
//     (err,result)=>{
//         if (err) {
//             console.log("error");
//             return
//         }
//         const third=result
//         console.log(third);
//     })
// })
 
// // })
// console.log(process.argv);

// if(process.argv[2]="2"){
//     console.log('maybe');
// }
const os=require('os')
console.log(process.cpuUsage());
// console.log(os.cpus());