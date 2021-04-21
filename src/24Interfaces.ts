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
data.created_at.getTime
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
