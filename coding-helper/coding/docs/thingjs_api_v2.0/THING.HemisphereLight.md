# 类: HemisphereLight

**命名空间:** THING

**继承:** [THING.BaseLight](./THING.BaseLight.md)

**描述:** 构造函数

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | - |
| param.color | `number, string, Array.<number>` | - | 否 | 光的颜色 |
| param.groundColor | `number, string, Array.<number>` | - | 否 | 地面颜色 |
| param.intensity | `number` | - | 否 | 光的强度 |

## 实例属性

### groundColor

**类型:** `member`

**数据类型:** `number, string, Array.<number>`

**描述:** 获取/设置 地面颜色

---

### color

**类型:** `member`

**数据类型:** `number, string, Array.<number>`

**继承:** THING.BaseLight#color

**重写:** THING.BaseLight#color

**描述:** 获取/设置光颜色

---

### intensity

**类型:** `member`

**数据类型:** `number`

**继承:** THING.BaseLight#intensity

**重写:** THING.BaseLight#intensity

**描述:** 获取/设置光强度

---

### groups

**类型:** `member`

**数据类型:** `number, Array.<number>`

**继承:** THING.BaseLight#groups

**重写:** THING.BaseLight#groups

**描述:** 获取/设置光照组

---

### helper

**类型:** `member`

**数据类型:** `THING.HelperComponent`

**继承:** THING.Object3D#helper

**重写:** THING.BaseLight#helper

**描述:** 辅助组件 可显示坐标轴等

---

### lerp

**类型:** `member`

**数据类型:** `THING.LerpComponent`

**继承:** THING.Object3D#lerp

**重写:** THING.BaseLight#lerp

**描述:** 物体的插值组件(可控制属性动态的修改)

---

### level

**类型:** `member`

**数据类型:** `THING.LevelComponent`

**继承:** THING.Object3D#level

**重写:** THING.BaseLight#level

**描述:** 物体的层级组件

---

### collider

**类型:** `member`

**数据类型:** `ColliderComponent`

**继承:** THING.Object3D#collider

**重写:** THING.BaseLight#collider

**描述:** 物体的碰撞检测组件

---

### name

**类型:** `member`

**数据类型:** `string`

**继承:** THING.Object3D#name

**重写:** THING.BaseLight#name

**描述:** 设置/获取 对象名称

#### 示例

```javascript
object.name = 'MyObject';
```

---

### isDynamicLoad

**类型:** `member`

**数据类型:** `string`

**默认值:** `false`

**继承:** THING.Object3D#isDynamicLoad

**重写:** THING.BaseLight#isDynamicLoad

**描述:** 设置/获取 对象为动态加载

#### 示例

```javascript
object.isDynamicLoad = true;
```

---

### layerMask

**类型:** `member`

**数据类型:** `number`

**继承:** THING.Object3D#layerMask

**重写:** THING.BaseLight#layerMask

**描述:** 取/设置遮罩层（LayerMask）。默认值为 1。通过"按位与"的计算，来判定物体在指定摄像机中的layerMask的值。

#### 示例

```javascript
// Hide object by changing layer maskobject.layerMask = 0;
```

---

### styleTag

**类型:** `member`

**数据类型:** `string`

**继承:** THING.Object3D#styleTag

**重写:** THING.BaseLight#styleTag

**描述:** 样式标签

---

### inherit

**类型:** `member`

**数据类型:** `InheritData`

**继承:** THING.Object3D#inherit

**重写:** THING.BaseLight#inherit

**描述:** 获取继承信息

#### 示例

```javascript
object.inherit.style = THING.InheritType.Jump;	object.inherit.visible = THING.InheritType.Break;	object.inherit.pickable = THING.InheritType.Stop;
```

---

### visible

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Object3D#visible

**重写:** THING.BaseLight#visible

**描述:** 获取/设置显示状态，此属性操作会影响自身以及所有子对象。

#### 示例

```javascript
let object = new THING.Box();	// @expect(object.visible == true)	object.visible = false;	// @expect(object.visible == false)
```

---

### pickable

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Object3D#pickable

**重写:** THING.BaseLight#pickable

**描述:** 获取/设置可拾取状态。此属性操作会影响自身以及所有子对象。

#### 示例

```javascript
let object = new THING.Box();	object.pickable = false;
```

---

### active

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Object3D#active

**重写:** THING.BaseLight#active

**描述:** 激活状态主要影响可见性,类似与控制节点的可见性,与visible的区别是：<br>父物体active为false,孩子的active为true,孩子不可见<br>父物体visible为false,孩子的visible为true,孩子可见<br>

#### 示例

```javascript
let box = new THING.Box();	let box2 = new THING.Box({parent: box});	box.active = false;	// @expect(box2.active == true);	// @expect(box.active == false);
```

---

### frustumCulled

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Object3D#frustumCulled

**重写:** THING.BaseLight#frustumCulled

**描述:** 获取/设置视锥剔除状态。

---

### keepSize

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Object3D#keepSize

**重写:** THING.BaseLight#keepSize

**描述:** 是否自适应大小(缩放时保持像素级别大小不变)

#### 示例

```javascript
let keepSize = object.keepSize;	if (keepSize) {		console.log('object is keep size to render');	}
```

---

### pivot

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#pivot

**重写:** THING.BaseLight#pivot

**描述:** 获取/设置轴心点信息。轴心点参考原点为自身包围盒的 [left, bottom, back] 的位置。数组每个分类的取值为0-1

#### 示例

```javascript
// Make object origin to [right, top, front] position	object.pivot = [1, 1, 1];
```

---

### style

**类型:** `member`

**数据类型:** `THING.Style`

**继承:** THING.Object3D#style

**重写:** THING.BaseLight#style

**描述:** 获取/设置样式

#### 示例

```javascript
let style = object.style;	style.color = 'red';	style.opacity = 0.1;
```

---

### body

**类型:** `member`

**数据类型:** `THING.BodyObject`

**继承:** THING.Object3D#body

**重写:** THING.BaseLight#body

**描述:** 获取body对象 body对象可以理解这个对象自身,不包含它的孩子.

---

### renderOrder

**类型:** `member`

**数据类型:** `number`

**继承:** THING.Object3D#renderOrder

**重写:** THING.BaseLight#renderOrder

**描述:** 获取/设置渲染顺序，绘制顺序从低到高。

---

### alwaysOnTop

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Object3D#alwaysOnTop

**重写:** THING.BaseLight#alwaysOnTop

**描述:** 设置/获取 是否开启渲染置顶

#### 示例

```javascript
// Keep object render as the top of render layerobject.alwaysOnTop = true;
```

---

### boundingBox

**类型:** `member`

**数据类型:** `THING.Box3`

**继承:** THING.Object3D#boundingBox

**重写:** THING.BaseLight#boundingBox

**描述:** 获取世界坐标系下的包围盒数据  等同于getAABB(true,true,false)

#### 示例

```javascript
let boundingBox = object.boundingBox;	if (boundingBox.halfSize[1] > 100) {		console.log('The object is so tall');	}
```

---

### orientedBox

**类型:** `member`

**数据类型:** `OrientedBoxResult`

**继承:** THING.Object3D#orientedBox

**重写:** THING.BaseLight#orientedBox

**描述:** 获取旋转后的包围盒数据 包围盒坐标轴一般是物体自身坐标轴 等同于getOBB(true,true,false)

#### 示例

```javascript
let orientedBox = object.orientedBox;	if (orientedBox.angles[1] > 0) {		console.log('The object has rotated by Y-axis');	}
```

---

### isFlying

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Object3D#isFlying

**重写:** THING.BaseLight#isFlying

**描述:** 获取飞行状态

---

### localPosition

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#localPosition

**重写:** THING.BaseLight#localPosition

**描述:** 设置/获取 相对于父物体坐标系的位置(偏移)

---

### localAngles

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#localAngles

**重写:** THING.BaseLight#localAngles

**描述:** 设置/获取 相对于父物体坐标系的旋转角度

---

### localRotation

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#localRotation

**重写:** THING.BaseLight#localRotation

**描述:** 等同于localAngles

---

### localQuaternion

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#localQuaternion

**重写:** THING.BaseLight#localQuaternion

**描述:** 设置/获取 相对于父物体坐标系的四元数

---

### localScale

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#localScale

**重写:** THING.BaseLight#localScale

**描述:** 设置/获取 父物体坐标系下的缩放

---

### position

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#position

