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
  const removeDuplicates = (list) => {
    let comida = [];
    list.forEach((food) => {
      if(!comida.includes(food)  ){
        comida.push(food);}
      });
        return comida
      
  }

  console.log(removeDuplicates(duplicates));

  //forEach y con if
