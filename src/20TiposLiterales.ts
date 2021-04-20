const verdadera: true = true

const cinco: 5 = 5

const hola: 'hola' = 'hola'

//Cuándo usas const las inferencias son muy estrictas
//Solamente aceptará trues
const permiso = true

type LoginOperation = {
	op: 'login' | 'logout'
	username: string
	password: string
}

let l: LoginOperation = {
	username: 'admin',
	password: 'admin',
	op: 'login',
}
