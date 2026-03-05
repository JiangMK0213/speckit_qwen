# 类: App

**命名空间:** THING

**继承:** [THING.BaseComponentGroup](./THING.BaseComponentGroup.md)

**描述:** App构造方法

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | App初始化的参数 |
| param.container | `HTMLElement` | - | 否 | 渲染场景需要的dom元素 |
| param.isEditor | `boolean` | `false` | 是 | 是否在编辑器环境使用 |
| param.enableDefaultLevelControl | `boolean` | `true` | 是 | 是否默认开启层级控制 |
| param.background? | `number, string, Array.<number>` | - | 否 | 背景 |
| param.envMap | `string` | - | 是 | 环境图url |
| param.url | `string` | - | 是 | 场景url |
| param.onComplete | `function` | - | 是 | 场景加载完成后的回调函数 |
| param.onProgress | `function` | - | 是 | 场景加载进度的回调函数 |
| param.onError | `function` | - | 是 | 场景加载失败后的回调函数 |

## 静态属性

### <span style="color: #0066cc">静态</span> current

**类型:** `member`

**数据类型:** `THING.App`

**描述:** 当前App对象

#### 示例

```javascript
let app = THING.App.current;let ret = app.picker != null;// @expect(ret == true);
```

---

## 实例属性

### picker

**类型:** `member`

**数据类型:** `THING.Picker`

**描述:** 获取拾取器

#### 示例

```javascript
let picker = app.picker;// @expect(picker != null)picker.enable = false;// @expect(picker.enable == false)
```

---

### helper

**类型:** `member`

**数据类型:** `THING.AppHelperComponent`

**描述:** 获取帮助对象

---

### tweenManager

**类型:** `member`

**数据类型:** `THING.TweenManager`

**描述:** 获取TweenManager

---

### relationshipManager

**类型:** `member`

**数据类型:** `THING.RelationshipManager`

**描述:** 获取关系管理器

---

### level

**类型:** `member`

**数据类型:** `THING.LevelManager`

**描述:** 获取层级管理器

#### 示例

```javascript
let app = THING.App.current;let level = app.level;let target = app.query('.Entity')[0];level.change(target, {  onComplete: function(){		let ret = level.current == target;		// @expect(ret == true);  }});
```

---

### container

**类型:** `member`

**数据类型:** `object`

**描述:** Get the container.

#### 示例

```javascript
//the html div id is div3dlet id = THING.App.current.container.id;let ret = id == 'div3d';// @expect(ret == true);
```

---

### size

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取大小。

#### 示例

```javascript
// div3d的大小是1024*768let size = THING.App.current.size;// @expect(size[0] == 1024 && size[1] == 768);
```

---

### root

**类型:** `member`

**数据类型:** `THING.RootObject`

**描述:** 获取根对象。

#### 示例

```javascript
let root = THING.App.current.root; // @expect(root.isRootObject == true)
```

---

### relationships

**类型:** `member`

**数据类型:** `Array.<THING.Relationship>`

**描述:** 获取所有的对象关系。

#### 示例

```javascript
let app = THING.App.current; let count1 = app.relationships.length; app.relationshipManager.addRelationship({		source: app.root,	    target: app.root }) let count2 = app.relationships.length; let ret = count2 - count1; // @expect(ret == 1)
```

---

### camera

**类型:** `member`

**数据类型:** `THING.Camera`

**描述:** 获取/设置 相机对象

#### 示例

```javascript
let camera = new THING.Camera();camera.far = 100;THING.App.current.camera = camera;let ret = THING.App.current.camera.far == 100;// @expect(ret == true)
```

---

### pixelRatio

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置像素比例。设置/获取像素比例，默认为1，可以设置为0-1之间的值。值越大，渲染效果越清晰（帧率较低）；值越小，渲染效果越模糊（帧率较高）。在移动设备上，为了提高渲染帧率，可以将app.pixelRatio设置为小于1的值。

