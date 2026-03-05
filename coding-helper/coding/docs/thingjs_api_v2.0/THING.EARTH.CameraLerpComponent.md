# 类: CameraLerpComponent

**命名空间:** THING.EARTH

**继承:** [THING.LerpComponent](./THING.LerpComponent.md)

**描述:** 空

## 实例属性

### onInit

**类型:** `member`

**数据类型:** `OnInitComponentCallback`

**继承:** THING.BaseComponent#onInit

**重写:** THING.LerpComponent#onInit

**描述:** 初始化时的回调函数。

---

### onLoadResource

**类型:** `member`

**数据类型:** `OnLoadResourceComponentCallback`

**继承:** THING.BaseComponent#onLoadResource

**重写:** THING.LerpComponent#onLoadResource

**描述:** 加载资源时的回调函数。

---

### onUnloadResource

**类型:** `member`

**数据类型:** `OnUnloadResourceComponentCallback`

**继承:** THING.BaseComponent#onUnloadResource

**重写:** THING.LerpComponent#onUnloadResource

**描述:** 卸载资源时的回调函数。

---

### onUpdate

**类型:** `member`

**数据类型:** `OnUpdateComponentCallback`

**继承:** THING.BaseComponent#onUpdate

**重写:** THING.LerpComponent#onUpdate

**描述:** 更新时的回调函数。

---

### onParentChange

**类型:** `member`

**数据类型:** `OnParentChangeComponentCallback`

**继承:** THING.BaseComponent#onParentChange

**重写:** THING.LerpComponent#onParentChange

**描述:** 改变父对象时的回调函数。

---

### onResize

**类型:** `member`

**数据类型:** `OnResizeComponentCallback`

**继承:** THING.BaseComponent#onResize

**重写:** THING.LerpComponent#onResize

**描述:** 调整大小时的回调函数。

---

### onRefresh

**类型:** `member`

**数据类型:** `OnRefreshComponentCallback`

**继承:** THING.BaseComponent#onRefresh

**重写:** THING.LerpComponent#onRefresh

**描述:** 刷新时的回调函数。

---

### onActiveChange

**类型:** `member`

**数据类型:** `OnActiveChangeComponentCallback`

**继承:** THING.BaseComponent#onActiveChange

**重写:** THING.LerpComponent#onActiveChange

**描述:** 活动状态改变时的回调函数。

---

### onVisibleChange

**类型:** `member`

**数据类型:** `OnVisibleChangeComponentCallback`

**继承:** THING.BaseComponent#onVisibleChange

**重写:** THING.LerpComponent#onVisibleChange

**描述:** 可见性改变时的回调函数。

---

### onCopy

**类型:** `member`

**数据类型:** `OnCopyComponentCallback`

**继承:** THING.BaseComponent#onCopy

**重写:** THING.LerpComponent#onCopy

**描述:** 复制时的回调函数。

---

### onBeforeAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeAddChild

**重写:** THING.LerpComponent#onBeforeAddChild

**描述:** 添加子对象之前的回调函数。

---

### onAfterAddChild

**类型:** `member`

**数据类型:** `OnAddChildComponentCallback`

**继承:** THING.BaseComponent#onAfterAddChild

**重写:** THING.LerpComponent#onAfterAddChild

**描述:** 添加子对象之后的回调函数。

---

### onBeforeRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemoveChild

**重写:** THING.LerpComponent#onBeforeRemoveChild

**描述:** 移除子对象之前的回调函数。

---

### onAfterRemoveChild

**类型:** `member`

**数据类型:** `OnRemoveChildComponentCallback`

**继承:** THING.BaseComponent#onAfterRemoveChild

**重写:** THING.LerpComponent#onAfterRemoveChild

**描述:** 移除子对象之后的回调函数。

---

### onBeforeAdd

**类型:** `member`

**数据类型:** `OnBeforeAddComponentCallback`

**继承:** THING.BaseComponent#onBeforeAdd

**重写:** THING.LerpComponent#onBeforeAdd

**描述:** 添加之前。

---

### onAfterAdd

**类型:** `member`

**数据类型:** `OnAfterAddComponentCallback`

