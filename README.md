# ThingJS 前端项目框架
这是一个集成 ThingJS Editor 资源的 Vue 3 前端项目框架。

## 技术栈

- **核心框架**：Vue 3
- **开发语言**：TypeScript
- **构建工具**：Vite 6
- **状态管理**：Pinia
- **路由管理**：Vue Router 4
- **UI 组件库**：Element Plus
- **HTTP 请求**：Axios
- **CSS 预处理器**：SCSS
- **代码规范**：ESLint + Prettier
- **工具库**：
  - lodash-es：实用工具库
  - echarts：数据可视化图表库
  - dayjs：轻量级日期处理库

### 功能说明
- **3D 场景集成**：与 ThingJS Editor 无缝集成，轻松加载 3D 场景
- **UI 组件**：集成 Element Plus 组件库和自定义通用组件，包括协助页面级整体布局的布局组件
- **业务组件**：内置菜单导航、工具栏、业务菜单、图例等业务组件，可通过配置便捷展示组件内容
- **事件管理**：封装事件总线和事件类型管理，支持界面与 3D 场景之间的事件通信
- **云瞰集成**：对接云瞰工作台，封装接口服务
- **分辨率适配**：自动适配不同屏幕尺寸缩放
- **主题切换**：支持明暗主题切换，提供自定义主题配置
- **国际化**：集成 vue-i18n 框架，支持多语言切换与本地化

## 开发指南

#### 环境要求

- Node.js >= 16.0.0
- pnpm >= 7.0.0

#### 初始化资源

项目工程中内置了一个编辑器项目资源，请先双击 `public/editor/sample` 中的 `myproj.thing` 打开该项目，从而对项目资源进行初始化。

#### 安装依赖

```bash
pnpm install
```

#### 启动开发服务

```bash
pnpm dev
```

#### 构建生产版本

```bash
pnpm build

# 构建分析
pnpm build:analyze
```

#### 预览生产构建

```bash
pnpm preview
```
<br>

## 项目目录结构

```
project-template/
├── coding-helper/    # AI 代码助手
├── dist/             # 构建输出目录
├── node_modules/     # 依赖包
├── public/           # 静态资源目录
├── src/              # 源代码目录
├── .env              # 开发环境配置
├── .env.production   # 生产环境配置
├── .eslintrc         # ESLint 配置
├── .prettierrc       # Prettier 配置
├── index.html        # HTML 入口文件
├── package.json      # 包管理
├── postcss.config.ts # 分辨率适配配置
├── tsconfig.json     # TypeScript 配置
└── vite.config.ts    # Vite 构建配置
```

### 静态资源目录 (public/)

```
public/
└── editor/           # ThingJS Editor 项目资源目录
    └── sample/         # 开发环境的项目资源文件
    └── dist/           # 生产环境的项目资源目录（项目资源从 ThingJS Editor 中导出）
        └── sample/       # 生产环境的项目资源文件
```

编辑器的项目资源路径需要在环境配置文件中进行指定，开发环境使用 `.env` 文件，生产环境使用 `.env.production` 文件。
环境配置文件中应包含 `VITE_SCENE_URL` 变量，指向编辑器项目资源的路径。

**开发环境配置示例：**

```
// .env
VITE_APP_TITLE = 'ThingJS Editor 示例项目 (开发环境)'
VITE_SCENE_URL = '/editor/sample'
```

**生产环境配置示例：**

```
// .env.production
VITE_APP_TITLE = 'ThingJS Editor 示例项目'
VITE_SCENE_URL = '/editor/dist/sample'
```

### 源代码目录 (src/)

```
src/
├── api/            # 请求封装
├── assets/         # 静态资源
│   ├── icons/      # 图标资源
│   └── images/     # 图片资源
├── chart-components/  # 图表组件库
├── components/     # 通用组件
│   ├── common/           # 按需引入的通用组件
│   ├── global/           # 全局注册的基础组件
│   ├── layout/           # 全局注册的布局组件
│   └── index.ts          # 统一导出
├── config/         # 项目配置
├── events/         # 事件管理
│   ├── event-bus.ts      # 事件总线
│   ├── event-types.ts    # 事件类型枚举
├── hooks/          # 自定义 Hooks
├── router/         # 路由配置
├── scene3d/        # 3D 核心代码
├── stores/         # Pinia 状态管理
├── styles/         # 全局样式
│   └── themes/           # 主题相关样式
│   ├── variables.scss    # 全局变量
│   ├── mixins.scss       # 混合器（封装可复用样式）
│   ├── element-plus.scss # Element Plus 样式覆盖
│   ├── index.scss        # 样式入口文件
├── types/          # TypeScript 类型定义
├── utils/          # 工具函数
├── views/          # 路由页面
│   ├── Error/          # 404 页面
│   └── Home/           # 首页
│       ├── components/   # 业务组件
│       ├── modules/      # 首页模块（子路由组件）
│       └── index.vue     # 首页入口
├── App.vue         # 根组件
└── main.ts         # 入口文件
```
<br>

