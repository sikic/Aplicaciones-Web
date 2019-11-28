"use strict";
const express = require("express");
const path = require("path");
const app = express();

//imprime por pantalla los valores que le hemos pasado y pasa la ejecucion al sigueinte middelware
//el orden si que importa

//logger
app.use(function (request, response, next) {
    console.log(`Recibida petición ${request.method} ` +
        `en ${request.url} de ${request.ip}`);
    next();
});

//comprobamos si nuestra ip esta censurada o no y en caso de no estarlo llamamos al siguiente middleware
let ipsCensuradas = ["147.96.81.244", "145.2.34.23"];
app.use(function (request, response, next) {
    // Comprobar si la IP de la petición está dentro de la
    // lista de IPs censuradas.
    if (ipsCensuradas.indexOf(request.ip) >= 0) {
        // Si está censurada, se devuelve el código 401 (Unauthorized
        response.status(401);
        response.end("No autorizado"); // TERMINA LA RESPUESTA
    } else {
        // En caso contrario, se pasa el control al siguiente middlew
        console.log("IP autorizada");
        next();
    }
});
//comprueba por que empieza nuestra ip y manda la ejecucion al siguiente middleware
app.use(function (request, response, next) {
    request.esUCM = request.ip.startsWith("196.48");
    next();
});
//comprueba si estamos conectados o no a la ucm
app.get("/index.html", function (request, response) {
    response.status(200);
    response.type("text/plain; encoding=utf-8");
    response.write("¡Hola!");
    if (request.esUCM) {
        response.write("Estás conectado desde la UCM");
    }
    response.end();
});

app.set("view engine","ejs");
app.use(function(request, response, next) {
    response.status(404);
    response.render("error404", { url: request.url});
});
    


// app.get("/", function (request, response) {
//     response.sendFile(path.join(__dirname, "public", "Bienvenido.html"));
// });

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// var usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];
// var nombre = "Luis Antonio rojas  ramirez";

// app.get("/users.html", function (request, response) {
//     response.status(200);
//     response.render("users", { users: usuarios }); 
//     // response.render("users", { name : nombre });
//     // Busca la plantilla "views/users.ejs"
//     // La variable 'users' que hay dentro de esta plantilla tomará
//     // el valor del array 'usuarios'.
// });
// app.get("/usuarios.html", function (request, response) {
//     response.redirect("/users.html");
// });

app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});