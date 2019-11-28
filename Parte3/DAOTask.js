"use strict";
const mysql = require("mysql");


class DAOTask {
    constructor(pool) {
        this.pool = pool;
    }

    getAllTasks(email, callback) {
        this.pool.getConnection(function (err, connection) {
            if (err)
                callback(err, null);
            else {
                var sql = "SELECT tk.id,tk.text,tk.done,tg.tag FROM task tk LEFT JOIN tag tg ON tk.id = tg.taskId WHERE tk.user = ?";
                var params = [email];
                connection.query(sql, params, function (err, resultado) {
                    connection.release();
                    if (err)
                        callback(err, null);
                    else if (resultado.length > 0) {
                        var ar = new Array();
                        resultado.forEach(element => {
                            var tareas = new Object();
                            tareas["id"] = element.id;
                            tareas["text"] = element.text;
                            tareas["done"] = element.done;
                            tareas["tag"] = element.tag;
                            ar.push(tareas);
                        });
                        callback(null, ar);
                    }
                    else
                        callback(null, ar);
                })
            }
        });
    }

    insertTask(email, task, callback) {
        this.pool.getConnection(function (err, connection) {
            if (err)
                callback("Error de conexion a la base de datos");
            else {
                var sql = "INSERT INTO task (user,text,done) VALUES (?,?,?)";
                var params = [email, task.text, task.done];
                var id;
                connection.query(sql, params, function (err, resultado) {
                    connection.release();
                    if (err)
                        callback("Error de acceso a la base de datos");
                    else {
                        //¡¡¡¡¡IMPORTANTE NO HACER UN BUCLE DE INSERT HACER ESTO MEJOR!!!!!
                        id = resultado.insertId;
                        let values = [];
                        for (let index = 0; index < task.tag.length; index++) {
                            values.push([id, task.tag[index]]);
                        }
                        var sql2 = "INSERT INTO tag VALUES ?";
                        connection.query(sql2, [values], function (err) {
                            if (err)
                                callback("Error de acceso a la base de datos");
                            else
                                callback("Tags insertados correctamente");
                        });
                        callback("Tarea insertada correctamente");
                    }
                });

            }
        });
    }

    markTaskDone(idTask,callback){
        this.pool.getConnection(function (err, connection) {
            if (err)
                callback("Error de conexion a la base de datos");
            else {
                var sql = "UPDATE task SET done = 1 WHERE id = ?";
                var params = [idTask];
                connection.query(sql, params, function (err, resultado) {
                    connection.release();
                    if (err)
                        callback("Error de acceso a la base de datos");
                    else
                        callback("Tarea terminada correctamente");
                })
            }
        });
    }

    deleteCompleted(email,callback){
        this.pool.getConnection(function (err, connection) {
            if (err)
                callback("Error de conexion a la base de datos");
            else {
                var sql = "DELETE FROM task WHERE user = ? AND done = ?";
                var params = [email,1];
                connection.query(sql, params, function (err, resultado) {
                    connection.release();
                    if (err)
                        callback("Error de acceso a la base de datos");
                    else
                        callback("Tareas borradas correctamente");
                })
            }
        });
    }
}

module.exports = DAOTask;