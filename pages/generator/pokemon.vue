<template>
  <NuxtLink to="/generator">Go back</NuxtLink>
  <h1>Generate a new pokemon</h1>
  <label for="name">Name</label>
  <input v-model="name" name="name" type="text" class="border border-slate-500" />
  <span>{{ name }}</span>
</template>

<script setup lang="ts">
import { ref } from '#imports'

const name = ref(null)
</script>
