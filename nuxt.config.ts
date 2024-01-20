// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    dir: "assets/images",
  },
  css: ["~/assets/css/tailwind.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    ["@nuxtjs/google-fonts", { families: { Inter: true, Kurale: true } }],
    "@nuxtjs/sitemap",
    "@nuxt/content",
  ],
})