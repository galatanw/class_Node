
const Mongo = require('mongodb');
const MongoClient = Mongo.MongoClient;
const ObjectId=Mongo.ObjectId;
let url = "mongodb://127.0.0.1:27017/31Hw";
// easier way to create object
let obj;
// --- database
MongoClient.connect(url,(err,db)=>{
if (err) throw err;
let dbo=db.db("31Hw");
// createCol(dbo,"posts")
// createCol(dbo,"authors")
// insertObjArray(dbo,"authors",obj)
// appendPostToAuthor(dbo,"617ebafabc5e4b421b7eb2d6","617ebab328536bba51439359")
// findAll(dbo,"authors")
// DisplayActiveAuthores(dbo)
// authorsOlderThen(dbo,40)
// authorsYoungerThenAge(dbo,40)
// authorsInAgeRange(dbo,20,61)
// threeAuthorsInAgeRange(dbo,20,121)
// authorsNameOnly(dbo)
// switch(process.argv[2]){
//     case "create":
//         insertObjArray(dbo,process.argv[3],process.argv[4])
// }
})

// CALLBACK FUNCTIONS FOR DATABASE USAGE

// ---createCollection

function createCol(db,col){
    db.createCollection(col,(err,res)=>{
        if(err){throw err}
        console.log(`${col} has been created`)
    })
}

// ----add a document to a collection

function insertOneObj(db,col,obj){
    db.collection(col).insertOne(obj,(err,res)=>{
        if (err){throw err}
        console.log(res);
    })
}


// ----add serval documents to a collection

function insertObjArray(db,col,objArr){
    db.collection(col).insertMany(objArr,(err,res)=>{
        if (err){throw err}
        console.log(res);
    })
}



// ---get all of the documents from the collection
function findAll(db,col){
    db.collection(col).find({}).toArray((err,res)=>{
        if (err){throw err}
        console.log(res);
    })
}




// ---- ADD POST TO AUTHOR
function appendPostToAuthor(db,id,postId){
db.collection("authors").updateOne({_id:ObjectId(id)},{$push:{posts:`${postId}`}},(err,res)=>{
    if(err){throw err}
    console.log(res);
})

}


// ---- SORT BY POST EXISTINS

function DisplayActiveAuthores(db){
db.collection("authors")
.find({"posts.0":{$exists:true}})
    .toArray((err,res)=>console.log(res))
}

// ---- authors that are younger then X
function authorsYoungerThenAge(db,age){
    db.collection("authors")
    .find({age:{$lt:age}})
    .toArray((err,res)=>{
        if(err){throw err}
        console.log(res);
    })
}

// ---- authors that are older then X


function authorsOlderThen(db,age){
    db.collection("authors")
    .find({age:{$gt:age}})
    .toArray((err,res)=>{
        if(err){throw err}
        console.log(res);
    })
}


// ---- Between AGES

function authorsInAgeRange(db,age,age2){
    db.collection("authors")
    .find({age:{$gt:age , $lt:age2}})
    .toArray((err,res)=>{
        if(err){throw err}
        console.log(res);
    })
}

// ---- Between AGES with LIMIT

function threeAuthorsInAgeRange(db,age,age2){
    db.collection("authors")
    .find({age:{$gt:age , $lt:age2}})
    .limit(3)
    .toArray((err,res)=>{
        if(err){throw err}
        console.log(res);
    })
}

//// project Authors name Only
function authorsNameOnly(db){
    db.collection("authors")
    .find({},{projection:{_id: 0, name:0 , age:0}})
    .toArray((err,res)=>{
        if(err){throw err}
        console.log(res);
    })
}


