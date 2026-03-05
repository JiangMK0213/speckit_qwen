# chart-components 图表组件开发

基于 Vue 3 + ECharts + Typescript 的图表组件开发项目，可作为独立工程开发，支持多团队协作开发。

## 开发指南

```bash
# 安装依赖
pnpm install

# 启动开发服务
pnpm dev
```

## 目录结构

```
chart-components/
├── components/        # 图表组件
│   ├── bar/           # 柱状图
│   ├── line/          # 折线图
│   ├── pie/           # 饼图
│   └── index.ts       # 组件统一导出
├── preview/           # 图表开发预览服务
├── hooks/             # 通用 hooks
├── types/             # 类型定义
├── utils/             # 工具函数
├── vite.config.ts     # 开发服务配置
├── package.json       # 包管理
└── index.ts           # 主入口文件
```

## 开发规范

### 新组件开发流程

1. 在 `components/` 目录下创建新图表组件，并在主入口文件统一导出。
2. 在预览页面的图表列表中引入图表组件进行开发调试。
> 可参考 `BasicBar`、`BasicLine`、`BasicPie` 示例图表组件进行开发。

### 组件接口规范
图表组件统一约定接收 `data` 和 `options` 参数，并对外提供 `change` 事件。
可视具体情况在此基础上扩展接口。

```javascript
// 基础参数
const props = defineProps({
  data: {
    type: Array,
    default: () => [
      { name: '类别1', value: 12 },
      { name: '类别2', value: 19 }
    ]
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

// 基础事件
const emit = defineEmits(['change'])
```


### 图表自适应
#### useChartResize

`useChartResize` 钩子提供了图表尺寸自适应调整的功能，可参考示例图表组件中的使用。

#### 尺寸单位
ECharts 配置项中涉及尺寸单位相关的配置，建议使用 `rem` 作为单位，以使图表中的文字等大小能根据所在项目中的根元素字体大小等比例缩放：
```javascript
const options = {
  legend: {
    left: 'left',
    textStyle: {
      fontSize: '0.8rem',
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: '0.8rem',
    },
  }
}
```

### 组件使用方式

```html
<template>
  <BasicBar
    :data="data"
    :options="options"
    @change="handleChartChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { BasicBar } from '@/chart-components'

const data = ref([
  { name: '一月', value: 120 },
  { name: '二月', value: 200 },
  { name: '三月', value: 150 },
  { name: '四月', value: 80 },
  { name: '五月', value: 70 },
  { name: '六月', value: 110 }
])

const options = ref({
  title: {
    text: '月度数据统计',
    left: 'center'
  },
})

function handleChartChange(event) {
  console.log('图表事件:', event)
}
</script>
```
