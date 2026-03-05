<template>
  <div class="tool-bar">
    <div
      v-for="item in toolItems"
      :key="item.icon"
      class="tool-item"
      :class="{ active: item.active }"
      @click="handleToolClick(item)"
    >
      <SvgIcon class="tool-item-icon" :url="item.icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ToolItem } from '@/types/component'

const props = defineProps<{
  items: ToolItem[]
}>()

const emit = defineEmits<{
  (e: 'mode-change', value: { mode: string; value: boolean }): void
}>()

const toolItems = ref<ToolItem[]>([])

watch(
  () => props.items,
  items => {
    toolItems.value = JSON.parse(JSON.stringify(items))
    // 初始化时触发默认激活的模式
    toolItems.value.forEach(item => {
      emit('mode-change', { mode: item.type, value: item.active })
    })
  },
  { immediate: true }
)

const handleToolClick = (item: ToolItem) => {
  item.active = !item.active
  emit('mode-change', { mode: item.type, value: item.active })
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.tool-bar {
  @include flex(column);
  gap: 8px;
  border-radius: $border-radius;
}

.tool-item {
  width: 48px;
  height: 30px;
  @include flex-center;
  @include glass-effect(50px, $btn-bg);
  border-radius: $border-radius;
  cursor: pointer;
  transition: all 0.3s;
}

.tool-item:hover {
  background: $btn-hover-bg;
  color: $text-color-active;
}

.tool-item.active {
  background: $btn-active-bg;
  color: $text-color-active;
}
</style>
