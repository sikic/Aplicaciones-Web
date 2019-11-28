// app.js
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];
app.get("/users.html", function (request, response) {
    response.status(200);
    response.render("users", { users: usuarios });
});

app.get("/users.html/:i", function (request, response) {
    response.status(200);
    var x = usuarios.slice(usuarios.length - request.params.i,usuarios.length- request.params.i + 1);
    response.render("users", { users: x });
});



app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});