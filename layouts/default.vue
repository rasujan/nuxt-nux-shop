<!-- default.vue means default layout -->

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/"> Home</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/products"> Products</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about"> About Us</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>

  <div>
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
