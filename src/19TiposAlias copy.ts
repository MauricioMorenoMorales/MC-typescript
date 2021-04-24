type Numero = number | [number]

let n: Numero = 5

type LoginCredentials = {
	username: string
	password: string
	remenber?: boolean
}

function login2(data: LoginCredentials) {
	console.log(data.password)
}

login2({ username: 'admin', password: '12345' })
