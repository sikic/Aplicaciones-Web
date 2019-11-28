class daoUsuario{
    constructor(){
        this.pool = pool;
    }

    checkUser(email,password,callback){
        this.pool.getConnection(function(err,connection){
            if(err)
                callback(new err("No se ha podido establecer la conexión con la base de datos."),null)
            else{
                var sql = "SELECT u.nombre,u.fechaNacimiento,u.sexo,u.fotoPerfil,u.puntos  FROM usuarios u WHERE u.email = ? AND u.contraseña = ?";
                var params = [email,password];
                connection.query(sql,params,function(err,result){
                    connection.release();
                    if(err)
                        callback(new err("No ha sido posible encontrar al usuario."),null);
                    else
                        callback(null,result);
                });
            }
        });

        
    }
};

module.exports=daoUsuario;