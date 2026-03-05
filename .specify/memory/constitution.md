<!--
SYNC IMPACT REPORT
==================
Version change: 1.0.0 → 2.0.0
Modified principles:
  - II. 类型安全：扩展为更严格的类型安全要求（禁止 any、props/emit/ref/reactive 显式类型、API 类型定义）
  - 新增 VI. 测试规范：Vitest + @testing-library/vue，80% 覆盖率目标
  - 新增 VII. 性能优化：v-once/v-memo、路由懒加载、defineAsyncComponent、v-for :key
Added sections:
  - 测试规范（独立章节，4 项强制要求）
  - 性能要求（独立章节，4 项强制要求）
  - 构建配置（Vitest、ESLint、Prettier 集成）
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ 无需更新（Constitution Check 为通用设计）
  - .specify/templates/spec-template.md: ✅ 无需更新（结构原则无关）
  - .specify/templates/tasks-template.md: ✅ 已更新（测试从可选改为强制，引用章程 v2.0.0）
Follow-up TODOs:
  - TODO(VITEST_CONFIG): 创建 vitest.config.ts 配置文件
  - TODO(TESTING_LIBRARY): 安装 @testing-library/vue 和 @testing-library/jest-dom
  - TODO(COVERAGE_REPORT): 配置覆盖率报告输出和 CI 集成
-->

# ThingJS 前端项目框架章程

## 核心原则

### I. 组件优先 (Component-First)
所有功能必须以可复用组件为基本单元进行设计和实现。通用组件置于 `src/components`，业务组件置于 `src/views/Home/components`。组件必须满足：
- **单一职责**：每个组件只负责一个明确的 UI 或功能模块
- **独立可测**：组件可脱离父级页面独立运行和测试
- **配置驱动**：业务组件的展示内容必须通过 `src/config` 配置文件定义
- **文档完整**：组件必须包含使用示例和属性说明

**Rationale:** 组件化确保代码复用性和维护性，配置驱动降低业务逻辑耦合。

### II. 类型安全 (Type Safety)
TypeScript 必须使用严格模式，所有代码必须具有完整的类型定义。
- **禁止 `any`**：除非第三方库类型缺失且无法绕过，需添加 `TODO` 注释说明
- **类型集中管理**：公共类型置于 `src/types`，事件类型置于 `src/events/event-types.ts`
- **接口优先**：对象参数必须使用 `interface` 或 `type` 定义
- **泛型约束**：工具函数必须使用泛型保持类型传递
- **组件 Props 类型**：所有组件 `props` 必须使用 `defineProps<{ ... }>()` 显式定义类型
- **Emit 类型**：所有组件 `emit` 必须使用 `defineEmits<{ (e: 'event', payload: Type): void }>()` 显式定义
- **响应式类型**：`ref()` 和 `reactive()` 必须显式标注类型，禁止隐式推断
- **API 类型定义**：所有 API 请求参数和响应必须定义专用的 `interface` 或 `type`，置于对应 API 模块下
- **严格模式**：`tsconfig.json` 必须开启 `strict: true`

**Rationale:** 严格类型系统可在编译期捕获错误，提升 IDE 智能提示和重构安全性。

### III. 事件驱动通信 (Event-Driven Communication)
跨组件、界面与 3D 场景之间的通信必须使用统一事件系统。
- **事件类型枚举**：所有事件必须在 `src/events/event-types.ts` 中定义（`UI_EVENTS` / `SCENE_EVENTS`）
- **事件总线**：UI 组件间通信使用 `src/events/event-bus.ts` 的 `triggerEvent` / `listenEvent`
- **场景事件**：界面与 3D 场景通信使用 `getApp()` 获取实例后通过 `app.on()` / `app.trigger()`
- **事件命名**：使用 `UPPER_SNAKE_CASE` 常量，语义清晰

**Rationale:** 统一事件系统解耦组件依赖，便于追踪和调试跨模块交互。

