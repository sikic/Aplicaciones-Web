"use strict";
//ej1
function holamundo(){
    console.log("Hola mundo");
}
//Ej2
/*
fallaba por que donde estaban los : deberia estar el = y viceversa ademas falla por ponerle punto y coma en vez de solo coma
var alumno ={
	nombre : "Juan",
	apellidos : "González",
	notas : (8,8,2,4),
	dni : "4098976",
	edad : '18'
};*/

//Ej3

function mayor(a,b,c){
    let mayor;
    if(a > b && a > c)
        mayor = a;
    else if(b > a && b > c)
        mayor = b;
    else if(c > a && c > b) 
        mayor = c;

    return `El mayor de ${a},${b} y ${c} es ${mayor}`
}

/*let x = mayor(4,5,6);   
console.log(x);*/

//Ej4

function par(x){
    if(x%2 == 0){
        console.log(`${x} es un numero par`);
    }else
    console.log(`${x} es un numero impar`);
}

// let x = par(40);

//Ej5
function veces(a){
    var veces = 0;
    for (let index = 0; index < a.length; index++) {
        if(a[index] == 'a')
            veces++;
        
    }

    console.log(`La letra 'a' aparece ${veces} veces en '${a}'.`)
}

// let x = veces("franana");

// Ej6

function  separar(a){
    let espacios = a.split(" ");

    console.log(`Hay ${espacios.length} palabras en la frase.`)
}

// let x = separar("Fran callate la boca");

//Ej7
 function divisionErronea(x,y){
     try {
         var z = x/y;
     } catch (e) {
         console.log("intento de division entre 0");
     }
     console.log("La division se ha ejecutado correctamente.");
 }

// let x = divisionErronea(8,0);


for (let k=1; k<=5; k++) {
    console.log("k = " + k);
}

//Ej8
function undef(x){
     typeof(x) == "undefined" ? console.log("true"): console.log( "false");
}

var w;
let j = undef(w);

//Ej9
function tipo(x) {
    
    typeof(x)=="number" ? console.log("Es un tipo number") : typeof(x)=="boolean" ? console.log("Es un tipo bool"):
    typeof(x)== "string" ? console.log("Es un tipo string") :typeof(x)=="undefined" ? console.log("Es un tipo undefined"):
    typeof(x)=="function" ? console.log("Es un tipo funciones") : typeof(x)=="object" ? console.log("Es un tipo objeto"):console.log("Error");
}

let x = tipo(-1);

//EJ10
function isArray(a){
    a instanceof Array ? console.log("El objeto es un array") : console.log("No es un array");
}

w = [];
isArray(w);
//EJ11
function primiteOrObject(x){
    typeof(x) == "Object" ? console.log("Object") : console.log(`primitive - ${typeof(x)}`); 
}

primiteOrObject(w);

//Ej12

function propiedades(x){
    let tam = Object.keys(x).length;
    console.log(`El numero de propiedades es: ${tam}.`)

   for (let w in Object.keys(x)) {
      console.log(Object.keys(x)[w] +': '+ x[Object.keys(x)[w]]);
   }
}

let k ={
    nombre : "Luis",
    edad : 18
}
propiedades(k);

//EJ13
function createObject(x){
    var s = {};

    for (let j in x){
        s[x[j]]="";
    }
    return s;   

}

let q=["nombre" ,"edad","altura"]
let h=["Fran",18,1.75];
// var z = createObject(q);
// console.log(z);

//EJ14
function createObjectWithValues(x,y){
    var s = {};

    for (let j in x){
        s[x[j]]=y[j];
    }
    return s;

}

var z = createObjectWithValues(q,h);

console.log(z);

function producto(x,y){
    if(typeof(x) == "number" && typeof(y)=="number")
        return x*y;
    else if((typeof(x) == "number" && typeof(y)=="object") || (typeof(x) == "object" && typeof(y)=="number")){
        if(typeof(x)=="object"){
            for (let index = 0; index < x.length; index++)
              x[index] *= y;
            
              return x;
        }else{
           for (let index = 0; index < y.length; index++)
             y[index] *= x;

               
             return y;
           }
        }
        else if((typeof(x) == "object" && typeof(y)=="object") && x.length == y.length){
            let total = 0;
            for (let index = 0; index < x.length; index++) {
               let aux = x[index] * y[index];
                total += aux;
            }
        }else
            throw new Error("ninguna es correcta");
              
}

