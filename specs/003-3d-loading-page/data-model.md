# Data Model: 三维特性 Loading 页面

**Feature**: 003-3d-loading-page
**Date**: 2026 年 3 月 5 日
**Purpose**: 定义加载页面相关的数据结构、类型和验证规则

---

## 1. 核心实体

### 1.1 LoadingProgress (加载进度)

加载进度状态信息。

```typescript
interface LoadingProgress {
  /** 当前进度值（0-100），null 表示不确定进度 */
  value: number | null;
  
  /** 加载状态 */
  status: 'loading' | 'completed' | 'error';
  
  /** 加载开始时间戳 */
  startTime: number;
  
  /** 加载完成时间戳（可选） */
  completedTime?: number;
  
  /** 错误信息（如果状态为 error） */
  errorMessage?: string;
}
```

**验证规则**:
- `value`: 如果是数字，必须在 0-100 范围内
- `status`: 必须是 `'loading'`、`'completed'` 或 `'error'`
- `startTime`: 必须是正整数（时间戳）
- `completedTime`: 如果存在，必须大于 `startTime`

**默认值**:
```typescript
const DEFAULT_PROGRESS: LoadingProgress = {
  value: null,
  status: 'loading',
  startTime: Date.now(),
};
```

---

### 1.2 PerformanceLevel (性能级别)

设备性能级别枚举。

```typescript
enum PerformanceLevel {
  /** 高性能设备：独立显卡、桌面设备 */
  HIGH = 'high',
  
  /** 中等性能设备：集成显卡、高端手机 */
  MEDIUM = 'medium',
  
  /** 低性能设备：低端手机、旧浏览器 */
  LOW = 'low',
}
```

**检测标准**:
| 级别 | WebGL 2.0 | GPU 名称特征 | 设备类型 | FPS 目标 |
|------|-----------|-------------|----------|----------|
| HIGH | ✅ 支持 | 包含 "NVIDIA"、"AMD"、"Radeon"、"GeForce" | 桌面 | 60 |
| MEDIUM | ✅ 支持 | 包含 "Intel"、"Iris"、"UHD"、"Adreno"、"Mali" | 桌面/移动 | 30 |
| LOW | ❌ 不支持 | 其他或未知 | 移动/桌面 | N/A（2D） |

---

### 1.3 SceneConfig (场景配置)

3D 场景渲染配置。

```typescript
interface SceneConfig {
  /** 性能级别 */
  performanceLevel: PerformanceLevel;
  
  /** 是否启用抗锯齿 */
  antialias: boolean;
  
  /** 是否启用粒子效果 */
  enableParticles: boolean;
  
  /** 几何体面数限制（0 表示无限制） */
  geometryFaceLimit: number;
  
  /** 目标 FPS */
  targetFPS: number;
  
  /** 主题色（从 CSS 变量获取） */
  primaryColor: string;
}
```

**默认配置**:
```typescript
const DEFAULT_SCENE_CONFIG: SceneConfig = {
  performanceLevel: PerformanceLevel.HIGH,
  antialias: true,
  enableParticles: true,
  geometryFaceLimit: 0,
  targetFPS: 60,
  primaryColor: '#1890ff',
};
```

**降级配置**:
```typescript
const MEDIUM_SCENE_CONFIG: SceneConfig = {
  ...DEFAULT_SCENE_CONFIG,
  performanceLevel: PerformanceLevel.MEDIUM,
  enableParticles: false,
  targetFPS: 30,
};

const LOW_SCENE_CONFIG: SceneConfig = {
  ...DEFAULT_SCENE_CONFIG,
  performanceLevel: PerformanceLevel.LOW,
  antialias: false,
  enableParticles: false,
};
```

---

### 1.4 Geometries (几何体组合)

3D 几何体组合定义。

```typescript
interface Geometries {
  /** 中心立方体 */
  cube: THREE.Mesh;
  
  /** 外围环 */
  torus: THREE.Mesh;
  
  /** 装饰球体（可选） */
  sphere?: THREE.Mesh;
  
  /** 粒子系统（可选） */
  particles?: THREE.Points;
}
```

---

## 2. 类型定义

### 2.1 组件 Props 类型

### ThreeDLoading Props

```typescript
interface ThreeDLoadingProps {
  /** 是否显示加载页面 */
  visible?: boolean;
  
  /** 加载进度（0-100），null 表示不确定进度 */
  progress?: number | null;
  
  /** 加载提示文字 */
  loadingText?: string;
  
  /** 最小显示时间（毫秒），避免闪烁 */
  minDisplayTime?: number;
}

interface ThreeDLoadingEmits {
  /** 加载页面关闭时触发 */
  (e: 'close'): void;
  
  /** 加载超时时触发 */
  (e: 'timeout', duration: number): void;
}
```

