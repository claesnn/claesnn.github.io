<script setup lang="ts">
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}
</script>

<template>
  <Container>
    <ContentList
      path="/blog"
      v-slot="{ list }">
      <div
        class="mb-8"
        v-for="blog in list"
        :key="blog._path">
        <span class="uppercase text-xs text-slate-400">{{
          formatDate(blog.createdAt)
        }}</span>
        <h2 class="font-[Kurale] text-3xl mb-2">{{ blog.title }}</h2>
        <p class="mb-2">{{ blog.description }}</p>
        <p class="text-sm">
          <NuxtLink
            :to="blog._path"
            class="uppercase font-bold text-slate-700 mr-2"
            >Read more</NuxtLink
          >
        </p>
      </div>
    </ContentList>
  </Container>
</template>
