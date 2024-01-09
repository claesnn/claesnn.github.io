<script setup lang="ts">
const route = useRoute()
const image = route.params.id
</script>

<template>
  <Container>
    <NuxtImg
      :src="image + '.jpg'"
      format="webp"
      loading="lazy"
      class="mx-auto max-h-[calc(100vh-150px)]"
      fit="cover"
      sizes="1200" />
  </Container>
</template>
