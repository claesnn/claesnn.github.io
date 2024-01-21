<script setup lang="ts">
const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <div>
    <button
      @click="increment"
      class="px-3 py-1 my-3 bg-slate-950 text-slate-100 rounded-md">
      Click me to increase my count {{ count }}
    </button>
  </div>
</template>
