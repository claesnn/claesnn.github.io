<script setup lang="ts">
const count = ref(0)
const increment = () => count.value++

const x = ref(0)
const y = ref(0)

const newPosition = (event: MouseEvent) => {
  console.log(event.offsetX, event.offsetY)
  if (event.offsetX > 80) {
    x.value -= 40
  } else {
    x.value += 40
  }
  if (event.offsetY > 40) {
    y.value -= 40
  } else {
    y.value += 40
  }
}
</script>

<template>
  <div class="fixed">
    <div
      @mouseover="newPosition"
      class="absolute p-10"
      :style="`left: ${x}px; top: ${y}px`">
      <button
        @click="increment"
        class="p-5 w-40 h-20 bg-slate-950 text-slate-100 rounded-md">
        Click me: {{ count }}
      </button>
    </div>
  </div>
</template>
