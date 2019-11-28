const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const ficherosEstaticos = path.join(__dirname,"public");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(ficherosEstaticos));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

app.get("/cookie", function (request, response) {
    response.status(200);
    response.cookie("numero", [], { maxAge: 86400000 });
    response.type("text/plain");
    response.end("Has reiniciado el contador");
});

app.post("/suma", function (request, response) {
    console.log(request.body.numero1);
    response.cookie("numeros", request.body.numero1);
    response.redirect("/2.html")
});

app.post("/suma2", function (request, response) {
    response.cookie("n2", request.body.numero2);
    console.log(request.body.numero2);
    var s = parseInt(request.cookies.numeros)+parseInt(request.body.numero2);
    response.render("3",{n1:request.cookies.numeros,n2:request.body.numero2, suma :s })
});


app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: "
            + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});