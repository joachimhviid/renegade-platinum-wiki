<template>
  <div>
    <!--    <div v-for="pokemon in slicedPokedexEntries" :key="pokemon.entry_number">-->
    <!--      {{ pokemon }}-->
    <!--    </div>-->
    <!--    <Pokemon :pokemon="data" />-->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
// import { PokemonClient } from "pokenode-ts";
import data from './electivire.json'

// const api = new GameClient()
//
// const pokedex = await api.getPokedexByName('national')

// const slicedPokedexEntries = pokedex.pokemon_entries.slice(0, 493)

// const pokemonClient = new PokemonClient()
//
// const electivireOfficial = await pokemonClient.getPokemonByName('electivire')
</script>
