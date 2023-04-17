//Crea una función que reciba por parámetro un array y el valor que desea comprobar 
//que existe dentro de dicho array - comprueba si existe el elemento, 
//en caso que existan nos devuelve un true y la posición de dicho elemento y por la 
// contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
    'Peter',
     'Steve',
    'Tony',
     'Natasha',
    'Clint',
    'Logan',
     'Xabier',
    'Bruce',
     'Peggy',
    'Jessica',
     'Marc'
   ];
  
   function finderName(array, word) { // creamos una función con dos parámetros array y word
     array.forEach((name, index)=>{ // recorremos el array
      word == name && console.log(true, index) // si el segundo param es igual a name,
                                              // nos da true y la ubicación en la lista
     })
   } 
finderName(nameFinder, "Peggy");

//Me falta que me devuelva el false si no está, pero solo una vez. 


