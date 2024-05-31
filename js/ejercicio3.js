// Ejercicio 3 - Guardando un array
console.log("Ejercicio 3");

// 1- Tomando el array de películas que creaste para el ejercicio anterior pasalo a formato json y guardalo en la variable peliculasJson.
let peliculasFavoritas = ["Inception", "The Matrix", "Interstellar"];

let peliculasJson = JSON.stringify(peliculasFavoritas);

// 2- Guardá peliculasJson dentro de localStorage en la propiedad favoritos.
localStorage.setItem('favoritos', peliculasJson);

// Verificar el contenido de localStorage
console.log(localStorage);
console.log(localStorage.getItem('favoritos'));
