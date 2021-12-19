const canvas=document.querySelector("#canvas");
const context=canvas.getContext("2d");
canvas.height=window.innerHeight-10;
canvas.width=window.innerWidth-5;
canvas.style.backgroundColor="black"
// let x=0;
// let y=0;
// let width=100;
// let height=100;
// let step=canvas.width/100;
// let jump=canvas.height/10;
// let right=true;
// let up=true;
// let a=setInterval(()=>
// {
//     context.clearRect(x-1,y-1,width+2,height+2)
//     console.log(x,y);
//     right?x+=step:x-=step
//     up?y+=jump:y-=jump
//     console.log(x,y);
//     context.fillStyle=right?"red":"blue"
//     if(parseInt(x+step*5)>=canvas.width||parseInt(x)<parseInt(step)){right=!right}
//     if(parseInt(y)>canvas.height-height||parseInt(y)<parseInt(jump)){up=!up}
//     context.fillRect(x,y,width,height)   

// },100)
const createContext=(obj,color)=>{
    context.fillStyle=color
return context.fillRect(obj.x,obj.y(),obj.width,obj.height)
}
const deleteContextFromRight=(obj)=>{
return context.clearRect(obj.x,obj.y(),obj.width,obj.height)
}
function deleteContextFromLeft(obj){
    return context.clearRect(obj.x+obj.width,obj.y(),obj.width+2,obj.height)
}
let floor={
    height:100,
    width:canvas.width,
    x:0,
    y: function(){return canvas.height-this.height}
}
let player={
    height:200,
    width:canvas.width/10,
    x:0,
    y: function(){return canvas.height-this.height-floor.height}
}

createContext(floor,"red")
createContext(player,"green")
deleteContextFromRight(player)
player.width=canvas.width/10 
createContext(player,"blue")
let clickStop=false
let right=true
function movePlayer(){
    if (clickStop)return
    right?deleteContextFromRight(player):deleteContextFromLeft(player)
    right?player.x+=5:player.x-=5
    if(canvas.width-player.width<=player.x||player.x<=0)right=!right
    createContext(player,"green")
    requestAnimationFrame(movePlayer)
}

movePlayer()
function start(){
    clickStop=false
return movePlayer()
    
}
function stop(){
    clickStop=true
}