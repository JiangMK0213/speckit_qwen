# 类: BodyObject

**命名空间:** THING

**描述:** 构造对象的自身可渲染节点。

## 实例属性

### visible

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置可见状态。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.visible == true;// @expect(ret == true)object.body.visible = false;ret = object.body.visible == false;// @expect(ret == true)
```

---

### localPosition

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置父空间的本地（偏移）位置。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.localPosition[1] == 0;// @expect(ret == true)	object.body.localPosition = [0, 10, 0];ret = object.body.localPosition[1] == 10;// @expect(ret == true)
```

---

### localQuaternion

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置惯性空间的四元数。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.localQuaternion[1] == 0;// @expect(ret == true)	object.body.localQuaternion = [0, 10, 0, 1];ret = object.body.localQuaternion[1] == 10;// @expect(ret == true)	object.body.localQuaternion = [0, 10, 0, 1];
```

---

### localRotation

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置惯性空间的旋转。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.localRotation[1] == 0;// @expect(ret == true)	object.body.localRotation = [0, 10, 0];ret = object.body.localRotation[1] == 10;// @expect(ret == true)
```

---

### localScale

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置自身坐标系的缩放。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.localScale[1] == 1;// @expect(ret == true)	object.body.localScale = [10, 10, 10];ret = object.body.localScale[1] == 10;// @expect(ret == true)
```

---

### position

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界坐标系的位置。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.position[1] == 0;// @expect(ret == true)	object.body.position = [10, 10, 10];ret = object.body.position[1] == 10;// @expect(ret == true)
```

---

### rotation

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界空间的旋转。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.rotation[1] == 0;// @expect(ret == true)	object.body.rotation = [10, 10, 10];ret = object.body.rotation[1] == 10;// @expect(ret == true)
```

---

### scale

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界坐标系的缩放。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.scale[1] == 1;// @expect(ret == true)	object.body.scale = [10, 10, 10];ret = object.body.scale[1] == 10;// @expect(ret == true)
```

---

### matrix

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置变换矩阵。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.matrix[12] == 0;// @expect(ret == true)	object.body.matrix = THING.Math.mat4.fromTranslation([], [10, 10, 10]);ret = object.body.matrix[12] == 10;// @expect(ret == true)
```

---

### matrixWorld

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界变换矩阵。

#### 示例

```javascript
let object = new THING.Object3D();let ret = object.body.matrixWorld[12] == 0;// @expect(ret == true)	object.body.matrixWorld = THING.Math.mat4.fromTranslation([], [10, 10, 10]);ret = object.body.matrixWorld[12] == 10;// @expect(ret == true)
```

---

### nodes

**类型:** `member`

**数据类型:** `Array.<NodeObject>`

**描述:** 获取所有子节点, 并按节点深度排序

#### 示例

```javascript
let nodes = object.nodes;nodes.forEach(node => {	console.log(node.name); let pos = node.position; let angles = node.angles; let scale = node.scale; console.log(pos, angles, scale);});
```

---

### nodeNames

**类型:** `member`

**数据类型:** `Array.<string>`

**描述:** 获取子节点名称的集合,根据节点的层级深度排列

---

## 实例方法

### getLocalBoundingBox

**类型:** `function`

**描述:** 获取自身的包围盒

#### 返回值

- **类型:** `BoundingBoxResult`
- **描述:** 返回包围盒结果

#### 示例

```javascript
var object = new THING.Object3D();var boundingBox = object.body.getLocalBoundingBox();console.log(boundingBox);
```

---

### hasNode

**类型:** `function`

**描述:** 检查是否有子节点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 节点名称。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果有子节点返回true，否则返回false。

#### 示例

```javascript
let hasSubNode = bodyObject.hasNode('subNodeName');if (hasSubNode) {    console.log('存在子节点。');} else {    console.log('不存在子节点。');}
```

---

### getNodeByName

**类型:** `function`

**描述:** 根据名称获取子节点结果。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 节点名称。 |

#### 返回值

- **类型:** `NodeObject`
- **描述:** 返回一个NodeObject对象。

#### 示例

```javascript
let node = bodyObject.getNodeByName('subNodeName');if (node) {    console.log('找到子节点。');} else {    console.log('未找到子节点。');}
```

---

