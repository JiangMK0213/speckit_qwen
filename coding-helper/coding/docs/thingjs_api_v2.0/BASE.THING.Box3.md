# 类: Box3

**命名空间:** BASE.THING

**描述:** 空

## 实例属性

### min

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取最小位置。

#### 示例

```javascript
// 打印盒子的最小位置。console.log(box.min);
```

---

### max

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取最大位置。

#### 示例

```javascript
// 打印盒子的最大位置。console.log(box.max);
```

---

### center

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取中心位置。

#### 示例

```javascript
let box = new THING.Box3([10, 20, 40], [2, 3, 4]);	let center = box.boundingBox.center;	// @expect(center[0] == 10);	// @expect(center[1] == 20);	// @expect(center[2] == 40);
```

---

### halfSize

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取尺寸的一半

#### 示例

```javascript
let box = new THING.Box3([10, 20, 40], [2, 3, 4]);	let halfSize = box.halfSize;	// @expect(halfSize[0] == 2);	// @expect(halfSize[1] == 3);	// @expect(halfSize[2] == 4);
```

---

### size

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取尺寸

#### 示例

```javascript
let box = new THING.Box3([10, 20, 40], [2, 3, 4]);	let size = box.size;	// @expect(size[0] == 4);	// @expect(size[1] == 6);	// @expect(size[2] == 8);
```

---

### radius

**类型:** `member`

**数据类型:** `number`

**描述:** 获取半径

#### 示例

```javascript
// 创建一个盒子并获取其半径let box = new THING.Box3([10, 20, 30], [5, 5, 5]);let radius = box.radius;// 半径应该是盒子对角线长度的一半console.log(radius); // 约为 8.66
```

---

