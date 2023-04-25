/*Crea una función llamada `findArrayIndex` que reciba como parametros un 
array de textos y un texto y devuelve la posición del array cuando el valor 
del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos 
y compruebalos.*/


let flores = ["Girasoles", "Petunias", "Claveles", "Narcisos","Girasoles"] // el array
function findArrayIndex(array, texto)  // la funcion
    // recorrer el array buscando si es igual al texto
    let counterIndex =[]
    array.forEach((item,index)=>{
        item === texto && counterIndex.push({
            word: texto,
            posicion: index
        })
    return counterIndex
    })

findArrayIndex(flores, "Girasoles");