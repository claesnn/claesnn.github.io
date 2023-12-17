<script setup lang="ts">
const route = useRoute()
const image = route.params.id
</script>

<template>
  <div class="flex">
    <NuxtImg
      :src="image + '.jpg'"
      format="webp"
      loading="lazy"
      class="mx-auto max-h-[calc(100vh-150px)]"
      fit="inside"
      sizes="sm:800px md:1000px lg:1200px" />
  </div>
</template>
