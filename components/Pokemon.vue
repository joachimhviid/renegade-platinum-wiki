<template>
  <div>
    <h1>#{{ pokemon.id }} {{ pokemon.name }}</h1>
    <ul>
      <li v-for="move in pokemon.moves" :key="move.move.name">
        <div>
          <span>{{ move.move.name }}</span>
          <span v-for="(version, index) in move.version_group_details" :key="index">{{ version.version_group }}</span>
        </div>
      </li>
    </ul>
    {{ pokemon }}
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from 'pokenode-ts'

const props = defineProps<{
  pokemon: Pokemon
}>()
</script>
