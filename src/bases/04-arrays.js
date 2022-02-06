console.log('Arrays')

const arreglo = [1,2,3,4]
arreglo.push(5)

// el arreglo es pasado por referencia
const arreglo2 = arreglo
arreglo2.push(6)

// la variable arreglo al apuntar al mismo espacio en memoria es modificado en arreglo2
// Por tanto arreglo y arreglo 2 presentan el mismo arreglo
console.log(arreglo)
// [1,2,3,4,5,6]

console.log(arreglo2)
// [1,2,3,4,5,6]

const arreglo3 = [1,2,3,4]

// Se debe usar el operador spread para esparcir los valores y no pasar la referencia
const arreglo4 = [...arreglo3]

arreglo3.push(5)
arreglo4.push(6)

console.log(arreglo3)
// [1,2,3,4,5]
console.log(arreglo4)
// [1,2,3,4,6]

// Map devuelve un nuevo arreglo
const arreglo5 = arreglo4.map( function(n) {
    return n * 2
})

arreglo5.push(10)
console.log(arreglo5)

// [2, 4, 6, 8, 12, 10]