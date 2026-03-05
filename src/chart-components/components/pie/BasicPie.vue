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
  name: 'BasicPie'
})

// 定义事件
const emit = defineEmits<{
  change: [event: ChartEvent]
}>()

// 定义属性
const props = withDefaults(defineProps<BaseChartProps>(), {
  data: () => [
    { name: '类别1', value: 335 },
    { name: '类别2', value: 310 },
    { name: '类别3', value: 274 },
    { name: '类别4', value: 235 },
    { name: '类别5', value: 400 }
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
      text: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      left: 'left',
      textStyle: {
        fontSize: '0.8rem',
      },
      data: props.data.map((item: any) => item.name),
      selectedMode: true
    },
    series: [
      {
        name: '示例数据',
        type: 'pie',
        radius: '50%',
        center: ['50%', '60%'],
        label: {
          fontSize: '0.7rem',
        },
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
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
