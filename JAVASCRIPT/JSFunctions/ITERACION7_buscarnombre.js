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
  function finderName(array, word) {
    array.forEach((name, index)=>{
     word == name && console.log(true, index);
      
    })

  } 
    
finderName(nameFinder, "");

//Me falta que me devuelva el false si no está, pero solo una vez. 


  //INCLUIDO Y SE DEVUELVA CON TRUE E INDEX CON POSICION 
  // CUANDO NO LO INCLUYA QUE MANDE FALSE

  //const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


/*function averageWord (array) {
    let acc = 0;
    array.forEach(element =>{
        typeof element == "number" ? acc+= element : acc+=element.length
        
    })
    return acc;

}
console.log(averageWord(mixedElements));*/
