const Db = require("mongodb/lib/db");

const MongoClient=require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/Task",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected seccessfully");


    const db=client.db("Task");
    db.collection("Student").find({submission:1}).toArray().then((docs)=>{
        console.log("Details Found");

        console.log(JSON.stringify(docs,undefined,2));
    },(error)=>{
        console.log("unable to fetch the data",error);
    });
    client.close();
});
