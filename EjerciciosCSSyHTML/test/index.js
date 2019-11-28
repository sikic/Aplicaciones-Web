// "use strict";
// const fs = require("fs");
// try {
//     const contenido = fs.readFileSync("FichTexto.txt",
//         { encoding: "utf-8" });
//     console.log("Fichero leído correctamente:");
//     console.log(contenido);
// } catch (err) {
//     console.log("Se ha producido un error:");
//     console.log(err.message);
// }
// 
const path = require("path");
const infoFichero = path.parse(__filename);
console.log(infoFichero);
// → { root: 'H:\\'

// dir: 'H:\\UCM\\FDI\\AW\\2018-2019\\node.js\\ejercicios\\pruebas'

// base: 'ej1.js'

// ext: '.js'

// name: 'ej1' }
// const nuevoFichero = path.join(infoFichero.dir, "nuevo",
//     infoFichero.base);
// console.log(nuevoFichero);

// let fs = require('fs');
// for (let i = 1; i < 10; i++) {
//     let fichero = "f" + i + ".txt";
//     console.log("Solicitada la escritura del fichero " + fichero);
//     fs.writeFile(fichero, fichero, function (err) {
//         if (!err) {
//             console.log("Terminada la escritura del fichero" + fichero);
//         }
//     })
// }

"use strict";
const fs = require("fs");
const texto = "Actualmente el registro de nmp tiene 800.000 franes."
fs.writeFile("npm.txt", texto, { encoding: "utf-8" },
    function (err) {
        if (err) {
            console.log("Error al escribir el fichero.");
        } else {
            console.log("Fichero escrito correctamente.");
            fs.readFile("npm.txt", { encoding: "utf-8" },
                function (err, contenido) {
                    if (!err) {
                        console.log(contenido);
                    }
                });
        }
    });
