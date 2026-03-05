# 对象模块详细指南

## 1.1 创建对象

本页面介绍了 ThingJS 中创建对象的方法。在 ThingJS 中BaseObject 类型作为对象的基类，但不能直接实例化。通常，我们使用它的子类来创建实例，比如 Entity、CellSpace 等类型。

### 创建实体

实体对象（Entity）或称物体是一个具有可视外观的三维对象，如设备、车辆等。在创建 Entity 时，可以在构造方法中直接传入一个 url 参数来初始化。这个 url 可以是一个 GLTF 模型文件或预制件文件的路径。您还可以在参数中指定位置、旋转等空间属性，并通过 onComplete 回调来处理加载完成后的逻辑：

```javascript
// 资源url，可以是一个gltf文件，或一个资源包的路径
const url = './models/car.gltf'

// 创建物体，根据给定URL的资源物体，路径为模型或预制件
let obj = new THING.Entity({
  url,
  position: [2, 0, 0],
  rotation: [0, 45, 0],
  onComplete: function () {
    console.log('加载完成')
  }
})
```

也可以通过异步的方法等待Entity加载完成：

```javascript
// 创建物体，await等待完成
let obj = new THING.Entity({ url })
await obj.waitForComplete()
console.log(obj.name)
// 或者使用then
obj.waitForComplete().then(function () {
  console.log(obj.name)
})
```

### 创建空间

单元空间 (CellSpace) 是一种具有体积的三维对象，可进行空间计算，虽然它本身没有可见的外观，但是可以渲染其边界。其他对象可以包含空间对象，空间对象也可以包含其他对象。例如，在建筑内部可以包含一个空间对象，用于表示某种特殊用途的区域。

```javascript
// 创建立方体空间
let space = new THING.CellSpace({
  position: [0, 0, 0],
  size: [10, 20, 30]
})
```

多个空间对象组合成一个空间对象：

```javascript
space.add(space01)
space.add(space02)
space.add(space03)
console.log(space.children) // 子空间就在children中
```

空间计算：包含、相交、相离：

```javascript
// 包含计算，返回bool，默认传递孩子
space.contains(obj, (cascade = true))
// 相交计算，返回bool
space.intersects(obj, (cascade = true))
// 相离计算，返回bool
space.disjoint(obj, (cascade = true))
```

空间可视化，将空间渲染出来：

```javascript
space.showBounding() // 参数默认为true
```

### 克隆对象

可通过clone方法，来复制一个对象，复制过程会连同对象本身的组件、属性、子对象等一起复制：

```javascript
// 克隆 对象
let cloneObj = obj.clone()
```

### 销毁对象

您可以直接调用对象的销毁方法，或者通过 App 查询对象并进行销毁。销毁一个对象时，其所有的组件和子对象也会一并销毁。同时，对象使用的相关资源会通过引用计数机制被管理，未被使用的资源将自动释放。

```javascript
// 销毁
obj.destroy()
obj = null

// 先查询到对象，再销毁
app.query('car01').destroy()
```

## 1.2 对象属性

在 ThingJS 中，对象具有以下基础属性：名称 name、编号 id 和唯一标识 uuid。您可以通过 app.query 方法来查询这些属性。需要注意的是，name 和 id 在同一个场景中可以重复出现，而 uuid 是唯一且不可重复的属性，适合作为对象的持久化唯一标识。

```javascript
// 名称
obj.name = 'car01'
// 编号
obj.id = '001'
// 唯一标识
console.log(obj.uuid) // "5811f0ecf97811ed9a4fc0b5d78a0456";
```

**注意**：在 ThingJS 场景中，当一个对象的id和真实世界中的对象id有对应关系时，则可以认为这个对象就是一个 孪生体。

对象的类型存储在type属性中，内部类型如：Object3D、Entity、Building、Floor等，您也可以自定义类型，并通过 new 进行创建。

```javascript
let type = obj.type
console.log(type)
```

对象的标签tags属性可以存储多个字符串作为标签，且能够根据标签进行查询：

```javascript
// 设置tags
obj.tags = ['Vehicle', 'Truck']
// 添加一个tag
obj.tags.add('Truck')
// 判断是否有tag
let contain = obj.tags.has('Truck')
```

对象的自定义数据，可以通过userData进行存取：

