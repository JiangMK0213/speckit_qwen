# 场景模块详细指南

## 5. 场景

### 5.1 加载场景

本文介绍了如何使用 ThingJS 加载场景，包括通过 app.load() 方法加载不同类型的场景文件、设置加载参数，以及注册回调函数以处理加载完成和进度等事件。

#### 加载场景

可以通过app.load()的方法来加载场景，参数url可以是一个 ThingJS 场景文件的地址：

```javascript
// 文件路径
const url = './scene/uino.json'

// 使用 await 异步方式，等待加载完成
let bundle = await app.load(url)
console.log(bundle.root)

// 或使用 then 的方式，等待加载完成后回调
app.load(url).then(ev => {
  console.log(ev.root) // root 是根节点
})
```

url也可以是一个文件目录的地址，ThingJS 会寻找文件夹中的index.json文件：

```javascript
// 文件目录
const url = './scene/factory'
await app.load(url)
```

**说明**：ThingJS 引擎在加载文件内容时，会自动判断场景文件的版本，并兼容1.0格式的场景。

url也可以是一个包含了场景信息的 GLTF 文件地址（更多内容可参考后面文档中的 GLTF 场景部分）：

```javascript
const url = './scene/factory.gltf'
await app.load(url)
```

场景加载完成后，默认不会进入层级控制。如果需要进行层级控制，请调用app.level.change()方法（详细内容参见层级和园区部分）：

```javascript
let bundle = await app.load(url)
// 进入园区层级
app.level.change(bundle.campus)
```

#### 加载参数

除了必选参数 url 之外，还可以设置更多的加载参数可以设置。

指定将场景加载到哪个对象下parent：

```javascript
app.load(url, {
  // 加载到这个对象下
  parent: parentObj
  // 忽略效果
  // 忽略参数待补充.....ignore: 'rendersettings'
})
```

设置dynamic参数可以开启动态加载，当开始动态加载时，对象实例会被初始化，但资源不会被立即加载。只有当对象的visible属性被设置为true时，对象的资源才会被加载。这个特性可以用于室内的对象的加载，从而实现在室外时不加载室内的对象，直到切换到室内。

```javascript
// 加载场景，设置动态加载
const bundle = await app.load('../scene/floor', {
  parent: parentObj,
  dynamic: true
})

// 加载了所有对象，但没有初始化对象资源
console.log(bundle.objects)
```

#### 加载事件

除了在then方法外，也可以传入更多的回调，比如使用onComplete指定加载完成的回调、加载进度回调使用onProgress、加载错误回调使用onError等：

```javascript
app.load(url, {
  // 场景加载完成回调
  onComplete: ev => {
    console.log(ev.root)
  },
  // 场景加载进度回调
  onProgress: ev => {
    console.log(ev.progress)
  },
  // 场景加载错误回调
  onError: ev => {
    console.log(ev)
  }
})
```

也可以通过注册app的load事件，在代码的其他地方来响应场景加载完成的事件：

```javascript
// 场景加载完成事件
app.on('load', function (ev) {
  console.log(ev)
})

// 只监听符合筛选条件的对象加载事件
app.on('load', '.Campus', function (ev) {
  console.log(ev)
})
```

### 5.2 文件格式

ThingJS 2.0 引擎提供了一种用于描述数字孪生场景的 JSON 文件格式，格式中提供了对象、关系、集合、效果和行为的描述。具有良好的扩展性，有助于提升开发效率。

下面是一个 ThingJS 2.0 场景文件 JSON 的大体结构：

```json
{
  // 头信息
  "name": "scene01",
  "id": "972c819-ee02-11ed-bfbe-c0b5d78a0456",
  "version": "2.0",
  "description": "ThingJS Scene Format",
  "author": "uino",
  // 对象
  "objects": [],
  // 关系
  "relationships": [],
  // 渲染设置
  "rendersettings": {},
  // 蓝图
  "blueprints": [],
  // 选择集
  "selections": [],
  // 引入其他场景文件
  "files": [],
  // 插件
  "plugins": [],
  // 扩展
  "extensions": {}
}
```

ThingJS 在实际应用中，一个场景文件可以存储上述的全部字段，也可以只存储其中的部分字段。

场景文件也可以作为一个索引文件来使用，引用多个文件进行组合使用，例如：

```json
// scene.json
{
  "name": "MyScene",
  "files": [
    "./main.json", // 主场景
    "./deploys.json", // 部署对象（采集数据）
    "./rendersettings.json", // 渲染设置
    "./blueprint.json" // 蓝图文件
  ]
}
```

当使用app.load()方法加载文件后，可以在返回值中获取不同类型的内容：

```javascript
// 加载场景文件
let bundle = await app.load('./scenes/uino.json')

// 加载到的场景根对象
console.log(bundle.root)

// 加载到的蓝图
console.log(bundle.blueprints[0])
```

**说明**：ThingJS 2.0 兼容 1.0 的场景格式，在加载时内部会自动判断版本。

