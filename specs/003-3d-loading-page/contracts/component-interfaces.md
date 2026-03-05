# Component Contracts: 三维特性 Loading 页面

**Feature**: 003-3d-loading-page
**Date**: 2026 年 3 月 5 日
**Purpose**: 定义 3D 加载组件的接口契约

---

## 1. ThreeDLoading 组件

### 1.1 组件概述

3D 加载页面主组件，封装 3D 场景渲染、进度显示和性能降级逻辑。

### 1.2 Props

| 属性 | 类型 | 默认值 | 必填 | 说明 |
|------|------|--------|------|------|
| `visible` | `boolean` | `false` | 否 | 是否显示加载页面 |
| `progress` | `number \| null` | `null` | 否 | 加载进度（0-100），null 表示不确定进度 |
| `loadingText` | `string` | `'加载中…'` | 否 | 加载提示文字 |
| `minDisplayTime` | `number` | `300` | 否 | 最小显示时间（毫秒） |
| `timeout` | `number` | `30000` | 否 | 超时阈值（毫秒） |

### 1.3 Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `close` | - | 加载页面关闭时触发 |
| `timeout` | `(duration: number)` | 加载超时时触发，参数为超时时长（毫秒） |
| `error` | `(error: Error)` | 发生错误时触发 |

### 1.4 Slots

| 插槽名 | 作用域参数 | 说明 |
|--------|------------|------|
| `default` | `{ progress: number \| null }` | 自定义加载内容（覆盖默认 3D 场景） |
| `progress` | `{ progress: number \| null }` | 自定义进度显示 |
| `text` | - | 自定义加载文字 |

### 1.5 暴露的方法

```typescript
interface ThreeDLoadingExpose {
  /** 强制关闭加载页面 */
  forceClose: () => void;
  
  /** 重置加载状态 */
  reset: () => void;
  
  /** 手动触发超时检查 */
  checkTimeout: () => boolean;
}
```

### 1.6 使用示例

```vue
<template>
  <ThreeDLoading
    v-model:visible="isLoading"
    :progress="loadingProgress"
    loading-text="正在加载资源…"
    :timeout="30000"
    @close="handleClose"
    @timeout="handleTimeout"
  >
    <!-- 自定义进度显示 -->
    <template #progress="{ progress }">
      <div v-if="progress !== null" class="custom-progress">
        已加载：{{ progress }}%
      </div>
    </template>
  </ThreeDLoading>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ThreeDLoading from '@/components/ThreeDLoading/ThreeDLoading.vue';

const isLoading = ref(true);
const loadingProgress = ref<number | null>(null);

const handleClose = () => {
  console.log('加载完成');
};

const handleTimeout = (duration: number) => {
  console.warn(`加载超时：${duration}ms`);
};
</script>
```

---

## 2. LoadingScene3D 组件

### 2.1 组件概述

3D 场景渲染组件，负责创建和渲染 3D 几何体组合。

### 2.2 Props

| 属性 | 类型 | 默认值 | 必填 | 说明 |
|------|------|--------|------|------|
| `performanceLevel` | `'high' \| 'medium' \| 'low'` | `'high'` | 否 | 性能级别 |
| `primaryColor` | `string` | `'#1890ff'` | 否 | 主题色 |
| `rotationSpeed` | `number` | `10` | 否 | 旋转速度（秒/圈） |
| `enableParticles` | `boolean` | `true` | 否 | 是否启用粒子效果 |

### 2.3 Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `initialized` | - | 场景初始化完成 |
| `error` | `(error: Error)` | 场景渲染错误 |
| `fps-drop` | `(fps: number)` | FPS 低于阈值时触发 |

### 2.4 暴露的方法

```typescript
interface LoadingScene3DExpose {
  /** 暂停渲染 */
  pause: () => void;
  
  /** 恢复渲染 */
  resume: () => void;
  
  /** 更新主题色 */
  updateColor: (color: string) => void;
  
  /** 销毁场景 */
  dispose: () => void;
}
```

### 2.5 使用示例