```javascript
obj.userData = {
  品牌: 'UINO',
  编号: 'M001',
  重量: 100
}

let dat = obj.userData['品牌']
```

与对象相关的监控数据可以通过monitorData属性进行存取，并可以订阅监控数据的变化，详细内容请参考 数据监控部分的文档。

## 1.3 空间操作

三维对象 Object3D 的子类都会提供位置、旋转、缩放等空间属性。您可以通过直接设置属性值，或者通过定义一个变化过程，来改变对象的空间属性。

### 设置属性

通过设置值来立即改变对象的空间属性：

```javascript
// 设置位置
obj.position = [0, 10, 0]

// 设置旋转
obj.rotation = [45, 0, 0]

// 设置缩放
obj.scale = [1, 2, 1] // 沿y轴缩放2倍
```

在 ThingJS 引擎中，通常使用一个包含三个元素的数组来表示三维坐标，例如 [0, 10, 0]。单个数值则表示绕 Y 轴的旋转角度，例如 45 度。对于三个轴的旋转角度，使用包含三个元素的数组来表示，例如 [45, 0, 0]。

### 调用方法

调用方法，使对象在现有空间属性的基础上进行空间变换。

```javascript
// 绕Y轴旋转45度
obj.rotateY(45)
// 绕X轴旋转45度
obj.rotate([1, 0, 0], 45)
// 绕X轴、Y轴和Z轴平移10米
obj.translate([10, 10, 10])
// 绕X轴平移10米
obj.translateX(10)
```

### 位移动画

可以通过moveTo方法，让对象移动到某个位置：

```javascript
// 设置移动
obj.moveTo([10, 0, 0])
// 移动参数
obj.moveTo([10, 0, 0], {
  loopType: THING.LoopType.PingPong,
  duration: 2000 // 2秒
})
// 完成回调
obj.moveTo([10, 0, 0], {
  duration: 2000,
  onComplete: function () {
    console.log('move complete')
  }
})
```

或movePath方法，让对象沿指定的路径移动，路径是一个三维点数组：

```javascript
obj.movePath({
  path: [
    [10, 0, 0],
    [10, 0, 10],
    [0, 0, 0]
  ],
  duration: 2000,
  loop: true,
  closure: true // 路径点按照首尾相接闭环移动
})
```

### 旋转动画

可以通过rotateTo方法，让对象旋转到一个指定角度，可以用于动画效果：

```javascript
// 旋转到某个角度
obj.rotateTo([0, 90, 0])
// 旋转到某个角度，如果需要完成时可回调
obj.rotateTo([0, 90, 0], {
  duration: 2000,
  onComplete: function () {
    console.log('rotateTo complete')
  }
})
// 旋转到某个角度，以PingPong的方式循环，每次时间2秒
obj.rotateTo([0, 90, 0], {
  loopType: THING.LoopType.PingPong,
  duration: 2000
})
```

### 缩放动画

可以通过scaleTo方法，让对象缩放到一个指定大小，可以用于动画效果：

```javascript
// 缩放到2倍
obj.scaleTo([2, 2, 2])
// 缩放到2倍，循环10次，每次时间2秒
obj.scaleTo([2, 2, 2], {
  loop: 10,
  duration: 2000
})
```

### 异步调用

上述的几种动画调用方法，都支持onComplete参数等待完成后回调，同时还支持有一个Async的方法，支持await方式的异步调用：

```javascript
// 先移动到[1, 1, 1]的位置
await obj.moveToAsync([1, 1, 1])
// 等待移动结束后，旋转90度
await obj.rotateToAsync([0, 90, 0])
// 等待旋转结束后，缩放2倍
await obj.scaleToAsync([2, 2, 2])
```

### 忽略继承

如果对象只需要继承父对象的位置，而不继承父对象的缩放和旋转，可以通过设置对象的 ignoreParentTransform 枚举属性来实现：

```javascript
// 直接设置属性
obj.ignoreParentTransform = THING.Transform.Scale | THING.Transform.Rotation

// 或在构造时候设置
let box = new THING.Box({
  parent: parentObj,
  position: [0, 0, 0],
  ignoreParentTransform: THING.Transform.Scale | THING.Transform.Rotation
})
```

