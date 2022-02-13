// No puedo importar archivos sin que estos sean antes exportados

import { owners } from './data/heroes'

console.log(owners)

const [ dc, marvel ] = owners

console.log(dc, marvel)

// Exportación por defecto
import superHeroes from './data/heroes'

console.log(superHeroes)

// Funciones de flecha
const getHeroById = (idHero) => superHeroes.find(({id}) => id == idHero)
// usar el método find

console.log( getHeroById(2))
// Object Spiderman

// getHeroesByOwner ('DC', 'Marvel')
const getHeroesByOwner = (idOwner) => superHeroes.filter(({owner}) => owner == idOwner)

console.log( getHeroesByOwner('Marvel'))
// Spiderman, Wolverine

console.log( getHeroesByOwner('DC'))
// Batman, Superman, Flash