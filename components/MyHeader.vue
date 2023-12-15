<script setup lang="ts">
const imagesSource = import.meta.glob("~/assets/images/*.jpg", {
  as: "url",
  eager: true,
})

const images = Object.entries(imagesSource).map((image, key) => {
  return image[0].split("/").pop()
})
</script>

<template>
  <div
    class="columns-1 md:columns-2 xl:columns-3 gap-1 max-w-7xl space-y-1 mx-auto">
    <NuxtImg
      v-for="image in images"
      :src="image"
      format="webp"
      loading="lazy"
      class="h-min w-full"
      width="600" />
  </div>
</template>
