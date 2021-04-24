interface Geometria {
	lados: number
}

interface Triangulo extends Geometria {
	base: number
	altura: number
}

interface Cuadrado extends Geometria {
	lado: number
}

function procesar1(g: Geometria) {
	if (g.lados == 4) {
		//No funciona con jsx
		let cuadrado = <Cuadrado>g
		cuadrado.lado
	} else if (g.lados == 3) {
		// Esta es la mejor forma
		let triangulo = g as Triangulo
		triangulo.altura
	}
}

//! Instance of y las guardas

class Coche {
	fabricante: string = 'honda'
}

let c: Coche = new Coche()

function esUnCuadrado(x: any): x is Cuadrado {
	return x.lados == 4 && x.pintar && x.lado
}

class CocheConcreto implements Coche {
	fabricante: string = 'honda'
	move() {}
}

console.log(c instanceof Coche)

const procesar2 = (g: Geometria) => {
	if (esUnCuadrado(g)) {
		g.lado
	}
}