#### 示例

```javascript
let app = THING.App.current;app.pixelRatio = 0.5;let ret = app.pixelRatio == 0.5;// @expect(ret == true)
```

---

### background

**类型:** `member`

**数据类型:** `number, string, Array.<number>, THING.ImageTexture, THING.VideoTexture`

**描述:** 获取/设置背景。

#### 示例

```javascript
THING.App.current.background = 'gray';let ret = THING.App.current.background instanceof Array;// @expect(ret == true )// 设置背景为天空盒(多张)THING.App.current.background = new THING.CubeTexture([    './skyboxes/bluesky/posx.jpg', './skyboxes/bluesky/negx.jpg',    './skyboxes/bluesky/posy.jpg', './skyboxes/bluesky/negy.jpg',    './skyboxes/bluesky/posz.jpg', './skyboxes/bluesky/negz.jpg']);// 设置背景为天空盒(单张)// 使用环境贴图创建新的图像纹理，作为天空盒THING.App.current.background = new THING.ImageTexture({url: "../texture/envmap.jpg",  mappingType: THING.ImageMappingType.EquirectangularReflection });// 创建新的图像纹理，作为天空盒THING.App.current.background = new THING.ImageTexture({url: "../texture/envmap.jpg" });// 设置背景为图像路径，作为天空盒THING.App.current.background = "../texture/envmap.jpg";
```

---

### envMap

**类型:** `member`

**数据类型:** `THING.CubeTexture`

**描述:** 获取/设置场景默认的环境图。

#### 示例

```javascript
THING.App.current.envMap = new THING.CubeTexture('./skyboxes/bluesky');let ret = THING.App.current.envMap.url == './skyboxes/bluesky';// @expect(ret == true )
```

---

### isApp

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否是app对象

#### 示例

```javascript
let app = THING.App.current;if (app.isApp) {		console.log(`It's app`);	}
```

---

### isEditor

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否在编辑器环境运行

---

### workPath

**类型:** `member`

**数据类型:** `string`

**描述:** 设置/获取工作路径 调用app.resolveURL(url)时,如果url以"/"开头,会在url之前拼上workPath

#### 示例

```javascript
THING.App.current.workPath = 'project/root/';let ret = THING.App.current.workPath;// @expect(ret == 'project/root/' )
```

---

### components

**类型:** `member`

**数据类型:** `Map.<String, THING.BaseComponent>`

**继承:** THING.BaseComponentGroup#components

**重写:** THING.BaseComponentGroup#components

**描述:** 获取所有组件

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'component1');obj.addComponent(new THING.BaseComponent(), 'component2');// @expect(obj.components.size == 2)
```

---

## 静态方法

### <span style="color: #0066cc">静态</span> addCompleteCallback

**类型:** `function`

**描述:** App实例初始化结束的回调

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `function` | 回调函数 |
| `priority` | `number` | 优先级 |

#### 示例

```javascript
THING.App.addCompleteCallback((app)=>{		console.log(The app instantiation is complete.);},-10);
```

---

## 实例方法

### dispose

**类型:** `function`

**描述:** 销毁app

#### 示例

```javascript
let app = THING.App.current;app.dispose();
```

---

### create

**类型:** `function`

**描述:** 创建对象2.0兼容1.0中通过app.create({type:'ClassName'})的方式创建对象，<br>但是推荐使用new THING.ClassName({xxx})的方式创建对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `object` | The parameter list 参数列表 |
| `param.type` | `string` | Object type 类型 |
| `param.options?` | `object` | Object create parameters 创建对于类型对象的初始化参数 |

#### 返回值

- **类型:** `THING.BaseObject`
- **描述:** 返回创建的对象

#### 示例

```javascript
let app =  THING.App.current;let box = app.create({  type: 'Box',  name: 'box',  position: [1, 1, 1],  onComplete: function() {  	console.log('box01 created!');  }});let ret = box instanceof THING.Box;// @expect(ret == true);
```

