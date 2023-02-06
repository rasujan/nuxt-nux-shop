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
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam amet
      eveniet quo eligendi eius assumenda sed harum doloribus fugiat! Ad sint
      harum nam porro dicta fuga veritatis aliquam aliquid sed.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div {
  margin: 0 auto;
  padding: 1rem 2rem;
}

h1 {
  font-size: 2rem;
  color: rgb(34, 207, 149);
}
</style>
