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