---

### load

**类型:** `function`

**描述:** 加载场景

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string, object` | 场景url |
| `options` | `object` | 加载参数 |
| `options.dynamic` | `boolean` | 是否动态加载 |
| `options.hidden` | `boolean` | 加载时是否隐藏 |
| `options.useDefaultTheme` | `boolean` | 是否使用场景自带的样式 |
| `options.useDefaultViewpoint` | `boolean` | 是否使用场景自带的相机视角 |
| `options.useDefaultRenderSettings` | `boolean` | 是否使用场景自带的环境参数 |
| `options.position` | `Array.<number>` | 场景位置 |
| `options.rotation` | `Array.<number>` | 场景的旋转角度 |
| `options.onComplete` | `function` | 加载完成的回调 |
| `options.onProgress` | `function` | 加载进度的回调 |
| `options.onError` | `function` | 加载异常的回调 |

#### 返回值

- **类型:** `Promise`
- **描述:** 由于加载时异步过程,返回一个Promise对象

#### 示例

```javascript
THING.App.current.load('./assets/scenes/scene.gltf').then((ev) => {    let objs = ev.objects;	   let count =  objs.length;   // @expect(count > 0);})
```

---

### loadPlugin

**类型:** `function`

**描述:** 加载插件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 插件路径 |
| `options` | `object` | 加载参数 |
| `options.name` | `string` | 插件名称 |
| `options.onComplete` | `function` | 加载成功的回调 |
| `options.onError` | `function` | 加载失败的回调 |

#### 返回值

- **类型:** `Promise`
- **描述:** Promise对象

#### 示例

```javascript
THING.App.current.loadPlugin('./assets/plugins/plugin.json').then((plugin)=>{	console.log(plugin);});
```

---

### loadImageTexture

**类型:** `function`

**描述:** 加载图片纹理

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 资源路径 |
| `sampler` | `LoadTextureResourceSamplerInfo` | 纹理采样参数 |

#### 返回值

- **类型:** `THING.ImageTexture`
- **描述:** 返回图片纹理

#### 示例

```javascript
let image = THING.App.current.loadImageTexture('./flower.png');	await image.waitForComplete();	console.log(image);
```

---

### loadCubeTexture

**类型:** `function`

**描述:** Load cube texture。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | The resource url |
| `sampler` | `LoadTextureResourceSamplerInfo` | The sampler info. |

#### 返回值

- **类型:** `THING.CubeTexture`
- **描述:** 返回立方体纹理

#### 示例

```javascript
let image = THING.App.current.loadCubeTexture([	'./skyboxes/bluesky/posx.jpg', './skyboxes/bluesky/negx.jpg',	'./skyboxes/bluesky/posy.jpg', './skyboxes/bluesky/negy.jpg',	'./skyboxes/bluesky/posz.jpg', './skyboxes/bluesky/negz.jpg']);
```

---

### uninstall

**类型:** `function`

**描述:** 根据名称卸载插件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 插件名称 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否卸载成功

#### 示例

```javascript
THING.App.current.uninstall(plugin.name);
```

---

### find

**类型:** `function`

**描述:** 查询app下所有符合条件的对象并返回第一个

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | The conditions. 查询条件 |

#### 返回值

- **类型:** `THING.BaseObject`
- **描述:** 返回第一个符合条件的对象

#### 示例

```javascript
let obj = THING.App.current.find('.BaseObject'); let ret = obj instanceof THING.BaseObject;// @expect(ret == true) let cylinder = THING.App.current.find('.Cylinder'); ret = cylinder == null;// @expect(ret == true)
```

---

### query

**类型:** `function`

**描述:** 根据条件查询对象 返回所有满足条件的对象集合

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 主要包括是否递归查询和是否包含自身 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
// 1. 基本查询let obj = THING.App.current.query('.BaseObject');let ret = obj[0] instanceof THING.BaseObject;// @expect(ret == true)// 2. 按对象名称查询let car = app.query('car01'); // 精确匹配名称let door = app.query('正门摄像头'); // 查询名称为"正门摄像头"的对象// 3. 按正则表达式查询名称// 方式一: 直接使用正则let frontDoors = app.query(/正门/); // 查询名称包含"正门"的对象// 方式二: 构造正则let regex = new RegExp("南天门");let gates = app.query(regex);// 方式三: 使用正则组合let doors = app.query(/(正门|侧门|后门)/); // 查询包含任意门的对象// 方式四: 动态构造正则let name = "南天门";let dynamicRegex = eval("/"+name+"/");let dynamicResult = app.query(dynamicRegex);// 4. 按对象类查询let points = app.query('.GeoBasePoint'); // 查询所有地图点对象let campus = app.query('.Campus'); // 查询园区类let buildings = app.query('.Building'); // 查询建筑类let floors = app.query('.Floor'); // 查询楼层类let rooms = app.query('.Room'); // 查询房间类let devices = app.query('.Device'); // 查询设备类对象let groups = app.query('.Group'); // 查询组let cabinets = app.query('.Cabinet'); // 查询机柜let racks = app.query('.Rack'); // 查询柜内架式设备// 5. 按对象ID查询 (注意: ID查询通常只返回一个对象,建议加[0])let obj1 = app.query('#100')[0]; // id查询需要加#let earth = app.query('[uuid=earthRoot]')[0]; // 获取地图根对象// 6. 按对象分类查询let alarms = app.query('[alarm]'); // 查询有alarm属性的对象let cameras = app.query('[twinType=摄像头]'); // 查询分类为摄像头的对象// 7. 按对象属性查询 (注意: 条件需要用[]括起来)// 7.1 自定义属性查询let chinaDevices = app.query('[userData/DATA/产地=中国]');// 7.2 系统属性查询let dbObj = app.query('[userData/_DBID_=7499775862803471]'); // 按数据库ID查询let ciObj = app.query('[userData/_CICODE_=7366821180693235]'); // 按CICODE查询let typeObj = app.query('[userData/_SHOWTYPE_=建筑]'); // 按对象分类查询let childObj = app.query('[userData/_PARENT_=优锘产业园_PARK]'); // 按父对象编号查询let parentNameObj = app.query('[userData/_PARENTNAME_=T1]'); // 按父对象名称查询// 7.3 其他属性查询let upperFloors = app.query('[levelNum>2]'); // 查询2层以上的楼层let hasChildren = app.query('[children!=""]'); // 查询有子对象的对象let visibleObj = app.query('[visible=1]'); // 查询可见对象let hiddenObj = app.query('[visible="0"]'); // 查询隐藏对象let uuidObj = app.query('[uuid="xxxx"]'); // 查询指定uuid的对象// 8. 按监控数据查询let tempObj = app.query('[MONITOR/_/_/温度/value=38]'); // 查询温度为38的对象let highTempObj = app.query('[MONITOR/_/_/温度/value>18.8]'); // 查询温度大于18.8的对象// 9. 查询全部对象// 9.1 按类型查询全部let allDevices = app.query('.Device'); // 查询全部设备let allThings = app.query('.Thing'); // 查询全部物体对象(含设备、标记)let allTwins = app.query('[twinType]'); // 获取孪生体管理中全部对象// 9.2 查询所有可管理对象let allObjects = app.query('.BaseObject');// 或使用以下方式let objects1 = app.query('[isBaseObject=1]');let objects2 = app.query('[queryID]');let objects3 = app.query('[pickable=1]');// 9.3 通配符查询let everything1 = app.query('*'); // 使用星号通配符// 9.4 查询所有对象(包括运行时创建的)let all = app.query('/');// 10. 局部查询let building = app.query('.Building')[0];let upperFloors = building.query('[levelNum > 1]'); // 查询该建筑二层以上楼层// 11. 多条件查询let visibleTrains = app.query('[businessType=高铁列车]&&[visible=1]'); // 与查询let floorsAndBuildings = app.query('.Floor || .Building'); // 或查询// 12. 筛选查询// 12.1 链式查询let ibmDevices = app.query('.Device').query('[userData/DATA/品牌=IBM]');// 12.2 组合查询let brandAA = app.query('[userData/DATA/品牌=AA]');let deviceOrBrandAA = app.query('.Device').add(brandAA); // 并集let devicesExceptCar = app.query('.Device').not('car01'); // 差集// 13. 查询结果操作// 13.1 批量修改基本属性app.query('.Building').visible = false; // 隐藏所有建筑// 13.2 遍历操作app.query('.Building').forEach(building => {  console.log(building.name);});// 13.3 层级访问app.query('.Building').forEach(building => {  building.floors.forEach(floor => { // 访问建筑的楼层    floor.style.opacity = 0.5;  });});// 14. 根据标签查询// 查询包含 Floor 标签的对象let floors = app.query('tags:Floor');// 使用 and 操作符查询同时包含多个标签的对象let objects = app.query('tags:and(Floor,Wall)');// 使用 or 操作符查询包含任一标签的对象let objects = app.query('tags:or(Floor,Wall)');// 使用 not 操作符查询不包含指定标签的对象let objects = app.query('tags:not(Floor)');
```

---

### queryAll

**类型:** `function`

**描述:** 查询app下所有符合条件的对象并返回所有匹配的结果

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | The conditions. 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 主要包括是否递归查询和是否包含自身 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let objects = THING.App.current.queryAll('.BaseObject');	let ret = objects.length > 0;// @expect(ret == true)	let cylinders = THING.App.current.queryAll('.Cylinder');	ret = cylinders.length == 0;// @expect(ret == true)
```

---

### queryByName

**类型:** `function`

**描述:** 根据名称查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 主要包括是否递归查询和是否包含自身 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let car = THING.App.current.queryByName('car01')	let ret = car.length == 0;	// @expect(ret == true) car = THING.App.current.queryByName('car1') ret = car[0].name == 'car1';// @expect(ret == true)
```

---

### queryById

**类型:** `function`

**描述:** 根据id查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let car = THING.App.current.queryById('1')	let ret = car.length == 0; // @expect(ret == true); car = THING.App.current.queryById('car01') ret = car[0].id == 'car01'; // @expect(ret == true)
```

---

### queryByTags

**类型:** `function`

**描述:** 根据tag查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let car = THING.App.current.queryByTags('car');	let ret = car.length == 0; // @expect(ret == true)	let entity = THING.App.current.queryByTags('Entity');	ret = entity[0].tags.has('Entity'); // @expect(ret == true)
```

---

### queryByUUID

**类型:** `function`

**描述:** 根据uuid查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let car = app.queryByUUID('1')	let ret = car.length == 0; // @expect(ret == true); car = app.queryByUUID('1605') ret = car[0].uuid == '1605'; // @expect(ret == true)
```

---

### queryByType

**类型:** `function`

**描述:** 根据类型查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let car = THING.App.current.queryByType('car')	let ret = car.length == 0;// @expect(ret == true) let obj = THING.App.current.queryByType('Entity') ret = obj[0].type == 'Entity';// @expect(ret == true)
```

---

### queryByDTType

**类型:** `function`

**描述:** 根据孪生体类型查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let equipment = THING.App.current.queryByDTType('Equipment')	let ret = equipment.length == 0;// @expect(ret == true) let sensor = THING.App.current.queryByDTType('Sensor') ret = sensor[0].dtType == 'Sensor';// @expect(ret == true)
```

---

### queryByUserData

**类型:** `function`

**描述:** 根据userData(用户数据)查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 查询条件 |
| `options` | `ObjectQueryOptions` | 查询参数 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let car = THING.App.current.queryByUserData('test=1');	let ret = car.length == 0; // @expect(ret == true) car = THING.App.current.queryByUserData('id=666'); ret = car[0].userData.id == 666;// @expect(ret == true)
```

---

### queryByRegExp

**类型:** `function`

**描述:** 根据正则表达式查询

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 正则表达式 |
| `options` | `ObjectQueryOptions` | 查询参数 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let car = THING.App.current.queryByRegExp(/car/);	let ret = car.length == 4; //@expect(ret == true)
```

---

### queryRelationships

**类型:** `function`

**描述:** 查询关系

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `options` | `object` | 参数 |
| `options.type` | `string` | 关系类型 |
| `options.name` | `string` | 关系名称 |

#### 返回值

- **类型:** `Array.<THING.Relationship>`
- **描述:** 返回关系数组

#### 示例

```javascript
let lightSwitch = new THING.Box();let light = new THING.Box();let rel = new THING.Relationship({     type: 'control',     source: lightSwitch,     target: light});let relationships = app.queryRelationships({type: 'control'});let ret1 = relationships[0].source == lightSwitch;let ret2 = relationships[0].target == light;// @expect(ret1 == true && ret2 == true);
```

---

### getEvents

**类型:** `function`

**描述:** 根据类型获取事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型，null 表示获取所有事件。 |

#### 返回值

- **类型:** `Array.<ObjectListenerInfo>`
- **描述:** 返回事件信息数组

#### 示例

```javascript
let app = THING.App.current;let events = app.getEvents();let ret = events.length > 0;// @expect(ret == true);
```

---

### getEvent

**类型:** `function`

**描述:** 暂事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。 |
| `tag` | `string` | 事件标签。 |

#### 返回值

- **类型:** `ObjectListenerInfo`
- **描述:** 返回事件信息

#### 示例

```javascript
let app = THING.App.current;let event = app.getEvent('test', '.BaseObject', 'test');let ret = event instanceof THING.ObjectListenerInfo;// @expect(ret == true);
```

---

### on

**类型:** `function`

**描述:** 注册事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。在注册事件之前进行查询，对符合条件的对象进行注册。 |
| `callback` | `EventCallback` | 回调函数。事件触发时执行的函数。 |
| `tag` | `string` | 事件标签。用于标识事件。 |
| `priority` | `number` | 优先级值（默认为0，数值越高，优先级越高）。 |
| `options` | `ObjectEventOptions` | 事件参数。 |

#### 示例

```javascript
let app = THING.App.current;let markOn = 0;app.on('testOn', function(ev) {		markOn = 1;});app.trigger('testOn');// @expect(markOn == 1);
```

---

### once

**类型:** `function`

**描述:** 注册一次性的事件，此事件响应只会触发一次，触发后会被自动注销。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型 |
| `condition` | `string` | 选择对象的条件。在注册事件之前进行查询，对符合条件的对象进行注册。 |
| `callback` | `EventCallback` | 回调函数。事件触发时执行的函数。 |
| `tag` | `string` | 事件标签。用于标识事件。 |
| `priority` | `number` | 优先级值（默认为0，数值越高，优先级越高）。 |
| `options` | `ObjectEventOptions` | 事件参数。 |

#### 示例

```javascript
let app = THING.App.current;let markOnce = 0;app.once('testOnce', function(ev) {		markOnce = 1;});app.trigger('testOnce');// @expect(markOnce == 1);markOnce = 0;app.trigger('testOnce');// @expect(markOnce == 0);
```

---

### off

**类型:** `function`

**描述:** 注销事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。注册事件的条件。 |
| `tag` | `string` | 事件标签。用于标识事件。 |

#### 示例

```javascript
let app = THING.App.current;let markOff = 0;app.on('testOff', function(ev) {		markOff = 1;});app.trigger('testOff');// @expect(markOff == 1);markOff = 0;app.off('testOff');app.trigger('testOff');// @expect(markOff == 0);
```

---

### pauseEvent

**类型:** `function`

**描述:** 暂停事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型 |
| `condition` | `string` | 注册事件的条件 |
| `tag` | `string` | 事件的tag |

#### 返回值

- **类型:** `boolean`
- **描述:** 返回是否暂停成功

#### 示例

```javascript
let app = THING.App.current;let markPause = 0;app.on('testPause', function(ev) {		markPause = 1;});app.trigger('testPause');// @expect(markPause == 1);markPause = 0;app.pauseEvent('testPause');app.trigger('testPause');// @expect(markPause == 0);
```

---

### resumeEvent

**类型:** `function`

**描述:** 恢复事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。注册事件的条件。 |
| `tag` | `string` | 事件标签。用于标识事件。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 返回是否恢复成功

#### 示例

```javascript
let app = THING.App.current;let markResume = 0;app.on('testResume', function(ev) {		markResume = 1;});app.trigger('testResume');// @expect(markResume == 1);markResume = 0;app.pauseEvent('testResume');app.trigger('testResume');// @expect(markResume == 0);app.resumeEvent('testResume');app.trigger('testResume');// @expect(markResume == 1);
```

---

### trigger

**类型:** `function`

**描述:** 触发事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 事件条件。 |
| `data` | `object` | 事件数据 |
| `tagName` | `string` | 事件标签名称。 |

#### 返回值

- **类型:** `*`
- **描述:** 返回事件信息

#### 示例

```javascript
let markTrigger = {};	THING.App.current.on('myEvent', function(ev) {		markTrigger = ev;	});	THING.App.current.trigger('myEvent', { result: true }); let ret = markTrigger.result; // @expect(ret == true);	new THING.Box(); app.on('test', (e) => {     console.log('无条件+tag1', e) }, 'MyTag1'); app.on('test', (e) => {     console.log('无条件+tag2', e) }, 'MyTag2');app.on('test', ".Box", (e) => {	    console.log('条件+tag1', e)}, 'MyTag1');app.on('test', ".Box", (e) => {	    console.log('条件+tag2', e)}, 'MyTag2');// 事件类型 + 事件条件，触发事件。app.trigger('test', '.Box');// 事件类型 + 事件数据，触发事件app.trigger('test', { result: true });// 事件类型 + 事件条件 + 事件标签，触发事件app.trigger('test', '.Box', 'MyTag2');// 事件类型 + 事件条件 + 事件参数，触发事件app.trigger('test', '.Box', { result: true });// 事件类型 + 事件条件 + 事件数据 + 事件标签，触发事件app.trigger('test', '.Box', { result: true },'MyTag2');// 注意事项:// 事件标签不能单独使用，否则事件标签和事件条件无法区分。app.trigger('test', null, 'MyTag2');
```

---

### invoke

**类型:** `function`

**描述:** 触发事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 事件条件。 |
| `data` | `object` | 事件数据 |
| `tagName` | `string` | 事件标签名称。 |

#### 返回值

- **类型:** `Promis`
- **描述:** 返回Promise

---

### resize

**类型:** `function`

**描述:** 重置尺寸。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `width` | `number` | 像素宽度。 |
| `height` | `number` | 像素高度。 |

#### 示例

```javascript
let app = THING.App.current;app.resize(100, 100);
```

---

### resolveURL

**类型:** `function`

**描述:** 解析url

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 带解析的url 解析时会根据app.workPath进行url的拼接 |

#### 返回值

- **类型:** `string`
- **描述:** 解析后的url

#### 示例

```javascript
let app = THING.App.current;let url = app.resolveURL('test.png');// @expect(url == 'project/root/test.png');
```

---

### addComponent

**类型:** `function`

**继承:** THING.BaseComponentGroup#addComponent

**重写:** THING.BaseComponentGroup#addComponent

**描述:** 添加组件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `component` | `THING.BaseComponent, object` | 组件对象类名或者组件对象实例 |
| `name` | `string` | 组件名称 |
| `args?` | `object` | 初始化具体组件的参数对象 如果第一个参数是一个类名而不是一个实例,添加时会根据初始化参数和类名创建一个组件实例 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否成功 如果给obj添加了一个name为myComponent的组件,添加成功后,可通过obj.myComponent获取该组件对象

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'myComponent');// @expect(obj.myComponent != null)
```

---

### removeComponent

**类型:** `function`

**继承:** THING.BaseComponentGroup#removeComponent

**重写:** THING.BaseComponentGroup#removeComponent

**描述:** 根据名称移除组件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | The name. 组件名称 |

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'myComponent');obj.removeComponent('myComponent');// @expect(obj.components.size == 0)
```

---

### removeAllComponents

**类型:** `function`

**继承:** THING.BaseComponentGroup#removeAllComponents

**重写:** THING.BaseComponentGroup#removeAllComponents

**描述:** 移除所有组件

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'component1');obj.addComponent(new THING.BaseComponent(), 'component2');obj.removeAllComponents();// @expect(obj.components.size == 0)
```

---

### traverseComponentByType

**类型:** `function`

**继承:** THING.BaseComponentGroup#traverseComponentByType

**重写:** THING.BaseComponentGroup#traverseComponentByType

**描述:** 根据类型遍历查找组件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `*` | 组件类型 |
| `callback` | `TraverseComponentByTypeCallback` | 回调函数 |

#### 示例

```javascript
object.addComponent(new MyComponent(), 'myComponent');	object.traverseComponentByType(MyComponent, (component, name) => {		console.log(component, name);	});
```

---

### getComponentByName

**类型:** `function`

**继承:** THING.BaseComponentGroup#getComponentByName

**重写:** THING.BaseComponentGroup#getComponentByName

**描述:** 根据名称获取组件对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 组件名称 |

#### 返回值

- **类型:** `THING.BaseComponent`
- **描述:** -

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'myComponent');let component = obj.getComponentByName('myComponent');// @expect(component != null)
```

---

### getComponentByType

**类型:** `function`

**继承:** THING.BaseComponentGroup#getComponentByType

**重写:** THING.BaseComponentGroup#getComponentByType

**描述:** 根据类型获取组件对象 返回符合条件的第一个组件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `*` | 组件类型 |

#### 返回值

- **类型:** `THING.BaseComponent`
- **描述:** -

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'myComponent');let component = obj.getComponentByType(THING.BaseComponent);// @expect(component != null)
```

