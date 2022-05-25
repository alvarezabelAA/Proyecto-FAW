const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'proyecto',
    port:'3306'
});

conn.connect(err => {
    if(err){
        console.log('Error en db: ',err);
        return;
    }else{
        console.log('Base de datos conectada');
    }
});

module.exports=conn;
