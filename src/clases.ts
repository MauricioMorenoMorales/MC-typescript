class Rectangulo {
	//Usar # es similar a escribir private
	#ancho: number
	readonly alto: number
	private _nombre: string = ''
	constructor(ancho: number, alto: number) {
		this.#ancho = ancho
		this.alto = ancho
	}
	get nombre() {
		return this._nombre
	}
	set nombre(value: string) {
		console.log('Seteo el nombre')
		this._nombre = value
	}
	//Los geters funcionan como funciones que son mostrados como atributos
	get area() {
		return this.#ancho * this.alto
	}
	get perimetro() {
		return this.#ancho * 2 + this.alto * 2
	}
}

let r1 = new Rectangulo(10, 5)
let r2 = new Rectangulo(4, 3)

//Así se usan los setters
r1.nombre = 'A'
console.log(`El rectangulo ${r1.nombre}`)
