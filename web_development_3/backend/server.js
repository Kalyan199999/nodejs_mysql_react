const express = require("express")
const cors = require("cors")
const mysql2 = require("mysql2")

const PORT = 1999;

const app = express();
app.use(cors())
app.use(express.json())


const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"K@lyan19",
    port:3306,
    database:"studentdatabase"
})

app.get("/users" , (req,res)=>{

    const sql = "select * from user";
    
    connection.query(sql , (err , result)=>{
        
        if(err)
        {
            return res.json({message:"Error", found:false});
        }

        return res.send({data:result , found:true});
    })

})



app.listen(PORT,()=>{
    
    console.log("server started at port:"+PORT);

    connection.connect((error)=>{
        try {
            console.log("Connection established to database!");
            
        } catch (error) {
            console.log("Database is not connected!");
            
        }
    })

})