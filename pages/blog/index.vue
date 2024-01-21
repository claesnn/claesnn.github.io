<script setup lang="ts">
useSeoMeta({
  title: "Blogs | Claes Nymand Nilsson",
  description:
    "Blogs from Claes Nymand Nilsson on Software, Photography and life",
})

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
        v-for="(blog, index) in list"
        :key="blog._path">
        <hr
          v-if="index !== 0"
          class="border-slate-200 my-5" />
        <NuxtLink :to="blog._path">
          <span class="uppercase text-xs text-slate-400">{{
            formatDate(blog.createdAt)
          }}</span>
          <h2 class="font-[Kurale] text-3xl mb-2">{{ blog.title }}</h2>
          <p class="mb-2">{{ blog.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </Container>
</template>
