const name = 'Mario'
const lastname = 'Morocho'

const nombreCompleto = name + ' ' + lastname

console.log(nombreCompleto)
// Mario Morocho

const literalText = `nombre apellido`

console.log(literalText)
// nombre apellido

const fullName = `${ name } ${ lastname }`

console.log(fullName)
// Mario Morocho

console.log(`Resultado: ${ 1 + 5}`)
// Resultado: 6

function getSaludo (nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es el apellido: ${ getSaludo(lastname)}`)
// Este es el apellido: Morocho