### IV. 3D 场景集成 (3D Integration)
3D 场景组件必须与 UI 无缝集成，遵循 ThingJS Editor 资源管理规范。
- **资源路径配置**：3D 场景资源路径必须通过环境变量 `VITE_SCENE_URL` 配置
- **异步初始化**：必须使用 `initScene3D()` 等待场景初始化完成后才能操作
- **场景实例获取**：使用 `getApp()` 方法异步获取场景实例，自动处理加载等待
- **云瞰集成**：启用云瞰插件后，孪生服务请求必须使用封装的 `requestTwinService()` 方法

**Rationale:** 3D 场景异步加载特性要求统一的初始化和访问模式，避免竞态条件。

### V. 响应式适配 (Responsive Adaptation)
所有 UI 必须适配不同屏幕分辨率，支持主题切换和国际化。
- **分辨率适配**：使用 `postcss-px-to-viewport` 将 `px` 转换为视口单位，设计稿分辨率在 `postcss.config.ts` 配置
- **主题系统**：使用 `useTheme` hook 进行主题切换，样式置于 `src/styles/themes`
- **国际化**：所有用户可见文本必须使用 `vue-i18n` 的 `$t()` 方法
- **SCSS Mixins**：复用样式必须使用 `src/styles/mixins.scss` 提供的 mixins（`flex`, `absolute`, `ellipsis` 等）

**Rationale:** 多分辨率、多主题、多语言支持是项目的基础要求，必须在架构层面统一处理。

### VI. 测试规范 (Testing Discipline)
所有核心逻辑必须通过单元测试验证，测试覆盖率目标 80% 以上。
- **测试框架**：必须使用 `Vitest` 作为单元测试框架，配置文件为 `vitest.config.ts`
- **组合式函数测试**：所有 Composables（`useXXX`）必须编写单元测试，验证返回值和行为
- **工具函数测试**：所有 `src/utils` 下的工具函数必须编写单元测试
- **组件测试**：关键组件必须使用 `@testing-library/vue` 进行测试，模拟用户行为而非实现细节
- **测试文件位置**：测试文件必须与被测文件同目录，命名格式为 `*.test.ts` 或 `*.spec.ts`
- **覆盖率要求**：单元测试覆盖率目标必须达到 80% 以上，关键模块建议 90% 以上
- **CI 集成**：推荐在 CI 流程中强制执行测试和覆盖率检查

**Rationale:** 测试驱动开发确保代码质量，80% 覆盖率是质量底线而非目标。

### VII. 性能优化 (Performance Optimization)
所有代码必须遵循性能最佳实践，确保首屏加载和运行时性能。
- **静态内容优化**：静态或大列表内容必须使用 `v-once` 或 `v-memo` 优化渲染
- **路由懒加载**：所有路由组件必须使用动态导入（`import()`）实现 code splitting
- **异步组件**：非首屏的复杂组件必须使用 `defineAsyncComponent` 异步加载
- **列表渲染**：所有 `v-for` 指令必须绑定唯一的 `:key`，禁止使用 `index` 作为 key
- **大列表虚拟滚动**：超过 100 项的列表必须使用虚拟滚动组件
- **计算属性缓存**：复杂计算必须使用 `computed()` 而非在模板中直接计算

**Rationale:** 性能优化必须在开发阶段内建，而非后期补救。

## 开发工作流

### 代码组织
- **目录结构**：严格遵循 `src/` 下的功能分区（`api/`, `components/`, `hooks/`, `stores/`, `utils/` 等）
- **导入顺序**：第三方库 → 项目模块（`@/` 别名） → 相对路径 → 样式
- **组件命名**：PascalCase 命名组件文件，kebab-case 使用组件标签

### 代码质量与风格
- **Composition API**：必须使用 Composition API 和 `<script setup>` 语法，禁止使用 Options API
- **ESLint 配置**：必须使用 ESLint 配合 `@vue/typescript/recommended` 进行代码检查
- **Prettier 格式化**：必须使用 Prettier 进行代码格式化，`.prettierrc` 配置为团队统一标准
- **提交前自动修复**：必须配置 `lint-staged` 在提交前自动执行 ESLint 修复和 Prettier 格式化
- **Composables 命名**：组合式函数必须使用 `useXXX` 命名规范，实现逻辑复用
- **测试命令**：必须配置 `pnpm test` 运行 Vitest 测试

