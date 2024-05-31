// Ejercicio 5 - Casi un ninja
console.log("Ejercicio 5");

// 1- Copiá la variable got y su contenido en tu archivo de javascript.

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

// 2- Creá la variable winterIsComing y asignale un array vacío.
let winterIsComing = [];

// 3- Usando un bucle for recorré el array de la variable got.
// 4- Dentro del bucle for deberás preguntar para cada posición dentro del array y si la ciudad es "Winterfell" deberás agregar ese elemento a la variable winterIsComing. 

for (let i = 0; i < got.length; i++) {
    if (got[i].ciudad === "Winterfell") {
        winterIsComing.push(got[i]);
    }
}

// 5- Por fuera del bucle for transformá el contenido de la variable winterIsComing a texto en formato json y guardarlo en una nueva variable. 
let winterIsComingJson = JSON.stringify(winterIsComing);

// 6- Por último, guardá en local storage dentro de la propiedad winterfell el contenido que transformaste a json.
localStorage.setItem('winterfell', winterIsComingJson);

// 7- Usando console.log(localStorage) chequeá que la información esté correctamente guardada. ¡Felicitaciones!
console.log(localStorage);
console.log("winterfell: ", localStorage.getItem("winterfell"));