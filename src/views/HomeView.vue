<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
import TheWelcome from "../components/TheWelcome.vue"
const count = useCounterStore()
</script>

<template>
  <main>
    <button
      class="m-5 p-3 bg-slate-200 rounded"
      @click="count.increment()">
      Increment ({{ count.count }})
    </button>
    <TheWelcome />
  </main>
</template>
