<template>
  <div class="legend-groups">
    <div v-for="group in legendGroups" :key="group.id" class="legend-group">
      <div class="group-title" @click="handleGroupSelect(group)">
        <div class="group-name">{{ group.name }}</div>
        <div class="group-radio" :class="{ active: group.active }" />
      </div>
      <Legend
        :data="group.items"
        direction="horizontal"
        :style="{ pointerEvents: group.active ? 'auto' : 'none' }"
        @select="values => handleItemSelect(group, values)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Legend from './Legend.vue'
import type { LegendGroupData } from '@/types/component'

const props = defineProps<{
  data: LegendGroupData[]
}>()

const emit = defineEmits<{
  (e: 'select', type: string, values: string[]): void
}>()

const legendGroups = ref<LegendGroupData[]>([])

watch(
  () => props.data,
  data => {
    legendGroups.value = JSON.parse(JSON.stringify(data))
    if (legendGroups.value.length > 0) {
      const firstGroup = legendGroups.value[0]
      firstGroup.active = true
      firstGroup.items.forEach(item => (item.active = true))
      emit(
        'select',
        firstGroup.name,
        firstGroup.items.map(item => item.name)
      )
    }
  },
  { immediate: true }
)

const handleGroupSelect = (group: LegendGroupData) => {
  // 取消其他组的选中状态
  legendGroups.value.forEach(g => {
    if (g.id !== group.id) {
      g.active = false
      g.items = g.items.map(item => ({ ...item, active: false }))
    }
  })

  group.active = true
  group.items = group.items.map(item => ({ ...item, active: true }))
  emit(
    'select',
    group.name,
    group.items.map(item => item.name)
  )
}

const handleItemSelect = (group: LegendGroupData, values: string[]) => {
  emit('select', group.name, values)
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.legend-groups {
  @include flex(column);
  gap: 20px;
}

.legend-group {
  width: 240px;
  font-size: 14px;

  .group-title {
    @include flex-y-center;
    justify-content: space-between;
    height: 20px;
    padding-left: 6px;
    padding-right: 10px;
    margin-bottom: 10px;
    @include glass-effect;
    background: $panel-bg;
    border-left: 3px solid $text-color-regular;
    border-radius: 0 2px 2px 0;
    color: $text-color-regular;
    cursor: pointer;
  }

  .group-name {
    flex: 1;
  }

  .group-radio {
    width: 12px;
    height: 12px;
    border: 1px solid $text-color-regular;
    border-radius: 50%;
    transition: all 0.3s;

    &.active {
      background: $text-color-regular;
    }
  }
}
</style>
