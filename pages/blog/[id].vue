<script setup lang="ts">
const route = useRoute()
const blog = route.params.id
</script>

<template>
  <Container>
    {{ blog }}
  </Container>
</template>
