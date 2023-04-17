// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//en caso que existan los elimina para retornar un array sin los elementos duplicados. 
//Puedes usar este array para probar tu función:
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  const removeDuplicates = (list) => { //creamos nuestra funcion
    let comida = [];    // hacemos nuestra variable array, DENTRO DE LA FUNCION!!!!
    list.forEach((food) => { //le decimos que recorra list buscando...
      if(!comida.includes(food)  ){ //si lo que encuentra en food NO está en comida, 
        comida.push(food);} ///MÉTELO!!
      });
        return comida  ///llamamos a nuestra variable
      
  }

  console.log(removeDuplicates(duplicates));
// consola:   
// 'sushi',   'pizza',
  // 'burger',  'potatoe',
  // 'pasta',   'ice-cream',
  // 'chicken', 'onion rings',
  // 'soda'
