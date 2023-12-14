<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
})
</script>

<template>
  <nav class="mb-4 border-b p-5 bg-slate-50">
    <div class="max-w-7xl mx-auto space-x-4 flex items-center">
      <NuxtLink to="/">
        <img
          src="/favicon-32x32.png"
          alt="Logo"
          class="w-8 h-8 inline-block mr-3" />
      </NuxtLink>
      <NuxtLink to="/photography">Photography</NuxtLink>
    </div>
  </nav>
  <main class="p-5">
    <NuxtPage />
  </main>
</template>