**重写:** THING.BaseLight#position

**描述:** 设置/获取 世界坐标系下的位置

---

### angles

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#angles

**重写:** THING.BaseLight#angles

**描述:** 设置/获取 世界坐标系下的旋转角度

---

### rotation

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#rotation

**重写:** THING.BaseLight#rotation

**描述:** 等同于angles

---

### quaternion

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#quaternion

**重写:** THING.BaseLight#quaternion

**描述:** 设置/获取 世界坐标系下的四元数

---

### scale

**类型:** `member`

**数据类型:** `Array.<number>`

**继承:** THING.Object3D#scale

**重写:** THING.BaseLight#scale

**描述:** 设置/获取 世界坐标系下的缩放

---

### ignoreParentTransform

**类型:** `member`

**数据类型:** `THING.Transform`

**继承:** THING.Object3D#ignoreParentTransform

**重写:** THING.BaseLight#ignoreParentTransform

**描述:** 获取/设置是否忽略父物体的变换

#### 示例

```javascript
object.ignoreParentTransform = THING.Transform.Rotation | THING.Transform.Scale;
```

---

### app

**类型:** `member`

**数据类型:** `THING.App`

**继承:** THING.BaseObject#app

**重写:** THING.BaseLight#app

**描述:** 获取app对象

#### 示例

```javascript
let object = new THING.BaseObject();let app = object.app;let ret = app == THING.App.current;// @expect(ret == true)
```

---

### type

**类型:** `member`

**数据类型:** `string`

**继承:** THING.BaseObject#type

**重写:** THING.BaseLight#type

**描述:** 获取类型

#### 示例

```javascript
let object = new THING.BaseObject();let type = object.type;// @expect(type == 'BaseObject')
```

---

### dtType

**类型:** `member`

**数据类型:** `string`

**继承:** THING.BaseObject#dtType

**重写:** THING.BaseLight#dtType

**描述:** 设置/获取 孪生体类型

#### 示例

```javascript
let object = new THING.BaseObject();object.dtType = 'Equipment';// @expect(object.dtType == 'Equipment')
```

---

### id

**类型:** `member`

**数据类型:** `string`

**继承:** THING.BaseObject#id

**重写:** THING.BaseLight#id

**描述:** 设置/获取 物体id

#### 示例

```javascript
let object = new THING.BaseObject();object.id = 'DEVICE_007';// @expect(object.id == 'DEVICE_007')
```

---

### uuid

**类型:** `member`

**数据类型:** `string`

**继承:** THING.BaseObject#uuid

**重写:** THING.BaseLight#uuid

**描述:** 设置/获取 物体的唯一标识

#### 示例

```javascript
let object = new THING.BaseObject({uuid: 10000});// @expect(object.uuid == 10000)object.uuid = THING.Math.generateUUID();// @expect(object.id != 10000)
```

---

### tags

**类型:** `member`

**数据类型:** `Set.<string>`

**继承:** THING.BaseObject#tags

**重写:** THING.BaseLight#tags

**描述:** 设置/获取 物体标签

#### 示例

```javascript
// Get tags	let tags = object.tags; console.log(tags); // Set tags by array object.tags = ['one','two','three']; // Set tags by set object.tags = new Set(['one','two','three']);
```

---

### userData

**类型:** `member`

**数据类型:** `object`

**继承:** THING.BaseObject#userData

**重写:** THING.BaseLight#userData

**描述:** 设置/获取 物体的自定义属性

#### 示例

```javascript
let object = new THING.BaseObject();object.userData['Notebook'] = {	name: 'FlyingCar',	price: 100};let name = object.userData['Notebook'].name;// @expect(name == 'FlyingCar')let price = object.userData['Notebook'].price// @expect(price == 100)
```

---

### destroyable

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseObject#destroyable

**重写:** THING.BaseLight#destroyable

**描述:** 设置/获取 对象是否可以被销毁

#### 示例

```javascript
let object = new THING.BaseObject();object.destroyable = true;// @expect(object.destroyable == true)
```

---

### queryable

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseObject#queryable

**重写:** THING.BaseLight#queryable

**描述:** 设置/获取 对象是否可以被查询

#### 示例

```javascript
let object = new THING.BaseObject();object.name = 'Hidden';let ret = app.query('Hidden');// @expect(ret[0].name = 'Hidden')object.queryable = false;ret = app.query('Hidden');// @expect(ret.length = 0)
```

---

### parent

**类型:** `member`

**数据类型:** `THING.BaseObject`

**继承:** THING.BaseObject#parent

**重写:** THING.BaseLight#parent

**描述:** 设置/获取 父物体

#### 示例

```javascript
let parent = new THING.BaseObject(); let child = new THING.BaseObject({parent: parent});	let ret = child.parent == parent;	// @expect(ret == true);
```

---

### relationships

**类型:** `member`

**数据类型:** `Array.<THING.Relationship>`

**继承:** THING.BaseObject#relationships

**重写:** THING.BaseLight#relationships

**描述:** 设置/获取 关系

#### 示例

```javascript
let object = new THING.Object3D();let source = new THING.Object3D();let target = new THING.Object3D();let relationship = new THING.Relationship({     type: 'control',     source: source,     target: target});object.addRelationship(relationship);let ret = object.relationships[0].type == 'control';// @expect(ret == true)
```

---

### parents

**类型:** `member`

**数据类型:** `THING.Selector`

**继承:** THING.BaseObject#parents

**重写:** THING.BaseLight#parents

**描述:** 获取所有的祖先(父物体,父物体的父物体等,直到查询到根节点--app.root)

#### 示例

```javascript
let box1 = new THING.Box();	let box2 = new THING.Box({parent: box1});	let parents = box2.parents; // @expect(parents.length == 2);
```

---

### brothers

**类型:** `member`

**数据类型:** `THING.Selector`

**继承:** THING.BaseObject#brothers

**重写:** THING.BaseLight#brothers

**描述:** 获取兄弟节点(同级节点)

#### 示例

```javascript
let box1 = new THING.Box();	let box2 = new THING.Box({parent: box1});	let box3 = new THING.Box({parent: box1});	let brothers = box3.brothers; // @expect(brothers.length == 1);
```

---

### children

**类型:** `member`

**数据类型:** `THING.Selector`

**继承:** THING.BaseObject#children

**重写:** THING.BaseLight#children

**描述:** 获取孩子

#### 示例

```javascript
let object = new THING.BaseObject();let child= new THING.BaseObject({parent: object});let children = object.children;let ret = children.length == 1;// @expect(ret == true)
```

---

### components

**类型:** `member`

**数据类型:** `Map.<String, THING.BaseComponent>`

**继承:** THING.BaseComponentGroup#components

**重写:** THING.BaseLight#components

