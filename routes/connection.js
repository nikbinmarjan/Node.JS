var mysql = require ('mysql');
var con= mysql.createConnection(

{

    host:'localhost',
    user: 'root',
    password:'Nikbin@9697',
database: 'mysql'
}

);
con.connect(function(err) {

    if (err){

        console.log(err);
    }

    else 
    {

        console.log("connection to DB");}
    });
    
module.exports=con;