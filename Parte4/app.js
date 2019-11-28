// app.js
const config = require("./config");
const DAOTasks = require("./DAOTasks");
const utils = require("./utils");
const path = require("path");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const ficherosEstaticos = path.join(__dirname, "public");


// Crear un servidor Express.jsF
const app = express();

// Crear un pool de conexiones a la base de datos de MySQL
const pool = mysql.createPool(config.mysqlConfig);
// Crear una instancia de DAOTasks
const daoT = new DAOTasks(pool);

//creacion de middleware static
app.use(express.static(ficherosEstaticos));

//body parser
app.use(bodyParser.urlencoded({ extended: false }))

//creacion del sistema
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//variable con las tareas
var taskList;
//variable con el usuario
var user = "usuario@ucm.es";

app.get("/tasks", function (request, response) {
    daoT.getAllTasks(user, function (err, result) {
        if (err) {
            console.log("Falla la solicitud de conexion al pool");
        } else if (typeof(result) != "undefinded" && result.length > 0) {
            taskList = result;
            response.render("tasks", { listaTareas: taskList });
        }else {
            console.log("Error de acceso en la base de datos");
            taskList = new Array();
            response.render("tasks", { listaTareas: taskList });
        }
    });


});

app.post("/addTask", function (request, response) {
    var task = utils.f_createTask(request.body.nombre);
    daoT.insertTask(user, task, function (err) {
        if (err)
            console.log(err);
        else {
            console.log("Tarea insertada correctamente");
            response.redirect("/tasks");
        }
    });

});

app.get("/finish/:taskId", function (request, response) {
    daoT.markTaskDone(request.params.taskId, function (err) {
        if (err)
            console.log(err);
        else {
            console.log("Tarea eliminada correctamente");
            response.redirect("/tasks");
        }
    });

})

app.get("/deleteCompleted", function (request, response) {
    daoT.deleteCompleted(user, function (err) {
        if (err)
            console.log(err);
        else {
            console.log("Tarea terminadas eliminadas correctamente");
            response.redirect("/tasks");
        }
    });
});
// Arrancar el servidor
app.listen(config.port, function (err) {
    if (err) {
        console.log("ERROR al iniciar el servidor");
    }
    else {
        console.log(`Servidor arrancado en el puerto ${config.port}`);
    }
});
