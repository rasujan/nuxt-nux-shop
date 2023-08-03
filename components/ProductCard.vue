<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    @click="() => trackProductClick(product)"
  >
    <div class="card h-full shadow-md hover:shadow-xl cursor-pointer p-4">
      <img :src="product?.image" class="object-contain h-48 mx-auto mb-6" />

      <p class="text-slate-700 text-sm">{{ product.title }}</p>
      <p class="text-green-600 text-md my-2">${{ product.price }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="js">
import mixpanel from "mixpanel-browser";
const { product } = defineProps(["product"]);

const trackProductClick = (product) => {
  console.log(
    "🚀 ~ file: ProductCard.vue:20 ~ trackProductClick ~ product:",
    product
  );
  mixpanel.track("Product Click", {
    product: product,
  });
};
</script>

<style scoped></style>
