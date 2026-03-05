# 界面元素模块详细指南

## 7. 界面元素

ThingJS 引擎为对象提供了图片标记、文字标签等 HUD 界面元素，用于以2D的方式标记对象。

### 7.1 图片标记

Marker 提供了一个对象的图标，用于对象头顶的提示牌、告警牌等，可以跟随对象运动、点击，并进行一些缩放等动画效果：

```javascript
let box = new THING.Box(2, 2, 2)

// 创建Marker并设置一些参数信息
const marker = new THING.Marker({
  name: 'Marker01',
  localPosition: [0, box.boundingBox.size[1] / 2, 0], // 相对 box 对象的位置
  parent: box, // 设置给 box 对象
  style: {
    image: new THING.ImageTexture('./alarm_build.png')
  },
  pivot: [0.5, 0],
  scale: [1, 1, 1]
})

// 设置Marker缩放动画, 在scale [1, 1, 1] 与[2, 2, 2] 之前插值切换
marker.scaleTo([2, 2, 2], {
  duration: 2000,
  loopType: THING.LoopType.PingPong
})
```

如果Marker上的图片长宽比不是1:1，可以通过scale参数进行设置，比如一张width=150, height=50的图片，可以将scale值设置为[0.3, 0.1, 1]。

### 7.2 文字标签

Label 提供了一个对象的文字标签，有 2D 或 3D 两种绘制方式：Sprite 或 Plane，默认以 2D 方式绘制：

```javascript
// 2D文字Label
let label = new THING.Label({
  fontText: 'Label01 ',
  fontSize: 25,
  position: [0, 2, 0],
  renderType: THING.RenderType.Plane
})
```

Label 支持富文本方式，可以提供 HTML 作为参数：

```javascript
let richLabel = new THING.Label({
  fontText: `
    <p>文字1
        <span style="color: #E36C09;">文字2</span>
        <span style="font-size: 20px;">文字3
        <span style="font-size: 30px; color: #974806;">文字4</span>
        </span>
    </p>`,
  fontColor: 'orange',
  richText: true,
  position: [0, 2, 0]
})
```

Label 支持 SDF 渲染方式，用来渲染更清晰的文字效果：

```javascript
let sdfLabel = new THING.Label({
  fontText: '文字内容 ',
  fontSize: 25,
  position: [0, 2, 0],
  renderType: THING.RenderType.Plane，
  mode: 'sdf' // 文字的渲染模式
});
```

注意：SDF 和 MSDF 渲染模式目前不支持富文本 richText 和字体粗细 fontWeight 样式 style

下面代码为对象添加一个 Label，在盒子头顶显示：

```javascript
let box = new THING.Box(2, 2, 2)
let label = new THING.Label({
  parent: box,
  localPosition: [0, box.boundingBox.size[1], 0],
  fontText: 'Box_01',
  fontSize: 26,
  fontColor: '#FF0000'
})
```

### 7.3 CSS组件

可以直接给对象增加一个 CSS2DComponent 或 CSS3DComponent 组件，通过 DOM 元素来设置一个页面元素的头顶牌效果：

```html
<div id="board1" style="width: 100px; height: 100px; background: red; position: absolute; left: -100px;">CSS2D</div>
<div id="board2" style="width: 100px; height: 100px; background: green; position: absolute; left: -100px">CSS3D</div>
```

```javascript
let box = new THING.Box(2, 2, 2)

// 2D页面元素
box.addComponent(THING.DOM.CSS2DComponent, 'sign1')
box.sign1.domElement = document.getElementById('board1')
box.sign1.offset = [0, 3, 0]

// 3D页面元素
box.addComponent(THING.DOM.CSS3DComponent, 'sign2')
box.sign2.domElement = document.getElementById('board2')
box.sign2.pivot = [0.5, -0.5]
box.sign2.renderType = THING.RenderType.Plane
```

### 7.4 HTML标记

使用 HTMLMarker 类型，可以通过指定 HTML 元素，创建一个标记：

```javascript
let htmlMarker = new THING.HTMLMarker({
  renderType: 'Sprite', //"Plane",
  element: document.getElementById('containerId'),
  pivot: [0.5, 0, 0.5],
  offset: [0, 0, 0]
})
```

说明： HTMLMarker 是对 CSS3DComponent 的封装，是一种简化的使用方法。

### 7.5 页面视图

可以通过指定链接，创建一个内嵌页面的三维对象：

```javascript
// 内嵌页面
var webView = new THING.WebView({
  position: [0, 2, 0],
  renderType: THING.RenderType.Plane,
  url: 'https://www.thingjs.com',
  scale: [19.2, 10.8, 1],
  domWidth: 1920,
  domHeight: 1080
})
```
