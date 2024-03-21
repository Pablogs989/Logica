//Booleanos

const booleano1 = true;
const booleano2 = false;

const booleanoAnd = booleano1 && booleano2;
console.log(booleano1);
const booleanoOr = booleano1 || booleano2;
console.log(booleano2);
const booleanoNot = !booleano2;
console.log(booleanoAnd);
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log(booleanoMix0);


//Operadores

const valorDivision = (17 / 3).toFixed(2);
console.log(valorDivision);
const valorResto = 17 % 7
console.log(valorResto);


//Lógica de programación

const A = 9;
const B = "9";

if (A == B) {
    console.log("Son iguales");
} else if (A === B) {
    console.log("Son iguales");
}

const mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas");
} else if (mochila.length >= 2 && mochila.length <= 10) {
    console.log("Qué bien voy con mi mochila");
} else {
    console.log("Creo que no necesito una mochila");
}

let contarHasta10 = 0;

while (contarHasta10 !== 10) {
    contarHasta10++;
}
console.log(contarHasta10);

var diaFestivo = true;

const trabajo = diaFestivo == true ? console.log("Hoy no trabajo") : console.log("Hoy trabajo");

let arrayBucle = [];

for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);
}

console.log(arrayBucle);

let suma = 0;

arrayBucle.forEach(element => {
    suma += element;
});

console.log(suma);

let array = ["Con", "Sofia", "aprendiendo", "bucles"];

for (const palabra of array) {
    console.log(palabra);
}

for (const palabraIndice in array) {
    console.log(array[palabraIndice]);
}

let i = 1;
while (i <= 20) {
    if (i % 3 === 0) {
        console.log("Patata");
    }
    i++;
}