**描述:** 获取所有组件

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'component1');obj.addComponent(new THING.BaseComponent(), 'component2');// @expect(obj.components.size == 2)
```

---

## 实例方法

### getVisible

**类型:** `function`

**继承:** THING.Object3D#getVisible

**重写:** THING.BaseLight#getVisible

**描述:** 获取visible的状态

#### 返回值

- **类型:** `boolean`
- **描述:** 可见状态。

#### 示例

```javascript
let visible = object.getVisible();	if (visible) {		console.log('object is showing');	}
```

---

### setVisible

**类型:** `function`

**继承:** THING.Object3D#setVisible

**重写:** THING.BaseLight#setVisible

**描述:** 设置visible的状态

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 是否显示 |
| `recursive` | `boolean, ProcessObjectCallback` | 是否同时影响它的孩子 |

#### 示例

```javascript
// Hide object self only, exclude all children	object.setVisible(false, false);	// Hide object(s) but exclude children what name equals to 'stone'	object.setVisible(false, (obj) => {		if (obj.name == 'stone') {			return false;		}	});
```

---

### setPickable

**类型:** `function`

**继承:** THING.Object3D#setPickable

**重写:** THING.BaseLight#setPickable

**描述:** 设置可拾取状态。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 可拾取状态。 |
| `recursive` | `boolean` | 为真表示处理所有子对象。 |

#### 示例

```javascript
object.setPickable(true, true);
```

---

### getFrustumCulled

**类型:** `function`

**继承:** THING.Object3D#getFrustumCulled

**重写:** THING.BaseLight#getFrustumCulled

**描述:** 获取视锥剔除状态。

#### 返回值

- **类型:** `boolean`
- **描述:** 视锥剔除状态。

#### 示例

```javascript
let frustumCulled = object.getFrustumCulled();	if (frustumCulled) {		console.log('object is frustum culled');	}
```

---

### setFrustumCulled

**类型:** `function`

**继承:** THING.Object3D#setFrustumCulled

**重写:** THING.BaseLight#setFrustumCulled

**描述:** 设置视锥剔除状态。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 为真表示启用视锥剔除，否则不启用。 |
| `recursive` | `boolean` | 为真表示处理所有子对象。 |

#### 示例

```javascript
object.setFrustumCulled(true, true);
```

---

### distanceTo

**类型:** `function`

**继承:** THING.Object3D#distanceTo

**重写:** THING.BaseLight#distanceTo

**描述:** 获取距离另一个Object3D对象或者一个三维坐标的距离

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `target` | `THING.Object3D, Array.<number>` | 目标物体或者世界坐标 |

#### 返回值

- **类型:** `number`
- **描述:** 距离

#### 示例

```javascript
let distance = object.distanceTo([0, 10, 0]);	if (distance > 5000) {		console.log('object is so far from specified position');	}
```

---

### add

**类型:** `function`

**继承:** THING.Object3D#add

**重写:** THING.BaseLight#add

**描述:** 添加对象作为自己的孩子

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.Object3D` | 待添加对象 |
| `options` | `object` | 选项 |
| `options.subNodeName` | `string` | 子节点名称 |
| `options.localPosition` | `Array.<number>` | 相对父物体的位置 |
| `options.localAngles` | `Array.<number>` | 相对父物体的旋转角度 |
| `options.attachMode` | `boolean` | 表示是否保持世界坐标系下的位置不变 |
| `options.ignoreScale` | `boolean` | 是否忽略缩放 |
| `options.indexOfParent` | `boolean` | 对象在子节点中的索引 |

#### 返回值

- **类型:** `boolean`
- **描述:** 添加成功返回true，否则返回false

#### 示例

```javascript
// Keep local transform of box to be added to object	object.add(new THING.Box({ localPosition: [0, 10, 0]}), { attachMode: false });
```

---

### promoteNode

**类型:** `function`

**继承:** THING.Object3D#promoteNode

**重写:** THING.BaseLight#promoteNode

**描述:** 提升渲染节点(uNode)作为Object3D对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 节点名称 |
| `parent` | `THING.Object3D` | 父对象，如果为null，则表示使用当前对象作为父对象 |
| `cls` | `*` | 类 |

#### 返回值

- **类型:** `THING.Object3D`
- **描述:** 提升后的对象

#### 示例

```javascript
// Promote all sub nodes	var nodeNames = entity.body.nodeNames;	nodeNames.forEach(name => {		entity.promoteNode(name);	});
```

---

### raycast

**类型:** `function`

**继承:** THING.Object3D#raycast

**重写:** THING.BaseLight#raycast

**描述:** 射线检测,检测射线是否与对象相交

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ray` | `RaycastInfo` | 射线信息 |
| `recursive` | `boolean` | 是否对所有子对象进行检测 |

#### 返回值

- **类型:** `Array.<RaycastResult>`
- **描述:** 检测结果(按距离从近到远排序)

#### 示例

```javascript
// 示例1: 创建一个向前的射线let results = object.raycast({  origin: [0, 0, 0],    // 起点  direction: [0, 0, 1]  // 向前});if (results.length) {  let nearest = results[0];  // 获取最近的相交点  console.log('击中物体:', nearest.object);  console.log('击中位置:', nearest.position);  console.log('击中距离:', nearest.distance);}// 示例2: 创建一个指向目标的射线let direction = THING.Math.normalizeVector(  THING.Math.subVector(targetPos, startPos)  // 目标点减起点);console.log('从起点:', startPos, '朝向:', direction, '进行射线检测');let hits = object.raycast({  origin: startPos,  direction: direction});console.log('射线检测结果:', hits);
```

---

### setStyle

**类型:** `function`

**继承:** THING.Object3D#setStyle

**重写:** THING.BaseLight#setStyle

**描述:** 整体设置样式

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `object` | 样式对象 |
| `recursive` | `boolean` | 是否影响孩子样式 |

#### 示例

```javascript
let box1 = new THING.Box();	let box2 = new THING.Box({parent: box1});	box1.setStyle({color: 'red'});	// @expect(box1.style.color[0] == 1);	// @expect(box1.style.color[1] == 0);	// @expect(box1.style.color[2] == 0);	// @expect(box2.style.color == null);
```

---

### clone

**类型:** `function`

**继承:** THING.Object3D#clone

**重写:** THING.BaseLight#clone

**描述:** 克隆对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `recursive` | `boolean` | 是否克隆所有的孩子 |
| `parent` | `THING.BaseObject` | 指定克隆出的对象父物体 默认用app.root作为父物体 |
| `options` | `object` | 选项 |

#### 返回值

- **类型:** `THING.Object3D`
- **描述:** 克隆出来的物体

#### 示例

```javascript
// Clone the object and move up	let otherObject = object.clone();	otherObject.translateY(10);
```

---

### waitForComplete

**类型:** `function`

**继承:** THING.Object3D#waitForComplete

**重写:** THING.BaseLight#waitForComplete

**描述:** 等待物体资源加载完成 返回一个Promise对象

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** 返回一个Promise对象

#### 示例

```javascript
// 等待物体资源加载完成	await object.waitForComplete();	app.camera.fit(object);
```

---

### loadResource

**类型:** `function`

**继承:** THING.Object3D#loadResource

**重写:** THING.BaseLight#loadResource

**描述:** 加载资源 返回一个Promise对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `recursive` | `boolean` | 是否加载所有孩子的资源 |
| `options` | `ResourceResult` | 加载选项 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** 返回一个Promise对象

#### 示例

```javascript
// 等待物体加载资源完成	await object.loadResource();
```

---

### unloadResource

**类型:** `function`

**继承:** THING.Object3D#unloadResource

**重写:** THING.BaseLight#unloadResource

**描述:** 卸载资源 返回一个Promise对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `recursive` | `boolean` | 是否卸载所有孩子的资源 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** 返回一个Promise对象

#### 示例

```javascript
// 等待物体卸载资源完成	await object.unloadResource();
```

---

### copy

**类型:** `function`

**继承:** THING.Object3D#copy

**重写:** THING.BaseLight#copy

**描述:** 拷贝对象(不拷贝uuid和parent),拷贝对象会重新加载资源

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 源对象 |
| `options` | `object` | 选项 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** 返回一个Promise对象

#### 示例

```javascript
// 从查询结果拷贝对象	let sourceObject = app.query('#master')[0];	if (sourceObject) {		object.copy(sourceObject);	}
```

---

### getRenderOrder

**类型:** `function`

**继承:** THING.Object3D#getRenderOrder

**重写:** THING.BaseLight#getRenderOrder

**描述:** 获取渲染顺序。

#### 返回值

- **类型:** `number`
- **描述:** 渲染顺序

#### 示例

```javascript
let renderOrder = object.renderOrder;	console.log(renderOrder);
```

---

### setRenderOrder

**类型:** `function`

**继承:** THING.Object3D#setRenderOrder

**重写:** THING.BaseLight#setRenderOrder

**描述:** 设置渲染顺序。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `number` | 渲染顺序的值，渲染顺序从低到高。 |
| `recursive` | `boolean` | 为真表示处理所有子对象。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
object.setRenderOrder(10);
```

---

### makeInstancedDrawing

**类型:** `function`

**继承:** THING.Object3D#makeInstancedDrawing

**重写:** THING.BaseLight#makeInstancedDrawing

**描述:** 开启/关闭批量渲染模式。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 是否开启 |
| `options` | `object` | 选项 |
| `options.renderMode` | `string` | 渲染模式 InstancedRendering/SharedRenderingSharedRendering代表材质共用但是drawCall还是多个 InstancedRendering代表材质共用,drawCall只有一次 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否开启成功

#### 示例

```javascript
// 开启批量渲染模式	if (object.makeInstancedDrawing()) {		console.log('Enable instanced drawing');	}
```

---

### enableInstancing

**类型:** `function`

**继承:** THING.Object3D#enableInstancing

**重写:** THING.BaseLight#enableInstancing

**描述:** 启用实例化节点（启用后将使主体节点不可见）。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `options` | `InstancingNodeOptions` | 选项。 |

#### 返回值

- **类型:** `Promise.<boolean>`
- **描述:** 是否启用成功

