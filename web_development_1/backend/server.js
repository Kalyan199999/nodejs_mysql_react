var express = require("express")
var cors = require("cors");
var mysql = require("mysql2");

var app = express();

app.use(cors())
app.use(express.json())


var connection = mysql.createConnection( {
    host:"localhost",
    port:3306,
    user:"root",
    password:"K@lyan19",
    database:"mydatabase"
} )

// test
app.get("/server_api" , (req,res)=>{
    return res.json( {message:"This is from server"} );
} )

// student table
app.get('/student' , (req,res)=>{

    const sql = "select * from student";

    connection.query(sql , (err,data)=>{

        if(err)
        {
            // console.log("Error");
            return res.json("Error!");
        }
        else{
            return res.send(data);
        }

    })
})

app.post('/student/post' , (req,res)=>{

    const sql = "insert into student values (?)";

    const values = [
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.sex,
        req.body.class,
        req.body.marks,
        req.body.image
    ]

    // console.log(req.body);
    

    connection.query(sql , [values] , (err,data)=>{

        // console.log(err);
        

        if(err)
        {
            return res.json("error!");
        }

        return res.json(data);
    })

})


app.listen( 1999 , ()=>{

    console.log("Listening from backend....")

    connection.connect((err)=>{

        try {
            console.log("Database connected");
        }
        catch (error) {
            console.log("Error");
        }
    })
} )