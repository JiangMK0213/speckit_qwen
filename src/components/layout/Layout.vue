<template>
  <div :class="['layout', { 'layout-has-padding': !isRootLayout, 'layout-has-sider': hasSider }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, inject, computed } from 'vue'
import type { LayoutContext } from '@/types/component'

const parentLayout = inject<LayoutContext | null>('layout', null)
const isRootLayout = computed(() => !parentLayout)

const hasSider = ref(false)

provide('layout', {
  addSider: () => {
    hasSider.value = true
  }
} as LayoutContext)
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.layout {
  width: 100%;
  height: 100%;
  min-height: 0;
  @include flex(column);
  flex: auto;
  background: transparent;

  &.layout-has-padding {
    padding: 10px;
  }

  &.layout-has-sider {
    flex-direction: row;
  }
}
</style>
