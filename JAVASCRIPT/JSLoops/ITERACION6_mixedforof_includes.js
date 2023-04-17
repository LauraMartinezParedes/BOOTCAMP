//Usa un bucle for...of para recorrer todos los juguetes y elimina los que 
//incluyan la palabra gato. Recuerda que puedes usar la función .includes() 
//para comprobarlo.Puedes usar este array:

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

 
let array = []; // creamos un array vacio donde añadir lo que queremos
    for(let toy of toys){  // hacemos el for of que es decir; analizamos TOY en la const TOYS
        
        if(!toy.name.includes("gato")){ 
        // si toy tiene en el nombre gato
            array.push(toy); // añadelo a nuestro nuevo array
        }
       
    }
    
console.log(array); 
// consola: { id: 5, name: 'Buzz MyYear' },
//   { id: 11, name: 'Action Woman' },
//   { id: 23, name: 'Barbie Man' }