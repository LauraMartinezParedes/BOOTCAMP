{/* <head>
		<script src="name_file.js" defer></script> */}
// Para enlazar el html al js usamos la etiqueta script dentro del Head.

//----------ACCEDER A ELEMENTOS------------//
    // Obtiene un elemento por id
document.getElementById('someid');

// Obtinee una lista con los elementos que tienen esa clase
document.getElementsByClassName('someclass');

// Obtiene una HTMLCollection con los todos los elementos 'li'
document.getElementsByTagName('li');

// Devuelve el primer elemento del documento que cumpla la selección (la notación es como en CSS)
document.querySelector('.someclass');

// Devuelve una lista de elementos que cumplen con la selección (notación como en CSS)
document.querySelectorAll('div.note, div.alert');

// Obtener los hijos de un elemento
let elem = document.getElementById('someid');
let hijos = elem.childNodes;

// Su nodo padre
let padre = elem.parentNode;

// Para crear elementos llamamos a createElement con el nombre del elemento
let nuevoH1 = document.createElement('h1');
let nuevoParrafo = document.createElement('p');

// Crear nodos de texto para un elemento
let textoH1 = document.createTextNode('Hola mundo!');
let textoParrafo = document.createTextNode('lorem ipsum...');

// Añadir el texto a los elementos
nuevoH1.appendChild(textoH1);
nuevoParrafo.appendChild(textoParrafo);

// también podemos asignar directamente el valor a la propiedad innerHTML
nuevoH1.innerHTML = textoH1
nuevoParrafo.innerHTML = textoParrafo

// los elementos estarían listos para añadirlos al DOM, ahora mismo solo existen en memoria, 
// pero no serán visibles hasta que no los añadamos a un elemento del DOM

//--------------AÑADIR ELEMENTOS--------------//
    // seleccionamos un elemento
let cabecera = document.getElementById('cabecera');

// Añadir elementos hijos a un elemento
cabecera.appendChild(nuevoH1);
cabecera.appendChild(nuevoParrafo);

// También podemos añadir elementos ANTES del elemento seleccionado

// Tomamos el padre
let padre = cabecera.parentNode;

// Insertamos el h1 antes de la cabecera
padre.insertBefore(nuevoH1, cabecera);

//----------------MANIPULAR CLASES----------
// Tomamos un elemento
var cabecera = document.getElementById('cabecera');

// elimina una clase del elemento
cabecera.classList.remove('foo');

// Añade una clase si no existe
cabecera.classList.add('otra');

// añade o elimina varias clases a la vez
cabecera.classList.add('foo', 'bar');
cabecera.classList.remove('foo', 'bar');

// Si la clase existe la elimina, si no existe, la crea
cabecera.classList.toggle('visible');

// Devuelve true si el elemento contiene esa clase
cabecera.classList.contains('foo');

//-------------TEMPLATES--------------
let title = `<h1>Hello</h1>`

let name = 'Alberto';
let job = 'Frontend Developer';

// old school
console.log('my name is ' + name + 'and my job is ' + job);
// new wave
console.log(`my name is ${name} and my job is ${job}`);

// Add to HTML
const contentApp = document.querySelector('#nameSelector');
let html = `<ul>
	<li>name: ${name}</li>
	<li>job: ${job}</li>
</ul>`;

contentApp.innerHTML = html;

