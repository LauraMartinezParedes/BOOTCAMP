// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

//vamos hacer lo mismo que anteriormente pero con un ternario
function averageWord (array) {  //creamos nuestra funcio de array
    let acc = 0;                // creamos una variable/acc donde añadir/sumar
    array.forEach(element =>{       //recorremos nuestro array
        typeof element == "number" ? acc+= element : acc+=element.length
 // le decimos que si el tipo de elemento es numero, lo sume al acc
 // de lo contrario que cuente letras (length) y las sume       
    })
    return acc; //llamamos a nuestra variable

}
console.log(averageWord(mixedElements));
// por consola nos sale 41
