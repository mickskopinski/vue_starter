// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  image: {
    dir: "assets/images",
  },
});
