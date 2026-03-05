<template>
  <main class="layout-content">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.layout-content {
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
  pointer-events: none;

  :deep(> *) {
    pointer-events: auto;
  }
}
</style>
