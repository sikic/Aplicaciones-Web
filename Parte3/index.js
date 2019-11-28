const DAOUsers = require("./DAOUser");
const DAOTasks = require("./DAOTask");
const mysql = require("mysql");
const config = require("./config");
const pool = mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database
});

const daoUsers = new DAOUsers(pool);
const daoTask = new DAOTasks(pool);


function cb_isUserCorrect(err, result){
    if (err) {
        console.log(err.message);
    } else if (result) {
        console.log("Usuario y contraseña correctos");
    } else {
        console.log("Usuario y/o contraseña incorrectos");
    }
} 


function cb_image(err, result){
    if (err) {
        console.log("Falla la solicitud de conexion al pool");
    } else if (result) {
        console.log("El usuario no existe");
    } else {
        console.log("Error de acceso en la base de datos");
    }
} 
function cb_allTask(err, result){
    if (err) {
        console.log("Falla la solicitud de conexion al pool");
        return null;
    } else if (result.length > 0) {
        console.log("todo ok");
        console.log(result);
        return result;
    } else {
        console.log("Error de acceso en la base de datos");
        return null;
    }
} 

function cb_tags(err){
    console.log(err);
} 
var t = {
    text:"marcar 5 goles",
    done:1,
    tag:["futbol","goles","victoria"]
} 

// daoTask.insertTask("luis",t,cb_tags);
// daoTask.markTaskDone(8,cb_tags);
//daoTask.deleteCompleted("luis",cb_tags);