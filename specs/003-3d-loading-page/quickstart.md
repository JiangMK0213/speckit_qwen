# Quickstart: 三维特性 Loading 页面

**Feature**: 003-3d-loading-page
**Date**: 2026 年 3 月 5 日
**Purpose**: 快速入门指南，帮助开发者理解和使用 3D 加载组件

---

## 1. 快速开始

### 1.1 基础使用

在应用入口显示 3D 加载页面：

```vue
<!-- App.vue -->
<template>
  <ThreeDLoading v-model:visible="isLoading" :progress="loadingProgress" />
  
  <router-view v-if="!isLoading" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ThreeDLoading from '@/components/ThreeDLoading/ThreeDLoading.vue';

const isLoading = ref(true);
const loadingProgress = ref<number | null>(null);

onMounted(async () => {
  // 模拟异步加载
  await loadResources((progress) => {
    loadingProgress.value = progress;
  });
  
  isLoading.value = false;
});

async function loadResources(onProgress: (progress: number) => void) {
  // 模拟资源加载
  for (let i = 0; i <= 100; i += 10) {
    await new Promise(resolve => setTimeout(resolve, 100));
    onProgress(i);
  }
}
</script>
```

### 1.2 不确定进度模式

当无法获取准确进度时：

```vue
<template>
  <ThreeDLoading
    v-model:visible="isLoading"
    :progress="null"
    loading-text="正在初始化…"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLoading = ref(true);
// progress 为 null，显示不确定进度动画
</script>
```

---

## 2. 组件 API

### 2.1 Props

```vue
<template>
  <ThreeDLoading
    :visible="true"
    :progress="50"
    loading-text="加载中…"
    :min-display-time="300"
    :timeout="30000"
  />
</template>
```

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `visible` | `boolean` | `false` | 是否显示加载页面 |
| `progress` | `number \| null` | `null` | 加载进度（0-100），null 表示不确定进度 |
| `loadingText` | `string` | `'加载中…'` | 加载提示文字 |
| `minDisplayTime` | `number` | `300` | 最小显示时间（毫秒），避免闪烁 |
| `timeout` | `number` | `30000` | 超时阈值（毫秒） |

### 2.2 Events

```vue
<template>
  <ThreeDLoading
    @close="handleClose"
    @timeout="handleTimeout"
    @error="handleError"
  />
</template>

<script setup lang="ts">
const handleClose = () => {
  console.log('加载完成，页面已关闭');
};

const handleTimeout = (duration: number) => {
  console.warn(`加载超时：${duration}ms`);
};

const handleError = (error: Error) => {
  console.error('加载错误:', error);
};
</script>
```

### 2.3 Slots

```vue
<template>
  <ThreeDLoading :progress="progress">
    <!-- 自定义加载内容 -->
    <template #default="{ progress }">
      <div class="custom-loading">
        <MyCustomAnimation />
        <div v-if="progress !== null">
          已加载：{{ progress }}%
        </div>
      </div>
    </template>
    
    <!-- 自定义进度显示 -->
    <template #progress="{ progress }">
      <div class="custom-progress">
        <ProgressBar :value="progress" />
      </div>
    </template>
    
    <!-- 自定义加载文字 -->
    <template #text>
      <span>正在准备应用…</span>
    </template>
  </ThreeDLoading>
</template>
```

---

## 3. 性能降级

### 3.1 自动降级

组件自动检测设备性能并降级：

```typescript
// 高性能设备：完整 3D 效果（粒子、抗锯齿、60 FPS）
// 中等性能设备：简化 3D 效果（无粒子、抗锯齿、30 FPS）
// 低性能设备/不支持 WebGL：2D CSS 动画降级
```

### 3.2 手动指定性能级别

```vue
<template>
  <LoadingScene3D
    :performance-level="performanceLevel"
    :primary-color="primaryColor"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PerformanceLevel } from '@/types/loading';

// 手动指定为中等性能级别
const performanceLevel = ref<PerformanceLevel>(PerformanceLevel.MEDIUM);
const primaryColor = ref('#1890ff');
</script>
```

---

## 4. 主题色集成

### 4.1 自动获取主题色

组件自动从 CSS 变量获取主题色：

```css
:root {
  --color-primary: #1890ff;
}
```

### 4.2 动态更新主题色

```vue
<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';

const { primaryColor } = useTheme();
// 3D 加载组件会自动监听主题色变化并更新
</script>
```

---

## 5. 资源释放

### 5.1 自动释放

组件卸载时自动释放 GPU 资源：

```vue
<template>
  <ThreeDLoading v-if="isLoading" />
</template>

<!-- 当 isLoading 变为 false 时，组件自动销毁并释放资源 -->
```

