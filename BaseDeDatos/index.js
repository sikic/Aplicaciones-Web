const dao = require("./dao");

const daoMensajeria = new dao("localhost", "root", "", "mensajeria");

// Creación de usuarios
let usuario1 = { 
    id:2,
    nombre: "luis",
    correo: "lurofdfs@ucm.es",
    telefono: 3652325
};

let usuario2 = {
    nombre: "fran",
    correo: "lfradafs@ucm.es",
    telefono: 365234525
};
// Definición de las funciones callback
// LLamadas a los métodos de DAO para insertar usuarios, enviar mensajes, etc
function cb_insertarUsuario(err){
    if (err) {
        console.log("ERROR EN LA INSERCIÓN DE USUARIO");
    }
    else {
        console.log("USUARIO INSERTADO CORRECTAMENTE");
    }
    daoMensajeria.terminarConexion(cb_insertarUsuario);
};

function cb_enviamensaje(err){
    if (err) {
        console.log("ERROR EN LA INSERCION DEL MENSAJE");
    }
    else {
        console.log("MENSAJE INSERTADO CORRECTAMENTE");
    }
    daoMensajeria.terminarConexion(cb_cerrar);
};

function cb_bandejaEntrada(err, mensajes){
    if (err) {
        console.log("ERROR AL LEER LA BANDEJA DE ENTRADA");
    }
    else {
        // mostrar por consola el contenido del array mensajes
        for (let index = 0; index < mensajes.length; index++) {
            console.log(mensajes[index]);
            
        }
    }
    daoMensajeria.terminarConexion(cb_cerrar);
};

function cb_buscarUsuarios(err, usuarios){
    if (err) {
        console.log("ERROR AL BUSCAR A LOS USUARIOS");
    }
    else {
        // mostrar por consola el contenido del array mensajes
        for (let index = 0; index < usuarios.length; index++) {
            console.log(usuarios[index].id);
            
        }
    }
    daoMensajeria.terminarConexion(cb_cerrar);
};

function cb_cerrar(err){
    if(err)
        console.log("LA CONEXION NO SE HA PODIDO CERRAR");
    else
        console.log("LA CONEXION SE HA CERRADO CORRECTAMENTE");
    
}
daoMensajeria.buscarUsuario("u",cb_buscarUsuarios);
daoMensajeria.bandejaEntrada(usuario1,cb_bandejaEntrada);