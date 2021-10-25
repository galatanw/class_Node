const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const handlebar = require('express-handlebars')
app.set('view engine', 'hbs')
app.engine('hbs', handlebar({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials'

}))
app.use(express.static('public'))
const functuality = require('./modules/usersFunctuality')
const userDom = require('./modules/usersDomSort')
const domFunctuality = require('./modules/DOMfunctiality')
functuality.func(userDom.data)
// handlebar.registerHelper('true', function (value) {
//     if(value===true){
//         return true
//     }
//     return false
//     })


app.get('/', (req, res) => {
    let acceptedStatus = [];
    let unacceptedStatuse = []
    userDom.sorted(acceptedStatus, unacceptedStatuse, userDom.data)
    let t = new Date().toDateString()
    res.render('content', { home: true, date: t })
})
app.get('/sorted', (req, res) => {
    let acceptedStatus = [];
    let unacceptedStatus = []
    userDom.sorted(acceptedStatus,unacceptedStatus,userDom.data)
    console.log('200',acceptedStatus);
    console.log('201',unacceptedStatus);
    res.render('content', { accepted: acceptedStatus, unaccepted: unacceptedStatus, sorted: true })
})



app.get('/create', (req, res) => {
    result = domFunctuality.add(userDom.data, req)
    let myData,length = true
    
    if (result) { myData=userDom.data[userDom.data.length-1]}
    
    else { myData = req.query.id ,console.log(myData);}
   
    if (typeof myData==typeof "a") {length = false}
   
    res.render('content', { toDoList: myData, crud: true, method: "create", err: length })
})



app.get('/update', (req, res) => {
    let result=domFunctuality.updateUser(userDom.data,req)
    let myData,length = true
    if (result) { myData=userDom.data[userDom.data.length-1];console.log(myData);}
    else { myData = req.query.id ; console.log(myData);}
   
    if (typeof myData==typeof "a") {length = false}
    res.render('content', { toDoList: myData, crud: true, method: "update" ,err:length})

})
app.get('/delete', (req, res) => {
  let result=domFunctuality.deleteUser(userDom.data, req)
    let myData,length = true
    
    if (result) { myData=userDom.data[userDom.data.length-1]}
    
    else { myData = req.query.id ,console.log(myData);}
   
    if (typeof myData==typeof "a") {length = false}
    res.render('content', { toDoList: myData, crud: true, method: "delete" })

})
app.get('/read', (req, res) => {
    let myData = []
    userDom.sorted(myData, myData, userDom.data)

    res.render('content', { toDoList: myData, crud: true, method: "read" })

})
app.listen(port, () => { `listening to ${port}` })

