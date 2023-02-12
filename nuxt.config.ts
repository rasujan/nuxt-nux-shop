// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/style.scss"],
  app: {
    head: {
      title: "Nuxt Shop",
      meta: [
        {
          name: "description",
          content: "This is a shopping website. Nux, Bags, Nepal, Kathmandu",
        },
      ],
    },
  },
  build: {
    transpile: ["@urql/vue"],
  },
});