**继承:** THING.BaseComponent#onAfterAdd

**重写:** THING.LerpComponent#onAfterAdd

**描述:** 添加之后。

---

### onBeforeRemove

**类型:** `member`

**数据类型:** `OnBeforeRemoveComponentCallback`

**继承:** THING.BaseComponent#onBeforeRemove

**重写:** THING.LerpComponent#onBeforeRemove

**描述:** 移除之前。

---

### onAfterRemove

**类型:** `member`

**数据类型:** `OnAfterRemoveComponentCallback`

**继承:** THING.BaseComponent#onAfterRemove

**重写:** THING.LerpComponent#onAfterRemove

**描述:** 移除之后。

---

### onImport

**类型:** `member`

**数据类型:** `OnImportComponentCallback`

**继承:** THING.BaseComponent#onImport

**重写:** THING.LerpComponent#onImport

**描述:** 导入数据时。

---

### onExport

**类型:** `member`

**数据类型:** `OnExportComponentCallback`

**继承:** THING.BaseComponent#onExport

**重写:** THING.LerpComponent#onExport

**描述:** 导出数据时。

---

### active

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseComponent#active

**重写:** THING.LerpComponent#active

**描述:** 激活或停用组件。

---

### object

**类型:** `member`

**数据类型:** `THING.BaseObject`

**继承:** THING.BaseComponent#object

**重写:** THING.LerpComponent#object

**描述:** 获取对象。

---

### app

**类型:** `member`

**数据类型:** `THING.App`

**继承:** THING.BaseComponent#app

**重写:** THING.LerpComponent#app

**描述:** 获取应用程序。

---

## 实例方法

### correctUp

**类型:** `function`

**描述:** 地球模式下 校正相机的up 头朝地球于球心连线向外方向

---

### getEarthCameraInfo

**类型:** `function`

**描述:** 获取地球上摄影机的参数,这里的height是基于相机位置基于圆球的高度,获取到的lonlat中不含高度该方法主要是为了获取相机角度，再调用earthFlyTo时飞到正确的位置如果添加地形的情况下，通过该方法获取的相机高度是不正确的

#### 返回值

- **类型:** `Object`
- **描述:** 地球上的相机参数 包括lonlat,height,heading,pitch

---

### correctCameraTarget

**类型:** `function`

**描述:** 空

---

### earthFlyTo

**类型:** `function`

**描述:** 地球上的飞

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | - |
| `param.lonlat` | `Array.<Number>` | 目标位置的经纬度(并非相机位置的经纬度,添加地形之后这个经纬度是是相机在数学球上的经纬度,而不是在地形上的经纬度) |
| `param.target` | `Array.<Number>, Object3D` | 相机目标的世界坐标或者以一个Object3D作为目标位置 如果传target则不会使用lonlat |
| `param.position` | `Array.<Number>` | 相机飞行结束后位置的世界坐标 如果传position 则不会使用height,pitch,heading计算相机位置 |
| `param.height` | `Number` | 相机位置的离地高(如果传lonlat,代表的是相机距离数学球的高度,如果传target,则代表相机距离基于target的切平面高度) |
| `param.duration` | `Number` | 飞行时间 单位ms |
| `param.pitch` | `Number` | 飞行结束时相机的俯仰角 |
| `param.heading` | `Number` | 飞行结束时相机的方位角(相机面向正北0度,正南180度) |
| `param.directFly` | `Boolean` | 是否直接飞过去(注意 该参数为true可能会穿地飞,设置false会根据当前距离和目标位置自动分段飞行) |
| `param.onComplete` | `function` | 飞行结束的回调方法 |

---

### earthFlyHome

**类型:** `function`

**描述:** 相机恢复初始状态 即看到整个地球的视角

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | - |
| `param.duration` | `Number` | 飞行时间 |
| `param.onComplete` | `function` | 飞行完成的回调 |

---

### earthFlyRotateBySpeed

**类型:** `function`

