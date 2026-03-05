# 类: NodeObject

**命名空间:** THING

**描述:** 从场景中的可渲染对象获取网格的子节点对象。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 初始参数。 |

## 实例属性

### up

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取世界空间中的上方向。

#### 示例

```javascript
// 获取节点在世界空间中的上方向let upDirection = nodeObject.up;
```

---

### forward

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取世界空间中的前方向。

#### 示例

```javascript
// 获取节点在世界空间中的前方向let forwardDirection = nodeObject.forward;
```

---

### cross

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取世界空间中的右方向。

#### 示例

```javascript
// 获取节点在世界空间中的右方向let rightDirection = nodeObject.cross;
```

---

### localPosition

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置本地位置。

#### 示例

```javascript
object.body.nodes[0].localPosition = [10, 10, 10];
```

---

### localQuaternion

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置本地四元数。

#### 示例

```javascript
object.body.nodes[0].localQuaternion = THING.Math.getQuatFromAngles([45, 45, 45]);
```

---

### localAngles

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置本地角度。

#### 示例

```javascript
object.body.nodes[0].localAngles = [45, 45, 45];
```

---

### localScale

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置本地缩放。

#### 示例

```javascript
object.body.nodes[0].localScale = [3, 3, 3];
```

---

### position

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界坐标

#### 示例

```javascript
object.body.nodes[0].position = [10, 10, 10];
```

---

### quaternion

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界四元数。

#### 示例

```javascript
object.body.nodes[0].quaternion = THING.Math.getQuatFromAngles([45, 45, 45]);
```

---

### angles

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界角度。

#### 示例

```javascript
object.body.nodes[0].angles = [45, 45, 45];
```

---

### rotation

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界旋转。

#### 示例

```javascript
object.body.nodes[0].rotation = [45, 45, 45];
```

---

### scale

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置缩放

#### 示例

```javascript
object.body.nodes[0].scale = [3, 3, 3];
```

---

### matrix

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置矩阵。

#### 示例

```javascript
object.body.nodes[0].matrix = THING.Math.composeToMat4([10, 10, 10], [0, 0, 0, 1], [2, 2, 2]);
```

---

### matrixWorld

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置世界矩阵。

#### 示例

```javascript
object.body.nodes[0].matrixWorld = THING.Math.composeToMat4([10, 10, 10], [0, 0, 0, 1], [2, 2, 2]);
```

---

### color

**类型:** `member`

**数据类型:** `string, Array.<number>`

**描述:** 获取/设置子节点材质的颜色。

#### 示例

```javascript
// 设置子节点材质的颜色为红色subNodeObject.color = [1, 0, 0]; // RGB
```

---

### opacity

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置子节点材质的不透明度。

#### 示例

```javascript
// 设置子节点材质的不透明度为0.5subNodeObject.opacity = 0.5;
```

---

### visible

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置子节点的可见性。

#### 示例

```javascript
// 设置子节点的可见性为falsesubNodeObject.visible = false;
```

---

### AABB

**类型:** `member`

**数据类型:** `THING.AABBResult`

**描述:** 获取AABB包围盒。

#### 示例

```javascript
let subObject = object.body.getNodeByName('MeshName')if(subObject){	 console.log(subObject.AABB)}
```

---

### OBB

**类型:** `member`

**数据类型:** `THING.OBBResult`

**描述:** 获取OBB包围盒。

#### 示例

```javascript
let subObject = object.body.getNodeByName('MeshName')if(subObject){	 console.log(subObject.OBB)}
```

---

### outlineColor

**类型:** `member`

**数据类型:** `array`

**描述:** 获取/设置子节点的勾边。

#### 示例

```javascript
// 设置子节点的勾边为[0,0,0]subNodeObject.outlineColor = [0,0,0];
```

---

### parentNode

**类型:** `member`

**描述:** 获取父节点

#### 返回值

- **类型:** `THING.NodeObject, null`
- **描述:** 返回父节点，如果不存在则返回null

---

## 实例方法

### localToSelf

**类型:** `function`

**描述:** 将本地坐标转换为自身坐标。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 本地坐标。 |
| `ignoreScale` | `boolean` | 是否忽略缩放因素。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** -

#### 示例

```javascript
// 将本地坐标转换为自身坐标，忽略缩放因素let localPosition = [1, 2, 3];let selfPosition = nodeObject.localToSelf(localPosition, true);
```

---

### selfToLocal

**类型:** `function`

**描述:** 将自身位置转换为本地位置。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 自身位置。 |
| `ignoreScale` | `boolean` | 是否忽略缩放因素。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** -

#### 示例

```javascript
// 将自身位置转换为本地位置，忽略缩放因素let selfPosition = [1, 2, 3];let localPosition = nodeObject.selfToLocal(selfPosition, true);
```

---

### worldToSelf

**类型:** `function`

**描述:** 将世界位置转换为自身位置。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 世界位置。 |
| `ignoreScale` | `boolean` | 是否忽略缩放因素。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** -

#### 示例

```javascript
// 将世界位置转换为自身位置，忽略缩放因素let worldPosition = [1, 2, 3];let selfPosition = nodeObject.worldToSelf(worldPosition, true);
```

---

### selfToWorld

**类型:** `function`

**描述:** 将自身位置转换为世界位置。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 自身位置。 |
| `ignoreScale` | `boolean` | 是否忽略缩放因素。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** -

#### 示例

```javascript
// 将自身位置转换为世界位置，忽略缩放因素let selfPosition = [1, 2, 3];let worldPosition = nodeObject.selfToWorld(selfPosition, true);
```

---

### localToWorld

**类型:** `function`

**描述:** 将相对位置转移给世界位置。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ignoreScale` | `boolean` | 是否忽略缩放因素。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** -

#### 示例

```javascript
// 将自身位置转换为世界位置，忽略缩放因素let selfPosition = [1, 2, 3];let worldPosition = nodeObject.localToWorld(selfPosition, true);
```

---

### worldToLocal

**类型:** `function`

**描述:** 将世界位置转换为本地位置。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 世界位置。 |
| `ignoreScale` | `boolean` | 是否忽略缩放因素。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** -

#### 示例

```javascript
// 将世界位置转换为本地位置，忽略缩放因素let worldPosition = [1, 2, 3];let localPosition = nodeObject.worldToLocal(worldPosition, true);
```

---

### rotateX

**类型:** `function`

**描述:** 绕X轴旋转节点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `angle` | `number` | 旋转角度（以角度为单位）。 |

#### 示例

```javascript
// 将节点绕X轴旋转45度nodeObject.rotateX(45);
```

---

### rotateY

**类型:** `function`

**描述:** 绕Y轴旋转节点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `angle` | `number` | 旋转角度（以角度为单位）。 |

#### 示例

```javascript
// 将节点绕Y轴旋转45度nodeObject.rotateY(45);
```

---

### rotateZ

**类型:** `function`

**描述:** 绕Z轴旋转节点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `angle` | `number` | 旋转角度（以角度为单位）。 |

#### 示例

```javascript
// 将节点绕Z轴旋转45度nodeObject.rotateZ(45);
```

---

