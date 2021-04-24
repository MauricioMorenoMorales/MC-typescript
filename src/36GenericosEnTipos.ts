interface Respuesta<Message, WhatEver> {
	type: 'sucess' | 'error'
	success: boolean
	message: Message
	whatever: WhatEver
}

let payload: Respuesta<string, true> = {
	type: 'sucess',
	success: true,
	message: 'xd',
	whatever: true,
}

let payload2: Respuesta<boolean, 'Tipo literal'> = {
	type: 'sucess',
	success: true,
	message: true,
	whatever: 'Tipo literal',
}

function multiply(uno: number, dos: number): number {
	return uno * dos
}

multiply(5, 4)
multiply(9, 3)

//! Genericos en funciones

type Nota = { mensaje: string }

type NotaColorida = Nota & { type: 'color'; color: string }
type Foto = { type: 'foto'; url: string }
type Video = { type: 'video'; duracion: number }
// type Publicacion = Nota | NotaColorida | Foto | Video

const subir = <Publicacion, Extra>(p: Publicacion, e: Extra): Publicacion => {
	return p
}

let subirNota = subir<Nota, Nota>(
	{ mensaje: 'hola mundo' },
	{ mensaje: 'hola mundo' },
)

//! Estudiar
//! Tipos de utilidad
