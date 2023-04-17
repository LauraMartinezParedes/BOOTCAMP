// Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
} 
for (let clave in alien){
//hacemos un for ir, clave como name,race,planet,weight en la const de alien
    console.log("Alien tiene la clave " + clave + " con valor; " + alien[clave]);
    //le ponemos lo que haya delante de la clave con el valor encontrado en la const

}

