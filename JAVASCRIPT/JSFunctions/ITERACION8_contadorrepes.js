//Crea una función que nos devuelva el número de veces que se repite cada una de las 
//palabras que lo conforma.  
//Puedes usar este array para probar tu función:
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  const repeatCounter = (array) => {
    // array con elementos no repetidos
    let noRepeat = [];  // variable nueva donde guardar no repetidos
    let finalCount= []; // variable final
    for (let word of array){ // creamos el for of
      if (!noRepeat.includes(word)){ // si no está incluida
        noRepeat.push(word);        // la metemos

      }
    }
    console.log(noRepeat);

//////FOR y IF//////////
    array.forEach((word)=> { // recorremos el array
      let acc = 0;          // creamos acc donde se añadirá
      for(let i = 0; i < array.length; i++){ //hacemos el for
        if (word == array[i]) acc++      //le decimos que si la palabra está en el array
                                   //nos diga el indice de la misma y la sume a nuestro acc
      }
      console.log(word, acc);
    })
    
  }

repeatCounter(counterWords);
//muestra la palabra y las repeticiones (sin acabar)


