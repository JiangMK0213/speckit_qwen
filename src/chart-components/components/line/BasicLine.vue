<template>
  <div class="chart-container" ref="containerRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, type Ref } from 'vue'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'
import { useChartResize } from '../../hooks'
import type { BaseChartProps, ChartEvent } from '../../types'

// 组件名称
defineOptions({
  name: 'BasicLine'
})

// 定义事件
const emit = defineEmits<{
  change: [event: ChartEvent]
}>()

// 定义属性
const props = withDefaults(defineProps<BaseChartProps>(), {
  data: () => [
    { name: '一月', value: 120 },
    { name: '二月', value: 200 },
    { name: '三月', value: 150 },
    { name: '四月', value: 80 },
    { name: '五月', value: 70 },
    { name: '六月', value: 110 }
  ],
  options: () => ({})
})

const containerRef: Ref<HTMLElement | null> = ref(null)
const { initChart: initResize } = useChartResize(containerRef)

let chartInstance: ECharts | null = null

// 初始化图表
function initChart(): void {
  if (!containerRef.value) return

  chartInstance = echarts.init(containerRef.value)
  initResize(chartInstance)
  updateChart()
}

// 更新图表
function updateChart(): void {
  if (!chartInstance) return

  const options = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'left',
      textStyle: {
        fontSize: '0.8rem',
      },
      data: ['示例数据'],
      selectedMode: true
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        fontSize: '0.8rem',
      },
      data: props.data.map((item: any) => item.name)
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: '0.8rem',
      },
    },
    series: [
      {
        name: '示例数据',
        type: 'line',
        data: props.data.map((item: any) => item.value),
        smooth: true
      }
    ],
    ...props.options
  }

  chartInstance.setOption(options)

  // 添加图例选中状态改变的事件监听
  chartInstance.off('legendselectchanged')
  chartInstance.on('legendselectchanged', (params: any) => {
    emit('change', {
      name: params.name,
      selected: params.selected,
      type: 'legendselectchanged'
    })
  })
}

// 监听数据变化
watch(() => props.data, updateChart, { deep: true })
watch(() => props.options, updateChart, { deep: true })

onMounted(() => {
  initChart()
})

onUnmounted(() => {
  chartInstance?.dispose()
})
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
}
</style>
