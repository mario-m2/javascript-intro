console.log('Object Literal')

// Es un objeto
const persona = {
    nombre: 'Mario'
}

console.log(persona)
// {nombre: 'Mario'}

const personaSet = new Set();

console.log(personaSet)
// {nombre: 'Mario'}

const personaFull = {
    nombre: 'Mario',
    apellido: 'Morocho',
    edad: 36,
    direccion: {
        ciudad: 'Quito',
        zip: 170504,
        lat: 14.3,
        lng: 45.8
    }
}

console.log(personaFull)
// Se imprimer el objeto

// Los objetos son pasados por referencia
// Se mantiene la misma referencia al espacio de memoria de personaFull
const persona2 = personaFull
persona2.nombre = 'Matias'
console.log(persona2)
// Se imprime el objeto con un cambio en nombre => Matias

console.log(personaFull)
// También se actualiza el nombre del objeto personaFull => Matias

const personaFull2 = {
    nombre: 'Mario',
    apellido: 'Morocho',
    edad: 36,
    direccion: {
        ciudad: 'Quito',
        zip: 170504,
        lat: 14.3,
        lng: 45.8
    }
}

// Operador spread
const persona3 = {...personaFull2}
persona3.nombre = 'Nataly'

console.log(persona3)
// Se imprime el objeto con un cambio en nombre => Nataly

console.log(personaFull2)
// También se actualiza el nombre del objeto personaFull2 => Mario
