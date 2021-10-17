const headline= document.getElementById("headline")
let movement=10
window.onclick=()=>{
    headline.style.marginLeft=`${movement}px`
    headline.style.marginTop=`${movement}px`
    if (movement>(window.innerHeight*0.9)||movement>(window.innerHeight*0.9)) {
    headline.style.marginTop=`${movement-movement*0.7}px`
    headline.style.marginLeft=`${movement-movement*0.7}px`
    movement=10
    }
    movement*=1.5
}
