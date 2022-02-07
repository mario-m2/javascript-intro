console.log('Functions')

// Sintaxis tradicional
function saludar(xyz) {
    xyz = xyz ? xyz : 'Mundo'

    return `Hola ${xyz}`
}

console.log(saludar())
// Hola Mundo

const nombre = 'Mario'

console.log(saludar(nombre))
// Hola Mario

// Función anónima asignada a una constante
const saludarAnonimo = function (xyz) {
    xyz = xyz ? xyz : 'Mundo'

    return `Hola ${xyz}`
}

console.log(saludarAnonimo(nombre))
// Hola Mario

// Arrow functions: forma simplificada
// Ayuda a trabajar con return implicitos, a no cambiar el this
const saludarLanda = (xyz) => {
    xyz = xyz ? xyz : 'Mundo'

    return `Hola ${xyz}`
}

console.log(saludarAnonimo('Naty'))
// Hola Naty

const saludarArrow = (nombre = 'Mundo') => `Función de flecha: Hola ${nombre}`
console.log(saludarArrow('Adriana'))
// Función de flecha: Hola Adriana

// Arrow function que retona un objeto
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'mario_morocho'
    }
}

console.log(getUser())
// Objeto

// Arrow function que retorna un objeto sin el return
const getUserObject = () => ({
    uid: 'ABC123',
    username: 'mario_morocho'
})

console.log(getUserObject())
// Objeto

const heroes = [{
    id: 1,
    name: "Batman"
}, {
    id: 2,
    name: 'Superman'
}]

// Función some devuelve un boolean, True si cumple la condición
const existe = heroes.some( (heroe) => heroe.id === 3 )
console.log(existe)
// false

// Puedo encontrar uno y desestructurar el objeto
const { name, id } = heroes.find( (heroe) => heroe.id === 1 )
console.log(name)
// Batman