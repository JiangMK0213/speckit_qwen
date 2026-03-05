# 类: CameraControlComponent

**命名空间:** THING

**继承:** [THING.BaseComponent](./THING.BaseComponent.md)

**描述:** 相机控制器。

## 实例属性

### isChanging

**类型:** `member`

**数据类型:** `boolean`

**描述:** 相机的位置,旋转角度是否在变化

#### 示例

```javascript
let camera = THING.App.current.camera;camera.pan(0, -50);// @expect(camera.isChanging == true)
```

---

### enable

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用控制器

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enable = false;// @expect(camera.enable == false)
```

---

### enableAutoMoveTargetForward

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 自动向前移动target?

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableAutoMoveTargetForward = false;// @expect(camera.enableAutoMoveTargetForward == false)
```

---

### enableAdjustTargetPosition

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 自动校正target(地球相机模式下需禁用)

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableAdjustTargetPosition = false;// @expect(camera.enableAdjustTargetPosition == false)
```

---

### enableAdjustNear

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 自动校正近剪裁面

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableAdjustNear = false;// @expect(camera.enableAdjustNear == false)
```

---

### enableAdjustPanSpeed

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 自动校正平移速度

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableAdjustPanSpeed = false;// @expect(camera.enableAdjustPanSpeed == false);
```

---

### enableZoomToMouseCursorOnWheel

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 按照鼠标位置缩放(指哪儿打哪儿)

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableZoomToMouseCursorOnWheel = false;// @expect(camera.enableZoomToMouseCursorOnWheel == false);
```

---

### enablePickWhenChanging

**类型:** `member`

**数据类型:** `boolean`

**描述:** 相机改变时是否开启pick

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enablePickWhenChanging = false;// @expect(camera.enablePickWhenChanging == false);
```

---

### enableDamping

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 惯性

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableDamping = false;// @expect(camera.enableDamping == false);
```

---

### enableRotate

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 旋转

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableRotate = false;// @expect(camera.enableRotate == false);
```

---

### enablePan

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 平移

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enablePan = false;// @expect(camera.enablePan == false);
```

---

