/**
 * chart-components 图表尺寸自适应钩子
 */
import { onMounted, onBeforeUnmount, nextTick, type Ref } from 'vue'
import type { ECharts } from 'echarts'

interface UseChartResizeOptions {
  immediate?: boolean
  debounceTime?: number
}

interface UseChartResizeReturn {
  initChart: (instance?: ECharts) => Promise<void>
  resize: () => void
}

/**
 * 图表尺寸自适应钩子
 * @param container - 容器引用
 * @param options - 配置选项
 * @returns 引用和方法
 */
export function useChartResize(
  container: Ref<HTMLElement | null>,
  options: UseChartResizeOptions = {}
): UseChartResizeReturn {
  let chart: ECharts | null = null
  let resizeObserver: ResizeObserver | null = null
  const { immediate = true, debounceTime = 100 } = options

  let resizeTimer: NodeJS.Timeout | null = null

  // 重置大小的函数
  const resize = (): void => {
    if (!chart || !chart.resize) return

    if (resizeTimer) {
      clearTimeout(resizeTimer)
    }

    resizeTimer = setTimeout(() => {
      chart?.resize()
    }, debounceTime)
  }

  // 初始化图表的函数
  const initChart = async (instance?: ECharts): Promise<void> => {
    if (instance) {
      chart = instance
    }
    if (!chart) return

    await nextTick()

    // 设置观察器
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(resize)

      if (container.value) {
        resizeObserver.observe(container.value)
      }
    } else {
      // 兼容旧浏览器
      window.addEventListener('resize', resize)
    }

    // 初始调整大小
    if (immediate) {
      resize()
    }
  }

  // 组件挂载时
  onMounted(() => {
    if (chart) {
      initChart()
    }
  })

  // 组件卸载前
  onBeforeUnmount(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    } else {
      window.removeEventListener('resize', resize)
    }

    if (resizeTimer) {
      clearTimeout(resizeTimer)
      resizeTimer = null
    }

    chart = null
  })

  return {
    initChart,
    resize
  }
}

export default useChartResize
