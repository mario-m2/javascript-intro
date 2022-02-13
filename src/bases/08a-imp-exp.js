// Se cambia el path del archivo
import superHeroes from '../data/heroes'

export const getHeroById = (idHero) => superHeroes.find(({id}) => id == idHero)

export const getHeroesByOwner = (idOwner) => superHeroes.filter(({owner}) => owner == idOwner)

