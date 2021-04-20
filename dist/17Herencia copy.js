"use strict";
class Vehiculo {
    constructor(fabricante = 'Honda') {
        this.fabricante = fabricante;
    }
    moverse() {
        console.log(`El vehiculo ${this.fabricante} se ha movido mágicamente`);
    }
}
class VehiculoTerrestre extends Vehiculo {
    constructor(fabricante, tipo) {
        super();
        this.tipo = tipo;
    }
    moverse() {
        super.moverse();
        console.log('Brum brum');
    }
}
class VehiculoAereo extends Vehiculo {
    moverse() {
        super.moverse();
        console.log('niauuu');
    }
}
class VehiculoMaritimo extends Vehiculo {
    moverse() {
        super.moverse();
        console.log('*El ruido de el mar');
    }
}
const vehiculo = new VehiculoTerrestre('Mazda', 'Moto');
vehiculo.moverse();
