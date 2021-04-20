"use strict";
class Vehiculo {
    constructor(fabricante = 'Honda') {
        this.fabricante = fabricante;
    }
    moverse() {
        console.log(`El vehiculo ${this.fabricante} se ha movido mágicamente`);
    }
    llevarAlTaller() {
        console.log(`Al taller que va`);
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
    reparar() {
        console.log(`Un momento que me leo el manual de instrucciones de ${this.fabricante}`);
        this.llevarAlTaller();
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
let vehiculo = new VehiculoTerrestre('Mazda', 'Moto');
vehiculo.moverse();
vehiculo.reparar();
module.exports = '';
