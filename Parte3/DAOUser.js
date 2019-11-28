"use strict";
const mysql = require("mysql");


class DAOUsers{
    constructor(pool){
        this.pool=pool;
    }

    isUserCorrect(email,password,callback){
        this.pool.getConnection(function(err,connection){
            if(err)
                callback(err,null);
            else{
                var sql = "SELECT * FROM user WHERE email = ? AND password = ?";
                var params = [email,password];
                connection.query(sql,params,function(err,resultado){
                    connection.release();
                    if(err)
                        callback(err,false);
                    else if(resultado.length > 0)
                        callback(null,true);
                    else
                        callback(null,false);
                })

                
            }
        });
    }

    getUserImageName(email,callback){
        this.pool.getConnection(function(err,connection){
            if(err)
                callback(err,null);
            else{
                var sql = "SELECT img FROM user WHERE email = ?";
                var params = [email];
                connection.query(sql,params,function(err,resultado){
                    connection.release();
                    if(err)
                        callback(err,false);
                    else if(resultado.length == 0)
                        callback(null,true);
                    else
                        callback(null,false);
                })

                
            }
        });
    }
}

module.exports = DAOUsers;