**描述:** 相机根据速度围绕目标点旋转

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | - |
| `param.speed` | `Number` | 旋转速度 速度为负数代表与旋转角度代表的方向相反 |
| `param.angle` | `Number` | 旋转角度 如果不传则会一直旋转 值为正代表顺时针旋转 值为负数代表逆时针旋转 |
| `param.target` | `Number` | 目标点坐标 如果不传绕当前相机目标点旋转 |

---

### earthFlyRotateByTime

**类型:** `function`

**描述:** 相机根据时间围绕目标点旋转

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | - |
| `param.duration` | `Number` | 旋转时间 单位毫秒 |
| `param.angle` | `Number` | 旋转角度 值为正代表顺时针旋转 值为负数代表逆时针旋转 |
| `param.target` | `Number` | 目标点坐标 如果不传绕当前相机目标点旋转 |
| `param.onComplete` | `function` | 旋转完后的回调 |

---

### earthCameraRotateByTime

**类型:** `function`

**描述:** 相机根据时间自身旋转

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | - |
| `param.duration` | `Number` | 旋转时间 单位毫秒 |
| `param.angle` | `Number` | 旋转角度 |
| `param.onComplete` | `function` | 旋转完后的回调 |

---

### earthCameraRotateBySpeed

**类型:** `function`

**描述:** 相机根据速度绕自身旋转

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | - |
| `param.speed` | `Number` | 旋转速度 |
| `param.angle` | `Number` | 旋转角度 如果不传则会一直旋转 |
| `param.onComplete` | `function` | 旋转完后的回调 |

---

### stopEarthFly

**类型:** `function`

**描述:** 停止地球上的相机飞行或旋转

---

### fit

**类型:** `function`

**描述:** 根据目标对象计算最佳位置 一般用于调整摄像机最佳视角

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param.target` | `THING.Object3D` | 目标对象 |
| `param` | `Object` | 参数列表 |
| `param.time` | `Number` | 时间 |
| `param.onComplete` | `function` | 飞行结束后的回调 |

#### 示例

```javascript
const geoPoint = app.query('.GeoPoint')[0];//假设地图上有一个GeoPoint对象app.camera.fit(geoPoint);
```

---

### rotateToNorth

**类型:** `function`

**描述:** 相机指北

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param.duration` | `Number` | 飞行时间 单位毫秒 |
| `param.onComplete` | `function` | 飞行完后的回调 |

---

### flyToBoundingSphere

**类型:** `function`

**描述:** 飞到包围球

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 参数列表 |
| `param.radius` | `Number` | 包围球半径 |
| `param.center` | `Array.<Number>` | 包围球中心点 |
| `param.duration` | `Number` | 飞线时间 单位毫秒 |
| `param.onComplete` | `function` | 飞行完后的回调 |

---

### stopAll

**类型:** `function`

**继承:** THING.LerpComponent#stopAll

**重写:** THING.LerpComponent#stopAll

**描述:** 停止全部插值

#### 示例

```javascript
let lerp = box.lerp;lerp.stopAll();
```

---

### pauseAll

**类型:** `function`

**继承:** THING.LerpComponent#pauseAll

**重写:** THING.LerpComponent#pauseAll

**描述:** 暂停全部插值

#### 示例

```javascript
let lerp = box.lerp;lerp.pauseAll();
```

---

### resumeAll

**类型:** `function`

**继承:** THING.LerpComponent#resumeAll

**重写:** THING.LerpComponent#resumeAll

**描述:** 恢复全部插值

#### 示例

```javascript
let lerp = box.lerp;lerp.resumeAll();
```

---

### pause

**类型:** `function`

**继承:** THING.LerpComponent#pause

**重写:** THING.LerpComponent#pause

**描述:** 暂停插值

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 插值的名称, |

#### 示例

```javascript
let lerp = box.lerp;lerp.pause('move');
```

---

### resume

**类型:** `function`

**继承:** THING.LerpComponent#resume

**重写:** THING.LerpComponent#resume

**描述:** 恢复插值

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 插值的名称, |

#### 示例

```javascript
let lerp = box.lerp;lerp.resume('move');
```

---

### stop

**类型:** `function`

**继承:** THING.LerpComponent#stop

**重写:** THING.LerpComponent#stop

