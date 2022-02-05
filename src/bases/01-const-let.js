/* var crea una variable con scope global */

let name = "Mario"
const lastname = "Morocho"

console.log(name, lastname)

if (true) {
    // Se actualiza la variable name en el documento
    name = 'Mati'

    // Se actualiza la variable lastname dentro del scope del if
    const lastname = 'Yauripoma'
    console.log(name, lastname)
}

console.log(name, lastname)

/*
* Resultado en consola:
*
* Mario Morocho
* Mati Yauripoma
* Mati Morocho
* */