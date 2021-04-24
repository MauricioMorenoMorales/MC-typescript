"use strict";
function procesar1(g) {
    if (g.lados == 4) {
        //No funciona con jsx
        let cuadrado = g;
        cuadrado.lado;
    }
    else if (g.lados == 3) {
        // Esta es la mejor forma
        let triangulo = g;
        triangulo.altura;
    }
}
//! Instance of y las guardas
class Coche {
    constructor() {
        this.fabricante = 'honda';
    }
}
let c = new Coche();
function esUnCuadrado(x) {
    return x.lados == 4 && x.pintar && x.lado;
}
class CocheConcreto {
    constructor() {
        this.fabricante = 'honda';
    }
    move() { }
}
console.log(c instanceof Coche);
const procesar2 = (g) => {
    if (esUnCuadrado(g)) {
        g.lado;
    }
};