**描述:** 停止插值

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 插值的名称, |

#### 示例

```javascript
let lerp = box.lerp;lerp.stop('move');
```

---

### to

**类型:** `function`

**继承:** THING.LerpComponent#to

**重写:** THING.LerpComponent#to

**描述:** 开始插值

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | 插值参数 |
| `name` | `string` | 插值的名称,停止插值时需要传入该参数 |
| `trigger` | `function` | 触发器函数 |

#### 示例

```javascript
box.lerp.to({  from: {    position: [0, 0, 0]  },  to: {    position: [10, 10, 10]  },  time: 5000,  loopType: THING.LoopType.PingPong,  onUpdate: (e) => {    console.log(e.from, e.to, e.direction);  }})
```

---

### moveTo

**类型:** `function`

**继承:** THING.LerpComponent#moveTo

**重写:** THING.LerpComponent#moveTo

**描述:** 将物体移动到指定位置

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array, object` | 目标位置坐标数组[x,y,z]或包含移动参数的对象 |
| `param` | `object` | 移动参数配置对象 |
| `param.to` | `Array.<number>` | 目标位置 |
| `param.target` | `Array.<number>` | 目标位置，与 to 参数作用相同 |
| `param.time` | `number` | 移动时间(毫秒) |
| `param.spaceType` | `THING.SpaceType` | 坐标空间类型 |
| `param.orientToPath` | `boolean` | 是否朝向移动方向 |
| `param.orientToPathDegree` | `number` | 朝向偏移角度，在朝向路径方向的基础上偏移的角度，正值为顺时针，负值为逆时针 |
| `param.times` | `number` | 循环次数 |
| `param.loopType` | `THING.LoopType` | 循环类型 |
| `param.onUpdate` | `function` | 更新回调函数 |
| `param.onComplete` | `function` | 完成回调函数 |
| `trigger` | `function` | 触发器函数 |

#### 返回值

- **类型:** `void`
- **描述:** -

#### 示例

```javascript
// 基础用法 - 移动到世界坐标系中的位置object.lerp.moveTo([10, 0, 10]);// 使用参数对象方式object.lerp.moveTo({  to: [10, 0, 10],           						// 目标位置  time: 2000,               							// 移动时间(毫秒)  spaceType: THING.SpaceType.World,    	// 坐标空间类型  orientToPath: true,       							// 是否朝向移动方向  orientToPathDegree: 45,                 // 朝向偏移角度  times: 4,                             	// 循环次数  loopType: THING.LoopType.PingPong,    	// 循环类型  onUpdate: (ev) => {      							// 更新回调    console.log(ev.from, ev.to, ev.direction);    console.log('Progress:', ev.progress);  },  onComplete: () => {      							// 完成回调    console.log('Movement completed');  }});
```

---

### movePath

**类型:** `function`

**继承:** THING.LerpComponent#movePath

**重写:** THING.LerpComponent#movePath

**描述:** 将物体沿指定路径移动

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array, object` | 目标路径坐标数组或包含移动参数的对象 |
| `param` | `object` | 移动参数配置对象 |
| `param.path` | `Array.<Array.<number>>` | 移动路径坐标数组 |
| `param.time` | `number` | 移动时间(毫秒) |
| `param.spaceType` | `THING.SpaceType` | 坐标空间类型 |
| `param.orientToPath` | `boolean` | 是否朝向移动方向 |
| `param.orientToPathDegree` | `number` | 朝向偏移角度，在朝向路径方向的基础上偏移的角度，正值为顺时针，负值为逆时针 |
| `param.times` | `number` | 循环次数 |
| `param.loopType` | `THING.LoopType` | 循环类型 |
| `param.onUpdate` | `function` | 更新回调函数 |
| `param.onComplete` | `function` | 完成回调函数 |
| `trigger` | `function` | 触发器函数 |

#### 返回值

- **类型:** `void`
- **描述:** -

#### 示例

