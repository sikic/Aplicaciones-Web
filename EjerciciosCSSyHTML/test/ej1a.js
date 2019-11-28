"use strict"

const fs = require("fs");

fs.readFile("FichTexto.txt", { encoding: "utf-8" }, ficheroLeido);

// Función callback
function ficheroLeido(err, contenido) {
    if (err) {
        console.log("Se ha producido un error:");
        console.log(err.message);
    } else {
        var aux = contenido.replace(/\s+/g," ");
        fs.writeFile("FichTexto2.txt", aux,{ encoding: "utf-8" }, ficheroAEscribir);
        console.log(aux);
    }
}
function ficheroAEscribir(err){
    if (err) {
        console.log("Se ha producido un error:");
        console.log(err.message);
    } else {
        console.log
    }
}


function freplace(fichero, buscar, sustituir, callback){
    fs.readFile(fichero,{encoding:"utf8"},function(err, contenido) {
        if (err) {
            console.log("Error al intentar leer el fichero");
        } else {
            var aux = contenido.replace(buscar,sustituir);
            fs.writeFile("FichTexto2.txt", aux,{ encoding: "utf-8" }, function(err){
                if (err){
                    callback(error) //o callback(new Error)
                } else {
                    console.log("Fichero escrito correctamente");
                }
            }
            );
        }
    });

}
// freplace("FichTexto.txt",/\s+/g,"1111111111111111111",fs);
freplace("FichTexto.txt",/[0-9]+/g, "pamplona","callback"); 