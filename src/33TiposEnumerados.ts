interface CitaMedica {
	dia:
		| 'lunes'
		| 'martes'
		| 'miercoles'
		| 'jueves'
		| 'viernes'
		| 'sabado'
		| 'domingo'
}

enum DiaSemana {
	Lunes = 1,
	Martes,
	Miercoles = 1,
	Jueves,
	Sabado = 700,
	Domingo,
}

enum DiaSemana2 {
	Lunes = 123,
	Martes = 222,
	Miercoles = 1,
	Jueves = 342,
	Sabado = 700,
	Domingo = 333,
}

enum DiaSemana3 {
	Lunes = 'lunes',
	Martes = 'martes',
	Miercoles = 'miercoles',
	Jueves = 'jueves',
	viernes = 'viernes',
	Sabado = 'sabado',
	Domingo = 'domingo',
}

interface CitaMedicaNumerada {
	dia: DiaSemana
}

let cita: CitaMedicaNumerada = {
	dia: DiaSemana.Miercoles,
}

const one = (): number => 1

enum Permisos {
	EscribirMensajes = one(),
	Reaccionar = EscribirMensajes * 2,
	EnviarEnlaces = Reaccionar * 2,
	ConectarseACanalesDeVoz = EnviarEnlaces * 2,
}
