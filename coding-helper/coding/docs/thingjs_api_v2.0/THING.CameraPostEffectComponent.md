# 类: CameraPostEffectComponent

**命名空间:** THING

**继承:** [THING.BaseComponent](./THING.BaseComponent.md)

**描述:** 相机的渲染效果，可以在这里更改一些屏幕后期效果。

## 实例属性

### enable

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否开启

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.enable = false;// @expect(app.camera.postEffect.enable == false)
```

---

### temporalSuperSampling

**类型:** `member`

**数据类型:** `TemporalSuperSampling`

**描述:** TSS效果 在连续的帧之间进行抖动来减少图像中的锯齿

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.temporalSuperSampling.enable = true;// @expect(app.camera.postEffect.temporalSuperSampling.enable == true)
```

---

### bloom

**类型:** `member`

**数据类型:** `Bloom`

**描述:** 屏幕级辉光效果

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.bloom.enable = true;// @expect(app.camera.postEffect.bloom.enable == true)
```

---

### screenSpaceAmbientOcclusion

**类型:** `member`

**数据类型:** `ScreenSpaceAmbientOcclusion`

**描述:** 屏幕空间环境光遮蔽(SSAO)

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.screenSpaceAmbientOcclusion.enable = true;// @expect(app.camera.postEffect.screenSpaceAmbientOcclusion.enable == true)
```

---

### groundTruthAmbientOcclusion

**类型:** `member`

**数据类型:** `GroundTruthAmbientOcclusion`

**描述:** 真实世界环境光遮蔽(GTAO)

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.groundTruthAmbientOcclusion.enable = true;// @expect(app.camera.postEffect.groundTruthAmbientOcclusion.enable == true)
```

---

### screenSpaceReflection

**类型:** `member`

**数据类型:** `ScreenSpaceReflection`

**描述:** 屏幕空间反射(SSR) 模拟出物体表面的反射效果，从而增强场景的真实感和逼真度

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.screenSpaceReflection.enable = true;// @expect(app.camera.postEffect.screenSpaceReflection.enable == true)
```

---

### colorCorrection

**类型:** `member`

**数据类型:** `ColorCorrection`

**描述:** 颜色校正

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.colorCorrection.enable = true;// @expect(app.camera.postEffect.colorCorrection.enable == true)
```

---

### dof

**类型:** `member`

**数据类型:** `Dof`

**描述:** 景深效果

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.dof.enable = true;// @expect(app.camera.postEffect.dof.enable == true)
```

---

### vignetting

**类型:** `member`

**数据类型:** `Vignetting`

**描述:** 暗角效果 屏幕边缘给定一个颜色进行填充,并在中心位置过渡到场景

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.vignetting.enable = true;// @expect(app.camera.postEffect.vignetting.enable == true)
```

---

### blurEdge

**类型:** `member`

**数据类型:** `BlurEdge`

**描述:** 边缘模糊

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.blurEdge.enable = true;// @expect(app.camera.postEffect.blurEdge.enable == true)
```

---

### film

**类型:** `member`

**数据类型:** `Film`

**描述:** 胶片效果

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.film.enable = true;// @expect(app.camera.postEffect.film.enable == true)
```

---

### chromaticAberration

**类型:** `member`

**数据类型:** `ChromaticAberration`

**描述:** 色彩分离效果

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.chromaticAberration.enable = true;// @expect(app.camera.postEffect.chromaticAberration.enable == true)
```

---

### FXAA

**类型:** `member`

**数据类型:** `FXAA`

**描述:** 快速近似抗锯齿

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.FXAA.enable = true;// @expect(app.camera.postEffect.FXAA.enable == true)
```

---

### MSAA

**类型:** `member`

**数据类型:** `MSAA`

**描述:** 多重采样抗锯齿

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config.MSAA.enable = false;// @expect(app.camera.postEffect.MSAA.enable == false)
```

---

### config

**类型:** `member`

**数据类型:** `PostEffectInfo`

**描述:** 设置/获取 后期配置

#### 示例

```javascript
let app = THING.App.currentapp.camera.postEffect.config = {  FXAA: {enable: true}};// @expect(app.camera.postEffect.config.FXAA.enable == true)
```

---

### onInit

**类型:** `member`

**数据类型:** `OnInitComponentCallback`

**继承:** THING.BaseComponent#onInit

**重写:** THING.BaseComponent#onInit

**描述:** 初始化时的回调函数。

---

### onLoadResource

**类型:** `member`

**数据类型:** `OnLoadResourceComponentCallback`

**继承:** THING.BaseComponent#onLoadResource

**重写:** THING.BaseComponent#onLoadResource

**描述:** 加载资源时的回调函数。

---

### onUnloadResource

**类型:** `member`

**数据类型:** `OnUnloadResourceComponentCallback`

**继承:** THING.BaseComponent#onUnloadResource

