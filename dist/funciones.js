"use strict";
// [datos] --> [sumar] --> [datos]
function sumar(m, n) {
    let suma = m + n;
    console.log(`${m} + ${n} = ${suma}`);
    return suma;
}
//Este tipo de funciones es usado comunmente en callbacks
let restar = function (m, n) {
    let resta = m - n;
    console.log(`${m} - ${n} = ${resta}`);
    return resta;
};
let multiplicar = function (m, n) {
    let resultado = m * n;
    console.log(`${m} * ${n} = ${resultado}`);
    return resultado;
};
let dividir;
dividir = (m, b) => m / b;
let callbackExample;
callbackExample = (a, b, callback) => callback(a * b);
let x = sumar(1, 3);
