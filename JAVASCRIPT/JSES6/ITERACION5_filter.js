// //5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// // con los valores que sean mayor que 18
// const age = [22, 14, 24, 55, 65, 21, 12, 13, 90];
// const someAge = age.filter((age) => age>18);
// //console.log(someAge);
// //consola: [ 22, 24, 55, 65, 21, 90 ]

// //5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// // con los valores que sean par.
// // const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
// // const edadPar = ages.filter((ages) =>{
// //     if(ages){
// //         console.log(ages.push(edadPar))
// //     };console.log(edadPar);
// // }) 


// // 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// //con los streamers que tengan el gameMorePlayed = 'League of Legends'.
// const streamer = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// const youtuber = streamer.filter((streamer)=>streamer.gameMorePlayed.includes("League of Legends"));
// console.log(youtuber);
//consola:   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },{ name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// //usar la funcion .includes() para la comprobación.
const streamers = [
  	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
  ];

// const streamerU = streamers.filter((streamers)=>streamers.name.includes("u"));
// console.log(streamerU);
// consola:   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' }, { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//.age sea mayor que 35.

const onlyStream = streamers.filter((streamers)=>streamers.gameMorePlayed.includes("Legends"))

const streamMayus = onlyStream.filter((streamers)=> streamers.age>35)
console.log(streamMayus);
console.log(onlyStream);

const onlyMayus = streamers.filter((streamers)=>{
    if(streamers.gameMorePlayed.includes("Legends")) {
        if(streamers.age > 35)
    streamers.gameMorePlayed = streamers.gameMorePlayed.toUpperCase()
    }
    return streamers; 
}
)
console.log(onlyMayus);

//console.log(masStreamer);
//consola:  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },{ name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }
