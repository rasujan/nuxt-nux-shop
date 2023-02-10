<template>
  <div class="m-auto mt-36 max-w-md">
    <div class="card text-center py-10">
      <h1 class="text-red-500 text-7xl">{{ error.statusCode }}</h1>
      <h2 class="text-slate-600 text-5xl my-8">Oops</h2>
      <h3 class="text-slate-500 text-xl">{{ error.message }}</h3>

      <button class="btn" type="button" @click="handleClearError">
        Go Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["error"]);

const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped></style>
