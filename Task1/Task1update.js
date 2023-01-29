const Db = require("mongodb/lib/db");

const MongoClient=require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/Task",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected seccessfully");
    
    const db=client.db("Task");
    db.collection("Student").findOneAndUpdate({
       Name:"Sam"
    },{
        $set:{
            Department:"MECHANICAL"
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

});