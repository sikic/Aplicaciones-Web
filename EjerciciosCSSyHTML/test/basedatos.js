const mysql = require("mysql");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "agendacontactos"
});

pool.getConnection(function (err, connection) {
    if (err)
        console.log(`Error al obtener el mensaje + ${err.message}`);
    else {
        console.log(pool);
        connection.query("SELECT Nombre, Apellidos FROM Contactos",
            function (err, filas) {
                connection.release();//libera la conexion
                if (err)
                    console.log('Error en la consulta a la base de datos');
                else {// Acceso a las filas resultado de la consulta
                    filas.forEach(function (fila) {
                        console.log(`${fila.Nombre} ${fila.Apellidos}`);
                    });
                }
            });

    }

});

pool.getConnection(function (err, connection) {
    if (err) {
        console.log(`Error al obtener la conexión: ${err.message}`);
    }
    else {
        const sql = "INSERT INTO Contactos(Nombre, Apellidos) " + "VALUES ('Diana','Díaz')";
        connection.query(sql, function (err, resultado) {
            connection.release();
            if (err) {
                console.log("Error de inserción: " + err);
            } else {
                // Imprime el identificador de la nueva fila
                console.log(resultado.insertId);
                // Imprime el número de filas insertadas
                console.log(resultado.affectedRows);
            }
        });
    }
});

// Suponemos que la variable `id` contiene el identificador
// introducido por el usuario
// pool.getConnection(function (err, connection) {
//     if (err) {
//         console.log(`Error al obtener la conexión: ${err.message}`);
//     }
//     else {
//         const sql = `SELECT Nombre, Apellidos FROM Contactos WHERE Id=${}`;
//             connection.query(sql, function (err, filas) {
//                 connection.release();
//                 if (err) {
//                     console.log("Error en la consulta");
//                 } else {
//                     console.log(filas);
//                 }
//             });
//     }
// });


pool.getConnection(function (err,connection){
    if(err)
        console.log(`Error al obtener la conexión: ${err.message}`);
    else{
        const sql = `SELECT Id, Titulo,Fecha,PalabraClave FROM articulos LEFT
        JOIN palabrasclave ON articulos.Id = palabrasclave.IdArticulo `;
        connection.query(sql, function (err, filas) {
            connection.release();
            if (err) {
                console.log("Error en la consulta");
            } else {
                var array= new Array();
                var obj={
                    id:"",
                    titulo:"",
                    fecha:"",
                    palabrasclave:""
                };
                filas.forEach(element => {
                    obj.id=fila.id;
                    Obj.titulo=fila.titulo;
                    obj.fecha=fila.fecha;
                    obj.palabrasclave=fila.palabrasclave;
                    array.push(obj);
                });
                console.log(array);
            }
        });
    }
});