#### 示例

```javascript
// 启用实例化渲染,设置最大数量为31104个实例object.enableInstancing({  maxNumber: 31104,  number: 0,  matrices: [],  pickedIds: []});
```

---

### disableInstancing

**类型:** `function`

**继承:** THING.Object3D#disableInstancing

**重写:** THING.BaseLight#disableInstancing

**描述:** 禁用实例化节点。

#### 返回值

- **类型:** `boolean`
- **描述:** 是否禁用成功

#### 示例

```javascript
// 禁用实例化渲染object.disableInstancing();
```

---

### setInstancing

**类型:** `function`

**继承:** THING.Object3D#setInstancing

**重写:** THING.BaseLight#setInstancing

**描述:** 设置/更新实例化节点选项。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `options` | `InstancingNodeOptions` | 选项。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
// 更新实例化渲染的参数object.setInstancing({  maxNumber: 31104,  number: 31104,  matrices: matrices, // 包含所有实例的变换矩阵  pickedIds: pickedIds, // 包含所有实例的拾取ID  colors: colors // 可选,包含所有实例的颜色});
```

---

### getInstancing

**类型:** `function`

**继承:** THING.Object3D#getInstancing

**重写:** THING.BaseLight#getInstancing

**描述:** 获取实例化节点信息。

#### 返回值

- **类型:** `InstancingNodeOptions`
- **描述:** 实例化节点信息

#### 示例

```javascript
// 获取实例化渲染的当前参数const info = object.getInstancing();console.log(info.number); // 当前实例数量console.log(info.maxNumber); // 最大实例数量
```

---

### setInstancingColor

**类型:** `function`

**继承:** THING.Object3D#setInstancingColor

**重写:** THING.BaseLight#setInstancingColor

**描述:** 按索引设置实例化颜色。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |
| `color` | `Array.<number>` | 颜色。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
// 将第30个实例设置为绿色object.setInstancingColor(30, [0, 1, 0]);// 随机将一些实例设置为红色警告色for(let i = 0; i < warnCount; i++) {  const index = Math.floor(Math.random() * 31104);  object.setInstancingColor(index, [1, 0, 0]);}
```

---

### setInstancingClearOutColor

**类型:** `function`

**继承:** THING.Object3D#setInstancingClearOutColor

**重写:** THING.BaseLight#setInstancingClearOutColor

**描述:** 按索引设置实例化清除颜色。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |
| `value` | `boolean` | 是否清除颜色。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
// 清除第一个实例的颜色object.setInstancingClearOutColor(0, true);
```

---

### getInstancingClearOutColor

**类型:** `function`

**继承:** THING.Object3D#getInstancingClearOutColor

**重写:** THING.BaseLight#getInstancingClearOutColor

**描述:** 获取实例化清除颜色。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否获取成功

#### 示例

```javascript
// 获取第一个实例的清除颜色const clearOutColor = object.getInstancingClearOutColor(0);console.log('Instance 0 clear out color:', clearOutColor);
```

---

### setInstancingDiffuseUVTransform

**类型:** `function`

**继承:** THING.Object3D#setInstancingDiffuseUVTransform

**重写:** THING.BaseLight#setInstancingDiffuseUVTransform

**描述:** 按索引设置实例化漫反射UV变换。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |
| `diffuseUVTransform` | `Array.<number>` | 漫反射UV变换。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
// 设置第一个实例的漫反射UV变换object.setInstancingDiffuseUVTransform(0, [0, 0, 1, 1]);
```

---

### getInstancingDiffuseUVTransform

**类型:** `function`

**继承:** THING.Object3D#getInstancingDiffuseUVTransform

**重写:** THING.BaseLight#getInstancingDiffuseUVTransform

**描述:** 获取实例化漫反射UV变换。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |
| `target` | `Array.<number>` | 目标。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 漫反射UV变换

#### 示例

```javascript
// 获取第一个实例的漫反射UV变换const diffuseUVTransform = object.getInstancingDiffuseUVTransform(0);console.log('Instance 0 diffuse UV transform:', diffuseUVTransform);
```

---

### setInstancingVisible

**类型:** `function`

**继承:** THING.Object3D#setInstancingVisible

**重写:** THING.BaseLight#setInstancingVisible

**描述:** 按索引设置实例化可见性。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |
| `visible` | `boolean` | 可见性。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
// 隐藏第一个实例object.setInstancingVisible(0, false);
```

---

### getInstancingVisible

**类型:** `function`

**继承:** THING.Object3D#getInstancingVisible

**重写:** THING.BaseLight#getInstancingVisible

**描述:** 获取按索引的实例化可见性。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否获取成功

#### 示例

```javascript
// 检查第一个实例是否可见const visible = object.getInstancingVisible(0);console.log('Instance 0 visible:', visible);
```

---

### getInstancedCount

**类型:** `function`

**继承:** THING.Object3D#getInstancedCount

**重写:** THING.BaseLight#getInstancedCount

**描述:** 获取实例化数量。

#### 返回值

- **类型:** `number`
- **描述:** 实例化数量

#### 示例

```javascript
// 获取当前实例的数量const count = object.getInstancedCount();console.log('Current instance count:', count);
```

---

### setInstancingMatrix

**类型:** `function`

**继承:** THING.Object3D#setInstancingMatrix

**重写:** THING.BaseLight#setInstancingMatrix

**描述:** 按索引设置实例化矩阵。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |
| `matrix` | `Array.<number>` | 矩阵。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
// 修改第30个实例的变换矩阵,将其Y轴位置上移1个单位const matrices = options[0].matrices[30];object.setInstancingMatrix(30, [  1, 0, 0, matrices[3],  0, 1, 0, matrices[7] + 1,  0, 0, 1, matrices[11],  0, 0, 0, 1]);
```

---

### getInstancingMatrix

**类型:** `function`

**继承:** THING.Object3D#getInstancingMatrix

**重写:** THING.BaseLight#getInstancingMatrix

**描述:** 获取按索引的实例化矩阵。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 索引。 |
| `target?` | `Array.<number>` | 目标。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 实例化矩阵

#### 示例

```javascript
// 获取第一个实例的变换矩阵const matrix = object.getInstancingMatrix(0);console.log('Instance 0 matrix:', matrix);
```

---

### setInstancingAttribute

**类型:** `function`

**继承:** THING.Object3D#setInstancingAttribute

**重写:** THING.BaseLight#setInstancingAttribute

**描述:** 设置实例化属性。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 名称。 |
| `value` | `any` | 值。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否设置成功

#### 示例

```javascript
// 启用颜色属性object.setInstancingAttribute('Colors', true);
```

---

### getInstancingAttribute

**类型:** `function`

**继承:** THING.Object3D#getInstancingAttribute

**重写:** THING.BaseLight#getInstancingAttribute

**描述:** 获取实例化属性。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 名称。 |

#### 返回值

- **类型:** `any`
- **描述:** 实例化属性

#### 示例

```javascript
// 获取颜色属性的状态const useColors = object.getInstancingAttribute('Colors');console.log('Using colors:', useColors);
```

---

### getAABB

**类型:** `function`

**继承:** THING.Object3D#getAABB

**重写:** THING.BaseLight#getAABB

**描述:** 获取包围盒

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `recursive` | `boolean` | 计算aabb时是否考虑孩子 |
| `updateMatrix` | `boolean` | 计算aabb时是否更新自己和孩子的矩阵 |
| `local` | `boolean` | 计算出的aabb的轴向是基于父物体坐标系,还是相对于世界坐标系(计算出的包围盒是不同的) |

#### 返回值

- **类型:** `THING.Box3`
- **描述:** 包围盒对象

#### 示例

```javascript
let boundingBox = object.getAABB();	console.log(boundingBox);
```

---

### getOBB

**类型:** `function`

**继承:** THING.Object3D#getOBB

**重写:** THING.BaseLight#getOBB

**描述:** 获取旋转后的包围盒

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `recursive` | `boolean` | 计算obb时是否考虑孩子 |
| `updateMatrix` | `boolean` | 计算obb时是否更新自己和孩子的矩阵 |
| `local` | `boolean` | 描述obb时的参数是基于父物体还是世界坐标系(算出的包围盒是一样的,只是描述不同) |

#### 返回值

- **类型:** `OrientedBoxResult`
- **描述:** 旋转包围盒对象

#### 示例

```javascript
let orientedBox = object.getOBB();	console.log(orientedBox);
```

---

