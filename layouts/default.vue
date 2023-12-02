<template>
  <NuxtLoadingIndicator />
  <div class="border-b">
    <header class="max-w-4xl mx-auto px-10 py-5 flex items-center">
      <span class="mr-10 text-xl font-bold">ClaesNN</span>
      <nav class="space-x-4">
        <NuxtLink to="/">bio</NuxtLink>
        <NuxtLink href="/photography/">photography</NuxtLink>
        <NuxtLink href="/projects/">projects</NuxtLink>
        <NuxtLink href="/blog/">blog</NuxtLink>
        <NuxtLink href="/contact/">contact</NuxtLink>
      </nav>
    </header>
  </div>
  <main class="max-w-4xl mx-auto px-10 py-5">
    <slot />
  </main>
</template>

<style lang="postcss">
.router-link-exact-active {
  @apply underline;
}
</style>