这种方法常用于头顶标牌或附加子对象的情况。在这种情况下，用户只希望保持子对象相对于父对象的位置不变，而不随父对象的旋转和缩放变化。

### 坐标转换

对象的世界坐标和相对坐标的转换：

```javascript
// 世界坐标
let pos = obj.position

// 相对父亲坐标
let local = obj.localPosition

// 相对坐标转世界坐标
let pos = obj.localToWorld([10, 0, 0])

// 世界坐标转相对坐标
let local = obj.worldToLocal(pos)
```

对象的世界坐标和自身坐标的转换：

```javascript
// 自身坐标转世界坐标
let pos2 = obj.selfToWorld([10, 0, 0])

// 世界坐标转自身坐标
let selfPos = obj.worldToSelf(pos2)
```

### 轴心点

对象的轴心点是用于旋转和缩放操作的关键点，可以理解为对象自身坐标系的原点。例如，当旋转一个立方体时，它将围绕其轴心点旋转。

```javascript
// 设置对象轴心点
obj.pivot = [0.5, 0.5, 0.5]

// 绘制物体的轴心点
obj.helper.axes = true
```

### 包围盒

包围盒是用于描述对象边界的几何形状，分为两种类型：

- 轴对齐包围盒 (boundingBox)：这个盒子不包含旋转信息。
- 有向包围盒 (orientedBox)：这个盒子包含旋转信息，更贴近物体的实际形状。

后者由于考虑了物体的旋转，因此更准确，但可能会稍微影响性能。如果您的应用需要更高的性能且旋转信息不是必要的，优先使用 boundingBox。

```javascript
// 轴对齐包围盒
const boundingBox = obj.boundingBox
let center = boundingBox.center // 对象的中心
let size = boundingBox.size // 对象的大小

// 有向包围盒
const orientedBox = box.orientedBox
let angles = orientedBox.angles // 角度
```

显示包围盒：

```javascript
obj.helper.boundingBox.visible = true
```

## 1.4 对象关系

在 ThingJS 引擎中，对象和对象之间最常见的关系是父子关系（或叫属于关系），可以通过obj.parent，和obj.children属性访问；除此之外还可以通过THING.Relationship来创建各种自定义关系（例如，开关对象控制空调对象的控制关系等）。

### 父子关系

一个对象可能拥有父对象（obj.parent）或子对象（obj.children）。这些关系可以在加载场景时自动建立，也可以在运行时动态修改。您可以通过以下方式访问父对象和子对象属性：

```javascript
// 子对象
obj.children

// 父对象
obj.parent
// 父对象数组（包括父亲和父亲的父亲）
obj.parents

// 兄弟对象数组（有共同父亲的对象）
obj.brothers
```

可以使用add、remove接口来添加或移除子对象：

```javascript
obj.add(childObj)
obj.remove(childObj)
```

可以通过traverse来遍历所有子对象：

```javascript
obj.traverse(child => {
  console.log(child)
})
```

父对象集合parents和子对象集合children都是选择集类型，当需要寻找单个对象时，可以使用find接口进行搜索，找到立即返回，比query接口更高效：

```javascript
obj.children.find('#001')
obj.parents.find('.Floor')
```

### 自定义关系

通过new THING.Relationship()来创建对象之间的关系，需要指定关系类型type、关系的源对象source和目标对象target，还可指定标签tags和自定义属性userData，下面是几个创建关系的例子：

```javascript
// 创建关系
let rls = new THING.Relationship({
  type: 'control',
  name: 'control01',
  source: obj1,
  target: obj2
})

// 创建关系，更多参数
let rls2 = new THING.Relationship({
  type: 'control',
  name: 'control02',
  source: obj1,
  target: [obj2, obj3]
  // queryDirection: THING.RelationshipDirection.Out // 默认Out
})

// 创建多对象关系
let rls3 = new THING.Relationship({
  type: 'group',
  source: [obj1, obj2, obj3]
})
```

创建关系后，可以通过obj.relationships来访问到对象关系：

```javascript
let rls = obj.relationships[0]
console.log(rls.type + ', ' + rls.source + ', ' + rls.target)
```

### 自定义关系查询

可以通过app.queryRelationships()在所有对象的关系中进行查询：

```javascript
let rls = app.queryRelationships({
  type: 'control'
})
```

