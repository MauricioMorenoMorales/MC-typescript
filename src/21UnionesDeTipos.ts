type A = {
	uno: boolean
	dos: boolean
}
type B = {
	tres: boolean
	cuatro: boolean
}

let valor: A | B = { cuatro: false, tres: true }

function convertir(valor: string | number) {
	if (typeof valor === 'string') {
		//Aquí ya se pueden acceder a el autocompletado de los strings
		valor.slice()
	} else if (typeof valor === 'number') {
		valor.toExponential()
	}
}

convertir('asfasdfs')
convertir(5)

// ! Uniones discriminantes

type OperacionSuma = {
	sumando1: number
	sumando2: number
	tipo: 'suma'
}

type OperacionMultiplicar = {
	multiplicando1: number
	multiplicando2: number
	tipo: 'multiplicar'
}

type Operacion = OperacionSuma | OperacionMultiplicar

function operar(o: Operacion) {
	//Al momento de acceder a un atributo unico se infiere de que tipo se es el elemento
	if (o.tipo == 'suma') {
		return o.sumando1 + o.sumando2
	} else if (o.tipo == 'multiplicar') {
		return o.multiplicando1 * o.multiplicando2
	}
}

//! INterseciones de tipos

type Posicionable = {
	posicion: [x: number, y: number]
}

type Movible = {
	velocidad: [x: number, y: number]
	aceleración: [x: number, y: number]
}

type MovibleYPoscicionable = Posicionable & Movible

let obj: MovibleYPoscicionable = {
	posicion: [5, 4],
	velocidad: [2, 3],
	aceleración: [2, 2],
}
