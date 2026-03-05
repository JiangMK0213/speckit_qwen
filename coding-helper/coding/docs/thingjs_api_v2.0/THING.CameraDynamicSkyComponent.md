# 类: CameraDynamicSkyComponent

**命名空间:** THING

**继承:** [THING.BaseComponent](./THING.BaseComponent.md)

**描述:** 空

## 实例属性

### enable

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置天空的启用状态。

---

### timeline

**类型:** `member`

**数据类型:** `number`

**默认值:** `10`

**描述:** 设置/获取时间线。

---

### nightSkyTexture

**类型:** `member`

**数据类型:** `CubeTextureResource`

**描述:** 设置天空的夜晚贴图。

---

### cloudsTexture

**类型:** `member`

**数据类型:** `ImageTextureResource`

**描述:** 设置天空的云层贴图。

---

### moonTexture

**类型:** `member`

**数据类型:** `ImageTextureResource`

**描述:** 设置天空的月亮贴图。

---

### starsData

**类型:** `member`

**数据类型:** `String, Float32Array`

**描述:** 设置天空的星星数据。

---

### envMap

**类型:** `member`

**数据类型:** `CubeTextureResource`

**描述:** 获取天空的贴图。

---

### textureSize

**类型:** `member`

**数据类型:** `Array.<number>`

**默认值:** `- [1024,1024]`

**描述:** 设置/获取纹理的尺寸。

---

### lightExposure

**类型:** `member`

**数据类型:** `number`

**默认值:** `1.0`

**描述:** 设置/获取天空的光照曝光度。

---

### exposure

**类型:** `member`

**数据类型:** `number`

**默认值:** `0.8`

**描述:** 设置/获取天空的曝光度。

---

### sunEquatorOffset

**类型:** `member`

**数据类型:** `number`

**默认值:** `-40`

**描述:** 设置/获取太阳赤道偏移量。

---

### light

**类型:** `member`

**数据类型:** `DirectionalLight`

**描述:** 获取主光。

---

### hemisphereLight

**类型:** `member`

**数据类型:** `HemisphereLight`

**描述:** 获取半球光。

---

### sunLightIntensity

**类型:** `member`

**数据类型:** `number`

**描述:** 设置白天日光强度。

---

### moonLightIntensity

**类型:** `member`

**数据类型:** `number`

**描述:** 设置夜晚日光强度。

---

### activeSkyRender

**类型:** `member`

**数据类型:** `boolean`

**描述:** 设置是否渲染天空盒参数。

---

### lightColorGradient

**类型:** `member`

**数据类型:** `object`

**默认值:** `{
			0: [85 / 255, 99 / 255, 112 / 255],
			0.49: [85 / 255, 99 / 255, 112 / 255],
			0.51: [245 / 255, 173 / 255, 84 / 255],
			0.57: [249 / 255, 208 / 255, 144 / 255],
			1: [252 / 255, 222 / 255, 186 / 255]
		}`

**描述:** 设置渲染光颜色。

---

### skyColorGradient

**类型:** `member`

**数据类型:** `object`

**默认值:** `{
			0: [180 / 255, 220 / 255, 255 / 255],
			0.39: [180 / 255, 220 / 255, 255 / 255],
			0.51: [180 / 255, 220 / 255, 255 / 255],
			0.7: [180 / 255, 220 / 255, 255 / 255],
			1: [203 / 255, 146 / 255, 65 / 255]
		}`

**描述:** 设置渲染天光颜色。

---

### groundColorGradient

**类型:** `member`

**数据类型:** `object`

**默认值:** `{
			0: [63 / 255, 149 / 255, 255 / 255],
			0.39: [180 / 255, 220 / 255, 255 / 255],
			0.51: [180 / 255, 220 / 255, 255 / 255],
			0.7: [180 / 255, 220 / 255, 255 / 255],
			1: [63 / 255, 149 / 255, 255 / 255]
		}`

**描述:** 设置渲染地面光颜色。

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

### init

**类型:** `function`

**数据类型:** `boolean`

**描述:** 获取/设置天空的启用状态。

---

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

