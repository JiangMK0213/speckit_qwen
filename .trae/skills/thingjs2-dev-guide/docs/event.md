# 事件模块详细指南

## 4. 事件

ThingJS 引擎的事件系统允许用户在全局、或特定对象、或一批对象上注册和管理事件，事件的类型可以通过枚举或字符串指定，并支持优先级控制和标签管理，以便进行细粒度的事件调度和处理。

### 全局事件

通过 app.on() 来注册全局事件，下面的例子包括鼠标事件、键盘事件、场景加载事件、更新事件、窗口尺寸事件等。

引擎提供了常用的鼠标和键盘事件：

```javascript
// 绑定click事件
app.on('click', function (ev) {
  ev.object.style.color = 'red'
})

// 绑定click事件，指定事件标签：'my-event'
app.on(
  'dblclick',
  function (ev) {
    ev.object.style.color = 'red'
  },
  'my-event'
)

// 按标签解除事件
app.off('dblclick', 'my-event')

// 解除全部click事件
app.off('dblclick')

// 键盘按下事件
app.on('keydown', function (ev) {
  console.log(ev.code)
})

// 键盘抬起事件
app.on('keyup', function (ev) {
  console.log(ev.code)
})
```

引擎提供了场景加载或对象加载完成的事件：

```javascript
// 场景加载完成事件
app.on('load', function (ev) {
  console.log(ev)
})

// 当需监听符合某些筛选条件对象的load事件
app.on('load', '.Campus', function (ev) {
  console.log(ev)
})
```

每帧都会调用的更新事件：

```javascript
app.on('update', function (deltaTime) {
  console.log(deltaTime)
})
```

窗口大小发生变化的事件：

```javascript
app.on('resize', function (ev) {
  console.log(`size changed(width: ${ev.width}, height: ${ev.height})`)
})
```

### 对象事件

通过 obj.on() 注册对象的事件，常用的有鼠标事件 click、mouseenter、更新事件 update 等：

```javascript
// 旋转立方体
box.on('update', function (ev) {
  ev.object.rotateY(0.5)
})
// 停止旋转
box.off('update')
```

**注意**：由于update事件是每帧调用，所以出于性能的考虑，当使用完更新事件后，请及时移除更新事件，如果不需要更新事件，尽量不去注册。

```javascript
// 鼠标滑入物体事件
box.on('mouseenter', function (ev) {
  ev.object.style.outlineColor = 'red'
})
// 鼠标滑出物体事件
box.on('mouseleave', function (ev) {
  ev.object.style.outlineColor = null
})

// 点击物体切换颜色
let tag = true
box.on('click', function (ev) {
  ev.object.style.color = tag ? 'red' : 'green'
  tag = !tag
})
```

### 暂停事件

通过 pauseEvent 暂停某个事件，resumeEvent 来恢复某个事件，可以指定事件的 tag 来指定针对那个事件。

```javascript
app.pauseEvent(THING.EventType.EnterLevel, '.Floor', eventTag)
app.resumeEvent(THING.EventType.LeaveLevel, '.Floor', eventTag)
```

可以通过 off 来卸载某个事件。

```javascript
box.off('update')
```

可以通过 once 来注册一次性事件，此事件只会被触发一次，触发后会被自动注销。

```javascript
app.once('click', '*', function (ev) {
  console.log(ev)
})
```

可以通过trigger来触发一个事件：

```javascript
app.on('myEvent', function (ev) {
  console.log(ev)
})
app.trigger('myEvent', { result: true })
```

### 事件接口

总结上述内容，ThingJS 引擎主要提供了五个事件相关的接口：on、off、once、pauseEvent 和 resumeEvent：

```javascript
// 注册事件
app.on(type[, condition], callback[, tag][, priority]);
// 注销事件
app.off(type[, condition][, tag]);
// 一次性注册事件
app.once(type[, condition], callback[, tag][, priority]);
// 暂停事件
app.pauseEvent(type[, condition][, tag]);
// 恢复事件
app.resumeEvent(type[, condition][, tag]);
```

事件接口的参数说明：

- type：事件类型，可以从 THING.EventType 枚举中选择。一些常用的事件也可以直接使用字符串表示（不区分大小写）。
- condition：筛选条件，用于指定哪些对象进行事件注册。
- callback：事件的回调函数，实现事件触发后要执行的操作。
- tag：当前注册回调的标签，可以基于此标签暂停或移除事件。
- priority：事件的优先级，数值越高越先执行。
