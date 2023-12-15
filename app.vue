<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      href: "/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
  ],
})
</script>

<template>
  <nav class="lg:mt-4 mb-4 p-5 font-[Inter]">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink
        to="/"
        class="!no-underline">
        <h1
          class="font-[Kurale] text-2xl xl:text-5xl text-gray-900 no-underline">
          Claes Nymand Nilsson
        </h1>
      </NuxtLink>
      <div class="space-x-5">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/photography">Photography</NuxtLink>
      </div>
    </div>
  </nav>
  <main class="p-5 font-[Inter]">
    <NuxtPage />
  </main>
</template>

<style scoped>
.router-link-exact-active {
  @apply underline;
}
</style>
