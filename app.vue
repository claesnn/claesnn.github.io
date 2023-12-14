<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
})
</script>

<template>
  <nav class="mb-4 p-5 font-[Inter]">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="font-[Kurale] text-2xl xl:text-5xl text-gray-900">
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
