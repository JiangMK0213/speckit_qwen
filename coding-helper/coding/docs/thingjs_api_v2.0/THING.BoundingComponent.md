# 类: BoundingComponent

**命名空间:** THING

**继承:** [THING.BaseComponent](./THING.BaseComponent.md)

**描述:** 包围盒(AABB, OBB)组件。

## 实例属性

### boundingBox

**类型:** `member`

**描述:** 获取世界坐标系下的包围盒(AABB)。

#### 返回值

- **类型:** `Box3`
- **描述:** -

#### 示例

```javascript
let aabb = object.bounding.boundingBox;console.log('center: ', aabb.center);console.log('halfSize: ', aabb.halfSize);
```

---

### orientedBox

**类型:** `member`

**描述:** 获取世界坐标系下的定向包围盒(OBB)。

#### 返回值

- **类型:** `OBB`
- **描述:** -

#### 示例

```javascript
let obb = object.bounding.orientedBox;console.log('center: ', obb.center);console.log('halfSize: ', obb.halfSize);console.log('angles: ', obb.angles);
```

---

### initialLocalBoundingBox

**类型:** `member`

**数据类型:** `BoundingBoxResult`

**描述:** 获取/设置初始局部包围盒。

#### 示例

```javascript
// 设置初始局部包围盒object.bounding.initialLocalBoundingBox = {    center: [0, 0, 0],    halfSize: [5, 5, 5]};// 清除初始局部包围盒object.bounding.initialLocalBoundingBox = null;
```

---

### inheritType

**类型:** `member`

**数据类型:** `InheritType`

**描述:** 获取/设置包围盒继承类型。

#### 示例

```javascript
// 对象将进行包围盒计算，但是子对象将被忽略object.bounding.inheritType = InheritType.Break// 对象将跳过包围盒计算，但是子对象将被正常计算进包围盒object.bounding.inheritType = InheritType.Jump// 对象将中断包围盒计算，且子对象也将被忽略object.bounding.inheritType = InheritType.Stop
```

---

### accuracyMode

**类型:** `member`

**数据类型:** `AccuracyMode`

**描述:** 获取/设置精度模式。

#### 示例

```javascript
// 用于在包围盒计算精度和性能之间进行权衡，精确模式提供更准确的包围盒但性能消耗更大(通常建议使用基础模式, 只在需要特别精确的包围盒数据时才临时切换到精确模式)。可以参考以下示例使用该接口：// 设置精度模式为精确模式object.bounding.accuracyMode = THING.AccuracyMode.Accurate;// 获取包围盒let boundingBox = object.bounding.boundingBox;// 设置初始局部包围盒object.bounding.initialLocalBoundingBox = boundingBox;// 设置精度模式为基础模式object.bounding.accuracyMode = THING.AccuracyMode.Basic;
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

