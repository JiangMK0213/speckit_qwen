# Research: 三维特性 Loading 页面技术决策

**Feature**: 003-3d-loading-page
**Date**: 2026 年 3 月 5 日
**Purpose**: 记录技术调研结果和关键决策，为 Phase 1 设计提供依据

---

## 1. 3D 渲染引擎选型

### Decision
优先使用 **ThingJS** 作为 3D 渲染引擎（项目已集成），如 ThingJS 不可用则降级使用 **Three.js**。

### Rationale
- **项目一致性**: 项目已集成 ThingJS，使用 ThingJS 保持技术栈统一
- **开发效率**: ThingJS 提供更高级的 API，简化 3D 场景创建
- **性能优化**: ThingJS 针对园区场景优化，内置 LOD（Level of Detail）支持
- **降级方案**: Three.js 作为备选，社区活跃、文档丰富

### Alternatives Considered
| 方案 | 优点 | 缺点 | 结论 |
|------|------|------|------|
| ThingJS | 项目已集成、API 简洁、园区场景优化 | 学习曲线、文档相对较少 | ✅ 优先采用 |
| Three.js | 社区活跃、文档丰富、示例多 | 需要额外集成、代码量稍大 | ✅ 备选方案 |
| Babylon.js | 功能强大、微软支持 | 包体积大、项目无集成 | ❌ 不采用 |
| Pure CSS 3D | 无依赖、轻量 | 效果有限、兼容性差 | ❌ 仅用于 2D 降级 |

---

## 2. 3D 几何体设计

### Decision
使用简单几何体组合（立方体 + 环 + 球体）构建科技感加载动画，避免加载外部模型。

### Rationale
- **性能优先**: 简单几何体无需加载外部模型，减少初始加载时间
- **可控性强**: 程序化生成几何体，可动态调整颜色、大小、旋转速度
- **主题适配**: 几何体材质颜色可从 CSS 变量动态获取
- **文件体积**: 无需额外模型文件，保持应用轻量

### 几何体组合设计
| 几何体 | 作用 | 动画 |
|--------|------|------|
| 立方体（中心） | 视觉焦点 | 绕 Y 轴旋转（10 秒/圈） |
| 环（外围） | 增强科技感 | 绕 X 轴旋转（15 秒/圈） |
| 球体（可选） | 丰富层次 | 缩放脉冲（2 秒/周期） |

### Alternatives Considered
| 方案 | 优点 | 缺点 | 结论 |
|------|------|------|------|
| 简单几何体组合 | 无需加载、性能优、易定制 | 视觉效果相对简单 | ✅ 采用 |
| 加载外部 GLTF 模型 | 视觉效果丰富、可展示品牌元素 | 增加加载时间、需要额外资源 | ❌ 不采用 |
| 粒子系统 | 视觉效果炫酷 | 性能开销大、低端设备卡顿 | ⚠️ 仅高性能设备启用 |

---

## 3. 性能降级策略

### Decision
采用三级降级策略，根据设备性能自动调整渲染质量。

### Rationale
- **用户体验**: 确保所有设备都能获得流畅的加载体验
- **性能平衡**: 在视觉效果和性能之间找到平衡点
- **可测试性**: 明确的降级标准便于测试验证

### 降级级别
| 级别 | 设备特征 | 渲染配置 |
|------|----------|----------|
| **高级** | 独立显卡、桌面设备 | 完整几何体 + 粒子效果 + 抗锯齿 + 60 FPS |
| **中级** | 集成显卡、高端手机 | 简化几何体 + 无粒子 + 抗锯齿 + 30 FPS |
| **低级** | 低端手机、旧浏览器 | 2D CSS 动画降级 + 无 3D 渲染 |

### 性能检测指标
- **WebGL 支持**: `WebGLRenderingContext` 检测
- **GPU 性能**: 通过 `WEBGL_debug_renderer_info` 获取 GPU 信息
- **帧率检测**: 运行时 FPS 监控，动态降级
- **设备类型**: 移动端/桌面端检测

### Alternatives Considered
| 方案 | 优点 | 缺点 | 结论 |
|------|------|------|------|
| 三级降级 | 细粒度控制、适配范围广 | 实现复杂度稍高 | ✅ 采用 |
| 二级降级（开/关） | 实现简单 | 中间设备体验不佳 | ❌ 不够精细 |
| 无降级 | 开发成本最低 | 低端设备无法使用 | ❌ 不可接受 |

---

## 4. GPU 资源释放策略

### Decision
在组件卸载时完整释放 3D 场景资源，包括几何体、材质、渲染器和事件监听。

### Rationale
- **内存泄漏预防**: WebGL 资源不会自动回收，必须手动释放
- **单页应用需求**: 组件可能频繁挂载/卸载，资源释放至关重要
- **最佳实践**: 遵循 Three.js/ThingJS 官方资源释放指南