### 5.2 手动释放

使用 Hook 时手动管理资源：

```typescript
import { useThreeScene } from '@/hooks/useThreeScene';

const { initScene, disposeScene } = useThreeScene();

onMounted(async () => {
  await initScene();
});

onBeforeUnmount(() => {
  disposeScene(); // 必须调用
});
```

---

## 6. 进度集成

### 6.1 路由加载进度

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loadingProgress = ref<number | null>(null);
const isLoading = ref(true);

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  loadingProgress.value = null;
  
  // 模拟进度更新
  const interval = setInterval(() => {
    if (loadingProgress.value === null) {
      loadingProgress.value = 0;
    }
    loadingProgress.value = Math.min(loadingProgress.value + 10, 90);
  }, 100);
  
  next();
  
  // 路由加载完成后
  setTimeout(() => {
    clearInterval(interval);
    loadingProgress.value = 100;
    isLoading.value = false;
  }, 500);
});
</script>
```

### 6.2 异步资源加载

```typescript
async function loadResources() {
  const resources = [
    { url: '/api/data1', name: '数据 1' },
    { url: '/api/data2', name: '数据 2' },
    { url: '/api/data3', name: '数据 3' },
  ];
  
  let loaded = 0;
  const total = resources.length;
  
  for (const resource of resources) {
    await fetch(resource.url);
    loaded++;
    loadingProgress.value = Math.round((loaded / total) * 100);
  }
}
```

---

## 7. 错误处理

### 7.1 超时处理

```vue
<template>
  <ThreeDLoading
    :timeout="30000"
    @timeout="handleTimeout"
  />
</template>

<script setup lang="ts">
const handleTimeout = (duration: number) => {
  console.warn(`加载已超过 ${duration}ms`);
  // 显示重试按钮或取消加载
};
</script>
```

### 7.2 WebGL 不支持

```typescript
import { hasWebGL2Support } from '@/utils/loading-scene';

if (!hasWebGL2Support()) {
  console.warn('浏览器不支持 WebGL 2.0，已切换到 2D 降级模式');
  // 组件会自动处理降级
}
```

---

## 8. 性能优化

### 8.1 避免频繁更新进度

```typescript
// ❌ 避免：每秒更新 60 次
requestAnimationFrame(() => {
  progress.value = getProgress();
});

// ✅ 推荐：使用防抖或节流
const throttledUpdate = throttle((p: number) => {
  progress.value = p;
}, 100); // 每 100ms 更新一次
```

### 8.2 最小显示时间

```vue
<template>
  <ThreeDLoading
    :min-display-time="500"
    <!-- 避免加载过快导致闪烁 -->
  />
</template>
```

---

## 9. 测试

### 9.1 单元测试

```typescript
import { mount } from '@vue/test-utils';
import ThreeDLoading from '@/components/ThreeDLoading/ThreeDLoading.vue';

describe('ThreeDLoading', () => {
  it('显示加载文字', () => {
    const wrapper = mount(ThreeDLoading, {
      props: {
        visible: true,
        loadingText: '测试加载',
      },
    });
    
    expect(wrapper.text()).toContain('测试加载');
  });
  
  it('进度更新', async () => {
    const wrapper = mount(ThreeDLoading, {
      props: {
        visible: true,
        progress: 50,
      },
    });
    
    await wrapper.setProps({ progress: 75 });
    expect(wrapper.text()).toContain('75%');
  });
  
  it('关闭时触发事件', async () => {
    const wrapper = mount(ThreeDLoading, {
      props: {
        visible: true,
      },
    });
    
    await wrapper.setProps({ visible: false });
    expect(wrapper.emitted('close')).toBeDefined();
  });
});
```

---

## 10. 常见问题

### Q1: 如何禁用 3D 效果？

设置 `performance-level` 为 `low`：

```vue
<LoadingScene3D performance-level="low" />
```

### Q2: 如何自定义 3D 几何体？

使用默认插槽覆盖：

```vue
<ThreeDLoading>
  <template #default>
    <MyCustom3DScene />
  </template>
</ThreeDLoading>
```

### Q3: 如何在加载完成后执行回调？

监听 `close` 事件：

```vue
<ThreeDLoading @close="handleClose" />
```

### Q4: 如何强制关闭加载页面？

使用 `forceClose` 方法：

```typescript
const loadingRef = ref<InstanceType<typeof ThreeDLoading> | null>(null);

loadingRef.value?.forceClose();
```

---

## 11. 下一步

- 阅读 [data-model.md](./data-model.md) 了解完整数据模型
- 阅读 [component-interfaces.md](./contracts/component-interfaces.md) 了解组件接口契约
- 阅读 [research.md](./research.md) 了解技术决策背景