### LoadingScene3D Props

```typescript
interface LoadingScene3DProps {
  /** 性能级别 */
  performanceLevel?: PerformanceLevel;
  
  /** 主题色 */
  primaryColor?: string;
  
  /** 旋转速度（秒/圈） */
  rotationSpeed?: number;
}
```

### FallbackLoading Props

```typescript
interface FallbackLoadingProps {
  /** 加载进度 */
  progress?: number | null;
  
  /** 加载提示文字 */
  loadingText?: string;
  
  /** 主题色 */
  primaryColor?: string;
}
```

---

### 2.2 Hook 类型

### useThreeScene Return Type

```typescript
interface UseThreeSceneReturn {
  /** 场景容器 ref */
  containerRef: Ref<HTMLElement | null>;
  
  /** 场景是否已初始化 */
  isInitialized: Ref<boolean>;
  
  /** 当前 FPS */
  fps: Ref<number>;
  
  /** 初始化场景 */
  initScene: (config: SceneConfig) => Promise<void>;
  
  /** 更新进度 */
  updateProgress: (progress: number | null) => void;
  
  /** 销毁场景 */
  disposeScene: () => void;
  
  /** 暂停渲染 */
  pause: () => void;
  
  /** 恢复渲染 */
  resume: () => void;
}
```

---

### 2.3 工具函数类型

### 性能检测函数

```typescript
/**
 * 检测 WebGL 2.0 支持
 */
function hasWebGL2Support(): boolean;

/**
 * 检测 GPU 性能级别
 */
function detectGPUPerformance(): PerformanceLevel;

/**
 * 检测设备类型
 */
function isMobileDevice(): boolean;

/**
 * 获取推荐的性能级别
 */
function getRecommendedPerformanceLevel(): PerformanceLevel;
```

### 几何体创建函数

```typescript
/**
 * 创建加载场景几何体组合
 */
function createLoadingGeometries(config: SceneConfig): Geometries;

/**
 * 创建中心立方体
 */
function createCube(color: string, faceLimit?: number): THREE.Mesh;

/**
 * 创建外围环
 */
function createTorus(color: string, faceLimit?: number): THREE.Mesh;

/**
 * 创建装饰球体
 */
function createSphere(color: string, faceLimit?: number): THREE.Mesh;

/**
 * 创建粒子系统
 */
function createParticles(color: string): THREE.Points;
```

### 资源释放函数

```typescript
/**
 * 释放 3D 场景资源
 */
function disposeThreeScene(
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera
): void;

/**
 * 释放单个几何体资源
 */
function disposeGeometry(geometry: THREE.Geometry | THREE.BufferGeometry): void;

/**
 * 释放材质资源
 */
function disposeMaterial(material: THREE.Material | THREE.Material[]): void;
```

---

## 3. 状态转换

### 3.1 加载页面生命周期

```
[应用启动]
    ↓
[检测性能级别]
    ↓
[选择渲染模式（3D/2D）]
    ↓
[显示加载页面]
    ↓
[等待加载完成] ←─┐
    ↓           │
[更新进度] ─────┘
    ↓
[加载完成]
    ↓
[淡出过渡（500ms）]
    ↓
[销毁 3D 场景]
    ↓
[显示目标页面]
```

---

### 3.2 性能降级流程

```
[组件挂载]
    ↓
[检测 WebGL 2.0 支持] → [不支持] → [使用 2D 降级模式]
    ↓
[检测 GPU 性能]
    ↓
[高性能 GPU] → [启用完整效果（粒子、抗锯齿、60 FPS）]
    ↓
[中等性能 GPU] → [简化效果（无粒子、抗锯齿、30 FPS）]
    ↓
[低性能 GPU] → [使用 2D 降级模式]
```

---

### 3.3 资源释放流程

```
[组件卸载]
    ↓
[停止动画循环（cancelAnimationFrame）]
    ↓
[移除事件监听（resize、主题变化）]
    ↓
[遍历场景对象]
    ↓
[释放几何体（dispose）]
    ↓
[释放材质（dispose）]
    ↓
[释放渲染器（dispose + forceContextLoss）]
    ↓
[移除 DOM 元素]
    ↓
[清空引用]
```

---

## 4. CSS 变量定义

### 4.1 主题变量

