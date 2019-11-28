const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const ficherosEstaticos = path.join(__dirname, "public");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(ficherosEstaticos));

var opciones = [
    {
        texto: "Rojo",
        numeroVotos: 0
    },
    {
        texto: "Azul",
        numeroVotos: 0
    },
    {
        texto: "Verde",
        numeroVotos: 0
    },
    {
        texto: "Ninguno de los anteriores",
        numeroVotos: 0
    }
];

app.get("/procesar_get", function (request, response) {
    switch (request.query.color) {
        case "rojo": opciones[0].numeroVotos++; break;
        case "azul": opciones[1].numeroVotos++; break;
        case "verde": opciones[2].numeroVotos++; break;
        case "ninguno": opciones[3].numeroVotos++; break;
    }
    response.render("infoForm", {
        nombre: opciones[0].numeroVotos,
        edad: opciones[1].numeroVotos,
        sexo: opciones[2].numeroVotos,
        fumador: opciones[3].numeroVotos
    });
});

app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});