## 将编辑器项目作为 Git 子模块来管理
为了便于对编辑器项目的独立管理，推荐将其转为 Git 子模块。
操作步骤如下：
##### 1. 在Gitlab或其他代码托管平台新建一个空仓库。

##### 2. 将编辑器项目（sample）内容推送到新仓库：
```bash
cd public/editor/sample  # 进入编辑器项目目录
git init
git remote add origin <新仓库地址>
git add .
git commit -m "初始化 sample 仓库"
git push -u origin main  # 或 master，取决于默认分支名
```

##### 3. 在主项目中删除原有 sample 目录：
```bash
cd ../../..  # 返回主项目目录
rm -rf public/editor/sample
git add .
git commit -m "移除 sample 目录准备转为子模块"
```

##### 4. 将新仓库添加为主项目的子模块：
```bash
git submodule add <新仓库地址> public/editor/sample
git commit -m "添加 sample 作为子模块"
```
<br>

#### 初始化子模块（其他开发者）
其他开发者需要执行以下命令来初始化已关联的子模块：
```bash
git submodule update --init
```

#### 更新子模块
##### 1. 拉取子模块最新内容
```bash
# 进入子模块目录
cd public/editor/sample

# 拉取更新
git pull origin main
```

##### 2. 提交子模块更新到主项目
```bash
# 返回主项目目录
cd ../../..

# 提交子模块更新
git add public/editor/sample
git commit -m "更新 sample 子模块版本"
```

<br>

## 组件系统

项目模板中集成了 Element Plus 组件库，并预置了部分通用组件和业务组件，通用组件目前包括布局组件、SVG图标组件、图例组件、信息面板组件、时间格式化展示组件、主题切换组件等。

#### 3D 场景组件
3D 场景组件会自动根据**环境配置文件**中的**编辑器项目资源路径**，来加载和展示对应的 3D 场景资源。可以在等待场景初始化完成后，继续编写代码操作 3D 场景。
```html
/* Scene3D.vue */
<template>
  <div id="scene-3d"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initScene3D } from '@/scene3d'

onMounted(async () => {
  // 初始化 3D 场景
  await initScene3D('scene-3d')

  // 创建一个立方体
  new THING.Box()
})
</script>
```

#### 布局组件
布局组件用于快速进行页面级整体布局，包含 Layout（弹性布局容器）、Header（顶部布局）、Content（内容部分）、Sider（侧边栏）、Footer（底部布局）。Layout 布局容器会对内部的布局组件自动进行弹性布局。
```html
<template>
  <Layout>
    <Header>顶部内容</Header>
    <Layout>
      <Content>主要内容区域</Content>
      <Sider>侧边栏内容</Sider>
    </Layout>
    <Footer>底部内容</Footer>
  </Layout>
</template>
```

#### 业务组件
项目模板内置了多种业务组件，位于 `src/views/Home/components` 目录下。
业务组件展示的内容，在 `src/config` 的配置文件中定义，组件通过交互对内容进行响应式更新。
- **NavMenu**
导航菜单组件，可关联业务模块子路由，在 `src/router` 路由文件中配置子路由组件的映射。
- **ToolBar**：
工具栏组件，用于展示视图操作按钮。
- **BusinessMenu**：
业务菜单组件，支持多级菜单展示，可以配置菜单方向和是否互斥。
- **BusinessLegend**：
图例组件，用于展示数据分类和颜色标识，支持水平或垂直排列。

#### 图表组件
图表组件库位于 `src/chart-components` 目录，有独立的开发服务，可将其作为 Git 子模块来管理。
**图表组件开发**
```bash
# 启动图表组件独立开发服务
pnpm dev:chart
```
**图表组件使用**
可选择全局注册或按需导入图表组件两种使用方式：
A. 全局注册使用
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import chartComponents from '@/chart-components'

const app = createApp(App)
app.use(chartComponents)
```
B. 按需导入使用
```html
<template>
  <BasicBar
    :data="chartData"
    :options="chartOptions"
    @change="handleChartChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { BasicBar } from '@/chart-components'

const chartData = ref([
  { name: '一月', value: 120 },
  { name: '二月', value: 200 },
  { name: '三月', value: 150 },
  { name: '四月', value: 80 },
  { name: '五月', value: 70 },
  { name: '六月', value: 110 }
])

const chartOptions = ref({
  title: {
    text: '月度数据统计',
    left: 'center'
  }
})

