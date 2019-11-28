function getToDoTasks(tasks) {
    return tasks.map(n => { if (n.done != true) return n.text }).filter(n => n != undefined);
}
function findByTag(tasks, tag) {
    return tasks.map(n => { if (n.tags.some(x => x == tag)) return n }).filter(n => n != undefined);
}

function findByTags(tasks, tag) {
    return tasks.map(n => {
        if (n.tags.some(r => {
            if (tag.some(y => y == r))
                return true
        }
        )
        )
            return n
    }).filter(n => n != undefined);
}

function countDone(task) {
    return task.reduce((ac, n) => {
        if (n.done == true) ac++;
        return ac;
    }
        , 0
    )
}

function createTask(texto) {
    //expresion regular que te coge toda palabra que este detras de un @
    var regexp = /@\w+/g;
    // la funcion macth lo que hace es separar el texto que cumpla la expresion regular dada
    var etiquetas = [];
        if(texto != ""){
        var aux = texto.match(regexp);
        aux.forEach(e => {
            etiquetas.push(e.replace(/@/g, ""));
        });
        // la funcion replace cambia las palabras que cumplan la expresion regular por lo que tu quieras
        //asi que en este caso eliminamos las etiquetas de la frase y los espacios 
        //donde haya 1 o mas los cambiamos por un solo espacio
        var frase = texto.replace(regexp, "").replace(/\s+/g, " ");
        // var frase_ok=frase.replace(/\s+/g," ");
        var obj = {
            text: "",
            tag: "",
            done: 0
        };
        obj.text = frase;
        obj.tag = etiquetas;
        console.log(obj);
        return obj;
    }
    else return null;
}

module.exports = {
    f_getToDoTasks: getToDoTasks,
    f_findByTag: findByTag,
    f_findByTags: findByTags,
    f_countDone: countDone,
    f_createTask: createTask
}