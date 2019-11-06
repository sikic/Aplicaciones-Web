function sequence(a, x) {

    let error = false;
    for (let index = 0; index < a.length && !error; index++) {
        let aux = a[index](x);
        if (typeof (aux) === "undefined")
            error = true;

        console.log(aux);
    }

}

let luis = [f1, f2, f4, f3];

function f1(x) {
    return x + 1;
}

function f2(x) {
    return x * 2;
}

function f3(x) {
    return x - 1;
}
function f4(x) {
    return undefined;
}

//ejercicio de clase para ver tamaño de un array de strings
function maplengths(a) {
    let x = [];
    for (let index = 0; index < a.length; index++) {
        x[index] = a[index].length;
    }
    return x;
}

//forma pro con funciones de transformacion
function maplengths2(a) {
    return a.map(n => n.length);
}

let ar = ["hola", "ey", "fran", "cacaca"];
console.log(maplengths2(ar));

//funcion que separa el array por la mitad u lo devuelve    
function filterInf(a) {
    let x = a.slice(0, a.length / 2);
    return x;
}

//forma pro con funciones de filtrado
function filterInf2(a) {
    //siempre hay que usaar los 3 por que te reconoce lo que es cada uno segun la posicion donde lo situes
    //pero los nombre si que los puedes cmabiar
    return a.filter((n, i, a) => i < a.length / 2);
}
console.log(filterInf2(ar));



//Te dice si todo es una funcion o no
function everyFunction(a) {
    let error = true;
    for (let index = 0; index < a.length; index++) {
        let aux = a[index];
        if (aux instanceof Function == false)
            error = false;
    }

    if (a.length == 0)
        return false;

    return error;
}

//misma funcion de forma pro con funcion de reduccion
function everyFunction2(a) {
    return a.every(n => n instanceof Function);
}
//similar que la de arriba pero jugando con los parametros
//v es el elemento del vector
//i es el indice 
//a es el vector en si 
function everyFunction3(a) {
    return a.every((v, i, a) => a[i] instanceof Function);
}
let frann = [f1, f4, f3];
console.log(everyFunction3(frann));

//
function someUndefinded(a) {
    let error = false;
    for (let index = 0; index < a.length && !error; index++) {
        let aux = a[index];
        if (typeof (aux) == "undefined")
            error = true;
    }
    return error;
}

//modo pro con las funciones de reduccion
function someUndefinded2(a) {
    return a.some(n => typeof (n) == "undefined");
}
console.log(someUndefinded2(frann));

//usando map y reduce
function reduceSquare(a) {
    let suma = a.map(n => n * n).reduce((ac, n) => ac + n, 0);
    return suma;
}
//usando solo reduce
function reduceSquare2(a) {
    let suma = a.reduce((ac, n) => ac + n * n, 0);
    return suma;
}
let suma = [1, 2, 3];
console.log(reduceSquare2(suma));

// personas.forEach(p => {
//     console.log("Hola, me llamo " + p.nombre
//         + " y tengo " + p.edad + " años");
// })

/*personas.forEach((v, i, a) => {
    console.log("Hola,me llamo " + v.nombre
        + " y tengo " + v.edad + " años"
        + " y soy el " + i + " de un array de "
        + a.length + " elementos");
})*/

function pluck(o, f) {
    return o.map(n => n[f]).filter(n => typeof (n) != "undefined");
}

function partition(a, p) {
    let ar = [];
    ar.push(a.filter(e => p(e)));
    ar.push(a.filter(e => !p(e)));
    return ar;

    //return [a.filter(e => {return p(e)}), a.filter(e => {return !p(e)})];
}
//con reduce tener cuidado con el ac ya que siempre hay que devolverlo entero
function partition2(a, p) {
    a.reduce((ac, n) => {
        if (p(n))
            ac[0].push(n);
        else
            ac[1].push(n);

        return ac;
    }
        , [[], []]);

    //return [a.filter(e => {return p(e)}), a.filter(e => {return !p(e)})];
}

function groupBy(a, f) {
    
    return a.reduce((ac,n)=>{
        let sol =f(n);
        if(ac[sol] == undefined) ac[sol]=[];
        ac[sol].push(n);
        return ac;
    }
    ,[])
}


let personas = [
    { nombre: "Ricardo", edad: 63 },
    { nombre: "Paco", edad: 55 },
    { nombre: "Enrique", edad: 32 },
    { nombre: "Adrián", edad: 34 },
    { apellido: "García", edad: 28 }
];
console.log(pluck(personas, "nombre"));
console.log(partition2(personas, pers => pers.edad >= 60));
console.log(groupBy(["Mario", "Elvira", "María", "Estela", "Fernando"], str => str[0]));

let listaTareas = [
    { text: "Preparar práctica AW", tags: ["AW", "practica"] },
    { text: "Mirar fechas congreso", done: true, tags: [] },
    { text: "Ir al supermercado", tags: ["personal"] },
    { text: "Mudanza", done: false, tags: ["personal"] },
    ];

    function findBytag(task,tag){
        return task.map(n=>{if(n.tags.some(n=> n == tag)) return n}).filter(n=>typeof(n) != "undefined");
    }
    
    //cogemos la fila entera, con el primer some nos centramos en los tags y con el segundo cogemos cada elementos de los 
    //tags y los comparamos con los tag que  nos entran por parametro
    function findBytags(task,tag){
        return task.map(n=>{
            if(n.tags.some(r=>tag.some( y=> y == r)))
            return n;
        }).filter(n=>typeof(n) != "undefined");
    }
    console.log(findBytags(listaTareas,["AW","personal"]));

    function countDone(task){
        return task.reduce((ac,n)=>{
            if(n.done == true)
                ac++;
            return ac;
        },0);
    }

    console.log(countDone(listaTareas));

    function createTask(texto){
        //expresion regular que te coge toda palabra que este detras de un @
        var regexp = /@\w+/g;
        // la funcion macth lo que hace es separar el texto que cumpla la expresion regular dada
        var etiquetas = texto.match(regexp);
        // la funcion replace cambia las palabras que cumplan la expresion regular por lo que tu quieras
        //asi que en este caso eliminamos las etiquetas de la frase y los espacios 
        //donde haya 1 o mas los cambiamos por un solo espacio
        var frase = texto.replace(regexp,"").replace(/\s+/g," ");
        // var frase_ok=frase.replace(/\s+/g," ");
        var obj={
            text:"",
            tags:""
        };
        obj.text = frase;
        obj.tags = etiquetas;
        return obj;
    }

    console.log(createTask("ir a @deporte  @hola             @fran entrenar   @jugar   hola"));