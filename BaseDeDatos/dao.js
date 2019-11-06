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
        pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                connection.query(`INSERT INTO usuarios(nombre, correo, telefono)
                VALUES(?,?,?)`,[usuario.nombre],[usuario.correo],[usuario.telefono],function (err,resultado){
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
        pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                connection.query(`INSERT INTO mensajes(idOrigen, idDestino, mensaje,hora,leido)
                VALUES(?,?,?,?,?)`,[usuarioOrigen.id],[usuarioDestino.id],[mensaje],[new Date],[1],function (err,resultado){
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
        pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                connection.query(`SELECT mensaje FROM mensajes WHERE idDestino = ? AND leido = 0`,
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
        pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                var cadena =  '%'+str+'%';
                connection.query(`SELECT * FROM usuario WHERE nombre LIKE ?`,
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
    hola(){
        console.log("hola");
    }
}

module.exports = dao;