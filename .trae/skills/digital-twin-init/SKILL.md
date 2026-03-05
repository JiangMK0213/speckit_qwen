---
name: "digital-twin-init"
description: "提供ThingJS数字孪生项目初始化指南，包括App实例创建、场景加载、对象管理等核心功能。当用户需要初始化数字孪生项目时调用。"
---

# 数字孪生项目初始化指南

## 初始化 App 实例

使用 ThingJS 引擎，首先需要创建一个 App 实例。App 是引擎的核心入口，提供资源加载、对象管理、对象查询和事件注册等多种功能。通常情况下，只需创建一个 App 实例：

```javascript
const app = new THING.App();
```

ThingJS 默认将使用页面上标签为 div3d 的元素作为渲染区域，它会在该 div 内创建 WebGL 画布及必要的页面元素。以下是一个完整的示例页面：

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <title>ThingJS</title>
    <meta charset="utf-8" />
    <script src="./libs/thing.min.js"></script>
  </head>

  <body style="margin: 0; padding: 0">
    <div id="div3d"></div>
  </body>

  <script type="module">
    const app = new THING.App();
  </script>
</html>
```

**注意**：请在页面元素 div3d 初始化后，再创建 App实例

## 手动指定渲染容器

如果需要手动指定元素的标签，可以使用container参数：

```javascript
const app = new THING.App({
  container: document.getElementById('div3d')
});
```

## 获取当前 App 实例

当 App 实例被创建之后，用户还可以通过 THING.App.current 直接得到当前的 app 实例。

```javascript
const app = new THING.App();

console.log(THING.App.current === app); // true
```

## 加载场景

在初始化 App 时，可以传入一个 url 参数，url 可以是一个包含了场景信息的 gltf 文件，也可以是一个 ThingJS 场景文件或路径：

```javascript
const app = new THING.App({
  url: './assets/scene/scene.gltf',
  onComplete: function (ev) {
    console.log(ev); // 加载完成后回调
  }
});
```

## 创建对象和添加交互

在初始化 App 后，创建一个立方体盒子，并在更新事件中让这个 Box 旋转：

```javascript
// 创建一个宽、高、深为1、2、3的盒子
let box = new THING.Box(1, 2, 3);

// 场景更新事件
app.on('update', function (deltaTime) {
  if (box != null)
    box.rotateY(0.1);
})
```

## 使用场景

当您需要初始化数字孪生项目时，可以使用此skill获取以下内容：
- App 实例的创建方法
- 渲染容器的配置
- 场景的加载方式
- 对象的创建和管理
- 事件的注册和处理

通过本指南，您可以快速上手ThingJS数字孪生项目的初始化，为后续的3D场景开发奠定基础。