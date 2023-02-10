<template>
  <NuxtLink :to="`/products/${product.id}`">
    <div class="h-full shadow-md hover:shadow-xl cursor-pointer p-4">
      <img :src="product?.image" class="object-contain h-48 mx-auto mb-6" />

      <p class="text-slate-700 text-sm">{{ product.title }}</p>
      <p class="text-green-600 text-md my-2">${{ product.price }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
