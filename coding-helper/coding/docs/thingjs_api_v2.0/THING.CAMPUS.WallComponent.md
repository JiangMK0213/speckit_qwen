# 类: WallComponent

**命名空间:** THING.CAMPUS

**继承:** [THING.Component](./THING.Component.md)

**描述:** 空

## 实例属性

### onInit

**类型:** `member`

**数据类型:** `OnInitComponentCallback`

**继承:** THING.BaseComponent#onInit

**重写:** THING.Component#onInit

**描述:** 初始化时的回调函数。

---

### onUnloadResource

**类型:** `member`

**数据类型:** `OnUnloadResourceComponentCallback`

**继承:** THING.BaseComponent#onUnloadResource

**重写:** THING.Component#onUnloadResource

**描述:** 卸载资源时的回调函数。

---

### onUpdate

**类型:** `member`

**数据类型:** `OnUpdateComponentCallback`

**继承:** THING.BaseComponent#onUpdate

**重写:** THING.Component#onUpdate

**描述:** 更新时的回调函数。

---

### onParentChange

**类型:** `member`

**数据类型:** `OnParentChangeComponentCallback`

**继承:** THING.BaseComponent#onParentChange

**重写:** THING.Component#onParentChange

**描述:** 改变父对象时的回调函数。

---

### onResize

**类型:** `member`

**数据类型:** `OnResizeComponentCallback`

**继承:** THING.BaseComponent#onResize

**重写:** THING.Component#onResize

**描述:** 调整大小时的回调函数。

---

### onRefresh

**类型:** `member`

**数据类型:** `OnRefreshComponentCallback`

**继承:** THING.BaseComponent#onRefresh

**重写:** THING.Component#onRefresh

**描述:** 刷新时的回调函数。

---

### onActiveChange

**类型:** `member`

**数据类型:** `OnActiveChangeComponentCallback`

**继承:** THING.BaseComponent#onActiveChange

**重写:** THING.Component#onActiveChange

**描述:** 活动状态改变时的回调函数。

---

### onVisibleChange

**类型:** `member`

**数据类型:** `OnVisibleChangeComponentCallback`

**继承:** THING.BaseComponent#onVisibleChange

**重写:** THING.Component#onVisibleChange

**描述:** 可见性改变时的回调函数。

---

### onCopy

**类型:** `member`

**数据类型:** `OnCopyComponentCallback`

**继承:** THING.BaseComponent#onCopy

**重写:** THING.Component#onCopy

**描述:** 复制时的回调函数。

---

### onBeforeAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeAddChild

**重写:** THING.Component#onBeforeAddChild

**描述:** 添加子对象之前的回调函数。

---

### onAfterAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onAfterAddChild

**重写:** THING.Component#onAfterAddChild

**描述:** 添加子对象之后的回调函数。

---

### onBeforeRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemoveChild

**重写:** THING.Component#onBeforeRemoveChild

**描述:** 移除子对象之前的回调函数。

---

### onAfterRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onAfterRemoveChild

**重写:** THING.Component#onAfterRemoveChild

**描述:** 移除子对象之后的回调函数。

---

### onBeforeAdd

**类型:** `member`

**数据类型:** `OnBeforeAddComponentCallback`

**继承:** THING.BaseComponent#onBeforeAdd

**重写:** THING.Component#onBeforeAdd

**描述:** 添加之前。

---

### onAfterAdd

**类型:** `member`

**数据类型:** `OnAfterAddComponentCallback`

**继承:** THING.BaseComponent#onAfterAdd

**重写:** THING.Component#onAfterAdd

**描述:** 添加之后。

---

### onBeforeRemove

**类型:** `member`

**数据类型:** `OnBeforeRemoveComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemove

**重写:** THING.Component#onBeforeRemove

**描述:** 移除之前。

---

### onAfterRemove

**类型:** `member`

**数据类型:** `OnAfterRemoveComponentCallback`

**继承:** THING.BaseComponent#onAfterRemove

**重写:** THING.Component#onAfterRemove

**描述:** 移除之后。

---

### active

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseComponent#active

**重写:** THING.Component#active

**描述:** 激活或停用组件。

---

### object

**类型:** `member`

**数据类型:** `THING.BaseObject`

**继承:** THING.BaseComponent#object

**重写:** THING.Component#object

**描述:** 获取对象。

---

### app

**类型:** `member`

**数据类型:** `THING.App`

**继承:** THING.BaseComponent#app

**重写:** THING.Component#app

**描述:** 获取应用程序。

---

## 实例方法

### load

**类型:** `function`

**描述:** 加载墙体

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `data` | `Object` | 墙体数据 (数据格式参考: https://wiki.uino.com/book/6538d1e88ea0ba892398fdf2/6523a7adae83a4dfb2c2cba4.html) |

#### 返回值

- **类型:** `Promise`
- **描述:** -

---

### onAdd

**类型:** `function`

**继承:** THING.BaseComponent#onAdd

**重写:** THING.Component#onAdd

**描述:** 当添加组件时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 对象。 |

---

### onRemove

**类型:** `function`

**继承:** THING.BaseComponent#onRemove

**重写:** THING.Component#onRemove

**描述:** 当移除组件时。

---

