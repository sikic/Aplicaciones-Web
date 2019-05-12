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

function sequence(a,x){
    if(undefined in a)
        console.log("Algo esta dando undifined en el array");
        else{
            for (let index = 0; index < a.length; index++) {
                console.log(a[index](x));
            }
        }
}

let luis = [f1,f2,f3];

function f1(x){
    return x+1;
}

function f2(x){
    return x*2;
}

function f3(x){
    return x - 1;
}
function f4(x){}
return b;