或者通过obj.relationship.query()在这个对象的关系中进行查询：

```javascript
let objs = obj.relationship.query({
  type: 'control'
})

let objs = []
objs = obj.relationship.queryByType('control')
objs = obj.relationship.queryByName('control01')
```

### 删除自定义关系

通过关系的destroy接口可以删除关系，当关系的相关对象被销毁时，也会同步删除对象的关系：

```javascript
let rls = app.queryRelationships({
  type: 'control'
})

rls.forEach(r => {
  r.destroy()
})
```

## 1.5 对象效果

ThingJS 引擎旨在简化 3D 专业概念的学习和使用，因此在对象显示效果的设置上，提供了类似前端开发的接口。用户可以直接通过对象的 visible 和 style 属性进行控制，使用封装好的效果，如显示隐藏、半透明、淡入淡出、设置颜色、描边和高光等等，不需要理解传统引擎中的 Material 和 Shader 等复杂概念，从而最尽可能地降低了学习和使用门槛。

### 显示隐藏

对象可以通过visible属性或setVisible接口来设置对象的显示隐藏状态，区别是setVisible接口可以控制是否传递这个显隐状态给子对象：

```javascript
// 设置【自己】和【子对象】的显示隐藏状态，并修改visible值
obj.visible = value
// 如果cascade参数为true，则设置【自己】和【子对象】的显示隐藏状态，并修改visible值
// 如果cascade参数为false，则仅设置【自己】的显示隐藏状态，并修改visible值，不影响【子对象】
let cascade = true
obj.setVisible(value, cascade)
// setVisible接口支持回调，如下例子代码，隐藏除了名字为car01的其他对象
obj.setVisible(false, obj => {
  if (obj.name == 'car01') return false
})
```

对象的inherit.visible属性可以设置这个对象是否跟随父亲的显示隐藏状态：

```javascript
// 是否继承父对象的显示隐藏状态，true, false, 更多参考枚举：THING.InheritType
obj.inherit.visible = false
```

下面举几个例子，其中假设building对象包含多个floor对象：

```javascript
// 例子1：隐藏【自己】和【子对象】，并修改visible值为false
obj.visible = false
// 例子2：只隐藏【自己】不隐藏子对象：
obj.setVisible(false, false)
// 例子3：建筑在显示状态时，先隐藏建筑，再显示某层中的一个对象，只显示这个对象
obj.inherit.visible = false
building.visible = false
// 例子4：隐藏父亲，打印子对象visible状态；
building.visible = false
console.log(floor.visible) // 打印false
```

除了设置 visible 属性，对象的 active 属性也可以控制显示和隐藏。与 visible 不同，active 不会影响对象和子对象的visible值，因此适用于只希望更改对象自身的显隐状态，而保留对象以及子对象visible值的情况。此外，active 的性能更好，因为它不会遍历和修改子对象。

```javascript
// 设置【自己】的激活状态，但不修改【子对象】的激活状态以及visible值，false时，【子对象】会被隐藏
obj.active = false
```

### 效果样式

对象可以通过style属性或setStyle接口，来设置样式：

```javascript
// 设置对象样式，设置【自己】和【子对象】的样式
obj.style = value
// 如果cascade参数为true，则设置【自己】和【子对象】的样式
// 如果cascade参数为false，则仅设置【自己】的样式，不影响【子对象】
let cascade = true
obj.setStyle(value, cascade)
```

对象的inherit.style属性可以设置这个对象是否跟随父亲的样式变化：

```javascript
// 是否继承父对象的样式，true, false, 更多参考枚举：THING.InheritType
obj.inherit.style = false
```

下面设置style的例子代码：

```javascript
// 例子：
obj.style.color = '#ff0000' // 修改颜色
obj.style.opacity = 0.5 // 修改透明度
// obj.style.image = 'images/some.png'; // 修改图片
obj.style.image = new THING.ImageTexture('images/some.png')
obj.style = {
  color: '#FF0000',
  outlineColor: '#0000FF'
} // 多参数样式
```

对象淡入、淡出效果的，可以通过调用fadeIn、fadeOut实现：

