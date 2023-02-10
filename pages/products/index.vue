<template>
  <h3 class="text-lg font-bold">Product</h3>

  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-stretch place-content-stretch"
  >
    <ProductCard v-for="product in data" :product="product" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "products",
});

const url = "http://fakestoreapi.com/products";

const { error, data } = await useFetch(url);

const products: typeof productT[] = Array.isArray(data)
  ? data?.map((data) => {
      title: data.title;
    })
  : [];
</script>

<style lang="sass" scoped></style>
