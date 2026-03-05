/**
 * chart-components 类型定义
 */
import type { EChartsOption } from 'echarts'

// 图表组件基础属性接口
export interface BaseChartProps {
  data: any[]
  options?: EChartsOption
}

// 图表事件类型
export interface ChartEvent {
  type: string
  [key: string]: any
}
