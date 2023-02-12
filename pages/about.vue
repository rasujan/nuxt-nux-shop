<template>
  <div>
    <h1 class="rato">About</h1>

    <p>{{ data?.currency }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch(`/api/currency/NPR`);
</script>

<style lang="scss" scoped></style>