```javascript
// 淡入
obj.fadeIn({
  loop: 2, // 2 次，如果是-1则是循环
  duration: 2000
})
// 淡出
obj.fadeOut({
  duration: 2000
})
// 同时也支持两种回调方式：
obj.fadeIn({
  loop: 2, // 2 次，如果是-1则是循环
  duration: 2000,
  onComplete: function () {
    console.log('fadeIn')
  }
})

// 异步调用方式
await obj.fadeInAsync({
  loop: 2, // 2 次，如果是-1则是循环
  duration: 2000
})
// 开启批量渲染
app.query('*').makeInstancedDrawing()
```

## 1.6 对象动画

在 ThingJS 引擎中，如果Entity的资源中包含动画数据，可以用playAnimation方法来播放动画：

```javascript
obj = new THING.Entity({
  url: './models/spaceman.gltf'
})

// 播放指定名称的动画
obj.playAnimation({
  name: 'walk',
  loopType: THING.LoopType.Repeat
})
```

当动画播放完成后，可以通过onComplete回调，或异步的方式执行下一步操作：

```javascript
obj.playAnimation({
  name: 'walk',
  onComplete: function () {
    console.log('animation complete')
  }
})
// 播放 walk 动画
await obj.playAnimationAysnc({ name: 'walk' })
// 走路完成后，播放 idle 动画
await obj.playAnimationAysnc({ name: 'idle' })
// 两个动画播放完成后，打印
console.log('animation complete')
```

停止动画播放：

```javascript
// 停止某个动画
obj.stopAnimation(animName)
// 停止所有动画
obj.stopAllAnimations()
```

可以通过animations属性来获取动画信息：

```javascript
// 获取动画属性
let anim = obj.animations[0]

// 动画时间
let duration = anim.duration
// 动画速度
let speed = anim.speed
// 动画状态
let state = anim.state
```

**注意**：如果需要获取物体动画的信息，需要等加载完成后才能获取

```javascript
// 打印物体所包含动画的名称
obj = new THING.Entity({
  url: './models/spaceman.gltf',
  onComplete: function (ev) {
    let obj = ev.object
    let animName = obj.animations[0].name
    console.log(animName)
  }
})
```

可以通过编辑器中的模型编辑器查看 GLTF 模型的中的动画，请参考：模型编辑器

## 1.7 渲染主体

在 ThingJS 引擎中，所有具有可见外观的对象都会包含一个body属性，称之为渲染主体。当需要对一个对象自身进行空间变换、样式调整、显示隐藏进行操作，同时又不希望影响其子对象时，可以选择仅对其渲染主体进行操作，而不是对这个对象本身进行操作（因为这会影响子对象）。

### 空间变换

可通过设置渲染主体的空间属性，从而仅改变这个对象自身的空间属性，而不影响子对象：

```javascript
// 设置渲染主体的世界位置
obj.body.position = [0, 10, 0]

// 设置渲染主体的世界旋转
obj.body.rotation = [45, 0, 0]
obj.body.quaternion = [0, 0, 0, 1]

// 设置渲染主体的世界缩放
obj.body.scale = [1, 2, 1]
// 设置渲染主体的相对位置
obj.body.localPosition = [0, 10, 0]

// 设置渲染主体的相对旋转
obj.body.localRotation = [45, 0, 0]
obj.body.localQuaternion = [0, 0, 0, 1]

// 设置渲染主体的相对缩放
obj.body.localScale = [1, 2, 1]
// 移动渲染主体
obj.body.translateOnAxis([1, 0, 0], 5) // 沿X轴移动5米
obj.body.translateX(5) // 沿X轴移动5米
obj.body.translateY(5) // 沿Y轴移动5米
obj.body.translateZ(5) // 沿Z轴移动5米
// 设置渲染主体的世界矩阵
obj.body.matrixWorld = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

// 设置渲染主体的相对矩阵
obj.body.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
```

### 效果样式

通过设置渲染主体的visible、style属性，从而仅改变这个对象自身的效果样式，而不影响子对象：

```javascript
// 设置渲染主体的显示隐藏状态
obj.body.visible = value // true, false

// 设置渲染主体的效果样式
obj.body.style = value // {"outlineColor": "#0000FF"}
```

### 渲染节点

渲染主体body是由渲染节点nodes组成，渲染节点是渲染引擎层提供的基本单位，会组成树状的渲染场景。一般情况下，用户不需要使用到渲染节点，但如果需要获取渲染结构更详细的信息，或渲染结构结构进行调整时，可以使用渲染节点。

