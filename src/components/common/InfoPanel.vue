<template>
  <div v-if="modelValue" class="info-panel" :style="{ width }">
    <div class="info-panel-header">
      {{ title }}
      <el-icon v-if="closeable ?? true" class="info-panel-close" @click="handleClose">
        <Close />
      </el-icon>
    </div>
    <div class="info-panel-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'

defineProps<{
  modelValue: boolean
  title: string
  closeable?: boolean
  width?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update:modelValue', value: boolean): void
}>()

const handleClose = () => {
  emit('close')
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.info-panel {
  width: 400px;
  flex: 0 0 auto;
  border-radius: $border-radius;
  @include glass-effect;
  background-color: $panel-bg;
  overflow: hidden;
}

.info-panel-header {
  height: $panel-header-height;
  @include flex-y-center;
  justify-content: space-between;
  padding: $panel-header-padding;
  background-color: $panel-header-bg;
  font-size: $panel-title-font-size;
}

.info-panel-content {
  padding: $panel-content-padding;
  min-height: 100px;
}

.info-panel-close {
  cursor: pointer;
}
</style>
