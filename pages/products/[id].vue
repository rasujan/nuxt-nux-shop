<template>
  <ProductDetail :product="data" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "products",
});

const route = useRoute();
const { id } = route.params;

const url = `http://fakestoreapi.com/products/${id}`;

const { error, data } = await useFetch(url);

// const products: typeof productT[] = Array.isArray(data)
//   ? data?.map((data) => {
//       title: data.title;
//     })
//   : [];
</script>

<style lng="css" scoped></style>