可以通过名称来获取节点，或遍历渲染主体下的所有节点：

```javascript
// 根据名字获取到渲染节点
let node = obj.body.getNodeByName('BasePoint');

// 获取渲染主体下的所有节点名字
let nodeNames = obj.body.nodeNames;

// 遍历渲染节点
obj.body.traverseNodes((node) => {
    let name = node.name; // 获取节点名称
    let pos = node.position; // 获取节点位置
    ......
});
```

通过promoteNode方法，可以将渲染节点提升为子对象，作为正常的对象来使用：

```javascript
let nodeName = 'node01'
let childObj = obj.promoteNode(nodeName)
```

**注意**：提升渲染节点为子对象后，对象下的渲染节点结构将发生变化，可能会导致对象原有的动画失效。

## 1.8 参数化对象

在 ThingJS 引擎中，参数化对象指根据输入参数自动生成的三维对象，例如点、线、面、体和粒子系统等。

### 点

给定一批点坐标，生成一批点，可以通过size来控制点大小：

```javascript
// 创建点
const points = new THING.Points({
  points: [
    [10, 0, 0],
    [10, 0, 10],
    [0, 0, 10],
    [0, 0, 0]
  ]
})

// 设置点的大小
points.size = 10
// 更改点的颜色
points.style.color = '#FF0000'
```

### 线

线的类型分为像素线PixelLine，粗线FatLine，管线PolygonLine、导航线RouteLine等，传入坐标，自动生成线和拐角。

```javascript
const points = [
  [10, 0, 0],
  [10, 0, 10],
  [0, 0, 10],
  [0, 0, 0]
]

// 创建像素线
let pixelLine = new THING.PixelLine({
  selfPoints: points,
  closure: true // 以闭环方式创建
})

// 创建粗线
let fatLine = new THING.FatLine({
  selfPoints: points,
  width: 5,
  position: [0, 3, 0]
})

// 创建管线
let polygonLine = new THING.PolygonLine({
  selfPoints: points,
  position: [0, 6, 0],
  closure: true
})

// 创建导航线
let routeLine = new THING.RouteLine({
  selfPoints: points,
  position: [0, 9, 0],
  closure: true
})
```

### 面

面的类型分为简单的矩形平面Plane和平面区域PlaneRegion，可以在PlaneRegion上指定一个镂空的区域进行挖洞。

创建矩形平面：

```javascript
let plane = new THING.Plane(1000, 1000)
```

创建平面区域：

```javascript
const plane2 = new THING.PlaneRegion({
  points: [
    [0, 0, 0],
    [20, 0, 0],
    [20, 0, 20],
    [0, 0, 20]
  ], // 顶点位置坐标
  selfPlaneHoles: [
    [
      [5, 5],
      [14, 3],
      [14, 7],
      [6, 7]
    ]
  ], // 洞平面位置坐标
  position: [0, 0, 0],
  style: { color: '#00FFB3' }
})
```

### 几何体

可以创建如：立方体、球体、圆柱体、胶囊等几等何体：

```javascript
// 创建立方体
let box = new THING.Box(1, 2, 3)

// 创建立方体，多参数形式
let box1 = new THING.Box({
  width: 3,
  height: 2,
  depth: 1,
  position: [-5, 0, 0],
  style: {
    color: '#FF0000'
  }
})
// 创建球
let sphere = new THING.Sphere(0.5)

// 创建球，多参数形式
let sphere1 = new THING.Sphere({
  radius: 0.5,
  position: [12, 0, 0],
  style: { color: '#FF00FF' }
})
// 圆柱
new THING.Cylinder({
  radiusTop: 0,
  position: [0, 0, 0],
  style: { color: '#FFA300' }
})

// 圆形
new THING.Circle({ position: [4, 0, 0], style: { color: '#0000FF' } })

// 胶囊
new THING.Capsule({ position: [8, 0, 0], style: { color: '#00FFFF' } })

// 圆环体
new THING.Torus({ position: [-4, 0, 0], style: { color: '#FFFF00' } })
```

### 挤出体

创建挤出体，还可以通过ExtrudeShape，指定一个形状和高度，挤出一个体积的造型：

