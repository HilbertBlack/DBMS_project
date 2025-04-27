//=============================ORACLE_CONNECTION================================

const oracledb = require('oracledb');

const svcName = process.env.SVC_NAME;  

let connection = null;
async function connect_to_oracle_db()
{
    try
    {
    connection = await oracledb.getConnection(
        {
            user:"mani",
            password:"mani",
            connectionString:svcName,
            connectString:"localhost:1521/XEPDB1"
        }
    );

    console.log("connected to the database!");
    // console.log(connection);


    //executing a query
    // await connection.execute(`insert into first_table values(4,'nithin')`);
    //await connection.execute('update first_table set id = 1232 where id = 1');
    // await connection.execute(`commit`);
    
    //const result = await connection.execute('create table student_table(sid number primary key , name varchar(255),email varchar(255) unique,department varchar(255),batch varchar(1))');
    //await connection.execute(`commit`);
    //const result = await connection.execute(`insert into students values(3,'kishore','cse','N','kishore@gmail.com')`);

    const result = await connection.execute(`select * from students`);
    console.log("the result from the query->",result.rows);
  //  console.log("the connection to the databse closed:",await connection.close());
    }
    catch(err)
    {
        console.log("error while getting the connection tothe oracle db:",err);
    }

}


connect_to_oracle_db();


//=================================EXPRESS_SERVER================================


const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/',(req,res)=>
{
    console.log("got reqest from the client normal without path");
    res.send("you have the normal response");
});

//-----------------REGISTRATION----------------------
app.post('/register/user_credentials',async (req,res)=>
{
    console.log("got a request from the user!!  method:",req.method);
    console.log("the url:",req.url);

    console.log(JSON.parse((await req.toArray()).toString()));
});

//------------------LOGIN----------------------------
app.post('/login/user_credentials',async (req,res)=>
{
    console.log("got a request from the user!!  method:",req.method);
    console.log("the url:",req.url);

    const data = JSON.parse((await req.toArray()).toString());
    console.log("the data from the client:",data);

    const q  = `select * from students where sname='${data.user_name}'`;
    console.log("THE query that is going to be send :",q);
    try
    {
        const result  = await connection.execute(q);
        console.log("the query result from the databse:",(result.rows));

        if((result.rows) == 0) //if the user does not exit 
        {
            console.log("the user does not exists");
            res.send(JSON.stringify({isValidUser:false}));
        }
        else if((result.rows.length) >= 1)  // if the user does exists
        {
            console.log("the user does exists");
            res.send(JSON.stringify({isValidUser:true}));
        }
    }
    catch(err)
    {
        console.log("error in executing the query:",err);
    }
    
});


app.listen(5050,()=>
{
    console.log("server started at the port :5050");
});


