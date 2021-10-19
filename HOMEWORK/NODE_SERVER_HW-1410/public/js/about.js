const infoSec = document.getElementById('infoSec')
const infoBtn = document.getElementById('infoBtn')
infoSec.innerHTML+=`<h3> this is a really modest website because</h3> `
let clicked=1
for (let i = 0; i < 77; i++) {
infoSec.innerHTML+=` <p>javaScript is not JAVA</p>`
}
infoBtn.onclick=()=>{
if(clicked==1){
    infoSec.style.display="block"
    clicked--
    return
}   

infoSec.style.display ="none"

clicked++
}