### stopMoving

**类型:** `function`

**继承:** THING.Object3D#stopMoving

**重写:** THING.BaseLight#stopMoving

**描述:** 停止移动

#### 示例

```javascript
object.stopMoving();
```

---

### pauseMoving

**类型:** `function`

**继承:** THING.Object3D#pauseMoving

**重写:** THING.BaseLight#pauseMoving

**描述:** 暂停移动

#### 示例

```javascript
object.pauseMoving();
```

---

### resumeMoving

**类型:** `function`

**继承:** THING.Object3D#resumeMoving

**重写:** THING.BaseLight#resumeMoving

**描述:** 恢复移动

#### 示例

```javascript
object.resumeMoving();
```

---

### moveTo

**类型:** `function`

**继承:** THING.Object3D#moveTo

**重写:** THING.BaseLight#moveTo

**描述:** 对象移动到目标位置

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array.<number>` | 目标位置 |
| `param` | `MovePathLerpArgs` | 移动的参数 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否移动成功

#### 示例

```javascript
object.moveTo(object.selfToWorld(THING.Math.randomVector([-200, -5, -200], [200, 5, 200])), {		loopType: THING.LoopType.PingPong,		duration: THING.Math.randomInt(1000, 5000)});object.moveTo({	to: object.selfToWorld(THING.Math.randomVector([-200, -5, -200], [200, 5, 200])),	duration: THING.Math.randomInt(1000, 5000)})
```

---

### movePath

**类型:** `function`

**继承:** THING.Object3D#movePath

**重写:** THING.BaseLight#movePath

**描述:** 对象沿路径移动

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array.<Array.<number>>` | 组成路径的坐标的集合 |
| `param` | `MovePathLerpArgs` | 移动参数 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否移动成功

#### 示例

```javascript
let path = [	[100, 0, 0],	[100, 0, 100],	[0, 0, 100],[0, 0, 0],];object.movePath(path.map(point => object.selfToWorld(point)), {	duration: 5 * 1000,	loopType: THING.LoopType.Repeat,});object.movePath({	path: path.map(point => object.selfToWorld(point)),	duration: 5 * 1000,	loopType: THING.LoopType.Repeat,});
```

---

### movePathAsync

**类型:** `function`

**继承:** THING.Object3D#movePathAsync

**重写:** THING.BaseLight#movePathAsync

**描述:** 对象沿路径移动 返回一个Promise对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array.<Array.<number>>` | 组成路径的坐标的集合 |
| `param` | `MovePathLerpArgs` | 移动参数 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** 返回一个Promise对象

#### 示例

```javascript
let path = [	[100, 0, 0],	[100, 0, 100],	[0, 0, 100],[0, 0, 0],];await object.movePathAsync(path.map(point => object.selfToWorld(point)), {	duration: 5 * 1000});await object.movePathAsync({	path: path.map(point => object.selfToWorld(point)),	duration: 5 * 1000});
```

---

### stopScaling

**类型:** `function`

**继承:** THING.Object3D#stopScaling

**重写:** THING.BaseLight#stopScaling

**描述:** 停止缩放动画

#### 返回值

- **类型:** `boolean`
- **描述:** 是否停止成功

#### 示例

```javascript
object.stopScaling();
```

---

### pauseScaling

**类型:** `function`

**继承:** THING.Object3D#pauseScaling

**重写:** THING.BaseLight#pauseScaling

**描述:** 暂停缩放动画

#### 返回值

- **类型:** `boolean`
- **描述:** 是否暂停成功

#### 示例

```javascript
object.pauseScaling();
```

---

### resumeScaling

**类型:** `function`

**继承:** THING.Object3D#resumeScaling

**重写:** THING.BaseLight#resumeScaling

**描述:** 恢复缩放动画

#### 返回值

- **类型:** `boolean`
- **描述:** 是否恢复成功

#### 示例

```javascript
object.resumeScaling();
```

---

### scaleTo

**类型:** `function`

**继承:** THING.Object3D#scaleTo

**重写:** THING.BaseLight#scaleTo

**描述:** 缩放动画

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array.<number>` | 要缩放到三个轴向的倍数 |
| `param` | `LerpWithSpaceTypeArgs` | 插值参数 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否缩放成功

#### 示例

```javascript
object.scaleTo(THING.Math.randomVector([1, 1, 1], [3, 3, 3]), {	loopType: THING.LoopType.PingPong,	duration: THING.Math.randomInt(1000, 5000)});object.scaleTo({	to: THING.Math.randomVector([1, 1, 1], [3, 3, 3]),	duration: THING.Math.randomInt(1000, 5000)});
```

---

### stopRotating

**类型:** `function`

**继承:** THING.Object3D#stopRotating

**重写:** THING.BaseLight#stopRotating

**描述:** 停止旋转

#### 示例

```javascript
object.stopRotating();
```

---

### pauseRotating

**类型:** `function`

**继承:** THING.Object3D#pauseRotating

**重写:** THING.BaseLight#pauseRotating

**描述:** 暂停旋转

#### 示例

```javascript
object.pauseRotating();
```

---

### resumeRotating

**类型:** `function`

**继承:** THING.Object3D#resumeRotating

**重写:** THING.BaseLight#resumeRotating

**描述:** 恢复旋转

#### 示例

```javascript
object.resumeRotating();
```

---

### rotateTo

**类型:** `function`

**继承:** THING.Object3D#rotateTo

**重写:** THING.BaseLight#rotateTo