```css
:root {
  /* 主色 */
  --color-primary: #1890ff;
  
  /* 派生色 */
  --color-primary-light: #40a9ff;
  --color-primary-dark: #096dd9;
  
  /* 加载页面专用 */
  --loading-bg-color: rgba(0, 0, 0, 0.85);
  --loading-text-color: #ffffff;
  --loading-progress-bg: rgba(255, 255, 255, 0.1);
  --loading-progress-fill: var(--color-primary);
}

[data-theme='dark'] {
  --loading-bg-color: rgba(0, 0, 0, 0.95);
  --loading-text-color: #ffffff;
}
```

### 4.2 组件样式变量

```css
.three-d-loading {
  --container-bg: var(--loading-bg-color);
  --text-color: var(--loading-text-color);
  --progress-bg: var(--loading-progress-bg);
  --progress-fill: var(--loading-progress-fill);
  --transition-duration: 0.5s;
}
```

---

## 5. 事件类型定义

```typescript
// src/events/event-types.ts

export const LOADING_EVENTS = {
  /** 加载开始 */
  LOADING_START: 'LOADING_START',
  
  /** 进度更新 */
  PROGRESS_UPDATE: 'PROGRESS_UPDATE',
  
  /** 加载完成 */
  LOADING_COMPLETE: 'LOADING_COMPLETE',
  
  /** 加载错误 */
  LOADING_ERROR: 'LOADING_ERROR',
  
  /** 加载超时 */
  LOADING_TIMEOUT: 'LOADING_TIMEOUT',
  
  /** 加载页面关闭 */
  LOADING_CLOSE: 'LOADING_CLOSE',
} as const;

export interface LoadingEventMap {
  [LOADING_EVENTS.LOADING_START]: { startTime: number };
  [LOADING_EVENTS.PROGRESS_UPDATE]: { progress: number | null };
  [LOADING_EVENTS.LOADING_COMPLETE]: { duration: number };
  [LOADING_EVENTS.LOADING_ERROR]: { error: string };
  [LOADING_EVENTS.LOADING_TIMEOUT]: { duration: number };
  [LOADING_EVENTS.LOADING_CLOSE]: void;
}
```

---

## 6. 常量定义

```typescript
// src/utils/loading-constants.ts

/** 默认旋转速度（秒/圈） */
export const DEFAULT_ROTATION_SPEED = 10;

/** 淡出过渡时间（毫秒） */
export const FADE_OUT_DURATION = 500;

/** 最小显示时间（毫秒），避免闪烁 */
export const MIN_DISPLAY_TIME = 300;

/** 超时阈值（毫秒） */
export const TIMEOUT_THRESHOLD = 30000;

/** FPS 检测窗口大小（帧数） */
export const FPS_WINDOW_SIZE = 60;

/** 性能降级 FPS 阈值 */
export const FPS_DROP_THRESHOLD = 20;

/** 粒子数量（高性能模式） */
export const PARTICLE_COUNT_HIGH = 100;

/** 粒子数量（中性能模式） */
export const PARTICLE_COUNT_MEDIUM = 0;
```

---

## 7. 错误处理

### 7.1 错误类型

```typescript
enum LoadingErrorType {
  /** WebGL 不支持 */
  WEBGL_NOT_SUPPORTED = 'WEBGL_NOT_SUPPORTED',
  
  /** 场景初始化失败 */
  SCENE_INIT_FAILED = 'SCENE_INIT_FAILED',
  
  /** 资源加载失败 */
  RESOURCE_LOAD_FAILED = 'RESOURCE_LOAD_FAILED',
  
  /** 渲染错误 */
  RENDER_ERROR = 'RENDER_ERROR',
  
  /** 超时错误 */
  TIMEOUT = 'TIMEOUT',
}
```

### 7.2 错误处理策略

```typescript
interface LoadingError {
  type: LoadingErrorType;
  message: string;
  recoverable: boolean;
  fallbackAction?: () => void;
}

// 错误处理映射
const ERROR_HANDLERS: Record<LoadingErrorType, (error: LoadingError) => void> = {
  [LoadingErrorType.WEBGL_NOT_SUPPORTED]: () => {
    // 切换到 2D 降级模式
    switchToFallbackMode();
  },
  [LoadingErrorType.SCENE_INIT_FAILED]: () => {
    // 重试初始化（最多 3 次）
    retryInit();
  },
  [LoadingErrorType.TIMEOUT]: () => {
    // 显示超时提示，继续等待
    showTimeoutMessage();
  },
  // ...
};
```
