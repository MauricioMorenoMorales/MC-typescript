export type Producto = {
	sku: string
	nombre: string
	description: string
	precio: number
	urlFoto: string
}

export type Almacen = {
	[sku: string]: {
		stock: number
		ultimaEntrega: Date
	}
}

export function sumarTotal(productos: Producto[]) {
	let precio = 0
	for (let producto of productos) {
		precio += producto.precio
	}
	return precio
}
