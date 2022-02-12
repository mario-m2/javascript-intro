console.log('Desestructuracion de arreglos')

const characters = ['Goku','Vegeta','Trunks']

const goku = characters[0]
const trunks = characters[2]

console.log(goku, trunks)
// Goku Trunks

const [ g, v, t] = characters
console.log(g, v, t)
// Goku Vegeta Trunks

const [ , , tr] = characters
console.log(tr)
// Trunks

const [ , vg] = characters
console.log(vg)
// Vegeta

const [ a, b, c, gt = 'No tiene valor'] = characters
console.log(gt)
// No tiene valor

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()
console.log(letters, numbers)
// ABC 123

// Desestructuración de arreglo en los argumentos
const returnArray2 = ([l, n]) => {
    return [l, n]
}

const [l, n] = returnArray2(['ABCD', 1715766554])
console.log(l, n)
// ABCD 1715766554