// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const totalUsers = users.map(users => users.name);
//console.log(totalUsers);
consola: [ 'Abel', 'Julia', 'Pedro', 'Amanda' ]

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const user = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombres = user.map((user)=>{
    if(user.name.includes("A")){
       user.name = "Anacleto"
    }
    return user
})
console.log(nombres)
// consola: Anacleto, Anacleto


// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.
const cities = [
 	{isVisited:true, name: 'Tokyo'}, 
 	{isVisited:false, name: 'Madagascar'},
 	{isVisited:true, name: 'Amsterdam'}, 
 	{isVisited:false, name: 'Seul'}
 ];

 const visited = cities.map((cities)=>{
     if(cities.isVisited == true){
        console.log(cities.name + " Visitado")
     }
 })
console.log(visited);
//consola: Tokyo Visitado, Amsterdam Visitado

/////PRUEBA
//const visited = cities.map(cities => cities.name)
//console.log(visited);
// consola: [ 'Tokyo', 'Madagascar', 'Amsterdam', 'Seul' ]