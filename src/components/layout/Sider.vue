<template>
  <aside class="layout-sider">
    <div class="layout-sider-children">
      <slot />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'
import type { LayoutContext } from '@/types/component'

const layout = inject<LayoutContext>('layout')

onMounted(() => {
  layout?.addSider()
})
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.layout-sider {
  position: relative;
  width: $sider-width;
  height: 100%;
  min-height: 0;
  overflow: auto;
  border-radius: $border-radius-m;
  @include glass-effect(50px, $sider-bg);

  .layout-sider-children {
    height: 100%;
    padding: $sider-padding;
  }
}
</style>
