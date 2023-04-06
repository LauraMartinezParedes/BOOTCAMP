// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(mixedElements.length)

function averageWord(array) {
    let acc = 0
    array.forEach(elemento=>{
        if(typeof elemento === "number"){
          acc+=elemento
        }
        else{acc+=elemento.length
          
        }        
    })
    return acc;
}

console.log(averageWord(mixedElements))