const express = require("express");
const cors = require("cors")
const mysql2 = require("mysql2");

const app = express();
app.use(express.json())
app.use(cors())

const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"K@lyan19",
    port:3306,
    database:"studentdatabase"
})

const PORT = 9999;

app.get("/getstudents" , (req,res)=>{

    const sql_query = "select * from samplestudenttable";

    connection.query(sql_query , (err , result)=>{
        
        if(err)
        {
            return res.json({message:"Error"});
        }

        return res.json(result);
    })
})

app.post("/addstudent" , (req,res)=>{

    const sql_query = "insert into samplestudenttable(`name`,`email`) values(?)";

    console.log(req.body);

    const values =[
        req.body.name,
        req.body.email
    ];

    connection.query(sql_query , [values] , (err,data)=>{
        
        if(err){
            console.log(err);
            
            return res.json(err);
        }

        return res.json(data);
    })
    


})

app.listen(PORT , ()=>{
    console.log(`Server started in port:${PORT}`);

    connection.connect((error)=>{
        
        try {
            console.log("Database connected");
            
        } catch (error) {
            console.log(error);
        }
    })
})