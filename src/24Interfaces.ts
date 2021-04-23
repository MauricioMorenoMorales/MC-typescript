interface userData {
	readonly username: string
	created_at: Date | undefined
	superuser?: boolean | undefined
	readonly personal: {
		readonly name: string
		readonly email: string
	}
	logout(): void
	rename: (username: string) => void
}

function login(): userData {
	return {
		username: 'admin',
		created_at: new Date(),
		superuser: true,
		logout() {
			console.log('adios')
		},
		rename(username) {
			console.log('TODO: Rename account')
		},
		personal: {
			name: 'admin',
			email: 'xd',
		},
	}
}

let data: userData = login()

//Inseguro
//? data.created_at.getTime
//Seguro
if (data.created_at) {
	data.created_at.toISOString()
}
// O
data.created_at?.getDate

//! Interfaces con clases

interface Shape {
	readonly sides: number
	area(): number
	perimeter(): number
}

function process(l: Shape) {
	return
	console.log(l.area)
	console.log(l.perimeter)
	console.log(l.sides)
}

class Rectangle implements Shape {
	constructor(readonly width: number, readonly height: number) {
		this.width = width
		this.height = height
	}
	sides: number = 4
	area(): number {
		return this.width * this.height
	}
	perimeter(): number {
		return this.width * 2 + this.height * 2
	}
}

let miRectangulo = new Rectangle(1, 2)

//! Herencia de interfaces

interface Vehiculo {
	fabricante: string
	arrancar(): void
	repostar(): void
	detenerMotor(): void
}

interface VehiculoTerrestre extends Vehiculo {
	conducir(): void
}
interface VehiculoMaritimo extends Vehiculo {
	sonarSirena(): void
	encenderChimienea(): void
	detenerChimenea(): void
}

class OpelCorsa extends VehiculoTerrestre {
	fabricante: string = 'Opel'
	arrancar(): void {
		console.log('brumsmsdkmoakmfsd')
	}
	repostar(): void {
		console.log('Echando gasolina')
	}
	detenerMotor(): void {
		console.log('    ')
	}
	conducir(): void {
		console.log('brum brum')
	}
	abrirMaletero(): void {
		return
	}
}

function procesar(v: VehiculoMaritimo) {
	v.encenderChimienea()
}

procesar(new VehiculoMaritimo())

type Vehiculo2 = {
	fabricante: string
	arrancar(): void
	repostar(): void
	detenerMotor(): void
}

type VehiculoTerrestre2 = Vehiculo & {
	conducir(): void
}

//! Interfaces indizadas

let vector: number[] = []

vector[0]

let object: Account = {
	displayName: 'foo',
	rpDisplayName: 'foo',
	id: '1',
}

object.displayName = 'xd'

let h = object['displayName']

interface Indizable {
	[index: number]: boolean
}

let indizable: Indizable = {}

//! let indizableNoSeQue = l[4]

//! Interfaces: funciones y tipos hibridos

type Comparator = (a: string, b: string) => number

interface ComparatorInterface {
	(first: string, second: string): number
	algorithm: string
	safe: boolean
}

function sort(c: ComparatorInterface) {
	let out = c('first', 'second')
	//Obtiene autocompletado de funciones
	//Ademas obtiene los atributos de la interface
	//? c.
	console.log(`Ordenando con el criterio ${c.algorithm}`)
}

//! Diferencia entre interfaces y tipos

interface X {
	a: string
}
interface X {
	b: string
}
interface X {
	c: string
}

function use(x: X) {
	return x.a + x.b + x.c
}

// function myWindow(w: Window) {
// 	w.addEventListener('click', use())
// }
