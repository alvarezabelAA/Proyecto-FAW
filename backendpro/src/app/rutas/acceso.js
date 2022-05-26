const conn=require('../../config/database');
const jwt = require("jsonwebtoken");
const validarToken = require("../../config/jwt");
const secretKey = "pruebadellave";

module.exports = (app) => {
    app.get("/test",(req,res) => {
        res.status(200).json({prueba:"Hola Mundo"})
    });

    app.post("/login", (req, res) => {
        console.log(req.body);
        let consulta = `SELECT usuarios, nombre, pass, fecha FROM usuarios WHERE usuarios = '${req.body.usuarios}' AND pass = '${req.body.pass}'`
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.status(500).json({status:0, mensaje: "ERROR EN BASE DE DATOS"});
            }else{
                if(rows.length > 0){
                    const token = jwt.sign({usuarios: req.body.usuarios}, secretKey,{expiresIn:"2h"});
                    res.json({status:1, mensaje: "Usuario se encontro con exito", key: token});
                }else{
                    res.status(400).json({status:0, mensaje: " No coincide con la clave el Usuario"});
                }
            }
        });
    });

    app.get("/comics",validarToken,(req,res) => {
        let consulta = `SELECT * FROM comics`;
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Exito en consulta", data: rows});
            }
        });

    });
}