const Db = require("mongodb/lib/db");

const MongoClient=require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/Task",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected seccessfully");
    
    const db=client.db("Task");
    db.collection("Student").insertMany([
        {
        id:101,
        Email:"a@a.com",
        Name:"Alex",
        Department:"CSE",
        submission:1,
        Grade:"A"
        },
        {
            id:203,
            Email:"b@b.com",
            Name:"John",
            Department:"CIVIL",
            submission:0,
            Grade:"C"        
        },
        {
            id:305,
            Email:"c@c.com",
            Name:"Sam",
            Department:"CSE",
            submission:0,
            Grade:"C"
        },
        {
            id:719,
            Email:"d@d.com",
            Name:"Rob",
            Department:"ELECTRONICS",
            submission:1,
            Grade:"A"
        }   
    ],(error,result)=>{
        if(error){
            return console.log("unable to insert",error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();


});