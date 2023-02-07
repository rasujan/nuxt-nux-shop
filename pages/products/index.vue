<template>
  <h3 class="text-lg font-bold">Product</h3>

  <div class="grid grid-cols-4 gap-4">
    <div v-for="product in products" class="">
      <span>
        {{ product?.title }}
      </span>
    </div>
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
