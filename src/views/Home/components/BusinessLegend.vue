<template>
  <div v-if="legends.length > 0" class="legends">
    <LegendGroup v-if="isGroupMode" :data="(legends as LegendGroupData[])" @select="handleSelect" />
    <Legend
      v-else
      direction="vertical"
      :data="(legends as LegendItemData[])"
      @select="values => handleSelect('', values)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LegendGroup, Legend } from '@/components'
import type { LegendGroupData, LegendItemData, LegendData } from '@/types/component'

const props = defineProps<{
  legends: LegendData[]
}>()

const emit = defineEmits<{
  (e: 'select-legend', data: { type: string; value: string[] }): void
}>()

const isGroupMode = computed(() => props.legends.length > 0 && 'items' in props.legends[0])

const handleSelect = (type: string, values: string[]) => {
  emit('select-legend', { type, value: values })
}
</script>
