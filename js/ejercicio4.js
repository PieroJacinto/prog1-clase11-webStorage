// Ejercicio 4 - Agregando más datos al array
console.log("Ejercicio 4");

// 1- En el ejercicio anterior lograste guardar un array dentro de localStorage en la propiedad 'favoritos'. Ahora tenemos que recuperar el array completo del storage y guardarlo en la variable recuperoStorage. 
let recuperoStorage = localStorage.getItem('favoritos');
console.log("verifico si se recupero lo que tenia en localstorage",recuperoStorage);

// 2-  ¿Recordás en qué formato está guardada la información dentro de webStorage? Por lo tanto si queremos agregar un dato más al array necesitaremos primero reconvertirla. Adelante. Reconvertí la información guardada como cadena texto en formato json al formato original de array. Te sugerimos que el resultado de este proceso quede guardado en una nueva variable.
let peliculasArray = JSON.parse(recuperoStorage);

// 3- Ya con los datos en formato de array agregá una nueva película usando .push() que es el método que permite agregar datos a un array.
peliculasArray.push("Nueve reinas");

// 4- "A guardar, a guardar…". Ahora debes guardar el nuevo array dentro de la misma propiedad favoritos en localStorage. Como resultado debe quedarte el nuevo array dentro de localStorage. No olvides que en el storage únicamente podemos guardar strings (cadenas de texto) por lo tanto antes de guardar el array tal vez debas convertirlo a un formato de texto que ya conocemos. 
localStorage.setItem('favoritos', JSON.stringify(peliculasArray));

// 5- Siempre tenés la posibilidad de usar  console.log(localStorage) y mirar en la consola que todo esté avanzando como lo esperás.
console.log(localStorage);
