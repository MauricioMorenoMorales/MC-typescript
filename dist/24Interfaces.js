"use strict";
var _a;
function login() {
    return {
        username: 'admin',
        created_at: new Date(),
        superuser: true,
        logout() {
            console.log('adios');
        },
        rename(username) {
            console.log('TODO: Rename account');
        },
        personal: {
            name: 'admin',
            email: 'xd',
        },
    };
}
let data = login();
//Inseguro
//? data.created_at.getTime
//Seguro
if (data.created_at) {
    data.created_at.toISOString();
}
// O
(_a = data.created_at) === null || _a === void 0 ? void 0 : _a.getDate;
function process(l) {
    return;
    console.log(l.area);
    console.log(l.perimeter);
    console.log(l.sides);
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sides = 4;
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return this.width * 2 + this.height * 2;
    }
}
let miRectangulo = new Rectangle(1, 2);
class OpelCorsa extends VehiculoTerrestre {
    constructor() {
        super(...arguments);
        this.fabricante = 'Opel';
    }
    arrancar() {
        console.log('brumsmsdkmoakmfsd');
    }
    repostar() {
        console.log('Echando gasolina');
    }
    detenerMotor() {
        console.log('    ');
    }
    conducir() {
        console.log('brum brum');
    }
    abrirMaletero() {
        return;
    }
}
function procesar(v) {
    v.encenderChimienea();
}
procesar(new VehiculoMaritimo());
//! Interfaces indizadas
let vector = [];
vector[0];
let object = {
    displayName: 'foo',
    rpDisplayName: 'foo',
    id: '1',
};
object.displayName = 'xd';
let h = object['displayName'];
let indizable = {};
function sort(c) {
    let out = c('first', 'second');
    //Obtiene autocompletado de funciones
    //Ademas obtiene los atributos de la interface
    //? c.
    console.log(`Ordenando con el criterio ${c.algorithm}`);
}
function use(x) {
    return x.a + x.b + x.c;
}
// function myWindow(w: Window) {
// 	w.addEventListener('click', use())
// }