```javascript
// 创建高度为 2 米的挤出体
const shape = new THING.ExtrudeShape({
  points: [
    [0, 0.1, 0],
    [4, 0.1, 0],
    [8, 0.1, 5],
    [4, 0.1, 10],
    [0, 0.1, 10]
  ],
  height: 2
})
```

以上这些三维对象都可以通过 app.create 方式创建：

```javascript
// 创建点
app.create({
  type: 'Points',
  points: [
    [10, 0, 0],
    [10, 0, 10],
    [0, 0, 10],
    [0, 0, 0]
  ],
  size: 10,
  style: {
    color: '#FF0000'
  }
})

// 创建像素线
app.create({
  type: 'PixelLine',
  selfPoints: [
    [10, 0, 0],
    [10, 0, 10],
    [0, 0, 10],
    [0, 0, 0]
  ],
  closure: true // 以闭环方式创建
})
```

### 辅助网格

在地平面上，绘制一个辅助网格：

```javascript
// 启用默认网格
app.helper.grid = true
// 或设置网格的参数
app.helper.grid = { width: 100, height: 100, density: 10 }
// 关闭网格
app.helper.grid = false
```

### 粒子系统

粒子系统ParticleSystem是一个三维对象，由多组粒子发射器ParticleEmitter组成，粒子系统为场景提供各种特殊效果，如：烟气、喷淋、雨雪，或一些特殊效果。

在以下示例中，演示了如何从头创建一个粒子系统：

```javascript
// 首先创建一个粒子系统实例
const particleSystem = new THING.ParticleSystem({
  name: 'particle-001',
  position: [30, 50, 0]
});

// 如果不传json数据，则ParticleSystem中默认包含一个ParticleGroup，ParticleGroup内默认包含一个ParticleEmitter
// 所以后续代码无需创建ParticleGroup与ParticleEmitter，直接获取即可

// 获取粒子组
const group = particleSystem.groups[0];
// 设置粒子组属性
group.setAttribute('MaxParticleCount', 200); // 设置最大粒子数（必须），一般来说应该是所包含的发射器粒子数的总和

// 获取粒子组中的粒子发射器
const emitter = group.emitters[0];
// 设置粒子发射器属性
emitter.setAttribute('ParticleCount', 200); // 设置最大粒子数（必须）
emitter.setAttribute('Position', { value: [0, 0, -50] }); // 粒子发射器的位置
emitter.setAttribute('Acceleration', { value: [0, -10, 0] }); // 粒子的加速度
emitter.setAttribute('Velocity', { value: [0, 25, 0], spread: [10, 7.5, 10] }); // 粒子的初始速度nemitter.setAttribute('ListColor', {
  value: [
    [1, 1, 1],
    [1, 0, 0]
  ]
}); // 粒子的颜色渐变列表nemitter.setAttribute('ListSize', { value: [2, 1] }); // 粒子的尺寸变化列表nemitter.setAttribute('ListOpacity', { value: [1, 0.1] }); // 粒子的透明度变化列表
```

也可以在粒子编辑器中编辑粒子，通过导出的 json 数据创建粒子系统实例：

```javascript
const particleSystem = new THING.ParticleSystem({
  name: 'particle-002',
  url: 'https://model.3dmomoda.com/models/19061018snbajhvuzrheq9sbgwdoefuk/0/particles/index.json' // 粒子文件路径
})
```

更多设置和使用方式参考：

- ParticleSystem
- ParticleGroup
- ParticleEmitter

## 1.9 对象继承性

在 ThingJS 引擎中，对象（Object）可以通过继承机制控制属性的传递，继承的属性包括样式（style）、可见性（visible）以及拾取状态（pickable）等。这些继承属性可以灵活控制对象的行为和显示方式。

### 设置继承属性

继承属性在对象的inherit的属性中，继承属性的类型是 THING.InheritType 枚举类型，设置继承属性的如下代码所示：

```javascript
// 创建对象
let box = new THING.Box()
let sphere = new THING.Sphere({
  position: [0, 2, 0],
  parent: box
})

// 设置对象的继承属性
sphere.inherit.style = THING.InheritType.Jump
sphere.inherit.visible = THING.InheritType.Break
sphere.inherit.pickable = THING.InheritType.Stop

// 恢复继承属性
object.inherit.style = THING.InheritType.Normal
```

