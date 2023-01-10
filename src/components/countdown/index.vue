<template>
  <div class="countdown">{{ counter }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const counter = ref(0)
let timer = -1
const countdown = () => {
  counter.value = 10
  timer = setInterval(() => {
    counter.value--
    if (counter.value === 0) {
      clearInterval(timer)
    }
  }, 1000)
}
defineExpose({
  countdown
})
</script>

<style lang="less" scoped>
.countdown {
  width: 30px;
  height: 30px;
}
</style>
