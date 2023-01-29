const MongoClient=require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/Task",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected seccessfully");

    const db=client.db("Task");
    db.collection("Student").insertOne({
        id:812,
        Email:"e@e.com",
        Name:"Rich",
        submission:1,
        Grade:"N.A"

    },(error,result)=>{
        if(error){
            return console.log("unable to insert",error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

});