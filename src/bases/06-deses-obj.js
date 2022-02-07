console.log('Desestructuracion de objetos')

const person = {
    name: 'Tony',
    age: 45,
    codName: 'Ironman'
}

const { name, age, codName, power = 'None' } = person

console.log(name)
console.log(age)
console.log(codName)
console.log(power)

// Desestructuracion en los argumentos de una funcion
const createHero = ( person ) => {
    return {
        id: 1715766554,
        name: person.name,
        age: person.age,
        codName: person.codName,
        power: person.power
    }
}

console.log(createHero(person))
/*
{
    "id": 1715766554,
    "name": "Tony",
    "age": 45,
    "codName": "Ironman",
    "power": undefined
}
 */

const createHeroDes = ( {name, age, codName, power = 'None'} ) => ({
        id: 1715766554,
        name: name,
        age: age,
        codName: codName,
        power: power
})

console.log(createHeroDes(person))
/*
{
    "id": 1715766554,
    "name": "Tony",
    "age": 45,
    "codName": "Ironman",
    "power": "None"
}
 */

// cuando la variable y el valor coinciden se puede obviar, además de renombrar la variable
const createHeroDesResumen = ( { name, age:edad, codName, power = 'None' } ) => ({
    id: 1720383262,
    name,
    edad,
    codName,
    power
})
console.log(createHeroDesResumen(person))
/*
{
    "id": 1720383262,
    "name": "Tony",
    "edad": 45,
    "codName": "Ironman",
    "power": "None"
}
 */