---

### getComponentsByType

**类型:** `function`

**继承:** THING.BaseComponentGroup#getComponentsByType

**重写:** THING.BaseComponentGroup#getComponentsByType

**描述:** 根据类型获取组件对象的集合

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `*` | 组件类型 |

#### 返回值

- **类型:** `Array.<THING.BaseComponent>`
- **描述:** -

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'component1');obj.addComponent(new THING.BaseComponent(), 'component2');let components = obj.getComponentsByType(THING.BaseComponent);// @expect(components.length == 2)
```

---

### getAllComponents

**类型:** `function`

**继承:** THING.BaseComponentGroup#getAllComponents

**重写:** THING.BaseComponentGroup#getAllComponents

**描述:** 获取所有组件

#### 返回值

- **类型:** `Array.<THING.BaseComponent>`
- **描述:** -

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'component1');obj.addComponent(new THING.BaseComponent(), 'component2');let components = obj.getAllComponents();// @expect(components.length == 2)
```

---

### hasComponent

**类型:** `function`

**继承:** THING.BaseComponentGroup#hasComponent

**重写:** THING.BaseComponentGroup#hasComponent

**描述:** 判断是否含有特定名称的组件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 组件名称 |

#### 返回值

- **类型:** `boolean`
- **描述:** -

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'myComponent');let ret = obj.hasComponent('myComponent')// @expect(ret == true)
```

---