```vue
<template>
  <div class="scene-container" ref="containerRef"></div>
  <LoadingScene3D
    ref="sceneRef"
    :performance-level="performanceLevel"
    :primary-color="primaryColor"
    :rotation-speed="10"
    @initialized="handleInitialized"
    @fps-drop="handleFpsDrop"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LoadingScene3D from '@/components/ThreeDLoading/LoadingScene3D.vue';
import { PerformanceLevel } from '@/types/loading';

const containerRef = ref<HTMLElement | null>(null);
const sceneRef = ref<InstanceType<typeof LoadingScene3D> | null>(null);
const performanceLevel = ref<PerformanceLevel>(PerformanceLevel.HIGH);
const primaryColor = ref('#1890ff');

const handleInitialized = () => {
  console.log('3D 场景已初始化');
};

const handleFpsDrop = (fps: number) => {
  console.warn(`FPS 下降：${fps}`);
  // 降级处理
  if (fps < 20 && performanceLevel.value === PerformanceLevel.HIGH) {
    performanceLevel.value = PerformanceLevel.MEDIUM;
  }
};
</script>
```

---

## 3. FallbackLoading 组件

### 3.1 组件概述

2D 备用加载组件，在不支持 WebGL 或低性能设备上显示。

### 3.2 Props

| 属性 | 类型 | 默认值 | 必填 | 说明 |
|------|------|--------|------|------|
| `progress` | `number \| null` | `null` | 否 | 加载进度 |
| `loadingText` | `string` | `'加载中…'` | 否 | 加载提示文字 |
| `primaryColor` | `string` | `'#1890ff'` | 否 | 主题色 |
| `showPercentage` | `boolean` | `true` | 否 | 是否显示百分比 |

### 3.3 Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `click` | - | 点击加载区域时触发（可选取消功能） |

### 3.4 Slots

| 插槽名 | 作用域参数 | 说明 |
|--------|------------|------|
| `default` | `{ progress: number \| null }` | 自定义 2D 加载动画 |
| `icon` | - | 自定义加载图标 |
| `text` | - | 自定义加载文字 |

### 3.5 使用示例

```vue
<template>
  <FallbackLoading
    :progress="loadingProgress"
    loading-text="正在加载…"
    :show-percentage="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FallbackLoading from '@/components/ThreeDLoading/FallbackLoading.vue';

const loadingProgress = ref<number | null>(30);
</script>
```

---

## 4. useThreeScene Hook

### 4.1 Hook 接口

```typescript
// src/hooks/useThreeScene.ts

import type { Ref } from 'vue';
import type { PerformanceLevel, SceneConfig } from '@/types/loading';

export interface UseThreeSceneReturn {
  /** 场景容器 ref */
  containerRef: Ref<HTMLElement | null>;
  
  /** 场景是否已初始化 */
  isInitialized: Ref<boolean>;
  
  /** 当前 FPS */
  fps: Ref<number>;
  
  /** 是否暂停 */
  isPaused: Ref<boolean>;
  
  /** 初始化场景 */
  initScene: (config?: Partial<SceneConfig>) => Promise<void>;
  
  /** 更新进度 */
  updateProgress: (progress: number | null) => void;
  
  /** 销毁场景 */
  disposeScene: () => void;
  
  /** 暂停渲染 */
  pause: () => void;
  
  /** 恢复渲染 */
  resume: () => void;
  
  /** 更新主题色 */
  updateColor: (color: string) => void;
  
  /** 更新性能级别 */
  updatePerformanceLevel: (level: PerformanceLevel) => void;
}

export function useThreeScene(): UseThreeSceneReturn;
```

### 4.2 使用示例

```typescript
import { onMounted, onBeforeUnmount } from 'vue';
import { useThreeScene } from '@/hooks/useThreeScene';

const {
  containerRef,
  isInitialized,
  fps,
  initScene,
  updateProgress,
  disposeScene,
  pause,
  resume,
} = useThreeScene();

onMounted(async () => {
  await initScene({
    performanceLevel: 'high',
    primaryColor: '#1890ff',
  });
  
  updateProgress(50);
});

onBeforeUnmount(() => {
  disposeScene();
});
```

---

## 5. 工具函数接口

### 5.1 性能检测

```typescript
// src/utils/loading-scene.ts

import type { PerformanceLevel } from '@/types/loading';

/**
 * 检测 WebGL 2.0 支持
 */
export function hasWebGL2Support(): boolean;

/**
 * 检测 GPU 性能级别
 */
export function detectGPUPerformance(): PerformanceLevel;

/**
 * 检测设备类型
 */
export function isMobileDevice(): boolean;

/**
 * 获取推荐的性能级别
 */
export function getRecommendedPerformanceLevel(): PerformanceLevel;

/**
 * 获取降级配置
 */
export function getFallbackConfig(
  level: PerformanceLevel
): import('@/types/loading').SceneConfig;
```

