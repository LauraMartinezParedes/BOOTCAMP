/*Dado el siguiente javascript usa forof y forin para hacer la media 
del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let acc = 0;
let longitud = 0;
let promedioVolume = (acc, users.volume)

    
for(let user of users){
//console.log(users)
// user.favorite sound
for(sonidos in user.favoritesSounds){
   // console.log(sonidos);
   acc+=user.favoritesSounds[sonidos].volume
   longitud++
    console.log(user.favoritesSounds[sonidos].volume)
    

}
}
console.log(longitud)
console.log(acc)
console.log(acc/longitud)