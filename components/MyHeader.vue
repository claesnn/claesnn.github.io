<script setup lang="ts">
import images from "@/data/getImages.server"
</script>

<template>
  <div
    class="grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4 grid-flow-row-dense max-w-7xl mx-auto">
    <NuxtImg
      v-for="image in images"
      :src="image?.src"
      format="webp"
      loading="lazy"
      fit="cover"
      width="600" />
  </div>
</template>
