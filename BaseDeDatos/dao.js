const mysql = require("mysql");

class dao{
    constructor(host,usuario,contraseña,nombre){
        //los atributos no los vamos a usar , pero si en el ejercicio 3
        // this.host=host;
        // this.usuario = usuario;
        // this.contraseña=contraseña;
        // this.nombre=nombre;
        this.pool= mysql.createPool({
            host: host,
            user: usuario,
            password: contraseña,
            database: nombre
            });
    }

    insertaUsuario(usuario,callback){
        this.pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                connection.query("INSERT INTO usuarios(nombre, correo, telefono) VALUES(?,?,?)",
                [usuario.nombre,usuario.correo,usuario.telefono],
                function (err,resultado){
                    connection.release();
                    if(err)
                        callback(err);
                    else
                        usuario.id = resultado.insertId;
                        callback(null);
                })
            }
        });
    }

    enviarMensaje(usuarioOrigen, usuarioDestino, mensaje, callback){
        this.pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                connection.query(`INSERT INTO mensajes(idOrigen, idDestino, mensaje,hora,leido)
                VALUES(?,?,?,?,?)`,[usuarioOrigen.id,usuarioDestino.id,mensaje,new Date("December 17, 1995 03:24:00"),1],function (err,resultado){
                    connection.release();
                    if(err)
                        callback(err);
                    else
                        callback(null);
                })
            }
        });
    }

    bandejaEntrada(usuario,callback){
        this.pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                connection.query(`SELECT mensaje FROM mensajes WHERE idDestino = ? AND leido = 1`,
                [usuario.id] ,function (err,resultado){
                    connection.release();
                    if(err)
                        callback(err,resultado);
                    else
                        callback(null,resultado);
                })
            }
        });
    }

    buscarUsuario(str, callback){
        this.pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                var cadena =  '%'+str+'%';
                connection.query("SELECT * FROM usuarios WHERE nombre LIKE ?",
                [cadena] ,function (err,resultado){
                    connection.release();
                    if(err)
                        callback(err,resultado);
                    else
                        callback(null,resultado);
                })
            }
        });
    }
    terminarConexion(callback){
        this.pool.end(function (err) {
            if(err)
                callback(err);
            else
                callback(null);
        });
        
        
    }

}

module.exports = dao;