function handleChartChange(event) {
  console.log('图表事件:', event)
}
</script>
```
<br>

## 事件
#### 事件类型
项目模板提供了事件类型管理，通过 `UI_EVENTS` 和 `SCENE_EVENTS` 来枚举定义所有可用的事件类型。
`UI_EVENTS` 为 UI 界面触发的事件类型，`SCENE_EVENTS` 为 3D 场景触发的事件类型。

#### 界面与 3D 场景事件通信
项目中封装了异步获取 ThingJS 3D 场景实例的方法。
通过 `getApp()` 方法获取 app 实例后，可通过其提供的事件方法与 3D 场景进行通信：

```typescript
import { getApp } from '@/scene3d'
import { SCENE_EVENTS, UI_EVENTS } from '@/events/event-types'

// 获取场景实例，场景实例会等待场景加载完成后返回
const app = await getApp()

// 监听 3D 场景发送过来的点击事件
app.on(SCENE_EVENTS.CLICK, (event) => {
  console.log('点击对象：', event.object)
})

// 界面向 3D 场景发送切换模式事件
app.trigger(UI_EVENTS.MODE_CHANGE, payload)
```


#### 界面跨组件事件通信
另外也提供了事件总线，用于处理界面内跨组件的事件通信，使用示例：

```typescript
import { triggerEvent, listenEvent } from '@/events/event-bus'
import { UI_EVENTS } from '@/events/event-types'

// 监听事件
const unlisten = listenEvent(UI_EVENTS.SHOW_INFO_PANEL, (payload) => {
  console.log('显示信息面板：', payload)
})

// 触发事件
triggerEvent(UI_EVENTS.SHOW_INFO_PANEL, payload)

// 移除监听
unlisten()
```
<br>

## 云瞰孪生服务
> 前置条件：使用前确保在编辑器中正确启用了云瞰插件。

项目封装了云瞰工作台的孪生服务接口，支持孪生数据的获取与交互。
当编辑器中启用云瞰插件后，前端项目会自动获取并使用相应的 `API Key`，来提供孪生服务请求。

#### 孪生服务请求
由于孪生服务依赖于云瞰插件，以下方法的调用时机必须在编辑器场景初始化完成之后：
- `getTwinServiceUrl`：根据服务名称获取孪生服务 URL
- `requestTwinService`：向孪生服务发送请求，自动携带 `API Key` 认证

使用示例：
```typescript
import { getApp } from '@/scene3d'
import { getTwinServiceUrl, requestTwinService } from '@/api'

// 确保编辑器场景初始化完成，即云瞰插件已成功启用
await getApp()

// 获取孪生服务 URL
const serviceUrl = getTwinServiceUrl('孪生体告警查询服务')

// 请求孪生服务数据
const data = await requestTwinService(serviceUrl, params)
```
<br>

## 分辨率适配
引入了 postcss-px-to-viewport 插件，编译时将 px 转换为 viewport 视口单位，使元素尺寸始终适配视口分辨率。可在 `postcss.config.ts` 文件中**配置设计稿分辨率**。

<br>

## 常见问题解答 (FAQ)

### Q: 如何更改 3D 场景资源路径？
A: 在 `.env` 或 `.env.production` 文件中修改 `VITE_SCENE_URL` 变量的值。

### Q: 如何自定义主题？
A: 目前内置了 `light` 和 `dark` 明暗两种主题，默认使用的是暗色主题。可修改 `src/styles/themes` 目录下的主题相关样式文件，并使用 `useTheme` hook 进行主题设置或切换。
使用示例：

```typescript
import useTheme from '@/hooks/useTheme'

const { setTheme, toggleTheme } = useTheme()

// 设置主题
setTheme('light')

// 切换主题
toggleTheme()
```

### Q: 如何使用 SCSS mixins？
A: 项目提供了常用的 SCSS mixins，位于 `src/styles/mixins.scss` 文件中。目前提供的 mixins 主要包括：
- `flex`: 弹性布局，简化 flex 布局设置
- `absolute`: 绝对定位，简化绝对定位的设置
- `glass-effect`: 毛玻璃背景效果
- `ellipsis`: 文本溢出省略，支持单行和多行文本省略
- `scrollbar`: 自定义滚动条样式，美化默认滚动条

在组件样式中可以通过以下方式使用：

```scss
<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.container {
  @include absolute(0, 0, 0, 0);
  @include flex(column);

  .panel {
    @include glass-effect(50px);

    .title {
      @include ellipsis;
    }
  }

  .scroll-area {
    @include scrollbar(4px);
  }
}
</style>
```

### Q: 如何使用 SVG 图标？
A: 项目提供了全局注册的 `SvgIcon` 组件，用于展示 SVG 图标，组件支持以下属性：
- `url`：SVG 图标的路径（必填）
- `color`：图标颜色，默认为 `currentColor`，会继承父元素的文字颜色

```html
<template>
  <SvgIcon :url="yourIcon" />
</template>

<script setup>
  import yourIcon from 'src/assets/icons/your-icon.svg'
</script>
```
图标会自动继承当前文字大小（1em），可通过父元素的 `font-size` 来调整大小。

