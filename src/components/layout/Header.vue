<template>
  <header class="layout-header">
    <!-- 标题 -->
    <slot name="title" />
    <!-- 默认插槽 -->
    <slot />
    <div class="header-right">
      <!-- 右侧插槽 -->
      <slot name="right" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.layout-header {
  flex: 0 0 auto;
  height: $header-height;
  padding: $header-padding;
  @include flex-y-center;
  justify-content: space-between;
  @include glass-effect(50px, $header-bg);
  z-index: 1;
}

.header-right {
  @include flex-y-center;
  gap: 16px;
}
</style>
