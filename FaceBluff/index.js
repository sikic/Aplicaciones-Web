const express = require("express");
const path = require("path");
const DAOTasks = require("./daoUs");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

const ficherosEstaticos = path.join(__dirname, "public");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(ficherosEstaticos));
//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/procesar_get", function (request, response) {
    console.log(request.query);
});

app.post("/login_post",function(request,response){
    let usuario = {
        email:request.body.email,
        password:request.body.contraseña
    }

    console.log(request.body);
});
app.get("/404.css", function (request, response, next) {
    response.sendFile(path.join
    )
});
//el error 404 se invoa el solo cuando no existe la ruta y se diferencia del 500 por que no recibe un parametro de error
//si no que se auto lanza cuando no encuentra ningun encaminador
//el 404 se pone siempre antes que el 500
var choice=[];
choice.push("Die");
choice.push("Go back")
function error404(request, response, next) {
    // Código 400: Internal server error
    response.status(404);
    response.render("error404", {
        mensaje: choice[0],
        mensaje1:choice[1]  
    }
    )
};

function error500(error, request, response, next) {
    // Código 500: Internal server error
    response.status(500);
    response.render("error500", {
        mensaje: error.message,
        pila: error.stack
    }
    )
};

app.use(error404);
app.use(error500);

app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});