const mongo=require('mongodb'),
MongoClient=mongo.MongoClient,
url="mongodb://localhost:27017/",
client=MongoClient.connect(url),
dbName="todo"
col="tasks"


function findOneDelete(req,res){
    let ID=req.params
client
.then((data)=>{
let dbo=data.db("todo")
dbo.collection("tasks").findOneAndDelete({id:ID})
.then((task)=>{
    if(task.value==null){
        res.sendStatus(404)
        return
    }
        res.sendStatus(200).send(task)
})
})
.catch((err)=>{
    console.log('error',err);
})
}



function findOneAndUpdate(req,res){
let id= req.body.id
let searchedID=req.params.ID
console.log(searchedID);
let t= new Date().toDateString()
client
.then((data)=>{
    let dbo=data.db(dbName)
    dbo.collection(col).findOneAndUpdate({_id:mongo.ObjectId(searchedID)},{$set:{id:id,modified:t}})
    .then((tasks)=>{
        if(tasks.value==null){
            res.sendStatus(404)
            return
        }
        res.sendStatus(200)
    })
})
.catch((err)=>{
    console.log(err);
    res.sendStatus(200)
})

}



module.exports={findOneDelete,findOneAndUpdate}