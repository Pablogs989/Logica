//Booleanos

const booleano1 = true;
const booleano2 = false;

const booleanoAnd = booleano1 && booleano2;
console.log(booleano1);
const booleanoOr = booleano1 || booleano2;
console.log(booleano2);
const booleanoNot = !booleano2;
console.log(booleanoAnd);
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (booleano1 && !booleano2));
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
    console.log("Son del mismo tipo");
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


//Extras

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },


    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

let nombres4letras = [];

for (const nombre of gente) {
    if (nombre.nombre.length == 4) {
        nombres4letras.push(nombre.nombre);
    }
}
console.log(nombres4letras);

let j40 = [];

for (const persona of gente) {
    if (persona.nombre.startsWith("J") && persona.edad < 40) {
        j40.push(persona);
    }
}

console.log(j40);



let ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["", "touchPad"],
    almacenamiento: {
        discos: ["", "HDD"],
        maestro: 0,
    },

}

// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}



let arr = [
    {
        name: "pepito",
        age: 25,
    },
    {
        name: "pepito",
        age: 15,
    },
    {
        name: "J",
        age: 10
    }
];

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas2.1");
} else {
    console.log("suspendes2.1");
}
// TEST 2
if (typeof arr[0] === "object") {
    console.log("apruebas2.2");
} else {
    console.log("suspendes2.2");
}
// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas2.3");
} else {
    console.log("suspendes2.3");
}
// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas2.4");
} else {
    console.log("suspendes2.4");
}
// TEST 5
if (arr.length === 3) {
    console.log("apruebas2.5");
} else {
    console.log("suspendes2.5");
}
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas2.6");
} else {
    console.log("suspendes2.6");
}


// TEST 6
if (arr[1].name === "pepito") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("apruebas2.7");
} else {
    console.log("suspendes2.7");
}
// TEST 8
if (arr[0].age === 25) {
    console.log("apruebas2.8");
} else {
    console.log("suspendes2.8");
}
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("apruebas2.9");
} else {
    console.log("suspendes2.9");
}


// TEST 10
if (arr[2].name[0] === "J") {
    console.log("apruebas2.10");
} else {
    console.log("suspendes2.10");
}
