// Ejercicio 2 - Combinando con manejo de arrays
console.log("Ejercicio 2");

// 1- Creá una variable peliculasFavoritas y colocá en ella un array con 3 de tus mejores películas. 
let peliculasFavoritas = ["Inception", "The Matrix", "Interstellar"];

// 2- Usando la notación de corchetes obtené el 2do elemento de tu array y guardalo en localStorage dentro de la propiedad peliculaFavorita.
localStorage.setItem('peliculaFavorita', peliculasFavoritas[1]);

// 3- Verificá que todo esté guardado correctamente en localStorage usando console.log(localStorage) y mirando en la consola del navegador. 
console.log(localStorage);

// 4- Recuperá el dato de localStorage, guardalo dentro de la variable recuperoStorage y mostralo por consola.
let recuperoStorage = localStorage.getItem('peliculaFavorita');
console.log("Recuperado de localStorage:", recuperoStorage);

// 5- Borrá todo lo que tenga localStorage guardado en el navegador.
localStorage.clear();
