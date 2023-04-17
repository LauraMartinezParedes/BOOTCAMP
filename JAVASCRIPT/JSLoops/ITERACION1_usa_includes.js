//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .includes de javascript.


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 
'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
products.forEach((product)=>{ // recoremos el array
// console.log(product);
 let x = product.split(" ")   // creamos una variable donde añadir el string que buscamos
   console.log(x);
if(x.includes("Camiseta")){ // si el string lo incluye
    let y = x.join(" ") // juntamos todo el string, no solo camiseta
    console.log(y);

}
console.log(product);
})