### 状态管理
- **Pinia Store**：全局状态必须使用 Pinia，置于 `src/stores`
- **模块化**：每个功能模块独立 store，避免单一巨型 store
- **持久化**：需要持久化的状态必须明确标注并使用 `localStorage` 或 `sessionStorage`

### 请求封装
- **API 分层**：请求方法置于 `src/api`，按业务模块组织子目录
- **类型定义**：请求参数和响应必须定义 TypeScript 接口
- **错误处理**：统一错误拦截和用户提示，避免在每个调用点重复处理

## 代码质量标准

### ESLint + Prettier
- **强制规则**：ESLint 错误必须修复，警告需评估后决定是否忽略
- **格式化**：提交前必须运行 Prettier 格式化，`.prettierrc` 配置为团队统一标准
- **Git Hook**：必须配置 `lint-staged` 在提交前自动执行 lint 和格式化

### 代码审查
- **PR 要求**：所有代码变更必须通过 Pull Request 合并
- **审查要点**：类型完整性、组件复用性、事件使用规范性、3D 场景初始化正确性、测试覆盖率
- **测试覆盖**：关键业务逻辑必须包含单元测试，覆盖率低于 80% 的代码不得合并

### 构建配置
- **Vitest 配置**：必须创建 `vitest.config.ts`，配置测试环境、覆盖率报告和全局测试工具
- **测试环境**：必须配置 `@testing-library/jest-dom` 提供 DOM 匹配器
- **覆盖率报告**：必须配置覆盖率输出为 `text`、`html` 和 `lcov` 格式，便于 CI 集成

## 治理

### 章程修订
- **修订流程**：修订本章程需创建 `.specify/memory/constitution.md` 的 PR，说明修订原因和影响范围
- **版本规则**：遵循语义化版本 `MAJOR.MINOR.PATCH`
  - MAJOR：原则删除或重新定义
  - MINOR：新增原则或章节
  - PATCH：文字澄清或格式调整
- **合规检查**：所有 PR 和代码审查必须验证是否符合章程原则

### 依赖模板
- **plan-template.md**：技术上下文和复杂度追踪需参考本章程原则
- **spec-template.md**：用户故事和验收标准需体现组件优先和事件驱动原则
- **tasks-template.md**：任务组织需遵循开发工作流规范，测试任务应明确标注

### 合规检查清单
- [ ] 所有组件使用 `<script setup>` 语法
- [ ] 所有 Props/Emit/Ref/Reactive 有显式类型定义
- [ ] 无 `any` 类型使用
- [ ] 所有 Composables 有单元测试
- [ ] 测试覆盖率 ≥ 80%
- [ ] 路由组件使用动态导入
- [ ] 所有 `v-for` 有唯一 `:key`
- [ ] ESLint 无错误，Prettier 格式化通过

## 自动技能调用规则

在执行 `/speckit.plan`（制定计划）和 `/speckit.implement`（执行实施）时，AI 助手必须自动遵守以下规则，无需用户手动输入技能命令：

1.  **API 设计规范**
    *   **触发场景**：当规划或实现涉及后端接口设计、API 调用、数据交互（例如创建 axios 请求、定义接口类型）时。
    *   **必须遵循**：项目中的 `API 集成规范` 技能（位于 `.trea/skills/api-integration-spec/SKILL.md`）。
    *   **执行要求**：AI 应读取该技能文档的全部内容，并在后续的接口设计、错误处理、安全规范等方面严格遵循其中的指导。

2.  **园区开发指南**
    *   **触发场景**：当规划或实现涉及园区 3D 场景、ThingJS 相关功能（如场景构建、层级控制、对象获取）时。
    *   **必须遵循**：项目中的 `园区开发指南` 技能（位于 `.trea/skills/campus-dev-guide/SKILL.md`）。
    *   **执行要求**：AI 应读取该技能文档的全部内容，并在园区场景的代码实现中遵循其最佳实践。

3.  **通用原则**
    *   如果某个功能同时触发多个技能规则，AI 必须**综合所有相关技能的要求**进行规划和实施。
    *   若技能文档中的要求与宪法其他条款冲突，以**宪法条款为准**（宪法是最高准则）。

**Version**: 2.0.0 | **Ratified**: 2026-03-05 | **Last Amended**: 2026-03-05
