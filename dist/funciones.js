"use strict";
// [datos] --> [sumar] --> [datos]
function sumar(m, n) {
    var suma = m + n;
    console.log(m + " + " + n + " = " + suma);
    return suma;
}
//Este tipo de funciones es usado comunmente en callbacks
var restar = function (m, n) {
    var resta = m - n;
    console.log(m + " - " + n + " = " + resta);
    return resta;
};
var multiplicar = function (m, n) {
    var resultado = m * n;
    console.log(m + " * " + n + " = " + resultado);
    return resultado;
};
var dividir;
dividir = function (m, b) { return m / b; };
var callbackExample;
callbackExample = function (a, b, callback) { return callback(a * b); };
var x = sumar(1, 3);
