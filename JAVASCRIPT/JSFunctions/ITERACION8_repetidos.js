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
  array.forEach((word)=> { // recorremos el array
    let acc = 0;          // creamos acc donde se añadirá
    for(let i = 0; i < array.length; i++){ //hacemos el for
      if (word == array[i]) acc++      //le decimos que si la palabra está en el array
                                 //nos diga las veces que se repite y la sume a nuestro acc
    }
    console.log(word, acc);
  })
  
}
repeatCounter(counterWords); // llamamos a la función

//consola: code 4
// repeat 1
// eat 1
// sleep 2
// code 4
// enjoy 2
// sleep 2
// code 4
// enjoy 2
// upgrade 1
// code 4