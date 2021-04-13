// [datos] --> [sumar] --> [datos]

function sumar(m: number, n: number): number {
	let suma: number = m + n
	console.log(`${m} + ${n} = ${suma}`)
	return suma
}

//Este tipo de funciones es usado comunmente en callbacks
let restar: (m: number, n: number) => number = function (m: number, n: number) {
	let resta: number = m - n
	console.log(`${m} - ${n} = ${resta}`)
	return resta
}

let multiplicar: (m: number, n: number) => number = function (m, n) {
	let resultado: number = m * n
	console.log(`${m} * ${n} = ${resultado}`)
	return resultado
}

let dividir: (m: number, n: number) => number
dividir = (m, b) => m / b

let callbackExample: (
	a: number,
	b: number,
	callback: (r: number) => void,
) => void
callbackExample = (a, b, callback) => callback(a * b)

let x: number = sumar(1, 3)
