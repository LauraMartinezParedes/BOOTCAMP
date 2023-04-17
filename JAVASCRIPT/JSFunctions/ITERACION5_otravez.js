// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(mixedElements.length);

function averageWord (array) { ///creamos una funcion
    let acc = 0;                ///creamos una caja/variable acc para acumular
    array.forEach(element =>{   ///recorremos el array
        if(typeof element == "number"){     ///le decimos que si el elemento es un numero,
            acc+= element                   ///lo sume a nuestro acc
        }
        else(acc+=element.length)           ///en cambio si es un string, que cuente las
                                            ///letras y las sume
    })
    return acc;                             ///retornamos el acc
}
console.log(averageWord(mixedElements));        

//consola: 9 del primer console.log y 41 con el segundo console.log