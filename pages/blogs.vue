<script setup lang="ts"></script>

<template>
  <Container>
    <ContentList
      path="/blog"
      v-slot="{ list }">
      <div
        class="mb-6 space-y-1"
        v-for="blog in list"
        :key="blog._path">
        <h2 class="font-[Kurale] text-3xl">{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
        <p>
          <NuxtLink
            :to="blog._path"
            class="uppercase text-sm font-bold text-slate-700"
            >Read more</NuxtLink
          >
        </p>
      </div>
    </ContentList>
  </Container>
</template>
