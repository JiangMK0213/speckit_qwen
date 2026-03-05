# 类: DragControlComponent

**命名空间:** THING

**继承:** [THING.CameraAttachedComponent](./THING.CameraAttachedComponent.md)

**描述:** 拖拽控制组件

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | - |
| param.position | `Array.<Number>` | - | 否 | 工作平面的位置坐标 |
| param.quaternion | `Array.<Number>` | - | 否 | 工作平面的四元数 |
| param.precision | `number` | - | 否 | 工作平面的缩放值 |

## 实例属性

### cancelShiftScale

**类型:** `member`

**数据类型:** `boolean`

**描述:** 取消等比例缩放,默认为false

---

### onInit

**类型:** `member`

**数据类型:** `OnInitComponentCallback`

**继承:** THING.BaseComponent#onInit

**重写:** THING.CameraAttachedComponent#onInit

**描述:** 初始化时的回调函数。

---

### onLoadResource

**类型:** `member`

**数据类型:** `OnLoadResourceComponentCallback`

**继承:** THING.BaseComponent#onLoadResource

**重写:** THING.CameraAttachedComponent#onLoadResource

**描述:** 加载资源时的回调函数。

---

### onUnloadResource

**类型:** `member`

**数据类型:** `OnUnloadResourceComponentCallback`

**继承:** THING.BaseComponent#onUnloadResource

**重写:** THING.CameraAttachedComponent#onUnloadResource

**描述:** 卸载资源时的回调函数。

---

### onUpdate

**类型:** `member`

**数据类型:** `OnUpdateComponentCallback`

**继承:** THING.BaseComponent#onUpdate

**重写:** THING.CameraAttachedComponent#onUpdate

**描述:** 更新时的回调函数。

---

### onParentChange

**类型:** `member`

**数据类型:** `OnParentChangeComponentCallback`

**继承:** THING.BaseComponent#onParentChange

**重写:** THING.CameraAttachedComponent#onParentChange

**描述:** 改变父对象时的回调函数。

---

### onResize

**类型:** `member`

**数据类型:** `OnResizeComponentCallback`

**继承:** THING.BaseComponent#onResize

**重写:** THING.CameraAttachedComponent#onResize

**描述:** 调整大小时的回调函数。

---

### onRefresh

**类型:** `member`

**数据类型:** `OnRefreshComponentCallback`

**继承:** THING.BaseComponent#onRefresh

**重写:** THING.CameraAttachedComponent#onRefresh

**描述:** 刷新时的回调函数。

---

### onActiveChange

**类型:** `member`

**数据类型:** `OnActiveChangeComponentCallback`

**继承:** THING.BaseComponent#onActiveChange

**重写:** THING.CameraAttachedComponent#onActiveChange

**描述:** 活动状态改变时的回调函数。

---

### onVisibleChange

**类型:** `member`

**数据类型:** `OnVisibleChangeComponentCallback`

**继承:** THING.BaseComponent#onVisibleChange

**重写:** THING.CameraAttachedComponent#onVisibleChange

**描述:** 可见性改变时的回调函数。

---

### onCopy

**类型:** `member`

**数据类型:** `OnCopyComponentCallback`

**继承:** THING.BaseComponent#onCopy

**重写:** THING.CameraAttachedComponent#onCopy

**描述:** 复制时的回调函数。

---

### onBeforeAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeAddChild

**重写:** THING.CameraAttachedComponent#onBeforeAddChild

**描述:** 添加子对象之前的回调函数。

---

### onAfterAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onAfterAddChild

**重写:** THING.CameraAttachedComponent#onAfterAddChild

**描述:** 添加子对象之后的回调函数。

---

### onBeforeRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemoveChild

**重写:** THING.CameraAttachedComponent#onBeforeRemoveChild

**描述:** 移除子对象之前的回调函数。

---

### onAfterRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onAfterRemoveChild

**重写:** THING.CameraAttachedComponent#onAfterRemoveChild

**描述:** 移除子对象之后的回调函数。

---

### onBeforeAdd

**类型:** `member`

**数据类型:** `OnBeforeAddComponentCallback`

**继承:** THING.BaseComponent#onBeforeAdd

**重写:** THING.CameraAttachedComponent#onBeforeAdd

**描述:** 添加之前。

---

### onAfterAdd

**类型:** `member`

**数据类型:** `OnAfterAddComponentCallback`

**继承:** THING.BaseComponent#onAfterAdd

**重写:** THING.CameraAttachedComponent#onAfterAdd

**描述:** 添加之后。

---

### onBeforeRemove

**类型:** `member`

**数据类型:** `OnBeforeRemoveComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemove

**重写:** THING.CameraAttachedComponent#onBeforeRemove

**描述:** 移除之前。

---

### onAfterRemove

**类型:** `member`

**数据类型:** `OnAfterRemoveComponentCallback`

**继承:** THING.BaseComponent#onAfterRemove

**重写:** THING.CameraAttachedComponent#onAfterRemove

**描述:** 移除之后。

---

### onImport

**类型:** `member`

**数据类型:** `OnImportComponentCallback`

**继承:** THING.BaseComponent#onImport

**重写:** THING.CameraAttachedComponent#onImport

**描述:** 导入数据时。

---

### onExport

**类型:** `member`

**数据类型:** `OnExportComponentCallback`

**继承:** THING.BaseComponent#onExport

**重写:** THING.CameraAttachedComponent#onExport

**描述:** 导出数据时。

---

### active

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseComponent#active

**重写:** THING.CameraAttachedComponent#active

**描述:** 激活或停用组件。

---

### object

**类型:** `member`

**数据类型:** `THING.BaseObject`

**继承:** THING.BaseComponent#object

**重写:** THING.CameraAttachedComponent#object

**描述:** 获取对象。

---

### app

**类型:** `member`

**数据类型:** `THING.App`

**继承:** THING.BaseComponent#app

**重写:** THING.CameraAttachedComponent#app

**描述:** 获取应用程序。

---

## 实例方法

### update

**类型:** `function`

**描述:** 更新对象的变换操作

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `object` | - |
| `param.mode` | `string` | 当前对象的变换方式 |
| `param.axis` | `string` | 当前对象的操作方向 |
| `param.anchor` | `Array.<Number>` | 局部坐标系中x和z的负方向 |
| `param.shift` | `boolean` | 是否按下shift键 |
| `param.step` | `number` | 对象旋转的精度值 |
| `param.btnOffset` | `Array.<Number>` | 旋转按钮相对于对象中心的屏幕坐标偏移 |
| `param.offset` | `Array.<Number>` | 用户屏幕坐标的偏移量 |
| `param.x` | `number` | 屏幕x坐标 |
| `param.y` | `number` | 屏幕y坐标 |

---

### stop

**类型:** `function`

**描述:** 停止拖拽

---

### setObjects

**类型:** `function`

**描述:** 设置变换对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `objs` | `Array.<Object>` | 变换对象 |
| `ignoreCenter` | `boolean` | 是否忽略中心位置 |

---

### onAdd

**类型:** `function`

**继承:** THING.BaseComponent#onAdd

**重写:** THING.CameraAttachedComponent#onAdd

**描述:** 当添加组件时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 对象。 |

---

### onRemove

**类型:** `function`

**继承:** THING.BaseComponent#onRemove

**重写:** THING.CameraAttachedComponent#onRemove

**描述:** 当移除组件时。

---