### 继承属性介绍

在 inherit 属性中可以设置不同的继承类型，从而控制物体的行为。以下是几个常用的继承属性：

- style: 是否继承样式；
- visible: 是否继承可见状态；
- pickable: 是否继承拾取状态；

继承属性的枚举类型 THING.InheritType 具体含义如下：

- Normal: 对象将正常处理动作（处理后传递给子对象）；
- Break: 对象将处理动作但不传递给子对象；
- Jump: 对象将跳过动作但继续传递给子对象；
- Stop: 对象将中断动作且不传递给子对象；

### 获取继承属性

可以通过对象的 inherit 属性随时获取继承的动态信息，如下代码所示：

```javascript
// 打印继承信息
console.log(object.inherit.style) // 继承样式
console.log(object.inherit.visible) // 继承可见状态
console.log(object.inherit.pickable) // 继承拾取状态
```

### 修改包围盒计算的继承属性

可以通过修改对象包围盒组件的 inheritType 属性来改变包围盒计算规则，如下代码所示：

```javascript
// 对象将进行包围盒计算，但是子对象将被忽略
object.bounding.inheritType = THING.InheritType.Break
// 对象将跳过包围盒计算，但是子对象将被正常计算进包围盒
object.bounding.inheritType = THING.InheritType.Jump
// 对象将中断包围盒计算，且子对象也将被忽略
object.bounding.inheritType = THING.InheritType.Stop
// 正常计算包围盒（包括自身和所有子对象）
object.bounding.inheritType = THING.InheritType.Normal
```

## 1.10 批量渲染

在 ThingJS 引擎中，对象（Object）可以通过调用 makeInstancedDrawing 接口开启批量渲染模式。

开启批量渲染模式后，引擎会根据对象的 style 属性进行批量渲染设置，style 属性相同的对象会被设置为同一个实例化对象。

### 示例代码：

```javascript
// 创建 100 个实例化对象
for (let i = 0; i < 100; i++) {
  let entity = new THING.Entity({
    name: 'obj_' + i,
    url: 'http://model.3dmomoda.com/models/eb1989c00ad44b44b53cf08a321140bd/0/gltf/',
    localPosition: THING.Math.randomVector([-20, -20, -20], [20, 20, 20])
  })

  // 设置 style
  entity.style.color = [1, 0, 0]

  // 开启批量渲染
  // 注意:
  //  - 批量渲染模式开启时，会按照当前 style 的属性进行批量渲染设置，style 属性相同的对象会被设置为同一个实例化对象
  //  - 如果在调用 makeInstancedDrawing 之后修改了 style 的属性，
  //    则会自动取消批量渲染模式，需要再次调用 makeInstancedDrawing 进行开启
  entity.makeInstancedDrawing()
}
```

### TJS场景批量渲染规则

#### 3.*.*版本批量渲染

支持批量渲染的对象包括 Placement 和 Room。

**Placement**

支持跨层级的全场景批量渲染。例如，在园区下的 A建筑1层 和 B建筑2层 均存在相同模型的对象时，可进行批量渲染。

开启批量渲染需满足以下条件：

- 模型地址一致
- 在修改样式的情况下，模型一致 且 样式的数值一致①。
- 至少有两个对象满足条件。

样式可修改的选项包括：

- 透明度
- 贴图
- 颜色

**Room**

房间的批量渲染主要处理对象为 地板、天花板 和 屋顶。

房间批量渲染仅支持同一建筑内的批量渲染，不支持跨建筑渲染。

开启批量渲染需满足以下条件：

- 地板、天花板、屋顶的 mesh 形状一致，即围成房间形状的点位需一致。
- 在修改样式的情况下，mesh 形状一致 且 样式的数值一致①。
- 至少有两个对象满足条件。

样式可修改的选项包括：

- 贴图
- 颜色
- 贴图尺寸
- 贴图偏移
- 贴图角度

**样式的数值一致①的定义**：

- 贴图路径一致。
- 颜色数值一致。
- 尺寸、偏移、角度数值一致。

#### 5.*.*版本的批量渲染

5.*.*版本使用 max 输出，批量渲染规则更加简洁。

仅需检查对象的 source 字段：

- 若字段值为 instance，则开启批量渲染；
- 否则，不开启批量渲染。
