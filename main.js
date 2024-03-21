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