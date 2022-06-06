const conn=require('../../config/database');
const jwt = require("jsonwebtoken");
const validarToken = require("../../config/jwt");
const secretKey = "pruebadellave";

module.exports = (app) => {
    app.get("/test",(req,res) => {
        res.status(200).json({prueba:"Hola Mundo"})
    });
//login
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
                    res.status(400).json({status:0, mensaje: "No coincide con la clave el Usuario"});
                }
            }
        });
    });

    //insertar usuario
    app.post("/registro",(req,res)=> {
        console.log(req.body);
        let consulta = `INSERT INTO usuarios(usuarios, nombre,pass, fecha, sexo) VALUES ('${req.body.usuarios}','${req.body.nombre}', '${req.body.pass}','${req.body.fecha}','${req.body.sexo}')`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"No se pudo agregar el Usuario",data: []});
            }else{
                res.json({status:1, mensaje: "Usuario agregado", data: []});
            }
        });
    });
//ver usuarios
    app.get("/login",(req,res) => {
        let consulta = `SELECT * FROM usuarios`;
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Exito en consulta", data: rows});
            }
        });

    });

//ver Tabla
    app.get("/comics",(req,res) => {
        let consulta = `SELECT * FROM comics`;
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Exito en consulta", data: rows});
            }
        });

    });

//ver solo el equipo deseado
    app.get("/comics/:comic",(req,res) => {
        const{comic} = req.params
        let consulta = `SELECT * FROM comics where comic =?`;
        conn.query(consulta,[comic], (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"Error en consulta"});
            }else{
                res.json({status:1, mensaje: "Exito en consulta", data: rows});
            }
        });

    });

//agregar
    app.post("/comics",(req,res)=> {
        console.log(req.body);
        let consulta = `INSERT INTO comics(comic, year, sinopsis, editorial) VALUES ('${req.body.comic}','${req.body.year}', '${req.body.sinopsis}','${req.body.editorial}')`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"No se pudo agregar el Comic",data: []});
            }else{
                res.json({status:1, mensaje: "Comic agregado", data: []});
            }
        });

    });
//eliminar
    app.delete("/comics/:comic",(req,res)=> {
        console.log(req.body);
        const{comic} = req.params
        let consulta = `DELETE FROM comics WHERE comic = '${comic}'`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"No se pudo eliminar el Comic"});
            }else{
                res.json({status:1, mensaje: "Comic eliminado"});
            }
        });

    });
    
//modificar
    app.put("/comics/:comic",(req,res)=> {
        console.log(req.body);
        const{comic} = req.params;
        const{year,sinopsis,editorial} = req.body;
        let consulta = `UPDATE comics SET
                        year = '${year}',
                        sinopsis = '${sinopsis}',
                        editorial = '${editorial}'
                        WHERE comic = '${comic}'`;
        console.log(consulta);
        conn.query(consulta, (err,rows,cols)=>{
            if(err){
                res.json({status:0, mensaje:"No se pudo editar el Comic"});
            }else{
                res.json({status:1, mensaje: "Comic editado"});
            }
        });

    });

}