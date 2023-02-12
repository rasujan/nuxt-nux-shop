<template>
  <div>
    <h1 class="rato">About</h1>
    <p>{{ data?.message }}</p>

    <p>{{ data?.currency }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch(`/api/test?user=rasujan`);
</script>

<style lang="scss" scoped></style>
