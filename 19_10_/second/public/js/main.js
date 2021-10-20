const title = document.querySelector('h1')
title.addEventListener('mouseover',()=>{
    title.style.color='red'
})
title.addEventListener('mouseout',()=>{
    title.style.color='blue'
})