```javascript
// 基础用法 - 直接传入路径数组object.lerp.movePath([  [0, 0, 0],  [10, 10, 0],  [10, 10, 10],]);// 使用参数对象方式object.lerp.movePath({  path: [                              // 移动路径    [0, 0, 0],    [10, 10, 0],    [10, 10, 10],  ],  time: 2000,               							// 移动时间(毫秒)  spaceType: THING.SpaceType.World,    	// 坐标空间类型  orientToPath: true,       							// 是否朝向移动方向  orientToPathDegree: 45,                 // 朝向偏移角度  times: 4,                             	// 循环次数  loopType: THING.LoopType.PingPong,    	// 循环类型  onUpdate: (ev) => {      							// 更新回调    console.log(ev.from, ev.to, ev.fromIndex, ev.toIndex, ev.direction);    console.log('Progress:', ev.progress);  },  onComplete: () => {      							// 完成回调    console.log('Movement completed');  }});
```

---

### scaleTo

**类型:** `function`

**继承:** THING.LerpComponent#scaleTo

**重写:** THING.LerpComponent#scaleTo

**描述:** 将物体缩放到指定大小

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array, object` | 目标缩放值数组[x,y,z]或包含缩放参数的对象 |
| `param` | `object` | 缩放参数配置对象 |
| `param.to` | `Array.<number>` | 目标缩放值 |
| `param.time` | `number` | 缩放时间(毫秒) |
| `param.spaceType` | `THING.SpaceType` | 坐标空间类型，默认为 World |
| `param.times` | `number` | 循环次数 |
| `param.loopType` | `THING.LoopType` | 循环类型 |
| `param.onUpdate` | `function` | 更新回调函数 |
| `param.onComplete` | `function` | 完成回调函数 |
| `trigger` | `function` | 触发器函数 |

#### 返回值

- **类型:** `void`
- **描述:** -

#### 示例

```javascript
// 基础用法 - 直接传入缩放值数组object.lerp.scaleTo([2, 2, 2]);// 使用参数对象方式object.lerp.scaleTo({  to: [2, 2, 2],           						// 目标缩放值  time: 2000,               					// 缩放时间(毫秒)  spaceType: THING.SpaceType.World,    // 坐标空间类型  times: 4,                             // 循环次数  loopType: THING.LoopType.PingPong,   // 循环类型  onUpdate: (ev) => {      						// 更新回调    console.log(ev.from, ev.to, ev.direction);    console.log('Progress:', ev.progress);  },  onComplete: () => {      						// 完成回调    console.log('Scale completed');  }});// 在本地坐标系中缩放object.lerp.scaleTo({  to: [2, 2, 2],  time: 2000,  spaceType: THING.SpaceType.Local});// 相对于当前缩放值进行缩放object.lerp.scaleTo({  to: [2, 2, 2],  time: 2000,  spaceType: THING.SpaceType.Self});
```

---

### rotateTo

**类型:** `function`

**继承:** THING.LerpComponent#rotateTo

**重写:** THING.LerpComponent#rotateTo

**描述:** 将物体旋转到指定角度

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array, object` | 目标旋转值。可以是：- 欧拉角数组[x,y,z]表示旋转角度- 四元数数组[x,y,z,w]表示旋转- 包含旋转参数的对象 |
| `param` | `object` | 旋转参数配置对象 |
| `param.to` | `Array.<number>` | 目标旋转值，可以是欧拉角[x,y,z]或四元数[x,y,z,w] |
| `param.time` | `number` | 旋转时间(毫秒) |
| `param.spaceType` | `THING.SpaceType` | 坐标空间类型，默认为 Local |
| `param.times` | `number` | 循环次数 |
| `param.loopType` | `THING.LoopType` | 循环类型 |
| `param.onUpdate` | `function` | 更新回调函数 |
| `param.onComplete` | `function` | 完成回调函数 |
| `trigger` | `function` | 触发器函数 |

#### 返回值

- **类型:** `void`
- **描述:** -

#### 示例