### 资源释放清单
1. **几何体**: 调用 `geometry.dispose()` 释放 GPU 缓冲区
2. **材质**: 调用 `material.dispose()` 释放着色器和纹理
3. **纹理**: 如有纹理，调用 `texture.dispose()`
4. **渲染器**: 调用 `renderer.dispose()` 和 `renderer.forceContextLoss()`
5. **事件监听**: 移除所有 `removeEventListener` 和定时器

### 伪代码示例
```typescript
function disposeScene(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.geometry.dispose();
      if (Array.isArray(object.material)) {
        object.material.forEach(m => m.dispose());
      } else {
        object.material.dispose();
      }
    }
  });
  renderer.dispose();
  renderer.forceContextLoss();
  renderer.domElement.remove();
}
```

---

## 5. 主题色派生策略

### Decision
从 CSS 变量 `--color-primary` 读取主题色，动态更新 3D 材质颜色。

### Rationale
- **一致性**: 与应用主题系统保持统一
- **响应式**: 主题切换时自动更新 3D 元素颜色
- **简单可靠**: 无需额外的颜色同步逻辑

### 实现方式
```typescript
function getPrimaryColor(): string {
  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue('--color-primary').trim() || '#1890ff';
}

// 监听主题变化
const observer = new MutationObserver(() => {
  const color = getPrimaryColor();
  updateMaterialColor(color);
});
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['style', 'data-theme']
});
```

---

## 6. 加载进度集成

### Decision
支持两种进度模式：确定进度（0-100）和不确定进度（点状闪烁）。

### Rationale
- **灵活性**: 适配不同加载场景（有进度信息/无进度信息）
- **用户体验**: 不确定进度避免用户误以为页面卡死
- **简单接口**: 通过 `progress` prop 统一接收进度值

### 进度模式
| 模式 | 触发条件 | 显示效果 |
|------|----------|----------|
| 确定进度 | `progress` 为 0-100 数值 | 进度条 + 百分比 |
| 不确定进度 | `progress` 为 `null` 或 `undefined` | 点状闪烁动画 |

---

## 7. 浏览器兼容性

### 目标浏览器
- Chrome >= 90 (WebGL 2.0 完整支持)
- Firefox >= 90 (WebGL 2.0 完整支持)
- Safari >= 15 (WebGL 2.0 完整支持)
- Edge >= 90 (WebGL 2.0 完整支持)

### 降级方案
对于不支持 WebGL 2.0 的浏览器：
1. 检测 WebGL 支持：`canvas.getContext('webgl2')`
2. 如不支持，回退到 2D CSS 动画
3. 显示提示文字"您的浏览器不支持 3D 效果，已切换到 2D 模式"

---

## 8. 性能优化策略

### 关键指标
- **加载页面显示延迟**: < 100ms (SC-001)
- **动画帧率**: 60 FPS（高级）/ 30 FPS（中级）(SC-002)
- **Lighthouse 性能评分**: ≥ 90 (SC-005)

### 优化措施
1. **按需渲染**: 仅在加载页面可见时渲染 3D 场景
2. **请求动画帧**: 使用 `requestAnimationFrame` 而非 `setInterval`
3. **几何体复用**: 预创建几何体实例，避免重复创建
4. **材质共享**: 多个几何体共享同一材质实例
5. **防抖处理**: 主题色变化时使用防抖，避免频繁更新材质
6. **LOD 技术**: 低端设备使用简化几何体（减少面数）

---

## 9. 测试策略

### 单元测试覆盖
| 模块 | 测试重点 | 覆盖率目标 |
|------|----------|------------|
| `useThreeScene.ts` | 场景初始化、动画循环、资源释放 | 95% |
| `loading-scene.ts` | 几何体创建、性能检测、降级逻辑 | 90% |
| `ThreeDLoading.vue` | Props 传递、进度更新、降级切换 | 90% |
| `FallbackLoading.vue` | 2D 动画渲染 | 85% |

### 集成测试
- 加载流程（启动 → 显示 → 更新进度 → 隐藏）
- 降级逻辑（模拟低端设备）
- 主题切换（颜色同步更新）
- 资源释放（组件卸载后检查内存）

### 性能测试
- Lighthouse 模拟低端设备测试
- FPS 监控（使用 `requestAnimationFrame` 计时）
- 内存泄漏检测（Chrome DevTools Memory 面板）

---

## 10. 风险与缓解

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| ThingJS API 变更 | 组件无法正常工作 | 封装适配层，便于切换到 Three.js |
| 低端设备性能不足 | 动画卡顿影响体验 | 三级降级策略，2D 备用方案 |
| GPU 资源未释放 | 内存泄漏导致崩溃 | 严格的资源释放清单、内存测试 |
| 主题色不同步 | 视觉效果不一致 | MutationObserver 监听 CSS 变量变化 |
| 进度数据不准确 | 进度显示错误 | 支持不确定进度模式、超时处理 |

---

## 11. 参考资料

- [Three.js Documentation](https://threejs.org/docs/)
- [ThingJS Documentation](https://www.thingjs.com/guide/)
- [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)
- [WebGL Memory Management](https://webglfundamentals.org/webgl/lessons/webgl-cleanup.html)
- [Lighthouse Performance Metrics](https://web.dev/performance-scoring/)
