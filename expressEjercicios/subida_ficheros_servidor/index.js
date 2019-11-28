const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
//indica donde se guardan los ficheros
const multerFactory = multer({ dest: path.join(__dirname, "uploads")});

const ficherosEstaticos = path.join(__dirname, "public");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(ficherosEstaticos));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.post("/procesar_formulario",multerFactory.single("foto"), function (request, response) {
    let nombreFichero = null;
    if (request.file) {
    nombreFichero = request.file.filename;
    }
    response.render("datosFormulario", {
    nombre: request.body.nombre,
    apellidos: request.body.apellidos,
    fumador: request.body.fumador === "si" ? "Sí" : "No",
    imagen: nombreFichero
    });
    
});

app.get("/imagen/:id", function(request, response) {
    let pathImg = path.join(__dirname, "uploads", request.params.id);
    response.sendFile(pathImg);
    });

app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});