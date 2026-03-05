# 类: LevelComponent

**命名空间:** THING

**继承:** [THING.BaseComponent](./THING.BaseComponent.md)

**描述:** 提供物体层级切换能力的功能组件

## 实例属性

### config

**类型:** `member`

**数据类型:** `LevelConfig`

**描述:** 获取/设置层级配置。需要在层级改变之前，进行层级配置。

#### 示例

```javascript
// 获取当前层级配置let levelComponent  = THING.App.current.root.level;levelComponent.config = { ignoreVisible: true, ignoreStyle: false };// @expect { levelComponent.config.ignoreVisible === true }// @expect { levelComponent.config.ignoreStyle === false }
```

---

### localViewpoint

**类型:** `member`

**数据类型:** `Viewpoint`

**描述:** 获取/设置摄像机的局部位置和目标位置。此信息是从场景文件里读取出来的

#### 示例

```javascript
let levelComponent = THING.App.current.root.level;// Get the local viewpointlet localViewpoint = levelComponent.localViewpoint;let ret1 = typeof localViewpoint === 'object';let ret2 = localViewpoint === null;// @expect { ret1 == true || ret2 == true }// Set the local viewpointlevelComponent.localViewpoint = {  position: [0, 0, 0],  target: [1, 1, 1]};// @expect {levelComponent.localViewpoint.position[0] === 0 && levelComponent.localViewpoint.target[2] === 1}
```

---

### viewpoint

**类型:** `member`

**数据类型:** `Viewpoint`

**描述:** 获取/设置摄像机的位置和目标位置。此信息是从场景文件里读取出来的

#### 示例

```javascript
let levelComponent = THING.App.current.root.level;// Get the world viewpointlet viewpoint = levelComponent.viewpoint;let ret1 = typeof viewpoint === 'object';let ret2 = viewpoint === null;// @expect { ret1 == true || ret2 == true }// Set the world viewpointlevelComponent.viewpoint = {  position: [0, 0, 0],  target: [1, 1, 1]};// @expect {levelComponent.viewpoint.position[0] === 0 && levelComponent.viewpoint.target[2] === 1}
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

### onImport

**类型:** `function`

**重写:** THING.BaseComponent#onImport

**描述:** 从外部资源导入数据。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `external` | `object` | 配置信息 参加下面示例 |

#### 示例

```javascript
let levelComponent = THING.App.current.root.level;// Import data from an external source// Example 1: Importing datalevelComponent.onImport({ viewpoint: { position: [1, 2, 3], target: [4, 5, 6] }, config: { ignoreStyle:true, ignoreVisible:false } });// @expect { levelComponent.localViewpoint.position[0] === 1 }// @expect { levelComponent.localViewpoint.target[2] === 6 }// @expect { levelComponent.config.ignoreStyle === true }// @expect { levelComponent.config.ignoreVisible === false }
```

---

### onExport

**类型:** `function`

**重写:** THING.BaseComponent#onExport

**描述:** 导出配置信息

#### 返回值

- **类型:** `object, null`
- **描述:** 配置信息

#### 示例

```javascript
let levelComponent = THING.App.current.root.level;levelComponent.onImport({ viewpoint: { position: [1, 2, 3], target: [4, 5, 6] }, config: { ignoreStyle:true, ignoreVisible:false } });// Export data to an external sourcelet exportedData = levelComponent.onExport();// @expect { exportedData.viewpoint.position[1] === 2 }// @expect { exportedData.viewpoint.target[0] === 4 }// @expect { exportedData.config.ignoreStyle === true }let ret = exportedData.config.ignoreVisible == undefined;// @expect { ret === true }
```

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