### 5.2 几何体创建

```typescript
import type { SceneConfig, Geometries } from '@/types/loading';
import * as THREE from 'three';

/**
 * 创建加载场景几何体组合
 */
export function createLoadingGeometries(config: SceneConfig): Geometries;

/**
 * 创建中心立方体
 */
export function createCube(
  color: string,
  faceLimit?: number
): THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>;

/**
 * 创建外围环
 */
export function createTorus(
  color: string,
  faceLimit?: number
): THREE.Mesh<THREE.TorusGeometry, THREE.MeshStandardMaterial>;

/**
 * 创建装饰球体
 */
export function createSphere(
  color: string,
  faceLimit?: number
): THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;

/**
 * 创建粒子系统
 */
export function createParticles(
  color: string,
  count?: number
): THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
```

### 5.3 资源释放

```typescript
import * as THREE from 'three';

/**
 * 释放 3D 场景资源
 */
export function disposeThreeScene(
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera
): void;

/**
 * 释放几何体资源
 */
export function disposeGeometry(
  geometry: THREE.Geometry | THREE.BufferGeometry
): void;

/**
 * 释放材质资源
 */
export function disposeMaterial(
  material: THREE.Material | THREE.Material[]
): void;

/**
 * 释放纹理资源
 */
export function disposeTexture(
  texture: THREE.Texture | null
): void;
```

---

## 6. 类型定义

### 6.1 完整类型导出

```typescript
// src/types/loading.ts

/** 性能级别 */
export enum PerformanceLevel {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

/** 加载进度 */
export interface LoadingProgress {
  value: number | null;
  status: 'loading' | 'completed' | 'error';
  startTime: number;
  completedTime?: number;
  errorMessage?: string;
}

/** 场景配置 */
export interface SceneConfig {
  performanceLevel: PerformanceLevel;
  antialias: boolean;
  enableParticles: boolean;
  geometryFaceLimit: number;
  targetFPS: number;
  primaryColor: string;
}

/** 几何体组合 */
export interface Geometries {
  cube: THREE.Mesh;
  torus: THREE.Mesh;
  sphere?: THREE.Mesh;
  particles?: THREE.Points;
}

/** 组件 Props */
export interface ThreeDLoadingProps {
  visible?: boolean;
  progress?: number | null;
  loadingText?: string;
  minDisplayTime?: number;
  timeout?: number;
}

/** Hook 返回值 */
export interface UseThreeSceneReturn {
  containerRef: Ref<HTMLElement | null>;
  isInitialized: Ref<boolean>;
  fps: Ref<number>;
  isPaused: Ref<boolean>;
  initScene: (config?: Partial<SceneConfig>) => Promise<void>;
  updateProgress: (progress: number | null) => void;
  disposeScene: () => void;
  pause: () => void;
  resume: () => void;
  updateColor: (color: string) => void;
  updatePerformanceLevel: (level: PerformanceLevel) => void;
}
```

---

## 7. 错误处理

### 7.1 错误类型

```typescript
// src/types/loading.ts

export enum LoadingErrorType {
  WEBGL_NOT_SUPPORTED = 'WEBGL_NOT_SUPPORTED',
  SCENE_INIT_FAILED = 'SCENE_INIT_FAILED',
  RESOURCE_LOAD_FAILED = 'RESOURCE_LOAD_FAILED',
  RENDER_ERROR = 'RENDER_ERROR',
  TIMEOUT = 'TIMEOUT',
}

export interface LoadingError {
  type: LoadingErrorType;
  message: string;
  recoverable: boolean;
  fallbackAction?: () => void;
}
```

### 7.2 错误处理函数

```typescript
// src/utils/loading-error.ts

import { LoadingError, LoadingErrorType } from '@/types/loading';

/**
 * 创建加载错误
 */
export function createLoadingError(
  type: LoadingErrorType,
  message: string,
  recoverable: boolean = false
): LoadingError;

/**
 * 处理加载错误
 */
export function handleLoadingError(error: LoadingError): void;

/**
 * 切换到 2D 降级模式
 */
export function switchToFallbackMode(): void;

/**
 * 重试初始化（最多 3 次）
 */
export function retryInit(maxRetries?: number): Promise<void>;
```
