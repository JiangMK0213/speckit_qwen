# 类: BaseComponent

**命名空间:** THING

**描述:** 所有组件的基础组件，每个组件都应该继承自它。

## 实例属性

### onInit

**类型:** `member`

**数据类型:** `OnInitComponentCallback`

**描述:** 初始化时的回调函数。

---

### onLoadResource

**类型:** `member`

**数据类型:** `OnLoadResourceComponentCallback`

**描述:** 加载资源时的回调函数。

---

### onUnloadResource

**类型:** `member`

**数据类型:** `OnUnloadResourceComponentCallback`

**描述:** 卸载资源时的回调函数。

---

### onUpdate

**类型:** `member`

**数据类型:** `OnUpdateComponentCallback`

**描述:** 更新时的回调函数。

---

### onParentChange

**类型:** `member`

**数据类型:** `OnParentChangeComponentCallback`

**描述:** 改变父对象时的回调函数。

---

### onResize

**类型:** `member`

**数据类型:** `OnResizeComponentCallback`

**描述:** 调整大小时的回调函数。

---

### onRefresh

**类型:** `member`

**数据类型:** `OnRefreshComponentCallback`

**描述:** 刷新时的回调函数。

---

### onActiveChange

**类型:** `member`

**数据类型:** `OnActiveChangeComponentCallback`

**描述:** 活动状态改变时的回调函数。

---

### onVisibleChange

**类型:** `member`

**数据类型:** `OnVisibleChangeComponentCallback`

**描述:** 可见性改变时的回调函数。

---

### onCopy

**类型:** `member`

**数据类型:** `OnCopyComponentCallback`

**描述:** 复制时的回调函数。

---

### onBeforeAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**描述:** 添加子对象之前的回调函数。

---

### onAfterAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**描述:** 添加子对象之后的回调函数。

---

### onBeforeRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**描述:** 移除子对象之前的回调函数。

---

### onAfterRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**描述:** 移除子对象之后的回调函数。

---

### onBeforeAdd

**类型:** `member`

**数据类型:** `OnBeforeAddComponentCallback`

**描述:** 添加之前。

---

### onAfterAdd

**类型:** `member`

**数据类型:** `OnAfterAddComponentCallback`

**描述:** 添加之后。

---

### onBeforeRemove

**类型:** `member`

**数据类型:** `OnBeforeRemoveComponentCallback`

**描述:** 移除之前。

---

### onAfterRemove

**类型:** `member`

**数据类型:** `OnAfterRemoveComponentCallback`

**描述:** 移除之后。

---

### onImport

**类型:** `member`

**数据类型:** `OnImportComponentCallback`

**描述:** 导入数据时。

---

### onExport

**类型:** `member`

**数据类型:** `OnExportComponentCallback`

**描述:** 导出数据时。

---

### active

**类型:** `member`

**数据类型:** `boolean`

**描述:** 激活或停用组件。

---

### object

**类型:** `member`

**数据类型:** `THING.BaseObject`

**描述:** 获取对象。

---

### app

**类型:** `member`

**数据类型:** `THING.App`

**描述:** 获取应用程序。

---

## 实例方法

### onAdd

**类型:** `function`

**描述:** 当添加组件时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 对象。 |

---

### onRemove

**类型:** `function`

**描述:** 当移除组件时。

---

## 其他成员

### MinimapComponent

**类型:** `class`

**描述:** 空

---

### MinimapComponent

**类型:** `class`

**描述:** 小地图组件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `object` | 初始参数 |

#### 示例

```javascript
app.root.addComponent(THING.EXTEND.MinimapComponent, 'minimap', {
			ctorArgs: {
				size: [200, 200], // the size of the minimap
				layout: ["Right", "Bottom"], // the layout of the minimap
			}
		});
```

---

### MinimapComponent

**类型:** `class`

**描述:** 小地图组件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `object` | 初始参数 |

#### 示例

```javascript
app.root.addComponent(THING.EXTEND.MinimapComponent, 'minimap', {
			ctorArgs: {
				size: [200, 200], // the size of the minimap
				layout: ["Right", "Bottom"], // the layout of the minimap
			}
		});
```

---