**重写:** THING.BaseComponent#onUnloadResource

**描述:** 卸载资源时的回调函数。

---

### onUpdate

**类型:** `member`

**数据类型:** `OnUpdateComponentCallback`

**继承:** THING.BaseComponent#onUpdate

**重写:** THING.BaseComponent#onUpdate

**描述:** 更新时的回调函数。

---

### onParentChange

**类型:** `member`

**数据类型:** `OnParentChangeComponentCallback`

**继承:** THING.BaseComponent#onParentChange

**重写:** THING.BaseComponent#onParentChange

**描述:** 改变父对象时的回调函数。

---

### onResize

**类型:** `member`

**数据类型:** `OnResizeComponentCallback`

**继承:** THING.BaseComponent#onResize

**重写:** THING.BaseComponent#onResize

**描述:** 调整大小时的回调函数。

---

### onRefresh

**类型:** `member`

**数据类型:** `OnRefreshComponentCallback`

**继承:** THING.BaseComponent#onRefresh

**重写:** THING.BaseComponent#onRefresh

**描述:** 刷新时的回调函数。

---

### onActiveChange

**类型:** `member`

**数据类型:** `OnActiveChangeComponentCallback`

**继承:** THING.BaseComponent#onActiveChange

**重写:** THING.BaseComponent#onActiveChange

**描述:** 活动状态改变时的回调函数。

---

### onVisibleChange

**类型:** `member`

**数据类型:** `OnVisibleChangeComponentCallback`

**继承:** THING.BaseComponent#onVisibleChange

**重写:** THING.BaseComponent#onVisibleChange

**描述:** 可见性改变时的回调函数。

---

### onCopy

**类型:** `member`

**数据类型:** `OnCopyComponentCallback`

**继承:** THING.BaseComponent#onCopy

**重写:** THING.BaseComponent#onCopy

**描述:** 复制时的回调函数。

---

### onBeforeAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeAddChild

**重写:** THING.BaseComponent#onBeforeAddChild

**描述:** 添加子对象之前的回调函数。

---

### onAfterAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onAfterAddChild

**重写:** THING.BaseComponent#onAfterAddChild

**描述:** 添加子对象之后的回调函数。

---

### onBeforeRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemoveChild

**重写:** THING.BaseComponent#onBeforeRemoveChild

**描述:** 移除子对象之前的回调函数。

---

### onAfterRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onAfterRemoveChild

**重写:** THING.BaseComponent#onAfterRemoveChild

**描述:** 移除子对象之后的回调函数。

---

### onBeforeAdd

**类型:** `member`

**数据类型:** `OnBeforeAddComponentCallback`

**继承:** THING.BaseComponent#onBeforeAdd

**重写:** THING.BaseComponent#onBeforeAdd

**描述:** 添加之前。

---

### onAfterAdd

**类型:** `member`

**数据类型:** `OnAfterAddComponentCallback`

**继承:** THING.BaseComponent#onAfterAdd

**重写:** THING.BaseComponent#onAfterAdd

**描述:** 添加之后。

---

### onBeforeRemove

**类型:** `member`

**数据类型:** `OnBeforeRemoveComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemove

**重写:** THING.BaseComponent#onBeforeRemove

**描述:** 移除之前。

---

### onAfterRemove

**类型:** `member`

**数据类型:** `OnAfterRemoveComponentCallback`

**继承:** THING.BaseComponent#onAfterRemove

**重写:** THING.BaseComponent#onAfterRemove

**描述:** 移除之后。

---

### onImport

**类型:** `member`

**数据类型:** `OnImportComponentCallback`

**继承:** THING.BaseComponent#onImport

**重写:** THING.BaseComponent#onImport

**描述:** 导入数据时。

---

### onExport

**类型:** `member`

**数据类型:** `OnExportComponentCallback`

**继承:** THING.BaseComponent#onExport

**重写:** THING.BaseComponent#onExport

**描述:** 导出数据时。

---

### active

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseComponent#active

**重写:** THING.BaseComponent#active

**描述:** 激活或停用组件。

---

### object

**类型:** `member`

**数据类型:** `THING.BaseObject`

**继承:** THING.BaseComponent#object

**重写:** THING.BaseComponent#object

**描述:** 获取对象。

---

### app

**类型:** `member`

**数据类型:** `THING.App`

**继承:** THING.BaseComponent#app

**重写:** THING.BaseComponent#app

**描述:** 获取应用程序。

---

## 实例方法

### onAdd

**类型:** `function`

**继承:** THING.BaseComponent#onAdd

**重写:** THING.BaseComponent#onAdd

**描述:** 当添加组件时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 对象。 |

---

### onRemove

**类型:** `function`

**继承:** THING.BaseComponent#onRemove

**重写:** THING.BaseComponent#onRemove

**描述:** 当移除组件时。

---

