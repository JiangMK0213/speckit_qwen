# Technical Plan: 园区相机自动环绕

**Feature Branch**: `001-camera-auto-orbit`
**Created**: 2026 年 3 月 5 日
**Status**: Draft
**Spec**: [spec.md](../spec.md)

---

## 1. Technical Overview

### 1.1 Architecture

本功能采用**相机控制器模式**，通过独立的相机环绕控制器管理自动旋转行为，与 ThingJS 相机系统解耦。

```
┌─────────────────────────────────────────────────────────────┐
│                     Vue 3 Application                        │
├─────────────────────────────────────────────────────────────┤
│  Scene3D.vue                                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  initScene3D()                                       │   │
│  │  └─> 初始化 ThingJS App                              │   │
│  │      └─> 创建 CameraOrbitController 实例             │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  CameraOrbitController (新增)                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  - 状态管理：自动旋转/手动控制                       │   │
│  │  - 定时器管理：5 秒恢复计时器                         │   │
│  │  - 旋转计算：每帧更新相机位置                        │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  ThingJS Camera API                                         │
│  - camera.getPosition()                                     │
│  - camera.setPosition()                                     │
│  - camera.setTarget()                                       │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Key Components

| Component | File | Responsibility |
|-----------|------|----------------|
| `CameraOrbitController` | `src/scene3d/camera-orbit-controller.ts` | 相机环绕核心逻辑 |
| `CameraOrbitConfig` | `src/config/modules/camera-orbit.ts` | 可配置参数定义 |
| `Scene3D.vue` | `src/views/Home/components/Scene3D.vue` | 初始化和事件绑定 |

---

## 2. Implementation Details

### 2.1 CameraOrbitController 类设计

**File**: `src/scene3d/camera-orbit-controller.ts`

```typescript
interface CameraOrbitConfig {
  center: [number, number, number]  // 旋转中心，默认 [0,0,0]
  radius: number                     // 旋转半径（米）
  height: number                     // 相机高度（米）
  speed: number                      // 旋转速度（度/秒）
  resumeDelay: number                // 恢复延迟（秒），默认 5 秒
  enabled: boolean                   // 是否启用自动环绕
}

class CameraOrbitController {
  private app: any                   // ThingJS App 实例
  private config: CameraOrbitConfig
  private currentAngle: number       // 当前旋转角度（弧度）
  private isAutoRotating: boolean    // 是否正在自动旋转
  private lastInteractionTime: number // 最后交互时间戳
  private resumeTimer: number | null  // 恢复计时器 ID
  private animationFrameId: number | null // requestAnimationFrame ID
  
  constructor(app: any, config?: Partial<CameraOrbitConfig>)
  
  // 公共方法
  start(): void                        // 启动自动旋转
  stop(): void                         // 停止自动旋转
  resume(): void                       // 恢复自动旋转
  setConfig(config: Partial<CameraOrbitConfig>): void  // 更新配置
  destroy(): void                      // 销毁控制器
  
  // 内部方法
  private updateCamera(): void         // 每帧更新相机位置
  private onUserInteraction(): void    // 用户交互处理
  private scheduleResume(): void       // 调度恢复
}
```

### 2.2 核心算法

#### 2.2.1 相机位置计算

```typescript
private updateCamera(): void {
  if (!this.isAutoRotating) return
  
  const { center, radius, height, speed } = this.config
  
  // 更新旋转角度（顺时针）
  this.currentAngle += (speed * Math.PI / 180)
  
  // 计算新位置（水平面上的圆周运动）
  const x = center[0] + radius * Math.cos(this.currentAngle)
  const z = center[2] + radius * Math.sin(this.currentAngle)
  const y = center[1] + height
  
  // 更新相机位置和朝向
  const camera = this.app.camera
  camera.setPosition([x, y, z])
  camera.setTarget(center)
  
  // 继续下一帧
  this.animationFrameId = requestAnimationFrame(() => this.updateCamera())
}
```

#### 2.2.2 用户交互处理

```typescript
private onUserInteraction(): void {
  // 立即停止自动旋转
  this.stop()
  
  // 记录最后交互时间
  this.lastInteractionTime = Date.now()
  
  // 调度恢复
  this.scheduleResume()
}