### 导出场景

如果想导出场景中的数据到场景文件，可以使用SceneExporter导出器，将需要导出的内容添加到导出器中，然后导出。

```javascript
// 创建导出器
let exporter = new THING.SceneExporter()

// 添加要导出的内容
exporter.addObjects(rootObject)

// 添加更多要导出的内容...

// 导出
let data = exporter.export()
```

### GLTF 场景

ThingJS 支持直接使用 GLTF 作为场景文件，如果 GLTF 文件的扩展信息中包含对象的类型信息，那么在app.load()加载时，会自动将这些对象进行初始化：

```javascript
app.load('./assets/scenes/factory/scene.gltf')
```

GLTF 文件中，关于对象描述的扩展信息：

```json
{
    "nodes" : [
        {
            "name" : "Building01",
            "children" : [1, 2],
            "extras" : {
                "type" : "Building",
                "tags" : ["Building"]
            }
        }
    ]
    ......
}
```

从上面的 GLTF 中可以看到，当node下的extras字段包含type属性时，则 ThingJS 会认为这个node是一个对象，并会按照type中指定的类型进行初始化（类型可以是内置类型或自定义类型，前提是已经注册了这个自定义类型）。其他还有tags、userData等属性也会被对象初始化。

为了在 GLTF 文件中增加对象的描述信息，建议使用编辑器自带的模型编辑插件进行添加，或者使用 Blender 导出插件 中添加。

### 5.3 层级

ThingJS 引擎中的层级指的是当前场景所关注的特定空间，例如：园区层级、建筑层级、房间层级或设备层级等。层级相当于一个展示和控制对象的舞台，可以为某一类对象或特定对象设置专门的展示和控制方式。当进入该层级时，即可使用这些特定的方式来显示和管理相应的对象。

**注意**：层级是根据对象之间的父子关系逐级进入或退出的。尽管可以一次跨越多个层级进行切换，但层级路径上的每个层级的进入和退出接口都会被调用。

#### 层级切换

在加载场景之后，可以通过 app.level.change() 来切换层级，需要指定要切换的层级对象：

```javascript
app.level.change(obj)
```

层级切换可以是异步的，如果需要等待层级切换完成，可通过下面的异步方式等待：

```javascript
// await 的方式，等待层级切换完成
await app.level.change(obj);
// 或 then 的方式，等待层级切换完成后回调
app.level.change(obj).then((ev) => {
  console.log(ev);
})；
```

如果需要为层级控制设置参数，可以在 app.level.change() 中指定参数 params，参数会自动传给层级控制的代码中进行处理：

```javascript
// 此处仅为举例，具体参数和层级控制方式相关
let params = {
  selectColor: '#FF00FF', // 选中物体时候的沟边颜色
  flyTime: 2000 // 切换层级后飞行时间
}
app.level.change(obj, params)
```

在场景加载完成后，可以使用加载场景的根对象作为初始层级，比如：

```javascript
app.on('load', function (ev) {
  if (ev.object) app.level.change(ev.object)
})
```

层级的其他一些接口和属性：

```javascript
// 后退层级
await app.level.back()
// 退出层级
await app.level.quit()
// 当前层级对象
app.level.current
// 上一个层级的对象
app.level.prev
```

#### 层级控制

在切换到某个层级之后，需要实现一个层级的控制方式，用来展示和控制这个层级下的对象。你可以通过继承 BaseLevelControl 类，来实现这个控制方式，并通过 app.level.register() 对其进行注册：

```javascript
// 建筑层级控制
class BuildingControl extends THING.BaseLevelControl {
  // 构造，params为new时候传入的参数
  constructor(params) {
    this.selectColor = params['selectColor']
    // 常用成员：
    // this.app、this.current（当前层级控制的对象）;
  }
  // 进入层级，飞行、显示隐藏、选择等，params为change时传入的参数
  onEnter(params) {}
  // 离开层级，恢复
  onLeave() {}
  // 层级更新事件
  onUpdate() {}
}

// 注册层级控制，当层级切换到符合筛选条件的对象时，则会进入对应的层级控制方式
// 例如：下面代码注册的是当进入任何一个Building类型的层级时，将执行BuildingControl的控制方式
app.level.register('.Building', new BuildingControl({ selectColor: '#FF00FF' }))
```

#### 层级事件

除了自定义层级的控制方式，引擎还支持注册层级进入和退出的事件，以便在层级进入或退出时，进行一些操作：

```javascript
app.on(THING.EventType.EnterLevel, '.Building', e => {}, 'levelTag')
app.on(THING.EventType.LeaveLevel, '.Building', e => {}, 'levelTag')

// 如果需要对事件进行更细的区分，可以使用如下事件：
// THING.EventType.BeforeEnterLevel, THING.EventType.AfterEnterLevel,
// THING.EventType.BeforeLeaveLevel, THING.EventType.AfterLeaveLevel,
```
