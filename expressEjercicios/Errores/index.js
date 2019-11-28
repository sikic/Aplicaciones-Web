// app.js
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/usuarios", function (request, response, next) {
    fs.readFile("noexiste.txt", function (err, contenido) {
        if (err) {
            next(err);
        } else {
            request.contenido = contenido;
        }
    });
});

app.get("/404.css", function (request, response, next) {
    response.sendFile(path.join
    )
});
//el error 404 se invoa el solo cuando no existe la ruta y se diferencia del 500 por que no recibe un parametro de error
//si no que se auto lanza cuando no encuentra ningun encaminador
//el 404 se pone siempre antes que el 500
function error404(request, response, next) {
    // Código 400: Internal server error
    response.status(404);
    response.render("error404", {
        mensaje: "NO SE ENCONTRO LO QUE BUSCABAS BRO, DEJALO TODO Y VENTE AL TFT",
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
