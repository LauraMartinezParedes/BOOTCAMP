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
    let noRepeat = [];
    let finalCount= [];
    for (let word of array){
      if (!noRepeat.includes(word)){
        noRepeat.push(word);

      }
    }
    console.log(noRepeat);

    array.forEach((word)=> {
      let acc = 0; 
      for(let i = 0; i < array.length; i++){
        if (word == array[i]) acc++
        
      }
      console.log(word, acc);
    })
    
  }

repeatCounter(counterWords);
//muestra la palabra y las repeticiones (sin acabar)


