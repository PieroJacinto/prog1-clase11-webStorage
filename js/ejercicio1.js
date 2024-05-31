// Ejercicio 1 - Entrando en calor
console.log("Ejercicio 1");

// 1- Crear la variable miNombre y guardá tu nombre en ella.
let miNombre = "Piero";

// 2- Guardá tu nombre en localStorage dentro de la propiedad 'userName
localStorage.setItem('userName', miNombre);

// 3- Verificar el contenido de localStorage
console.log(localStorage);

// 4- Recuperá el dato de localStorage, guardalo dentro de la variable recuperoStorage y mostralo por consola.
let recuperoStorage = localStorage.getItem('userName');
console.log("Recuperado de localStorage:", recuperoStorage);

// 5- Borrá todo lo que tenga localStorage guardado en el navegador.
localStorage.clear();
