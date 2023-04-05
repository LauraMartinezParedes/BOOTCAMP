//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

    
    function average(array){
        let acc = 0 
        array.forEach(numero=>{
            acc+=numero
        } )
       let resultado = acc/array.length

     return resultado;
    }
    
    console.log(average(numbers))