### enableZoom

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 缩放

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableZoom = false;// @expect(camera.enableZoom == false);
```

---

### enableMapControl

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 类似地图操作习惯的模式 左键平移右键旋转

#### 示例

```javascript
THING.App.current.camera.enableMapControl = true;// @expect(THING.App.current.camera.enableMapControl == true);
```

---

### enableKeyboardControl

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 键盘控制

#### 示例

```javascript
let camera = THING.App.current.camera;camera.enableKeyboardControl = false;// @expect(camera.enableKeyboardControl == false);
```

---

### autoAdjustInstanceOffset

**类型:** `member`

**数据类型:** `boolean`

**描述:** 开启/禁用 自动修正实例偏移

#### 示例

```javascript
let camera = THING.App.current.camera;camera.autoAdjustInstanceOffset = false;// @expect(camera.autoAdjustInstanceOffset == false);
```

---

### dampingFactor

**类型:** `member`

**数据类型:** `number`

**描述:** 设置/获取 惯性系数

#### 示例

```javascript
let camera = THING.App.current.camera;camera.dampingFactor = 10;// @expect(camera.dampingFactor == 10);
```

---

### zoomSpeed

**类型:** `member`

**数据类型:** `number`

**描述:** 设置/获取 缩放速度

#### 示例

```javascript
let camera = THING.App.current.camera;camera.zoomSpeed = 10;// @expect(camera.zoomSpeed == 10);
```

---

### rotateSpeed

**类型:** `member`

**数据类型:** `number`

**描述:** 设置/获取 旋转速度

#### 示例

```javascript
let camera = THING.App.current.camera;camera.rotateSpeed = 10;// @expect(camera.rotateSpeed == 10);
```

---

### panSpeed

**类型:** `member`

**数据类型:** `number`

**描述:** 设置/获取 平移速度(鼠标,触屏)

#### 示例

```javascript
let camera = THING.App.current.camera;camera.panSpeed = 10;// @expect(camera.panSpeed == 10);
```

---

### keyPanSpeed

**类型:** `member`

**数据类型:** `number`

**描述:** 设置/获取 键盘平移速度

#### 示例

```javascript
let camera = THING.App.current.camera;camera.keyPanSpeed = 10;// @expect(camera.keyPanSpeed == 10);
```

---

### zoomToMouseCursorOnWheelSpeed

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置鼠标滚轮缩放时的速度因子。

#### 示例

```javascript
let camera = THING.App.current.camera;camera.zoomToMouseCursorOnWheelSpeed = 10;// @expect(camera.zoomToMouseCursorOnWheelSpeed == 10);
```

---

### distanceLimited

**类型:** `member`

**数据类型:** `Array.<(number|null)>`

**描述:** 相机距离限制 null代表无限制

#### 示例

```javascript
let camera = THING.App.current.camera;camera.distanceLimited = [10,1000];// @expect(camera.distanceLimited[0] == 10 && camera.distanceLimited[1] == 1000);
```

---

### vertAngleLimit

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 限制相机竖直角

#### 示例

```javascript
let camera = THING.App.current.camera;camera.vertAngleLimit = [10,100];// @expect(camera.vertAngleLimit[0] == 10 && camera.vertAngleLimit[1] == 100);
```

---

### horzAngleLimit

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 限制相机水平角

#### 示例

```javascript
let camera = THING.App.current.camera;camera.horzAngleLimit = [10,100];// @expect(camera.horzAngleLimit[0] == 10 && camera.horzAngleLimit[1] == 100);
```

---

### boundary

**类型:** `member`

**数据类型:** `BoundingBoxResult`

**描述:** 设置/获取 相机的target位置的包围盒

#### 示例

```javascript
let camera = THING.App.current.camera;let center = [10,10,10];let halfSize = [20,20,20];let boundary = {center, halfSize};camera.boundary = boundary;// @expect(camera.boundary.center[0] == 10 && camera.boundary.halfSize[0] == 20);
```

---

### upDirection

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 设置/获取 相机的up方向

#### 示例

```javascript
let camera = THING.App.current.camera;camera.upDirection = [10,10,10];// @expect(camera.upDirection[0] == 10 && camera.upDirection[1] == 10 && camera.upDirection[2] == 10);
```

---

### target

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 设置/获取 相机目标点位置(世界坐标系)

#### 示例

```javascript
let camera = THING.App.current.camera;camera.target = [10,10,10];// @expect(camera.target[0] == 10 && camera.target[1] == 10 && camera.target[2] == 10);
```

---

### screenSpacePanning

**类型:** `member`

**数据类型:** `boolean`

**描述:** 设置/获取 相机是否在屏幕空间平移True表示平移操作基于屏幕，否则表示基于相机的Y轴方向。默认值为true。

#### 示例

```javascript
let camera = THING.App.current.camera;camera.screenSpacePanning = false;// @expect(camera.screenSpacePanning == false);
```

---

### mode

**类型:** `member`

**数据类型:** `CameraMode`

**描述:** 设置相机模式 在THING.EARTH创建的地图上使用THING.CameraMode.Map 在非地图使用THING.CameraMode.Normal

#### 示例

```javascript
app.camera.mode = THING.CameraMode.Map;app.camera.mode = THING.CameraMode.Normal;
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

### pan

**类型:** `function`

**描述:** 在屏幕空间平移

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `deltaX` | `number` | 屏幕空间x方向的偏移量 |
| `deltaY` | `number` | 屏幕空间y方向的偏移量 |
| `duration` | `number` | 时间(毫秒) |

#### 示例

```javascript
// Move camera with bottom direction	app.camera.pan(0, -50);
```

---

### zoom

**类型:** `function`

**描述:** 相机向前或向后移动 (放大或缩小)

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `distance` | `number` | 相机向前(+)或向后(-)移动的距离 |
| `param` | `object` | 参数 |
| `param.duration` | `number` | 时间 |
| `param.updateTarget` | `boolean` | 是否更新相机的target |

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

