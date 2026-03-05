<template>
  <span class="time-display">{{ currentTime }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import dayjs from 'dayjs'

const props = withDefaults(
  defineProps<{
    format?: string
  }>(),
  {
    format: 'YYYY-MM-DD HH:mm:ss'
  }
)

const currentTime = ref('')

const updateTime = () => {
  currentTime.value = dayjs().format(props.format)
}

let timer: NodeJS.Timeout | undefined

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style lang="scss" scoped>
.time-display {
  min-width: 168px;
}
</style>
