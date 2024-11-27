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

    console.log("get method");
    

    connection.query(sql_query , (err , result)=>{
        
        if(err)
        {
            return res.json({message:"Error"});
        }

        return res.json(result);
    })
})

app.get("/getstudents/:id" , (req,res)=>{

    const sql = "select * from samplestudenttable where id = ?";
    const id = req.params.id;
    // console.log(req.params);
    console.log("get method:"+id);
    
    connection.query(sql , [id] , (err,data)=>{
        if(err) return res.json({message:"Error fround"});

        return res.json(data);
    })

})


app.post("/addstudent" , (req,res)=>{

    const sql_query = "insert into samplestudenttable(`name`,`email`) values(?)";

    console.log(req.body);
    console.log("post method");

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

app.put("/updatestudent/:id" , (req,res)=>{

    const sql = 'UPDATE samplestudenttable SET name=? , email = ? WHERE id = ?';

    const id = req.params.id;

    console.log("put method"+id);
    
    connection.query(sql , [req.body.name , req.body.email , id] , (err,data)=>{

        if(err) return res.json({message:"Error fround"});
        
        return res.json(data);
    })
})

app.delete("/deletestudent/:id" , (req,res)=>{
    const sql = "delete from samplestudenttable where id = ?";

    const id = req.params.id;

    console.log("delete:"+id);
    

    connection.query(sql , [id] , (err , result)=>{
        console.log(err);
        
        if(err){
            return res.json({message:"Error found"});
        }

        return res.json(result.affectedRows);
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