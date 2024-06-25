<script setup lang="ts">
const params = useRoute('/order/[id]').params
</script>

<template>
  <div>{{ params.id }}</div>
</template>
