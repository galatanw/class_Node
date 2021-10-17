const div = document.getElementById('seccess')
const refreshBtn = document.getElementById('refreshBtn')

// ------------LOTERRY
function lottery() {
// ---------------------------------------IF WON
let client = Number(prompt(`the number say:
guess me 1-10`))
let theNumber=4
for (let index = 0; index < 3; index++) {
    if(client===theNumber){
        refreshBtn.style.display='block'
        div.innerHTML=`
        <iframe src="https://giphy.com/embed/x8TrYlgGVCAytbcBgC" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/TheSwoon-x8TrYlgGVCAytbcBgC">via GIPHY</a></p>
        <h1> JACKPOT</h1>
        <h1> let's do it again</h1>`
        return
    }
    theNumber=Math.floor(Math.random()*10)
     client = Number(prompt('guess me 1-10'))
}
// ------------------------------when lost
div.innerHTML=`
<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="480" src="https://giphy.com/embed/6JCUIYsr56cIn61Mpo/video" width="480"></iframe></div>
<h1> Don't worry you would get better </h1>
`
refreshBtn.style.display='block'
}
// -------------sync with H1 Animation
setTimeout(lottery,5000)
// ----------------------------------REFRESHING THE FUNCTION USING CALLBACK FUNCTION
function refreshLottery(){
    refreshBtn.style.display='none'
    div.innerHTML=""
    setTimeout(lottery,1000)
    
}