function incrementar(x) {
    return x + 1;
}
    
function duplicar(x) {
    return 2 * x;
   
}
   
function cuadrado(y) {
    return y * y;
   
}
   
function factorial(n) {
    if (n <= 0) {
     return 1;
    } else {
     return n * factorial(n - 1);
    }
}

function aplicar_funciones(funs, z) {
    for (let i = 0; i < funs.length; i++) {
    console.log(`Aplicar función ${i} pasando ${z}: ${funs[i](z)}`);
    }
}
    
aplicar_funciones([incrementar,duplicar,cuadrado,factorial], 5);


let p = x => { console.log(`Valor recibido: ${x}`); }
p(3);

function imprimirArgumentos(a1,a2,a3) {
    console.log(`a1: ${a1}`);
    console.log(`a2: ${a2}`);
    console.log(`a3: ${a3}`);
    }

    imprimirArgumentos(1, true, "foo");


function multiplicar(a, b = 1) {
return a*b;
}
console.log(multiplicar(5,undefined)); // 5

function imprimeArgumentos(a,b,c) {
    for (let i=0; i<arguments.length; i++) {
    console.log(arguments[i]);
    }
    }
    imprimeArgumentos(1,2,3); // Imprime 1 2 3  

function minimo() {
    let min = arguments[0];
    for (let i=0; i<arguments.length; i++) {
    if (arguments[i]<min) {
    min = arguments[i];
    }
    }
    return min;
    }
    console.log(minimo()); // undefined
    console.log(minimo(1)); // 1
    console.log(minimo(3,4,5)); // 3
    console.log(minimo(9,8,7,6,5,4,3,2,1,0)); // 0

    function sequence(a,x){
        var ok=true;
        if(a instanceof Array){
            for (let w in a && ok) 
                a[w] instanceof Function ? ok = true: ok = false;
                   
            if(ok){
                let y = a[0](x);
                console.log(y);
                for (let index = 1;index < a.length;index++) {
                    y = a[index](y);
                    console.log(y);
                }
                
            }
        }
    }

    function sequence2(a,x){
        var ok=true;
        if(a instanceof Array){
            for (let w in a && ok) 
                a[w] instanceof Function ? ok = true: ok = false;
                   
            if(ok){
                let y = a[0](x);
                console.log(y);
                for (let index = 1;index < a.length && y != "undefined";index++) {
                    y = a[index](y);
                    console.log(y);
                }
                
            }
        }
    }

    function sequence3(a,x,b=false){
        var ok=true;
        if(a instanceof Array){
            for (let w in a && ok) 
                a[w] instanceof Function ? ok = true: ok = false;
                   
            if(ok){
                if(!b){
                    let y = a[0](x);
                    console.log(y);
                    for (let index = 1;index < a.length && y != "undefined";index++) {
                        y = a[index](y);
                        console.log(y);
                    }
                }else{
                    let y = a[a.length-1](x);
                    console.log(y);
                    for (let index = a.length-2;a.length !=0 && y != "undefined";index--) {
                        y = a[index](y);
                        console.log(y);
                    }
                }
            }
        }
    }
let f1 = function(x){
    return x+x;
}

let f2 = function(x){
    return x*x;
}
let f3 =  function(x){
    if(typeof(x) == "number")
      return "undefined" ;
    else 
      return x+1;
}

p(3);


let f = [f2, x => {  if(typeof(x) == "number")
return "undefined" ;
else 
return x+1; },f1];

sequence3(f,5,true);

let a = [23, 12, 69, 11, 34, 45];
a.length += 2; // Ampliamos el array
console.log(a); // → [ 23, 12, 69, 11, 34, 45, , ]
a.length = 3; // Reducimos el array
console.log(a); // → [ 23, 12, 69 ]


function plucks(objetos,campo){
    for (let i = 0; i < objetos.length; i++) {
        
        var indice = objetos.indexOf(campo,[0]);
        console.log(objetos[indice].nombre);
        objetos.splice(indice,1);
    }
}

let personas = [
    {nombre: "Ricardo", edad: 63},
    {nombre: "Paco", edad: 55},
    {nombre: "Enrique", edad: 32},
    {nombre: "Adrián", edad: 34},
    {apellidos: "García", edad: 28},
    ];
    
let prueba = plucks(personas,"nombre");