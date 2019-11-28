"use strict";
const express = require("express");
const path = require("path");
const app = express();
const ficherosEstaticos = path.join(__dirname, "public")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/usuarios.html", function (request, response) {
    response.status(200);
    response.type("text/html; charset=UTF-8");
    response.render("usuarios", { nombre: x });
});

var user1 = {
    n: "Luis",
    numero: 1678
}
var user2 = {
    n: "Fran",
    numero: 1678
}

var x = [];
x.push(user1);
x.push(user2);

app.get("/users.html", function (request, response) {
    response.redirect("/usuarios.html");
});

app.get("/socios.html", function (request, response) {
    response.redirect("/usuarios.html");
});
app.get("/public/css/usuarios.css", function (request, response) {
    response.sendFile(path.join(__dirname, "public", "css", "usuarios.css"));
});

app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});