private scheduleResume(): void {
  if (this.resumeTimer) {
    clearTimeout(this.resumeTimer)
  }
  
  this.resumeTimer = window.setTimeout(() => {
    const elapsed = Date.now() - this.lastInteractionTime
    if (elapsed >= this.config.resumeDelay * 1000) {
      this.resume()
    }
  }, this.config.resumeDelay * 1000)
}
```

### 2.3 配置文件设计

**File**: `src/config/modules/camera-orbit.ts`

```typescript
import type { CameraOrbitConfig } from '@/scene3d/camera-orbit-controller'

/**
 * 相机自动环绕配置
 */
export const cameraOrbitConfig: CameraOrbitConfig = {
  center: [0, 0, 0],      // 旋转中心，默认原点
  radius: 100,            // 旋转半径（米），根据园区尺寸调整
  height: 50,             // 相机高度（米）
  speed: 12,              // 旋转速度（度/秒），360 度/30 秒 = 12 度/秒
  resumeDelay: 5,         // 恢复延迟（秒）
  enabled: true           // 默认启用
}
```

### 2.4 事件监听集成

在 `Scene3D.vue` 中监听 ThingJS 交互事件：

```typescript
// 监听用户交互事件
app.on('mousedown', () => controller.onUserInteraction())
app.on('mousemove', () => controller.onUserInteraction())
app.on('mouseup', () => controller.onUserInteraction())
app.on('mousewheel', () => controller.onUserInteraction())
app.on('touchstart', () => controller.onUserInteraction())
app.on('touchmove', () => controller.onUserInteraction())
app.on('touchend', () => controller.onUserInteraction())
```

---

## 3. File Structure

```
src/
├── scene3d/
│   ├── camera-orbit-controller.ts    # 新增：相机环绕控制器
│   ├── index.ts                       # 导出控制器
│   ├── init.ts
│   └── thing-app.ts
├── config/
│   └── modules/
│       └── camera-orbit.ts           # 新增：相机环绕配置
└── views/
    └── Home/
        └── components/
            └── Scene3D.vue           # 修改：集成控制器
