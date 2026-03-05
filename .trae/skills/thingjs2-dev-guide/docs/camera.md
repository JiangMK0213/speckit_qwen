# 摄像机模块详细指南

## 2. 摄像机

摄像机相当于手机上的摄像头，随着位置position和拍摄点target的变化，摄像机对场景进行取景后渲染到屏幕上。ThingJS 默认提供了一个摄像机对象app.camera，这个摄像机对象提供了设置视角、飞行、透视正交等多种控制功能，用户可根据自己需要覆写app.camera的控制代码。

### 视角

通过摄像机的position、target属性，或者lookAt方法来设置摄像机位置和看点：

```javascript
// 设置摄像机位置
app.camera.position = [0, 20, 20]

// 设置摄像机看点
app.camera.target = [-30, 10, 0]

// 或通过lookAt设置看点
app.camera.lookAt([-30, 10, 0])
```

摄像机提供的fit方法，根据对象的大小自动计算一个最佳看点，并设置到这个看点上：

```javascript
// 摄像机聚焦到obj对象上
app.camera.fit(obj)
```

### 飞行

摄像机提供的flyTo方法，可以飞到一个位置和看点上，通过duration设置飞行时间，飞行完成后调用onComplete方法。

```javascript
// 摄像机经过1000ms飞行到指定位置和视点
app.camera.flyTo({
  position: [2, 5, 6],
  target: [0, 0, 0],
  duration: 1000,
  onComplete: function () {
    console.log('fly complete')
  }
})
```

异步方法可以使用flyToAsync：

```javascript
// 异步方法
await app.camera.flyToAsync({
  position: [2, 5, 6],
  target: [0, 0, 0],
  duration: 1000
})
```

### 模式切换

摄像机支持透视模式Perspective和正交模式Orthographic，默认使用透视模式。

- 在透视模式下，物体随摄像机的距离近大远小，更接近真实世界；
- 在正交模式下，物体的大小和摄像机距离无关，其大小保持不变；

可通过摄像机的setProjectionType接口来设置两种模式，枚举ProjectionType包含两种模式，duration参数可以控制切换模式的过渡时间：

```javascript
// 设置为正交投影（切换时间2秒）
app.camera.setProjectionType(THING.ProjectionType.Orthographic, 2000)
```

摄像机还提供了几种视图的切换（正、顶、侧视图），一般会配合正交模式一起使用，枚举ViewModeType中，提供多种视图模式：

```javascript
// 设置顶视图
app.camera.viewMode = THING.ViewModeType.Top
```

### 控制

通过camera的属性设置，可以开启或关闭摄像机的控制。

```javascript
// 开启/关闭控制
app.camera.enable = false

// 单独开启/关闭控制
app.camera.enableRotate = true // 旋转
app.camera.enablePan = true // 平移
app.camera.enableZoom = true // 缩放
```

更改摄像机控制属性：

```javascript
app.camera.rotateSpeed = 1 // 设置旋转速度
app.camera.panSpeed = 1 // 设置平移速度
app.camera.zoomSpeed = 1 // 设置缩放速度
```

可以通过重写摄像机控制组件，来实现一个自定义的摄像机控制方式。

### 控制事件

下面几个事件可以监听摄摄像机的操控，注意是app对象注册的事件：

```javascript
// 摄像机位置开始变动时立即触发
app.on(THING.EventType.CameraChangeStart, function (ev) {
  console.log('pos:' + ev.position + ' target:' + ev.target)
})

// 摄像机位置变动结束后触发
app.on(THING.EventType.CameraChangeEnd, function (ev) {
  console.log('pos:' + ev.position + ' target:' + ev.target)
})

// 摄像机位置变动中触发
app.on(THING.EventType.CameraChange, function (ev) {
  console.log('pos:' + ev.position + ' target:' + ev.target)
})
```

### 坐标转换

摄像机提供了将3D世界坐标转换为2D屏幕坐标的接口worldToScreen。

```javascript
app.camera.worldToScreen([100, 100, 90])
```

**说明**：2D屏幕坐标系以左上角为原点，向右为X轴正向，向下为Y轴正向。

摄像机还提供了将2D屏幕坐标转换为3D世界坐标的接口screenToWorld。

```javascript
app.camera.screenToWorld([200, 200])
```

### 其他参数

摄像机还提供了near近裁剪面距离，far远裁剪面距离，视场角fov，视口宽高比aspect等属性的设置：

```javascript
// 设置 near 和 far 之间的距离尽可能小，过大可能会引起'撕面'
camera.near = 0.1
camera.far = 1000

// 设置视场角
camera.fov = 45
```

### 多摄像机

ThingJS 引擎除了默认摄像机，还支持多个摄像机。只需要新建多个摄像机对象，并设置它们的视口位置即可：

```javascript
// 增加一个摄像机
var cam01 = new THING.Camera()
// 设置摄像机的位置
cam01.position = [0, 10, 0]
// 开启视口渲染模式
cam01.enableViewport = true
// 设置视口大小
cam01.viewport = [0, 15, 128, 128] // left, top, width, height

// 再增加一个摄像机
var cam02 = new THING.Camera()
cam02.enableViewport = true
cam02.viewport = [0, 256, 128, 128]
```
