<script setup lang="ts">
const route = useRoute()
const blog = route.params.id
</script>

<template>
  <Container>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="font-[Kurale] xl:text-8xl lg:text-6xl text-4xl mb-4">
          {{ doc.title }}
        </h1>
        <h2
          class="font-[Kurale] xl:text-3xl lg:text-2xl text-xl mb-4 text-slate-700">
          {{ doc.description }}
        </h2>
        <ContentRenderer
          class="space-y-2"
          :value="doc" />
      </article>
    </ContentDoc>
  </Container>
</template>
