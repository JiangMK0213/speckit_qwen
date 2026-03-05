<template>
  <div class="chart-app">
    <header class="header">图表开发预览</header>

    <div class="layout">
      <aside class="sidebar">
        <div class="sidebar-title">图表组件</div>
        <!-- 图表预览列表 -->
        <nav class="component-nav">
          <button
            v-for="chart in chartList"
            :key="chart.id"
            :class="['nav-item', { active: activeChart === chart.id }]"
            :title="chart.name"
            @click="setActiveChart(chart.id)"
          >
            {{ chart.name }}
          </button>
        </nav>
      </aside>

      <main class="main" ref="mainRef">
        <!-- 图表预览 -->
        <div class="chart-preview" :style="{ width: isNaN(previewWidth) ? previewWidth : previewWidth + 'px' }" ref="chartPreviewRef">
          <div class="preview-header">
            {{ currentChartName }}
          </div>
          <component
            :is="currentChartComponent"
            :data="currentData"
            :options="currentOptions"
            @change="handleChartChange"
          />
        </div>
        <!-- 调整宽度 -->
        <div class="resizer" @mousedown="startResize"></div>
        <!-- 代码模板 -->
        <div class="code-template">
          <div class="code-template-header">
            <span>当前代码</span>
            <button class="copy-btn" @click="copyCode">复制代码</button>
          </div>
          <div class="code-editor" ref="editorContainer"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import * as monaco from 'monaco-editor'

const mainRef = ref(null)
const chartPreviewRef = ref(null)
const previewWidth = ref('60%') // 初始宽度
const isResizing = ref(false)

let startX = 0
let startWidth = 0

// 图表列表
const chartList = ref([
  { id: 'basicBar', name: '基础柱状图' },
  { id: 'basicLine', name: '基础折线图' },
  { id: 'basicPie', name: '基础饼图' }
])

// 当前图表
const activeChart = ref(chartList.value[0]?.id)

const currentChartName = computed(() => {
  return chartList.value.find(chart => chart.id === activeChart.value)?.name
})

const currentChartComponent = computed(() => {
  return activeChart.value.charAt(0).toUpperCase() + activeChart.value.slice(1)
})

// 自定义图表数据
const sampleData = {
  basicBar: [
    { name: '一月', value: 120 },
    { name: '二月', value: 200 },
    { name: '三月', value: 150 },
    { name: '四月', value: 80 },
    { name: '五月', value: 70 },
    { name: '六月', value: 110 }
  ],
  basicLine: [
    { name: '一月', value: 120 },
    { name: '二月', value: 200 },
    { name: '三月', value: 150 },
    { name: '四月', value: 80 },
    { name: '五月', value: 70 },
    { name: '六月', value: 110 }
  ],
  basicPie: [
    { name: '产品A', value: 35 },
    { name: '产品B', value: 28 },
    { name: '产品C', value: 20 },
    { name: '产品D', value: 12 },
    { name: '产品E', value: 5 }
  ]
}

const currentData = ref(sampleData[activeChart.value])

// 自定义图表配置
const currentOptions = computed(() => {
  const baseOptions = {
    tooltip: {
      trigger: activeChart.value === 'basicPie' ? 'item' : 'axis'
    }
  }
  return baseOptions
})

function setActiveChart(chartId) {
  activeChart.value = chartId
  currentData.value = sampleData[chartId]
  nextTick(() => {
    if (editor) {
      editor.setValue(currentUsageCode.value)
    }
  })
}

function handleChartChange(params) {
  console.log('图表事件:', params)
}

function startResize(e) {
  isResizing.value = true
  startX = e.clientX
  startWidth = chartPreviewRef.value.clientWidth

  // 添加全局事件监听
  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
}

function handleResize(e) {
  if (!isResizing.value) return

  const diff = e.clientX - startX
  const newWidth = startWidth + diff

  // 设置最小和最大宽度限制
  previewWidth.value = Math.max(0, Math.min(newWidth, mainRef.value.clientWidth))
}

function stopResize() {
  isResizing.value = false

  // 移除全局事件监听
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
}

// 代码编辑器
const editorContainer = ref(null)
let editor = null

// 编辑器配置
const editorOptions = {
  readOnly: true,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  fontSize: 12,
  lineNumbers: 'on',
  automaticLayout: true,
  tabSize: 2,
  theme: 'vs',
  language: 'javascript'
}

// 初始化编辑器
function initEditor() {
  if (editorContainer.value && !editor) {
    editor = monaco.editor.create(editorContainer.value, {
      value: currentUsageCode.value,
      ...editorOptions
    })
  }
}

onMounted(() => {
  initEditor()
})

onUnmounted(() => {
  // 清理事件监听
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)

  // 销毁编辑器实例
  if (editor) {
    editor.dispose()
    editor = null
  }
})

// 当前图表代码模板
const currentUsageCode = computed(() => {
  const componentName = currentChartComponent.value
  return `<template>
  <${componentName}
    :data="data"
    :options="options"
  />
</template>

<script setup>
import { ref } from 'vue'
import { ${componentName} } from '@/chart-components'

const data = ref(${JSON.stringify(currentData.value, null, 2)})

const options = ref(${JSON.stringify(currentOptions.value, null, 2)})
<\/script>`
})

// 复制代码
async function copyCode() {
  if (editor) {
    const code = editor.getValue()
    try {
      await navigator.clipboard.writeText(code)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }
}
</script>

<style scoped lang="scss">
.chart-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.header {
  border-bottom: 1px solid #e5e5e5;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
}

.layout {
  flex: 1;
  display: flex;
  overflow: hidden;
  font-size: 0.875rem;
}

.sidebar {
  width: 200px;
  border-right: 1px solid #e5e5e5;
}

.sidebar-title {
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 1rem;
}

.component-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: #f8f9fa;
    color: #333;
  }

  &.active {
    background: #e3f2fd;
    color: #1976d2;
    font-weight: 500;
  }
}

.main {
  flex: 1;
  display: flex;
  overflow: auto;
}

.chart-preview {
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chart-container {
  flex: 1;
  overflow: hidden;
  user-select: none;
}

.resizer {
  width: 5px;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  height: 100%;
  background: #e5e5e5;
  cursor: col-resize;

  &:hover {
    border-color: #f0f0f0;
  }
}

.code-template {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &-header {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copy-btn {
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    background: #fff;
    color: #606266;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }

  .code-editor {
    flex: 1;
    overflow: hidden;
  }
}
</style>

