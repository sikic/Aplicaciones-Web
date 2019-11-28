"use strict";
const http = require("http");
// Establecimiento de la función callback del servidor
const servidor = http.createServer(function (request, response) {
    // ...
});
// Inicio del servidor
servidor.listen(3000, function (err) {
    if (err) {
        console.log(`Error al abrir el puerto 3000: ${err}`);
    } else {
        console.log("Servidor escuchando en el puerto 3000.");
    }
});