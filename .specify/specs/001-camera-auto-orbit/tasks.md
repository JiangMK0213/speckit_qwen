# Development Tasks: 园区相机自动环绕

**Feature Branch**: `001-camera-auto-orbit`
**Created**: 2026 年 3 月 5 日
**Status**: ✅ Task 1-4 完成

---

## Task List

### ✅ Task 1: 创建 CameraOrbitController 类
**File**: `src/scene3d/camera-orbit-controller.ts`
**Priority**: P0 (Critical)
**Status**: ✅ Completed

#### Subtasks
- [x] 定义 `CameraOrbitConfig` 接口
- [x] 实现 `CameraOrbitController` 类构造函数
- [x] 实现 `start()` 方法 - 启动自动旋转
- [x] 实现 `stop()` 方法 - 停止自动旋转
- [x] 实现 `resume()` 方法 - 恢复自动旋转
- [x] 实现 `updateCamera()` 方法 - 每帧更新相机位置
- [x] 实现 `onUserInteraction()` 方法 - 用户交互处理
- [x] 实现 `scheduleResume()` 方法 - 调度 5 秒后恢复
- [x] 实现 `setConfig()` 方法 - 更新配置参数
- [x] 实现 `destroy()` 方法 - 清理定时器和资源

#### Acceptance Criteria
- [x] 类可以成功实例化
- [x] 调用 `start()` 后相机开始顺时针旋转
- [x] 调用 `stop()` 后相机立即停止
- [x] 调用 `onUserInteraction()` 后触发 5 秒恢复计时
- [x] 配置参数可以动态更新

---

### ✅ Task 2: 创建配置文件
**File**: `src/config/modules/camera-orbit.ts`
**Priority**: P1 (High)
**Status**: ✅ Completed

#### Subtasks
- [x] 导入 `CameraOrbitConfig` 类型
- [x] 导出 `cameraOrbitConfig` 常量对象
- [x] 设置默认参数值:
  - `center: [0, 0, 0]`
  - `radius: 100`
  - `height: 50`
  - `speed: 12` (360 度/30 秒)
  - `resumeDelay: 5`
  - `enabled: true`
- [x] 添加 JSDoc 注释说明各参数含义

#### Acceptance Criteria
- [x] 配置文件可被正确导入
- [x] 所有参数值符合规格说明
- [x] 参数注释清晰完整

---

### ✅ Task 3: 集成到 Scene3D.vue
**File**: `src/views/Home/components/Scene3D.vue`
**Priority**: P0 (Critical)
**Status**: ✅ Completed

#### Subtasks
- [x] 导入 `CameraOrbitController` 类
- [x] 导入 `cameraOrbitConfig` 配置
- [x] 导入 `getApp()` 函数获取 App 实例
- [x] 在 `onMounted` 中:
  - [x] 等待场景初始化完成
  - [x] 获取 ThingJS App 实例
  - [x] 创建 `CameraOrbitController` 实例
  - [x] 调用 `start()` 启动自动旋转
- [x] 绑定用户交互事件监听:
  - [x] `mousedown`
  - [x] `mousemove`
  - [x] `mouseup`
  - [x] `mousewheel`
  - [x] `touchstart`
  - [x] `touchmove`
  - [x] `touchend`
- [x] 在 `onBeforeUnmount` 中调用 `destroy()` 清理

#### Acceptance Criteria
- [x] 场景加载后相机自动开始旋转
- [x] 拖拽地图后旋转立即停止
- [x] 停止操作 5 秒后旋转自动恢复
- [x] 组件卸载后无内存泄漏

---

### ✅ Task 4: 导出控制器
**File**: `src/scene3d/index.ts`
**Priority**: P2 (Medium)
**Status**: ✅ Completed

#### Subtasks
- [x] 导出 `CameraOrbitController` 类
- [x] 导出 `CameraOrbitConfig` 类型接口

#### Acceptance Criteria
- [x] 可以从 `@/scene3d` 导入控制器类和配置类型

---

### ⬜ Task 5: 编写单元测试 (Optional)
**File**: `src/scene3d/__tests__/camera-orbit-controller.test.ts`
**Priority**: P3 (Low)
**Status**: ⬜ Not Started

---

## Implementation Order

```
Task 1 (P0) → Task 2 (P1) → Task 3 (P0) → Task 4 (P2) → Task 5 (P3)
```

**Recommended Sequence**:
1. **Task 1** - 核心控制器类（依赖最少，可独立测试）
2. **Task 2** - 配置文件（为 Task 3 提供配置）
3. **Task 3** - 集成到组件（依赖 Task 1 和 Task 2）
4. **Task 4** - 导出模块（可选，便于其他地方使用）
5. **Task 5** - 单元测试（可选，但推荐）

---

## Progress Tracking

| Task | Priority | Status | Started | Completed |
|------|----------|--------|---------|-----------|
| Task 1: CameraOrbitController | P0 | ✅ Completed | 2026-03-05 | 2026-03-05 |
| Task 2: 配置文件 | P1 | ✅ Completed | 2026-03-05 | 2026-03-05 |
| Task 3: Scene3D 集成 | P0 | ✅ Completed | 2026-03-05 | 2026-03-05 |
| Task 4: 导出控制器 | P2 | ✅ Completed | 2026-03-05 | 2026-03-05 |
| Task 5: 单元测试 | P3 | ⬜ Not Started | - | - |

---

## Notes

- **P0 任务必须完成**才能实现基本功能
- **P1 任务**提供配置灵活性
- **P2 任务**为可选的模块导出
- **P3 任务**为可选的测试覆盖
- 每个任务完成后更新此文档状态