**描述:** 旋转对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array.<number>` | 三个轴向的旋转角度 |
| `param` | `LerpWithSpaceTypeArgs` | 插值参数 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否旋转成功

#### 示例

```javascript
object.rotateTo([0, 360, 0], {	loopType: THING.LoopType.Repeat,	duration: 10 * 1000});object.rotateTo({	to: [0, 360, 0],	duration: 10 * 1000});
```

---

### stopFading

**类型:** `function`

**继承:** THING.Object3D#stopFading

**重写:** THING.BaseLight#stopFading

**描述:** 停止淡入淡出动作。

#### 示例

```javascript
object.stopFading();
```

---

### pauseFading

**类型:** `function`

**继承:** THING.Object3D#pauseFading

**重写:** THING.BaseLight#pauseFading

**描述:** 暂停淡入淡出动作。

#### 示例

```javascript
object.pauseFading();
```

---

### resumeFading

**类型:** `function`

**继承:** THING.Object3D#resumeFading

**重写:** THING.BaseLight#resumeFading

**描述:** 恢复淡入淡出动作。

#### 示例

```javascript
object.resumeFading();
```

---

### fadeIn

**类型:** `function`

**继承:** THING.Object3D#fadeIn

**重写:** THING.BaseLight#fadeIn

**描述:** 对象渐现

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | The parameters. 插值参数 |

#### 示例

```javascript
object.fadeIn({  duration: 2000,  onComplete: () => {    console.log('Fade in completed');  }});
```

---

### fadeOut

**类型:** `function`

**继承:** THING.Object3D#fadeOut

**重写:** THING.BaseLight#fadeOut

**描述:** 对象渐隐

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | The parameters. 插值参数 |

#### 示例

```javascript
object.fadeOut({  duration: 2000,  onComplete: () => {    console.log('Fade out completed');  }});
```

---

### fadeInAsync

**类型:** `function`

**继承:** THING.Object3D#fadeInAsync

**重写:** THING.BaseLight#fadeInAsync

**描述:** 异步将对象渐现。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | The parameters. 插值参数 |

#### 返回值

- **类型:** `Promise`
- **描述:** 一个在渐现完成时解析的承诺。

#### 示例

```javascript
await object.fadeInAsync({  duration: 2000});
```

---

### fadeOutAsync

**类型:** `function`

**继承:** THING.Object3D#fadeOutAsync

**重写:** THING.BaseLight#fadeOutAsync

**描述:** 异步将对象渐隐。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `LerpArgs` | The parameters. 插值参数 |

#### 返回值

- **类型:** `Promise`
- **描述:** 一个在渐隐完成时解析的承诺。

#### 示例

```javascript
await object.fadeOutAsync({  duration: 2000});
```

---

### stopFlying

**类型:** `function`

**继承:** THING.Object3D#stopFlying

**重写:** THING.BaseLight#stopFlying

**描述:** 停止飞行

#### 示例

```javascript
object.stopFlying();
```

---

### pauseFlying

**类型:** `function`

**继承:** THING.Object3D#pauseFlying

**重写:** THING.BaseLight#pauseFlying

**描述:** 暂停飞行

#### 示例

```javascript
object.pauseFlying();
```

---

### resumeFlying

**类型:** `function`

**继承:** THING.Object3D#resumeFlying

**重写:** THING.BaseLight#resumeFlying

**描述:** 恢复飞行

#### 示例

```javascript
object.resumeFlying();
```

---

### flyTo

**类型:** `function`

**继承:** THING.Object3D#flyTo

**重写:** THING.BaseLight#flyTo

**描述:** 物体在特定时间内飞行到特定位置

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `THING.BaseObject, LerpFlyToArgs` | 可传入BaseObject或飞行参数 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否飞行成功

#### 示例

```javascript
object.flyTo(baseObject);//飞到物体	object.flyTo({		target: otherTarget,		horzAngle: 0,		vertAngle: 45	});	object.flyTo({		position: [0,10,0],   target:[0,0,0],		up:[0,0,1]	});
```

---

### fit

**类型:** `function`

**继承:** THING.Object3D#fit

**重写:** THING.BaseLight#fit

**描述:** 根据目标对象计算最佳位置 一般用于调整摄像机最佳视角 <br>注意参数中 times 和 duration 不起作用

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `THING.BaseObject, LerpFlyToArgs` | 可传入BaseObject或参数 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否计算成功

#### 示例

```javascript
app.camera.fit(otherTarget);
```

---

### stopUVTransform

**类型:** `function`

**继承:** THING.Object3D#stopUVTransform

**重写:** THING.BaseLight#stopUVTransform

**描述:** 停止UV变化 主要用于贴图动画

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `slotType` | `ImageSlotType` | 指定纹理类型 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否停止成功

#### 示例

```javascript
object.stopUVTransform(THING.ImageSlotType.Map);
```

---

### pauseUVTransform

**类型:** `function`

**继承:** THING.Object3D#pauseUVTransform

**重写:** THING.BaseLight#pauseUVTransform

**描述:** 暂停UV变化

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `slotType` | `ImageSlotType` | 指定纹理类型 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否暂停成功

#### 示例

```javascript
object.pauseUVTransform(THING.ImageSlotType.Map);
```

---

### resumeUVTransform

**类型:** `function`

**继承:** THING.Object3D#resumeUVTransform

**重写:** THING.BaseLight#resumeUVTransform

**描述:** 恢复UV变化

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `slotType` | `ImageSlotType` | 指定纹理类型 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否恢复成功

#### 示例

```javascript
object.resumeUVTransform(THING.ImageSlotType.Map);
```

---

### uvTransformTo

**类型:** `function`

**继承:** THING.Object3D#uvTransformTo

**重写:** THING.BaseLight#uvTransformTo

**描述:** 开始UV变化

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `slotType` | `ImageSlotType` | 指定纹理类型 (diffuseMap,alphaMap,emissiveMap等) |
| `value` | `LerpArgs` | 插值参数 参数中需指定UV对象中要变化哪个属性</br>包含以下四种 {number[]} offset,{number[]} repeat,{number[]} center(number[]),{number} rotation |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否开始成功

#### 示例

```javascript
// Lerp UV offset from [0, 0] to [-1, 0] in 2 seconds by repeat modeobject.uvTransformTo(THING.ImageSlotType.Map, {	from: { offset: [0, 0] },	to: { offset: [-1, 0] },	duration: 2000,	loopType: THING.LoopType.Repeat,	times: 3});
```

---

### rotate

**类型:** `function`

**继承:** THING.Object3D#rotate

**重写:** THING.BaseLight#rotate

**描述:** 等同于rotateOnAxis

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `axis` | `Array.<number>` | 在自身坐标系下的轴向信息 |
| `angle` | `number` | 旋转角度 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否旋转成功

#### 示例

```javascript
let box = new THING.Box();	box.rotate(THING.Utils.xAxis, 45);	// @expect(THING.Math.equalsVector3([45, 0, 0], box.angles) == true);
```

---

### rotateOnAxis

**类型:** `function`

**继承:** THING.Object3D#rotateOnAxis

**重写:** THING.BaseLight#rotateOnAxis

**描述:** 绕固定轴旋转特定角度

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `axis` | `Array.<number>` | 在自身坐标系下的轴向信息 |
| `angle` | `number` | 旋转角度 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否旋转成功

#### 示例

```javascript
let box = new THING.Box();	box.rotateOnAxis(THING.Utils.xAxis, 45);	//@expect(THING.Math.equalsVector3([45, 0, 0], box.angles) == true);
```

---

### rotateX

**类型:** `function`

**继承:** THING.Object3D#rotateX

**重写:** THING.BaseLight#rotateX

**描述:** 绕自身坐标系下的x轴进行旋转

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `angle` | `number` | 旋转角度 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否旋转成功

---

### rotateY

**类型:** `function`

**继承:** THING.Object3D#rotateY

**重写:** THING.BaseLight#rotateY

**描述:** 绕自身坐标系下的y轴进行旋转

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `angle` | `number` | 旋转角度 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否旋转成功

---

### rotateZ

**类型:** `function`

**继承:** THING.Object3D#rotateZ

**重写:** THING.BaseLight#rotateZ

**描述:** 绕自身坐标系下的z轴进行旋转

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `angle` | `number` | 旋转角度 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否旋转成功

---

### translateX

**类型:** `function`

**继承:** THING.Object3D#translateX

**重写:** THING.BaseLight#translateX

**描述:** 沿着自身X轴对物体做偏移

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `distance` | `number` | 偏移距离 单位米 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否平移成功

#### 示例

```javascript
object.translateX(10, {time: 1000})
```

---

### translateY

**类型:** `function`

**继承:** THING.Object3D#translateY

**重写:** THING.BaseLight#translateY

**描述:** 沿着自身Y轴对物体做偏移

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `distance` | `number` | 偏移距离 单位米 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否平移成功

#### 示例

```javascript
object.translateY(10, {time: 1000})
```

---

### translateZ

**类型:** `function`

**继承:** THING.Object3D#translateZ

**重写:** THING.BaseLight#translateZ

**描述:** 沿着自身Z轴对物体做偏移

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `distance` | `number` | 偏移距离 单位米 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否平移成功

#### 示例

```javascript
object.translateZ(10, {time: 1000})
```

---

### translate

**类型:** `function`

**继承:** THING.Object3D#translate

**重写:** THING.BaseLight#translate

**描述:** 沿三个轴向对物体做偏移

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `offset` | `Array.<number>` | 三个轴向的偏移 单位米 |
| `lerpParam` | `LerpArgs` | 插值信息 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否平移成功

#### 示例

```javascript
object.translate([10, 10, 10], {time: 1000})
```

---

### lookAt

**类型:** `function`

**继承:** THING.Object3D#lookAt

**重写:** THING.BaseLight#lookAt

**描述:** 看对象或一个目标位置

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `target` | `Array.<number>, THING.Object3D` | 要看的对象或目标位置 |
| `param` | `LookAtArgs` | 参数列表 |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否看成功

---

### worldToSelf

**类型:** `function`

**继承:** THING.Object3D#worldToSelf

**重写:** THING.BaseLight#worldToSelf

**描述:** 世界坐标转自身坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 世界坐标 |
| `ignoreScale` | `boolean` | 转换时是否忽略缩放 默认不忽略 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** -

#### 示例

```javascript
let worldPos = [5, 10, 0];let obj = new THING.Object3D({position: worldPos});let selfPos = obj.worldToSelf(worldPos);// print [0, 0, 0]console.log(selfPos);
```

---

### selfToWorld

**类型:** `function`

**继承:** THING.Object3D#selfToWorld

**重写:** THING.BaseLight#selfToWorld

**描述:** 自身坐标转世界坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 自身坐标系下的坐标 |
| `ignoreScale` | `boolean` | 转换时是否忽略缩放 默认不忽略 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 返回世界坐标

#### 示例

```javascript
let obj = new THING.Object3D({ position: [0, 15, 0] });let worldPos = obj.selfToWorld([0, -15, 0]);// print [0, 0, 0]console.log(worldPos);
```

---

### localToWorld

**类型:** `function`

**继承:** THING.Object3D#localToWorld

**重写:** THING.BaseLight#localToWorld

**描述:** 相对于父物体的坐标转为世界坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 相对于父物体的坐标 |
| `ignoreScale` | `boolean` | 转换时是否忽略缩放 默认不忽略 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 返回世界坐标

#### 示例

```javascript
let parentObj = new THING.Object3D({	position: [0, 5, 0]});let childObj = new THING.Object3D({	localPosition: [0, 10, 0], parent: parentObj});let worldPos = childObj.localToWorld([0, -5, 0]);// print [0, 0, 0]console.log(worldPos);
```

---

### worldToLocal

**类型:** `function`

**继承:** THING.Object3D#worldToLocal

**重写:** THING.BaseLight#worldToLocal

**描述:** 世界坐标转为相对于父物体的坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 世界坐标 |
| `ignoreScale` | `boolean` | 转换时是否忽略缩放 默认不忽略 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 返回相对于父物体的坐标

#### 示例

```javascript
let parentObj = new THING.Object3D({	position: [0, 5, 0]});let childObj = new THING.Object3D({	localPosition: [0, 10, 0],	parent: parentObj});let localPosition = childObj.worldToLocal([0, 5, 0]);// print [0, 0, 0]console.log(localPosition);
```

---

### hasAttribute

**类型:** `function`

**继承:** THING.BaseObject#hasAttribute

**重写:** THING.BaseLight#hasAttribute

**描述:** 检查是否含有属性名为name的属性

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 属性名称,支持嵌套,例如查询object.a.b.c 可以使用object.hasAttribute('a/b/c') |
| `separator` | `string` | 分隔符,默认是'/' |

#### 返回值

- **类型:** `boolean`
- **描述:** 返回一个布尔值，表示是否存在指定的属性

#### 示例

```javascript
let object = new THING.BaseObject();object.userData['power'] = 100;let ret = object.hasAttribute('userData/power');// @expect(ret == true)
```

---

### getAttribute

**类型:** `function`

**继承:** THING.BaseObject#getAttribute

**重写:** THING.BaseLight#getAttribute

**描述:** 根据name获取属性值

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `key` | `string` | 属性名称,支持嵌套,例如获取object.a.b.c 可以使用object.getAttribute('a/b/c') |
| `separator` | `string` | 分隔符,默认是'/' |

#### 返回值

- **类型:** `*`
- **描述:** 返回指定属性的值

#### 示例

```javascript
let object = new THING.BaseObject();object.userData['power'] = 100;let power = object.getAttribute('userData/power');// @expect(power == 100)
```

---

### setAttribute

**类型:** `function`

**继承:** THING.BaseObject#setAttribute

**重写:** THING.BaseLight#setAttribute

**描述:** 设置属性名称为key的属性值

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `key` | `string` | 属性名称,支持嵌套,例如设置object.a.b.c=1 可以使用object.setAttribute('a/b/c',1) |
| `value` | `*` | 属性值 |
| `separator` | `string` | 分隔符,默认是'/' |

#### 示例

```javascript
let object = new THING.BaseObject();object.setAttribute('userData/power', 200);let power = object.getAttribute('userData/power');// @expect(power == 200)
```

---

### setAttributes

**类型:** `function`

**继承:** THING.BaseObject#setAttributes

**重写:** THING.BaseLight#setAttributes

**描述:** 设置属性

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `attributes` | `object` | 属性对象 |
| `overwrite` | `boolean` | 是否覆盖 |
| `separator` | `string` | 分隔符,默认是'/' |

#### 示例

```javascript
let object = new THING.BaseObject();object.setAttributes({  "userData/name": 'Mr.Door',  "userData/age": 18})let name = object.getAttribute('userData/name');// @expect(name == 'Mr.Door')let age = object.getAttribute('userData/age');// @expect(age == 18)
```

---

### destroy

**类型:** `function`

**继承:** THING.BaseObject#destroy

**重写:** THING.BaseLight#destroy

**描述:** 销毁物体

#### 返回值

- **类型:** `boolean`
- **描述:** 返回一个布尔值，表示是否销毁成功

#### 示例

```javascript
let object = new THING.BaseObject();// @expect(object.destroyed == false);object.destroy();// @expect(object.destroyed == true)
```

---

### on

**类型:** `function`

**继承:** THING.BaseObject#on

**重写:** THING.BaseLight#on

**描述:** 注册事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型 |
| `condition` | `string` | 注册事件前先进行查询,对符合条件的对象进行注册 |
| `callback` | `EventCallback` | 事件回调函数 |
| `tag` | `string` | 事件的tag |
| `priority` | `number` | 优先级 默认0 |
| `options` | `ObjectEventOptions` | 事件参数 |

#### 示例

```javascript
let object = new THING.BaseObject();let mark = 0;object.on('click', function(ev){	mark = 1;}, 'MyClick');object.trigger('click');// @expect(mark == 1)let mark2 = 0;object.on('click', '.Box', function(ev){	mark2 = 1;}, 'MyClick');// @expect(mark2 == 0)
```

---

### once

**类型:** `function`

**继承:** THING.BaseObject#once

**重写:** THING.BaseLight#once

**描述:** 注册一次性的事件，此事件响应只会触发一次，触发后会被自动注销

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型 |
| `condition` | `string` | 注册事件前先进行查询,对符合条件的对象进行注册 |
| `callback` | `EventCallback` | 事件回调函数 |
| `tag` | `string` | 事件的tag |
| `priority` | `number` | 优先级 默认0 |
| `options` | `ObjectEventOptions` | 事件参数 |

#### 示例

```javascript
let object = new THING.BaseObject();let markOnce = 0;object.once('testOnce', function(ev) {		markOnce = 1;});object.trigger('testOnce');// @expect(markOnce == 1);markOnce = 0;object.trigger('testOnce');// @expect(markOnce == 0);
```

---

### off

**类型:** `function`

**继承:** THING.BaseObject#off

**重写:** THING.BaseLight#off

**描述:** 注销事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型 |
| `condition` | `string` | 注册事件的条件 |
| `tag` | `string` | 事件的tag |

#### 示例

```javascript
let object = new THING.BaseObject();let markOff = 0;object.on('testOff', function(ev) {		markOff = 1;});object.trigger('testOff');// @expect(markOff == 1);markOff = 0;object.off('testOff');object.trigger('testOff');// @expect(markOff == 0);
```

---

### pauseEvent

**类型:** `function`

**继承:** THING.BaseObject#pauseEvent

**重写:** THING.BaseLight#pauseEvent

**描述:** 暂停事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型 |
| `condition` | `string` | 注册事件的条件 |
| `tag` | `string` | 事件的tag |

#### 示例

```javascript
let object = new THING.BaseObject();let markPause = 0;object.on('testPause', function(ev) {		markPause = 1;});object.trigger('testPause');// @expect(markPause == 1);markPause = 0;object.pauseEvent('testPause');object.trigger('testPause');// @expect(markPause == 0);app.on('test', ".Box", (e) => {	console.log(e.object)}, 'MyTag');app.pauseEvent('test', '.Box', 'MyTag');
```

---

### resumeEvent

**类型:** `function`

**继承:** THING.BaseObject#resumeEvent

**重写:** THING.BaseLight#resumeEvent

**描述:** 恢复事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型 |
| `condition` | `string` | 注册事件的条件 |
| `tag` | `string` | 事件的tag |

#### 示例

```javascript
let object = new THING.BaseObject();let markResume = 0;object.on('testResume', function(ev) {		markResume = 1;});object.trigger('testResume');// @expect(markResume == 1);markResume = 0;object.pauseEvent('testResume');object.trigger('testResume');// @expect(markResume == 0);object.resumeEvent('testResume');object.trigger('testResume');// @expect(markResume == 1);app.on('test', ".Box", (e) => {	console.log(e.object)}, 'MyTag');app.pauseEvent('test', '.Box', 'MyTag');app.resumeEvent('test', '.Box', 'MyTag');
```

---

### trigger

**类型:** `function`

**继承:** THING.BaseObject#trigger

**重写:** THING.BaseLight#trigger

**描述:** 抛出事件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string, object` | 事件条件 或 事件数据。 |
| `data` | `object, string` | 事件数据 或 事件标签。 |
| `tagName` | `string` | 事件标签名称。 |

