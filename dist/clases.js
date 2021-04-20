"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _ancho;
class Rectangulo {
    constructor(ancho, alto) {
        //Usar # es similar a escribir private
        _ancho.set(this, void 0);
        this._nombre = '';
        __classPrivateFieldSet(this, _ancho, ancho);
        this.alto = ancho;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        console.log('Seteo el nombre');
        this._nombre = value;
    }
    //Los geters funcionan como funciones que son mostrados como atributos
    get area() {
        return __classPrivateFieldGet(this, _ancho) * this.alto;
    }
    get perimetro() {
        return __classPrivateFieldGet(this, _ancho) * 2 + this.alto * 2;
    }
}
_ancho = new WeakMap();
let r1 = new Rectangulo(10, 5);
let r2 = new Rectangulo(4, 3);
//Así se usan los setters
r1.nombre = 'A';
console.log(`El rectangulo ${r1.nombre}`);
