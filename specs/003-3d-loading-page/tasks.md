# Tasks: 三维特性 Loading 页面

**Input**: Design documents from `specs/003-3d-loading-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/component-interfaces.md

**Tests**: Tests are MANDATORY per Constitution v2.0.0 (Testing Discipline principle).
All Composables, utility functions, and critical component interactions MUST have unit tests.
Coverage target: ≥80%. Use Vitest + @testing-library/vue.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: 项目初始化和基础结构搭建

- [ ] T001 创建功能目录结构 per plan.md (src/components/ThreeDLoading/, src/hooks/, src/utils/, src/types/, src/styles/components/)
- [ ] T002 [P] 安装 Three.js 依赖 (pnpm add three @types/three)
- [ ] T003 [P] 配置 Vitest 测试环境 (如未配置)
- [ ] T004 [P] 检查 ESLint 和 Prettier 配置 (如未配置)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 核心基础设施，所有用户故事的前置依赖

**⚠️ CRITICAL**: 此阶段完成前不可开始任何用户故事开发

- [ ] T005 [P] 创建类型定义文件 src/types/loading.ts (PerformanceLevel, LoadingProgress, SceneConfig, Geometries 接口)
- [ ] T006 [P] 创建事件类型定义 src/events/event-types.ts (LOADING_EVENTS 枚举，LoadingEventMap 接口)
- [ ] T007 [P] 创建常量定义 src/utils/loading-constants.ts (DEFAULT_ROTATION_SPEED, FADE_OUT_DURATION 等)
- [ ] T008 [P] 创建性能检测工具函数 src/utils/loading-scene.ts (hasWebGL2Support, detectGPUPerformance, isMobileDevice)
- [ ] T009 [P] 创建 CSS 变量定义 src/styles/components/three-d-loading.css (--loading-bg-color, --loading-text-color 等)
- [ ] T010 创建 3D 场景工具函数 src/utils/loading-scene.ts (createLoadingGeometries, createCube, createTorus, createSphere)
- [ ] T011 创建资源释放函数 src/utils/loading-scene.ts (disposeThreeScene, disposeGeometry, disposeMaterial)
- [ ] T012 创建 3D 场景 Hook src/hooks/useThreeScene.ts (基础结构：containerRef, isInitialized, fps)
- [ ] T013 实现 Hook 初始化逻辑 src/hooks/useThreeScene.ts (initScene 方法)
- [ ] T014 实现 Hook 销毁逻辑 src/hooks/useThreeScene.ts (disposeScene 方法)

**Checkpoint**: 基础设施就绪 - 可以开始用户故事开发

---

## Phase 3: User Story 1 - 显示 3D 加载动画 (Priority: P1) 🎯 MVP

**Goal**: 用户可以通过 3D 加载动画了解系统正在处理中

**Independent Test**: 用户打开应用或触发异步操作，观察到 3D 加载页面正常显示，包含旋转的 3D 元素和"加载中…"文字

### Tests for User Story 1 ⚠️

> **NOTE**: 先编写这些测试，确保在实现前 FAIL

- [ ] T015 [P] [US1] 创建 ThreeDLoading 组件测试 tests/unit/components/ThreeDLoading.test.ts (挂载/卸载测试)
- [ ] T016 [P] [US1] 创建 useThreeScene Hook 测试 tests/unit/hooks/useThreeScene.test.ts (初始化/销毁测试)
- [ ] T017 [P] [US1] 创建几何体创建函数测试 tests/unit/utils/loading-scene.test.ts (几何体创建测试)
- [ ] T018 [P] [US1] 创建资源释放函数测试 tests/unit/utils/loading-scene.test.ts (资源释放测试)

### Implementation for User Story 1

- [ ] T019 [P] [US1] 创建 3D 场景渲染组件 src/components/ThreeDLoading/LoadingScene3D.vue (基础结构、Three.js 初始化)
- [ ] T020 [P] [US1] 创建 2D 备用加载组件 src/components/ThreeDLoading/FallbackLoading.vue (CSS 动画降级)
- [ ] T021 [P] [US1] 创建 3D 加载主组件 src/components/ThreeDLoading/ThreeDLoading.vue (基础结构、Props 定义)
- [ ] T022 [US1] 实现几何体动画逻辑 src/components/ThreeDLoading/LoadingScene3D.vue (旋转动画、10 秒/圈)
- [ ] T023 [US1] 实现"加载中…"文字显示 src/components/ThreeDLoading/ThreeDLoading.vue (loadingText prop)
- [ ] T024 [US1] 实现组件暴露方法 src/components/ThreeDLoading/ThreeDLoading.vue (forceClose, reset)
- [ ] T025 [US1] 实现淡出过渡效果 src/components/ThreeDLoading/ThreeDLoading.vue (500ms 过渡)
- [ ] T026 [US1] 集成 useThreeScene Hook src/components/ThreeDLoading/LoadingScene3D.vue
- [ ] T027 [US1] 添加组件导出文件 src/components/ThreeDLoading/index.ts
- [ ] T028 [US1] 在 App.vue 中集成 3D 加载组件 src/App.vue (根据加载状态控制显示/隐藏)

**Checkpoint**: 用户故事 1 完全功能可用 - 3D 加载动画正常显示

---

## Phase 4: User Story 2 - 加载进度显示 (Priority: P2)

**Goal**: 用户可以看到加载进度的实时反馈

**Independent Test**: 用户观察到加载进度条或百分比数字随加载进程实时更新

### Tests for User Story 2 ⚠️

- [ ] T029 [P] [US2] 创建进度更新集成测试 tests/integration/loading-flow.test.ts (进度更新流程测试)
- [ ] T030 [P] [US2] 创建不确定进度测试 tests/unit/components/ThreeDLoading.test.ts (null 进度测试)

### Implementation for User Story 2

- [ ] T031 [P] [US2] 扩展 ThreeDLoading Props src/components/ThreeDLoading/ThreeDLoading.vue (progress: number | null)
- [ ] T032 [P] [US2] 创建进度条组件 src/components/ThreeDLoading/ProgressBar.vue (进度条样式、百分比显示)
- [ ] T033 [US2] 实现进度更新逻辑 src/hooks/useThreeScene.ts (updateProgress 方法)
- [ ] T034 [US2] 实现不确定进度动画 src/components/ThreeDLoading/FallbackLoading.vue (点状闪烁)
- [ ] T035 [US2] 实现超时检测逻辑 src/components/ThreeDLoading/ThreeDLoading.vue (timeout prop, timeout 事件)
- [ ] T036 [US2] 实现最小显示时间 src/components/ThreeDLoading/ThreeDLoading.vue (minDisplayTime prop)
- [ ] T037 [US2] 添加进度事件 src/components/ThreeDLoading/ThreeDLoading.vue (close 事件)

**Checkpoint**: 用户故事 1 和 2 均可独立工作 - 3D 加载动画 + 进度显示

---

## Phase 5: User Story 3 - 性能降级与兼容性 (Priority: P3)

**Goal**: 低端设备用户获得适配的加载体验

**Independent Test**: 用户在低端设备或旧版浏览器上访问应用时，系统自动降级为简化的 2D 加载动画

### Tests for User Story 3 ⚠️

- [ ] T038 [P] [US3] 创建性能检测单元测试 tests/unit/utils/loading-scene.test.ts (WebGL 检测、GPU 检测)
- [ ] T039 [P] [US3] 创建降级逻辑测试 tests/unit/components/ThreeDLoading.test.ts (降级切换测试)
- [ ] T040 [P] [US3] 创建浏览器兼容性测试 tests/integration/loading-flow.test.ts (多浏览器测试)

### Implementation for User Story 3

- [ ] T041 [P] [US3] 实现性能级别检测 src/utils/loading-scene.ts (getRecommendedPerformanceLevel)
- [ ] T042 [P] [US3] 实现降级配置函数 src/utils/loading-scene.ts (getFallbackConfig)
- [ ] T043 [US3] 实现自动降级逻辑 src/hooks/useThreeScene.ts (根据性能级别调整配置)
- [ ] T044 [US3] 实现 FPS 监控 src/hooks/useThreeScene.ts (fps ref, 动态降级)
- [ ] T045 [US3] 实现主题色同步 src/hooks/useThreeScene.ts (updateColor 方法，MutationObserver 监听 CSS 变量)
- [ ] T046 [US3] 实现移动端适配 src/styles/components/three-d-loading.css (响应式样式、触摸交互)
- [ ] T047 [US3] 添加抗锯齿配置 src/hooks/useThreeScene.ts (antialias 配置)
- [ ] T048 [US3] 实现粒子系统开关 src/components/ThreeDLoading/LoadingScene3D.vue (enableParticles prop)

**Checkpoint**: 所有用户故事独立功能完成 - 3D 加载、进度显示、性能降级

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: 跨功能改进和最终完善

- [ ] T049 [P] 创建快速入门文档 specs/003-3d-loading-page/quickstart.md (如未创建)
- [ ] T050 [P] 编写组件使用示例 src/components/ThreeDLoading/README.md
- [ ] T051 代码清理和重构 (移除 TODO 注释、优化代码结构)
- [ ] T052 性能优化 (防抖处理、几何体复用、材质共享)
- [ ] T053 运行完整测试套件并修复失败测试 (pnpm test)
- [ ] T054 运行 ESLint 和 Prettier 检查 (pnpm lint)
- [ ] T055 验证 quickstart.md 示例可运行
- [ ] T056 边界情况测试 (WebGL 不支持、超时处理、资源释放验证)
- [ ] T057 Lighthouse 性能测试 (模拟低端设备，评分 ≥ 90)
- [ ] T058 浏览器兼容性测试 (Chrome、Firefox、Safari 最新版本)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: 无依赖 - 可立即开始
- **Phase 2 (Foundational)**: 依赖 Setup 完成 - **阻塞所有用户故事**
- **Phase 3-5 (User Stories)**: 均依赖 Foundational 完成
  - 用户故事可在 Foundational 完成后并行开发
  - 或按优先级顺序执行 (P1 → P2 → P3)
- **Phase 6 (Polish)**: 依赖所有用户故事完成

### User Story Dependencies

- **User Story 1 (P1)**: 依赖 Foundational 完成 - 无其他故事依赖
- **User Story 2 (P2)**: 依赖 Foundational 完成 - 可与 US1 并行
- **User Story 3 (P3)**: 依赖 Foundational 完成 - 可与 US1/US2 并行

### Within Each User Story

1. 测试 (如包含) 必须在实现前编写，确保 FAIL
2. 工具函数/模型 先于 Service/Hook
3. Service/Hook 先于组件
4. 核心实现先于集成
5. 故事完成后再进行下一优先级

### Parallel Opportunities

- **Phase 1**: T002, T003, T004 可并行
- **Phase 2**: T005-T009 可并行 (不同文件)，T010-T014 需等待 T005-T009
- **Phase 3**: T015-T018 测试可并行，T019-T021 组件可并行
- **Phase 4**: T029-T030 测试可并行，T031-T032 可并行
- **Phase 5**: T038-T040 测试可并行，T041-T042 可并行
- **Phase 6**: T049-T050 文档可并行

---

## Parallel Example: User Story 1

```bash
# 并行启动所有 US1 测试:
Task: "创建 ThreeDLoading 组件测试 tests/unit/components/ThreeDLoading.test.ts"
Task: "创建 useThreeScene Hook 测试 tests/unit/hooks/useThreeScene.test.ts"
Task: "创建几何体创建函数测试 tests/unit/utils/loading-scene.test.ts"
Task: "创建资源释放函数测试 tests/unit/utils/loading-scene.test.ts"

