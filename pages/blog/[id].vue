<script setup lang="ts">
const route = useRoute()
const blog = route.params.id
</script>

<template>
  <Container>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="font-[Kurale] text-5xl mb-4">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </Container>
</template>
