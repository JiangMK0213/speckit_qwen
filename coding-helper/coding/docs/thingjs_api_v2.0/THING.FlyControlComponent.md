# 类: FlyControlComponent

**命名空间:** THING

**继承:** [THING.CameraAttachedComponent](./THING.CameraAttachedComponent.md)

**描述:** constructor.

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 参数列表 |

## 实例属性

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

### setHotKey

**类型:** `function`

**描述:** 设置热键

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `THING.FlyControlKeyType` | 键类型；表示该键的用途 |
| `code` | `THING.CodeType` | 键码；表示键盘上的实际按键 |

---

### getHotKey

**类型:** `function`

**描述:** 获取热键

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `THING.FlyControlKeyType` | 键类型；表示该键的用途 |

#### 返回值

- **类型:** `THING.CodeType`
- **描述:** 键码；表示键盘上的实际按键

---

### enableLockPointerByMouseDown

**类型:** `function`

**描述:** 设置是否可以通过鼠标按下锁定指针，仅在指针锁定模式下有效

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `enable` | `boolean` | 设置是否可以通过鼠标按下锁定指针 |

---

### enableChangeDirecetionByMouseMove

**类型:** `function`

**描述:** 设置是否可以通过鼠标移动改变方向

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `enable` | `boolean` | 设置是否可以通过鼠标移动改变方向 |

---

### setPointerLockEnable

**类型:** `function`

**描述:** 设置指针锁定模式是否启用

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `enable` | `boolean` | 是否启用指针锁定模式 |

---

### getPickedObject

**类型:** `function`

**描述:** 获取当前被拾取的对象

#### 返回值

- **类型:** `object`
- **描述:** 返回被focusUI拾取的对象

---

### setInteractActionName

**类型:** `function`

**描述:** 设置交互动作名称

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 交互类型,可能是InteractType中的一个元素 |
| `actionName` | `string` | 交互动作名称 |

---

### setInteractActionSpeed

**类型:** `function`

**描述:** 设置交互动作速度

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 交互类型,可能是InteractType中的一个元素 |
| `actionSpeed` | `number` | 交互动作动画速度 |

---

### setInteractSpeed

**类型:** `function`

**描述:** 设置交互速度

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 交互类型,可能是InteractType中的一个元素                     但只有walk\run\jump\fly\flyup\flydown有意义 |
| `speed` | `number` | 交互速度,如行走速度 |

---

### setFocusUI

**类型:** `function`

**描述:** 设置焦点UI

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `focus_ui` | `HTMLElement` | 焦点UI的div元素 |

---

### setClearInteractWhenFocusOut

**类型:** `function`

**描述:** 设置当失去3D窗口焦点时是否清除交互效果目前效果包括移动和转向,但不包括重力

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `clear` | `boolean` | true表示当失去3D窗口焦点时清除交互效果 |

---

### setPlayerTurning

**类型:** `function`

**描述:** 设置玩家转向

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `turning` | `number` | 玩家Y轴转向角度 |

---

### setThirdPersonCameraDis

**类型:** `function`

**描述:** 设置对象和相机之间的距离

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `dis` | `number` | 第三人称视角下对象和相机之间的距离 |

---

### setAttachCamera

**类型:** `function`

**重写:** THING.CameraAttachedComponent#setAttachCamera

**描述:** 设置附加相机

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `attachCamera` | `Thing.Camera` | 附加的相机 |
| `cameraNear` | `number` | 附加相机的近平面距离 |

---

### setFloorObject

**类型:** `function`

**描述:** 设置地板对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `floorobj` | `object` | 我们必须站立的地板 |

---

### setMinPitch

**类型:** `function`

**描述:** 设置最小俯仰角

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pitch` | `number` | 最小俯仰角值 |

---

### setMaxPitch

**类型:** `function`

**描述:** 设置最大俯仰角

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pitch` | `number` | 最大俯仰角值 |

---

### setEyeHeight

**类型:** `function`

**描述:** 设置相机高度

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `height` | `number` | 相机高于地板的高度 |

---

### setUseLocalUp

**类型:** `function`

**描述:** 设置是否使用对象的up向量

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `use` | `boolean` | 是否使用对象的up向量 |

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

