const express=require('express')
const mongo=require('mongodb')
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/firstMongoClient";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });
  
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("firstMongoClient");
//     dbo.createCollection("results", function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
//   });



//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("firstMongoClient");
//     var myobj = { difficulty: "pro", exp: 3 };
//     dbo.collection("tasks").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted:",res);
//       db.close();
//     });
//   });



//   var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
function findAllInPost(mydb,collection){ 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  dbo.collection(collection).find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}

findAllInPost("firstMongoClient","tasks")