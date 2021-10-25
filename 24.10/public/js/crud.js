const read=document.getElementById('crudTitle')
const readBtn=document.getElementById('crudBtn')
let counter=1
readBtn.onclick=()=>{
    if (counter==1) {
        counter--
        readBtn.innerHTML='<h3>HIDE</h3>'
        read.style.maxHeight='max-content'
        return
    }
    counter++
        readBtn.innerHTML='<h6>read about CRUUD</h6>'
    read.style.maxHeight='15vh'
    return
}