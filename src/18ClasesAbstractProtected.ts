export = ''

abstract class Vehiculo {
	//Private evita que sea usado fuera de la clase
	//Protected proporciona información pero no permite su uso
	protected fabricante: string
	constructor(fabricante: string = 'Honda') {
		this.fabricante = fabricante
	}
	moverse() {
		console.log(`El vehiculo ${this.fabricante} se ha movido mágicamente`)
	}
	protected llevarAlTaller() {
		console.log(`Al taller que va`)
	}
}

class VehiculoTerrestre extends Vehiculo {
	private tipo: string
	constructor(fabricante: string, tipo: string) {
		super()
		this.tipo = tipo
	}
	moverse() {
		super.moverse()
		console.log('Brum brum')
	}
	reparar() {
		console.log(
			`Un momento que me leo el manual de instrucciones de ${this.fabricante}`,
		)
		this.llevarAlTaller()
	}
}

class VehiculoAereo extends Vehiculo {
	moverse() {
		super.moverse()
		console.log('niauuu')
	}
}

class VehiculoMaritimo extends Vehiculo {
	moverse() {
		super.moverse()
		console.log('*El ruido de el mar')
	}
}

let vehiculo: VehiculoTerrestre = new VehiculoTerrestre('Mazda', 'Moto')
vehiculo.moverse()
vehiculo.reparar()
