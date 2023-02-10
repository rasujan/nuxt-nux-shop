<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-2 flex justify-center">
      <img :src="product?.image" class="object-contain max-h-96" />
    </div>

    <div class="p-2 shadow-md">
      <p class="text-slate-700 text-lg mt-4">{{ product.title }}</p>
      <p class="text-green-600 text-xl my-2">${{ product.price }}</p>
      <p class="text-slate-500 text-md my-2">#{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
