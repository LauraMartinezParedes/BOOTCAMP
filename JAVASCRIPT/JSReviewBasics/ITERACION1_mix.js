/* Dado el siguiente javascript usa forof para recorrer el array de películas,
 genera un nuevo array con las categorías de las películas e imprime por consola el 
 array de categorías. Ten en cuenta que las categorías no deberían repetirse.
 Para filtrar las categorías puedes ayudarte de la función .includes()*/

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categorias = []; // hacemos una nueva variable de array

for(let movie of movies){ // hacemos el for of de movie y sale por consola
    console.log(movie);
  for(let array of movie.categories){ //ahora le decimos que de este for of
    if(!categorias.includes(array) ) { // si la categoria NO esta incluida en el array

        categorias.push(array);} // añadela en la nueva const 
        
}}

 console.log(categorias)
// consola: [ 'comedia', 'aventura', 'acción', 'thriller', 'animación' ]
