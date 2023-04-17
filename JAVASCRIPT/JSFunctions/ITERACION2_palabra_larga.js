//**Iteración #2: Buscar la palabra más larga**
//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

 const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
 const findLongestWord = (element) => {
   let avenger = "";
   element.forEach(heroe => {
/ ///////////TERNARIO///////////
 avenger = heroe.length > avenger.length ? heroe : avenger ;

 });

 return avenger 

 }

console.log(findLongestWord(avengers));

// variable para guardar la palabra let avenger, dentro de la funcion
// recorrer array con el forEach
// comparar la palabra recorrida con la guardada en nuestra nueva variable(más larga) 
// if else o ternario
// si la palabra recorrida es la más larga se sustituye con la que haya en la caja(variable)
// esto lo hacemos asignando con =

//lo probamos con if/else//