```

---

## 4. Implementation Tasks

### Task 1: 创建 CameraOrbitController 类
**File**: `src/scene3d/camera-orbit-controller.ts`
**Priority**: P0

- [ ] 定义 `CameraOrbitConfig` 接口
- [ ] 实现 `CameraOrbitController` 类
- [ ] 实现 `start()`, `stop()`, `resume()` 方法
- [ ] 实现 `updateCamera()` 核心算法
- [ ] 实现 `onUserInteraction()` 交互处理
- [ ] 实现 `scheduleResume()` 恢复调度
- [ ] 实现 `setConfig()` 配置更新
- [ ] 实现 `destroy()` 清理逻辑

### Task 2: 创建配置文件
**File**: `src/config/modules/camera-orbit.ts`
**Priority**: P1

- [ ] 导出 `cameraOrbitConfig` 对象
- [ ] 定义默认参数值
- [ ] 添加参数说明注释

### Task 3: 集成到 Scene3D.vue
**File**: `src/views/Home/components/Scene3D.vue`
**Priority**: P0

- [ ] 导入 `CameraOrbitController`
- [ ] 导入 `cameraOrbitConfig`
- [ ] 在 `onMounted` 中初始化控制器
- [ ] 绑定用户交互事件监听
- [ ] 在组件卸载时调用 `destroy()`

### Task 4: 导出控制器
**File**: `src/scene3d/index.ts`
**Priority**: P2

- [ ] 导出 `CameraOrbitController` 类
- [ ] 导出 `CameraOrbitConfig` 类型

---

## 5. Testing Strategy

### 5.1 单元测试

**File**: `src/scene3d/__tests__/camera-orbit-controller.test.ts`

| Test Case | Description |
|-----------|-------------|
| `start()` | 验证启动后 `isAutoRotating` 为 true |
| `stop()` | 验证停止后 `isAutoRotating` 为 false |
| `resume()` | 验证恢复后重新开始旋转 |
| `onUserInteraction()` | 验证调用后停止旋转并启动计时器 |
| `scheduleResume()` | 验证 5 秒后自动恢复 |
| `setConfig()` | 验证配置更新后行为变化 |
| `updateCamera()` | 验证相机位置按预期更新 |

### 5.2 集成测试

**File**: `src/views/Home/__tests__/Scene3D.camera-orbit.test.ts`

| Test Case | Description |
|-----------|-------------|
| 场景加载后自动旋转 | 验证 `onMounted` 后控制器自动启动 |
| 用户拖拽后停止 | 模拟 mousedown 事件，验证旋转停止 |
| 停止操作 5 秒后恢复 | 等待 5 秒，验证旋转自动恢复 |
| 配置参数生效 | 修改配置后验证旋转行为变化 |

### 5.3 性能测试

- 使用 `requestAnimationFrame` 确保 60fps
- 监控旋转过程中帧率不低于 55fps
- 验证内存无泄漏（定时器正确清理）

---

## 6. Performance Considerations

### 6.1 帧率优化

- 使用 `requestAnimationFrame` 而非 `setInterval`
- 避免在 `updateCamera()` 中创建新对象
- 复用向量计算中间结果

### 6.2 内存管理

- 组件卸载时调用 `destroy()` 清理所有定时器
- 清理事件监听器防止内存泄漏
- 清除 `requestAnimationFrame` 回调

### 6.3 边界情况处理

- 容器尺寸变化时重新计算相机位置
- 场景加载失败时不启动旋转
- 配置参数非法时使用默认值

---

## 7. Dependencies

### 7.1 External Dependencies

| Dependency | Version | Usage |
|------------|---------|-------|
| ThingJS | 项目内置 | 相机 API |
| Vue 3 | ^3.5.13 | 组件生命周期 |

### 7.2 Internal Dependencies

| Module | File | Usage |
|--------|------|-------|
| `scene3d/thing-app` | `src/scene3d/thing-app.ts` | 获取 App 实例 |
| `config/modules/camera-orbit` | `src/config/modules/camera-orbit.ts` | 读取配置 |

---

## 8. Success Criteria Validation

| Criteria | Target | Validation Method |
|----------|--------|-------------------|
| SC-001 | 1 秒内启动 | 场景加载后计时验证 |
| SC-002 | 30 秒/圈 | 测量完整旋转周期 |
| SC-003 | 100ms 内停止 | 交互后计时验证 |
| SC-004 | 5 秒±0.5 秒恢复 | 交互后计时验证 |
| SC-005 | 55-60fps | 使用浏览器 DevTools 监控 |
| SC-006 | 平滑度 4 分+ | 人工测试评分 |
| SC-007 | 2 秒内生效 | 修改配置后重新加载验证 |
| SC-008 | 30 秒内完成一圈 | 同 SC-002 |

---

## 9. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| ThingJS API 变更 | 高 | 封装相机操作，便于适配 |
| 性能不达标 | 中 | 使用性能分析工具优化 |
| 配置参数不生效 | 低 | 添加配置验证和日志 |
| 定时器泄漏 | 中 | 严格管理生命周期，组件卸载时清理 |

---

## 10. Future Enhancements

- [ ] 支持配置文件中动态调整参数（热更新）
- [ ] 支持多园区场景的不同环绕策略
- [ ] 添加 UI 控件手动启停自动环绕
- [ ] 支持非圆形路径（椭圆、自定义轨迹）
- [ ] 添加旋转方向配置（顺时针/逆时针切换）
