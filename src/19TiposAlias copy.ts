type Numero = number | [number]

let n: Numero = 5

type LoginCredentials = {
	username: string
	password: string
	remenber?: boolean
}

function login(data: LoginCredentials) {
	console.log(data.password)
}

login({ username: 'admin', password: '12345' })