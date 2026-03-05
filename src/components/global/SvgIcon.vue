<template>
  <i class="svg-icon" :style="iconStyle"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})

const iconStyle = computed(() => ({
  'background-color': props.color,
  '-webkit-mask-image': `url("${props.url}")`,
  'mask-image': `url("${props.url}")`
}))
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.svg-icon {
  @include svg-icon-mask;
  width: 1em;
  height: 1em;
  transition: background-color 0.2s;
  cursor: pointer;
}
</style>