#### 返回值

- **类型:** `*`
- **描述:** 返回一个对象，包含指定类型的事件

#### 示例

```javascript
let object = new THING.BaseObject(); let markTrigger = {};	object.on('myEvent', function(ev) {		markTrigger = ev;	});	object.trigger('myEvent', { result: true }); let ret = markTrigger.result; // @expect(ret == true);new THING.Box(); app.on('test', (e) => {     console.log('无条件+tag1', e) }, 'MyTag1'); app.on('test', (e) => {     console.log('无条件+tag2', e) }, 'MyTag2');app.on('test', ".Box", (e) => {	    console.log('条件+tag1', e)}, 'MyTag1');app.on('test', ".Box", (e) => {	    console.log('条件+tag2', e)}, 'MyTag2');// 事件类型 + 事件条件，触发事件。app.trigger('test', '.Box');// 事件类型 + 事件数据，触发事件app.trigger('test', { result: true });// 事件类型 + 事件条件 + 事件标签，触发事件app.trigger('test', '.Box', 'MyTag2');// 事件类型 + 事件条件 + 事件参数，触发事件app.trigger('test', '.Box', { result: true });// 事件类型 + 事件条件 + 事件数据 + 事件标签，触发事件app.trigger('test', '.Box', { result: true },'MyTag2');// 注意事项:// 1. 事件标签不能单独使用，否则事件标签和事件条件无法区分。app.trigger('test', null, 'MyTag2');// 2. 事件数据兼容了数组的情况，如果传了数组将无法从参数中获取object。app.trigger('test', '.Box', [{ result: 'r1' },{ result: 'r2' }], 'MyTag2')
```

