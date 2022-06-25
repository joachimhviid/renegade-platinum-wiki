import { Pokemon, PokemonMove } from 'pokenode-ts'

interface PokemonUpdates {
  versions: string[]
  types: NamedResource[]
  moves: NamedResource[]
  stats: PokemonStat[]
  abilities: NamedResource[]
  held_items: PokemonHeldItem[]
}

interface NamedResource {
  name: string
  url: string
}

interface PokemonStat {
  stat_name: string
  base_stat: string
}

interface PokemonHeldItem extends NamedResource {
  rarity: number
}

class RPPokemon {
  basePokemon: Pokemon
  rpUpdates: PokemonUpdates

  constructor(basePokemon: Pokemon, rpUpdates: PokemonUpdates) {
    this.basePokemon = basePokemon
    this.rpUpdates = rpUpdates
  }

  // get moves(): PokemonMove[] {
  //   this.basePokemon.moves.filter((move) => {
  //     return move.version_group_details.filter()
  //   })
  //   return []
  // }
}
