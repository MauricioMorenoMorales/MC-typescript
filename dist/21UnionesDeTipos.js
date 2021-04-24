"use strict";
let valor = { cuatro: false, tres: true };
function convertir(valor) {
    if (typeof valor === 'string') {
        //Aquí ya se pueden acceder a el autocompletado de los strings
        valor.slice();
    }
    else if (typeof valor === 'number') {
        valor.toExponential();
    }
}
convertir('asfasdfs');
convertir(5);
function operar(o) {
    //Al momento de acceder a un atributo unico se infiere de que tipo se es el elemento
    if (o.tipo == 'suma') {
        return o.sumando1 + o.sumando2;
    }
    else if (o.tipo == 'multiplicar') {
        return o.multiplicando1 * o.multiplicando2;
    }
}
let obj = {
    posicion: [5, 4],
    velocidad: [2, 3],
    aceleración: [2, 2],
};
