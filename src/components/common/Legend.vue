<template>
  <div class="legend" :class="direction">
    <div
      v-for="item in legendItems"
      :key="item.name"
      class="legend-item"
      :class="{ active: item.active }"
      @click="handleSelect(item)"
    >
      <span class="color-block" :style="{ backgroundColor: item.active ? item.color : 'rgba(255,255,255,0.2)' }" />
      <span class="label">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { LegendItemData } from '@/types/component'

const props = withDefaults(
  defineProps<{
    data: LegendItemData[]
    direction?: 'horizontal' | 'vertical'
  }>(),
  {
    direction: 'horizontal'
  }
)

const emit = defineEmits<{
  (e: 'select', values: string[]): void
}>()

const legendItems = ref<LegendItemData[]>([])

watch(
  () => props.data,
  data => {
    legendItems.value = JSON.parse(JSON.stringify(data))
  },
  { immediate: true }
)

const handleSelect = (item: LegendItemData) => {
  item.active = !item.active
  emit(
    'select',
    legendItems.value.filter(item => item.active).map(item => item.name)
  )
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.legend {
  @include flex;
  flex-wrap: wrap;
  gap: 20px;
  color: $text-color-regular;

  &.vertical {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  &.horizontal {
    flex-direction: row;
  }
}

.legend-item {
  @include flex-y-center;
  gap: 6px;
  font-size: 14px;
  cursor: pointer;

  .color-block {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}
</style>
