const Db = require("mongodb/lib/db");

const MongoClient=require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/Student",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected seccessfully");
    
    const db=client.db("Student");
    db.collection("Detail").insertMany([
        {
        Student_Id:101,
        Name:"Alex",
        Marks:90,
        Grade:"A",
        Date:"2023-11-10",
        },
        {
            Student_Id:102,
            Name:"John",
            Marks:80,
            Grade:"B",
            Date:"2023-11-11"       
        },
        {
            Student_Id:103,
            Name:"Sam",
            Marks:92,
            Grade:"A",
            Date:"2023-11-10"
        },
        {
            Student_Id:104,
            Name:"Rob",
            Marks:74,
            Grade:"C",
            Date:"2023-11-10"
        },
        {
            Student_Id:105,
            Name:"Jax",
            Marks:93,
            Grade:"A",
            Date:"2023-11-11"
        }  
    ],(error,result)=>{
        if(error){
            return console.log("unable to insert",error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();


});