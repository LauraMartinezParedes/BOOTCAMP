// Usa un bucle for para recorrer todos los destinos del array y elimina los 
//elementos que tengan el id 11 y 40. 
//Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
    {id: 5, name: 'Japan'},  
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}]

const iteracion5 = (array) =>{ // creamos el array
    array.forEach((element, index) => { // recorremos el arrar
        if(element.id == 11 || element.id == 40){
        // si el elemento id es igual a 11 o a 40
            array.splice(index,1);
        //lo quitas
        }
    });
    console.log(array);
}

iteracion5(placesToTravel); //llamamos a la funcion