# 并行启动所有 US1 组件实现:
Task: "创建 3D 场景渲染组件 src/components/ThreeDLoading/LoadingScene3D.vue"
Task: "创建 2D 备用加载组件 src/components/ThreeDLoading/FallbackLoading.vue"
Task: "创建 3D 加载主组件 src/components/ThreeDLoading/ThreeDLoading.vue"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. 完成 Phase 1: Setup
2. 完成 Phase 2: Foundational (**CRITICAL** - 阻塞所有故事)
3. 完成 Phase 3: User Story 1
4. **STOP and VALIDATE**: 测试 User Story 1 独立功能
5. 部署/演示 (MVP!)

### Incremental Delivery

1. 完成 Setup + Foundational → 基础就绪
2. 添加 User Story 1 → 独立测试 → 部署/演示 (MVP!)
3. 添加 User Story 2 → 独立测试 → 部署/演示
4. 添加 User Story 3 → 独立测试 → 部署/演示
5. 完成 Phase 6 Polish → 最终发布

### Parallel Team Strategy

多开发者场景:

1. 团队共同完成 Setup + Foundational
2. Foundational 完成后:
   - 开发者 A: User Story 1 (3D 加载组件)
   - 开发者 B: User Story 2 (进度显示)
   - 开发者 C: User Story 3 (性能降级)
3. 各故事独立完成后集成
4. Phase 6 按任务分配并行开发

---

## Task Summary

| Phase | 任务数 | 说明 |
|-------|--------|------|
| Phase 1: Setup | 4 | 项目初始化 |
| Phase 2: Foundational | 10 | 核心基础设施 (阻塞) |
| Phase 3: US1 (P1) | 14 | 显示 3D 加载动画 (MVP) |
| Phase 4: US2 (P2) | 9 | 加载进度显示 |
| Phase 5: US3 (P3) | 11 | 性能降级与兼容性 |
| Phase 6: Polish | 10 | 文档、优化、测试 |
| **总计** | **58** | |

### MVP Scope (User Story 1 Only)

- T001-T014: Setup + Foundational
- T019-T028: User Story 1 实现

**MVP 任务数**: 24 任务

---

## Notes

- [P] 任务 = 不同文件，无依赖，可并行
- [Story] 标签映射任务到具体用户故事以便追溯
- 每个用户故事应可独立开发和测试
- 测试必须在实现前编写并验证失败
- 每个任务或逻辑组完成后提交
- 在每个 checkpoint 停止验证故事独立功能
- 避免：模糊任务、同文件冲突、跨故事依赖破坏独立性
