<!-- file name does not matter here as you need to insert it manually -->

<template>
  <div>
    <header class="border-b-green-300 border-b-2">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink class="font-bold" to="/"> Nux Shop</NuxtLink>

        <ul class="flex gap-4 p-2">
          <li>
            <NuxtLink to="/"> Home</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about"> About Us</NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="btn bg-teal-700 p-2 text-gray-300 br-2 rounded-md"
              to="/products"
            >
              Products</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>
  </div>

  <div class="container p-2 mx-auto">
    <!-- This is where you page content will go. This is like the Child -->
    <!-- Slot is a built in component in nuxt -->
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(34, 207, 149);
}
</style>
