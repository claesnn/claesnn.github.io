<script setup lang="ts">
import images from "@/data/getImages.server"
</script>

<template>
  <div
    class="grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4 grid-flow-row-dense max-w-7xl mx-auto">
    <NuxtLink
      v-for="image in images"
      :key="image?.src"
      :to="'/photos/' + image?.url"
      class="flex flex-col overflow-hidden">
      <NuxtImg
        :src="image?.src"
        format="webp"
        loading="lazy"
        fit="cover"
        sizes="600" />
    </NuxtLink>
  </div>
</template>
