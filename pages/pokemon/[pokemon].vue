<template>
  <div>{{ route.params.pokemon }}</div>
</template>

<script setup lang="ts">
import { useRoute } from '#imports'

const route = useRoute()
</script>