```javascript
// 基础用法 - 使用欧拉角旋转(x,y,z)object.lerp.rotateTo([90, 0, 0]); // 绕x轴旋转90度// 使用四元数旋转(x,y,z,w)object.lerp.rotateTo([0, 0, 0, 1]);// 使用参数对象方式 - 欧拉角object.lerp.rotateTo({  to: [90, 0, 0],           						// 目标旋转角度  time: 2000,               					// 旋转时间(毫秒)  spaceType: THING.SpaceType.World,    // 坐标空间类型  times: 4,                             // 循环次数  loopType: THING.LoopType.PingPong,   // 循环类型  onUpdate: (ev) => {      						// 更新回调    console.log(ev.from, ev.to, ev.direction);    console.log('Progress:', ev.progress);  },  onComplete: () => {      						// 完成回调    console.log('Rotation completed');  }});// 在世界坐标系中旋转object.lerp.rotateTo({  to: [90, 0, 0],  time: 2000,  spaceType: THING.SpaceType.World});// 在本地坐标系中旋转(默认)object.lerp.rotateTo({  to: [90, 0, 0],  time: 2000,  spaceType: THING.SpaceType.Local});// 相对于当前旋转进行旋转object.lerp.rotateTo({  to: [90, 0, 0],  time: 2000,  spaceType: THING.SpaceType.Self});
```

---

### stopFading

**类型:** `function`

**继承:** THING.LerpComponent#stopFading

**重写:** THING.LerpComponent#stopFading

**描述:** 停止淡入淡出动作。

#### 示例

```javascript
let lerp = box.lerp;lerp.stopFading();
```

---

### pauseFading

**类型:** `function`

**继承:** THING.LerpComponent#pauseFading

**重写:** THING.LerpComponent#pauseFading

**描述:** 暂停淡入淡出动作。

#### 示例

```javascript
let lerp = box.lerp;lerp.pauseFading();
```

---

### resumeFading

**类型:** `function`

**继承:** THING.LerpComponent#resumeFading

**重写:** THING.LerpComponent#resumeFading

**描述:** 恢复淡入淡出动作。

#### 示例

```javascript
let lerp = box.lerp;lerp.resumeFading();
```

---

### fadeIn

**类型:** `function`

**继承:** THING.LerpComponent#fadeIn

**重写:** THING.LerpComponent#fadeIn

**描述:** 将对象淡入到完全不透明。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | 淡入动作的参数。 |
| `trigger` | `function` | 在淡入完成时调用的触发函数。 |

#### 示例

```javascript
let lerp = box.lerp;lerp.fadeIn({  from: {    style: {      opacity: 0    }  }
```

---

### fadeOut

**类型:** `function`

**继承:** THING.LerpComponent#fadeOut

**重写:** THING.LerpComponent#fadeOut

**描述:** 将对象淡出到完全透明。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | 淡出动作的参数。 |
| `trigger` | `function` | 在淡出完成时调用的触发函数。 |

#### 示例

```javascript
let lerp = box.lerp;lerp.fadeOut({  from: {    style: {      opacity: 1    }
```

---

### fadeInAsync

**类型:** `function`

**继承:** THING.LerpComponent#fadeInAsync

**重写:** THING.LerpComponent#fadeInAsync

**描述:** 异步将对象淡入。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | 淡入动作的参数。 |

#### 返回值

- **类型:** `Promise`
- **描述:** 一个在淡入完成时解析的承诺。

#### 示例

```javascript
let lerp = box.lerp;lerp.fadeInAsync({  from: {    style: {      opacity: 0    }
```

---

### fadeOutAsync

**类型:** `function`

**继承:** THING.LerpComponent#fadeOutAsync

**重写:** THING.LerpComponent#fadeOutAsync

**描述:** 异步将对象淡出。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | 淡出动作的参数。 |

#### 返回值

- **类型:** `Promise`
- **描述:** 一个在淡出完成时解析的承诺。

#### 示例

```javascript
let lerp = box.lerp;lerp.fadeOutAsync({  from: {    style: {      opacity: 1    }
```

---

### onAdd

**类型:** `function`

**继承:** THING.BaseComponent#onAdd

**重写:** THING.LerpComponent#onAdd

**描述:** 当添加组件时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 对象。 |

---

### onRemove

**类型:** `function`

**继承:** THING.BaseComponent#onRemove

**重写:** THING.LerpComponent#onRemove

**描述:** 当移除组件时。

---