---

### invoke

**类型:** `function`

**继承:** THING.BaseObject#invoke

**重写:** THING.BaseLight#invoke

**描述:** 触发并等待事件完成

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string, object` | 事件条件 或 事件数据。 |
| `data` | `object, string` | 事件数据 或 事件标签。 |
| `tagName` | `string` | 事件标签名称。 |

#### 返回值

- **类型:** `*`
- **描述:** 返回一个Promise对象，包含指定类型的事件

---

### remove

**类型:** `function`

**继承:** THING.BaseObject#remove

**重写:** THING.BaseLight#remove

**描述:** 从自己的孩子中移除BaseObject

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 待移除物体 |
| `options` | `object` | 选项 |

#### 返回值

- **类型:** `boolean`
- **描述:** 返回一个布尔值，表示是否移除成功

#### 示例

```javascript
let parent = new THING.BaseObject();let child = new THING.BaseObject();parent.add(child);let ret = child.isChildOf(parent); // @expect(ret == true);	parent.remove(child);ret = child.isChildOf(parent);	// @expect(ret == false);
```

---

### traverse

**类型:** `function`

**继承:** THING.BaseObject#traverse

**重写:** THING.BaseLight#traverse

**描述:** 递归遍历自己和自己的孩子 这个方法会遍历到所有的后代节点(孩子,孩子的孩子等)

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `function` | The callback function. 执行遍历时执行的方法 |

#### 示例

```javascript
let parent = new THING.BaseObject();let child1 = new THING.BaseObject({parent: parent});let child2 = new THING.BaseObject({parent: parent});let mark = 0;parent.traverse((child) => {		mark++;});// @expect(mark == 3)
```

---

### query

**类型:** `function`

**继承:** THING.BaseObject#query

**重写:** THING.BaseLight#query

**描述:** 根据条件查询孩子 返回所有满足条件的对象集合

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `ObjectQueryOptions, string` | 查询条件 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let object = new THING.BaseObject();let child= new THING.BaseObject({parent: object});child.userData = {power: 1000};let children = object.children.query('[userData/power>100]');let ret = children.length == 1;// @expect(ret == true)
```

---

### queryAll

**类型:** `function`

**继承:** THING.BaseObject#queryAll

**重写:** THING.BaseLight#queryAll

**描述:** 根据条件查询孩子 返回所有满足条件的对象集合（忽略 queryable 属性）

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `ObjectQueryOptions, string` | 查询条件 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 查询结果

#### 示例

```javascript
let object = new THING.BaseObject();let child= new THING.BaseObject({parent: object});child.userData = {power: 1000};let children = object.children.queryAll('[userData/power>100]');let ret = children.length == 1;// @expect(ret == true)
```

---

### queryByName

**类型:** `function`

**继承:** THING.BaseObject#queryByName

**重写:** THING.BaseLight#queryByName

**描述:** 根据名称查询孩子

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
let object = new THING.BaseObject();let child= new THING.BaseObject({parent: object, name: 'liming'});let result = object.queryByName('liming');let ret = result[0].name == 'liming';// @expect(ret == true)
```

---

### queryById

**类型:** `function`

**继承:** THING.BaseObject#queryById

**重写:** THING.BaseLight#queryById

**描述:** 根据id查询孩子

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
let object = new THING.BaseObject();let child1= new THING.BaseObject({parent: object});child1.id = '10000';let child2= new THING.BaseObject({parent: object});let result = object.queryById('10000');let ret = result[0].id == '10000'; //@expect(ret == true)
```

---

### queryByTags

**类型:** `function`

**继承:** THING.BaseObject#queryByTags

**重写:** THING.BaseLight#queryByTags

**描述:** 根据tag查询孩子

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
let object = new THING.BaseObject();let child1= new THING.Object3D({parent: object, name: 'car1'});child1.tags.add('testCar');let child2= new THING.BaseObject({parent: object, name: 'car2'});let result = object.queryByTags('testCar');let ret = result.length == 1; //@expect(ret == true)
```

---

### queryByUUID

**类型:** `function`

**继承:** THING.BaseObject#queryByUUID

**重写:** THING.BaseLight#queryByUUID

**描述:** 根据uuid查询孩子

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
let object = new THING.BaseObject();let child1= new THING.BaseObject({parent: object, uuid: '1000'});let child2= new THING.BaseObject({parent: object});let result = object.queryByUUID('1000');let ret = result[0].uuid == '1000'; //@expect(ret == true)
```

---

### queryByType

**类型:** `function`

**继承:** THING.BaseObject#queryByType

**重写:** THING.BaseLight#queryByType

**描述:** 根据类型查询孩子

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
let object = new THING.BaseObject();let child1= new THING.Box({parent: object, id: '10000'});let child2= new THING.BaseObject({parent: object});let result = object.queryByType('Box');let ret = result[0].id == '10000'; //@expect(ret == true)
```

---

### queryByDTType

**类型:** `function`

**继承:** THING.BaseObject#queryByDTType

**重写:** THING.BaseLight#queryByDTType

**描述:** 根据孪生体类型查询孩子

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
let object = new THING.BaseObject();let child1= new THING.BaseObject({parent: object});child1.dtType = 'Equipment';let child2= new THING.BaseObject({parent: object});let result = object.queryByDTType('Equipment');let ret = result[0].dtType == 'Equipment'; //@expect(ret == true)
```

---

### queryByUserData

**类型:** `function`

**继承:** THING.BaseObject#queryByUserData

**重写:** THING.BaseLight#queryByUserData

**描述:** 根据userData(用户数据)查询孩子

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
let object = new THING.BaseObject();let child1= new THING.Box({parent: object});child1.userData['power'] = 100;let child2= new THING.BaseObject({parent: object});let result = object.queryByUserData('power=100');let ret = result[0].userData.power == 100; //@expect(ret == true)
```

---

### queryByRegExp

**类型:** `function`

**继承:** THING.BaseObject#queryByRegExp

**重写:** THING.BaseLight#queryByRegExp

**描述:** 根据正则表达式查询孩子

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
let object = new THING.BaseObject();let child1= new THING.BaseObject({parent: object, name: 'car1'});let child2= new THING.BaseObject({parent: object, name: 'car2'});let result = object.queryByRegExp(/car/);let ret = result.length == 2; //@expect(ret == true)
```

---

### addComponent

**类型:** `function`

**继承:** THING.BaseComponentGroup#addComponent

**重写:** THING.BaseLight#addComponent

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

**重写:** THING.BaseLight#removeComponent

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

**重写:** THING.BaseLight#removeAllComponents

**描述:** 移除所有组件

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'component1');obj.addComponent(new THING.BaseComponent(), 'component2');obj.removeAllComponents();// @expect(obj.components.size == 0)
```

---

### traverseComponentByType

**类型:** `function`

**继承:** THING.BaseComponentGroup#traverseComponentByType

**重写:** THING.BaseLight#traverseComponentByType

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

**重写:** THING.BaseLight#getComponentByName

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

**重写:** THING.BaseLight#getComponentByType

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

**重写:** THING.BaseLight#getComponentsByType

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

**重写:** THING.BaseLight#getAllComponents

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

**重写:** THING.BaseLight#hasComponent

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

