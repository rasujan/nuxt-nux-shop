<template>
  <!-- This will add the meta tags Method: 2 -->
  <Head>
    <Title> {{ product?.title }} || Nuxt Store</Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <ProductDetail :product="product" />
</template>

<script setup lang="ts">
import { Title } from "~~/.nuxt/components";

definePageMeta({
  layout: "products",
});

const route = useRoute();
const { id } = route.params;

const url = `http://fakestoreapi.com/products/${id}`;

const product: typeof productT = useState("product", () => ({
  title: "Initialized",
}));

await useFetch(url, {
  onResponse({ response }) {
    return product({
      title: response._data.title,
      description: response._data.description,
      price: response._data.price,
      image: response._data.image,
    });
  },
});

if (!product) {
  throw createError({
    statusCode: 404,
    message: `Product not found for the id: ${id}`,
  });
}
</script>

<style lng="css" scoped></style>
