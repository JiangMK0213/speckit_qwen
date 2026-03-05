# 类: LayerCollection

**命名空间:** THING.EARTH

**继承:** [THING.Selector](./THING.Selector.md)

**描述:** 空

## 实例属性

### length

**类型:** `member`

**数据类型:** `number`

**继承:** THING.Selector#length

**重写:** THING.Selector#length

**描述:** 获取/设置对象的数量。

#### 示例

```javascript
let length = selector.length;
```

---

### visible

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Selector#visible

**重写:** THING.Selector#visible

**描述:** 设置所有对象及其子对象的可见状态。

#### 示例

```javascript
// 将选择器中所有对象及其子对象的可见属性设置为trueselector.visible = true;
```

---

### pickable

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Selector#pickable

**重写:** THING.Selector#pickable

**描述:** 设置所有对象及其子对象的可选状态。

#### 示例

```javascript
// 将选择器中所有对象及其子对象的可选属性设置为trueselector.pickable = true;
```

---

### active

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.Selector#active

**重写:** THING.Selector#active

**描述:** 设置所有对象及其子对象的激活状态。

#### 示例

```javascript
// 将选择器中所有对象及其子对象的激活状态设置为trueselector.active = true;
```

---

## 实例方法

### remove

**类型:** `function`

**重写:** THING.Selector#remove

**描述:** 空

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `layer` | `Layer` | 要移除的图层对象 |

#### 返回值

- **类型:** `Boolean`
- **描述:** -

---

### removeAll

**类型:** `function`

**描述:** 空

---

### add

**类型:** `function`

**重写:** THING.Selector#add

**描述:** 空

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `layer` | `Layer` | 要添加的图层对象 |

#### 返回值

- **类型:** `Promise.<{object:Layer}>`
- **描述:** }

---

### queryByRegExp

**类型:** `function`

**继承:** THING.Selector#queryByRegExp

**重写:** THING.Selector#queryByRegExp

**描述:** 使用正则表达式查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `RegExp` | 选择对象的条件，作为正则表达式。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let car = selector.queryByRegExp(/car/);let ret = car.length != 0;// @expect(ret == true)
```

---

### queryByTags

**类型:** `function`

**继承:** THING.Selector#queryByTags

**重写:** THING.Selector#queryByTags

**描述:** 根据标签查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 选择对象的条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let car = selector.queryByTags('Entity');let ret = car.length != 0;// @expect(ret == true)
```

---

### queryByName

**类型:** `function`

**继承:** THING.Selector#queryByName

**重写:** THING.Selector#queryByName

**描述:** 根据名称查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 选择对象的条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let car = selector.queryByName('car1');let ret = car.length != 0 && car[0].name == 'car1';// @expect(ret == true)
```

---

### queryByUUID

**类型:** `function`

**继承:** THING.Selector#queryByUUID

**重写:** THING.Selector#queryByUUID

**描述:** 根据UUID查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 选择对象的条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let car = selector.queryByUUID('1605');let ret = car.length != 0 && car[0].uuid == '1605';// @expect(ret == true)
```

---

### queryById

**类型:** `function`

**继承:** THING.Selector#queryById

**重写:** THING.Selector#queryById

**描述:** 根据id查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 选择对象的条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let car = selector.queryById('car01');let ret = car.length != 0 && car[0].id == 'car01';// @expect(ret == true)
```

---

### queryByType

**类型:** `function`

**继承:** THING.Selector#queryByType

**重写:** THING.Selector#queryByType

**描述:** 根据类型查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 选择对象的条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let entitys = selector.queryByType('Entity');let ret = entitys.length != 0 && entitys[0].type == 'Entity';// @expect(ret == true)
```

---

### queryByDTType

**类型:** `function`

**继承:** THING.Selector#queryByDTType

**重写:** THING.Selector#queryByDTType

**描述:** 根据孪生体类型查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 选择对象的条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let equipment = selector.queryByDTType('Equipment');let ret = equipment.length != 0 && equipment[0].dtType == 'Equipment';// @expect(ret == true)
```

---

### queryByUserData

**类型:** `function`

**继承:** THING.Selector#queryByUserData

**重写:** THING.Selector#queryByUserData

**描述:** 根据userData查询子对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 选择对象的条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象数组。 |
| `target` | `THING.Selector` | 目标选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含查询结果的选择器实例。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let car = selector.queryByUserData('id="666"')let ret = car.length != 0 && car[0].userData.id == '666';// @expect(ret == true)
```

---

### find

**类型:** `function`

**继承:** THING.Selector#find

**重写:** THING.Selector#find

**描述:** 根据条件查找对象并返回第一个对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象。 |

#### 返回值

- **类型:** `THING.BaseObject`
- **描述:** 返回第一个对象。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let entity = selector.find('.Entity')let ret = entity instanceof THING.Entity;;// @expect(ret == true)
```

---

### findIndex

**类型:** `function`

**继承:** THING.Selector#findIndex

**重写:** THING.Selector#findIndex

**描述:** 根据条件查找对象并返回第一个对象的索引。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string, RegExp, function` | 条件。 |
| `objects` | `Array.<THING.BaseObject>` | 要查询的对象。 |

#### 返回值

- **类型:** `number`
- **描述:** 返回找到的对象的索引，如果未找到则返回 -1。

#### 示例

```javascript
let objects = app.query('.BaseObject');let selector = new THING.Selector(objects);let index = selector.findIndex('.Entity');// @expect(index >= 0);
```

---

### every

**类型:** `function`

**继承:** THING.Selector#every

**重写:** THING.Selector#every

**描述:** 遍历所有对象并执行回调函数。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `function` | 回调函数。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果所有对象都满足条件，则返回true，否则返回false。

#### 示例

```javascript
selector.every(object => {    return object.isVisible; // 检查每个对象是否可见});
```

---

### flat

**类型:** `function`

**继承:** THING.Selector#flat

**重写:** THING.Selector#flat

**描述:** 使用flat将对象数组扁平化。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `depth` | `number` | 深度，默认为1。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 扁平化后的新选择器。

#### 示例

```javascript
let flatSelector = selector.flat();console.log(flatSelector);
```

---

### flatMap

**类型:** `function`

**继承:** THING.Selector#flatMap

**重写:** THING.Selector#flatMap

**描述:** 使用flatMap遍历对象并返回一个新选择器。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `function` | 回调函数。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 新选择器，包含回调函数返回的结果。

#### 示例

```javascript
let results = selector.flatMap(object => {    return object.children; // 返回每个对象的子对象});
```

---

### push

**类型:** `function`

**继承:** THING.Selector#push

**重写:** THING.Selector#push

**描述:** 将对象推入数组。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `args` | `THING.BaseObject, Array.<THING.BaseObject>, THING.Selector` | 要推入的对象。 |

#### 返回值

- **类型:** `number`
- **描述:** 推入对象后的数组长度。

#### 示例

```javascript
let objects = app.query('.Entity');let selector = new THING.Selector(objects);let count1 = selector.length;let object = new THING.BaseObject();let count2 = selector.push(object);let ret = count2 - count1 == 1;// @expect(ret == true)
```

---

### not

**类型:** `function`

**继承:** THING.Selector#not

**重写:** THING.Selector#not

**描述:** 根据条件删除对象，并返回包含结果的新选择器。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `string` | 条件。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含结果的选择器实例。

#### 示例

```javascript
// 通过删除选择器/对象返回新的选择器let objects = selector.not([obj1, obj2, obj3]);console.log(objects);
```

---

### clear

**类型:** `function`

**继承:** THING.Selector#clear

**重写:** THING.Selector#clear

**描述:** 清空对象。

#### 示例

```javascript
let objects = app.query('.Entity');let selector = new THING.Selector(objects);selector.clear();let ret = count == 0;// @expect(ret == true)
```

---

### forEach

**类型:** `function`

**继承:** THING.Selector#forEach

**重写:** THING.Selector#forEach

**描述:** 遍历对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `OnTraverseObjectsInSelector` | 回调函数（返回false表示中断遍历，否则继续处理）。 |

#### 示例

```javascript
// 遍历选择器中的所有对象selector.forEach((object) => {	console.log(object);});
```

---

### forEachAsync

**类型:** `function`

**继承:** THING.Selector#forEachAsync

**重写:** THING.Selector#forEachAsync

**描述:** 异步模式下遍历对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `OnTraverseObjectsInSelector` | 回调函数（返回false表示中断遍历，否则继续处理）。 |

#### 示例

```javascript
// 对象逐个飞行（会等待前一个对象飞行完成后再开始）selector.forEachAsync(object => {	return THING.App.current.camera.flyToAsync({		target: object,		duration: 1 * 1000,		distance: 10,		delayTime: THING.Math.randomFloat(0, 1000),		complete: function (ev) {		}	});});
```

---

### map

**类型:** `function`

**继承:** THING.Selector#map

**重写:** THING.Selector#map

**描述:** 遍历对象并返回一个新的选择器。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `OnMapObjectsInSelector` | 回调函数。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回包含结果的选择器实例。

#### 示例

```javascript
// 返回每个对象的第一个子对象let objects = selector.map((object) => {	return object.children[0];});
```

---

### some

**类型:** `function`

**继承:** THING.Selector#some

**重写:** THING.Selector#some

**描述:** some 检查是否至少有一个对象满足提供的条件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `function` | 回调函数。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果至少有一个对象满足条件，则返回true，否则返回false。

#### 示例

```javascript
selector.some(object => {    return object.isVisible; // 检查是否至少有一个对象可见});
```

---

### reduce

**类型:** `function`

**继承:** THING.Selector#reduce

**重写:** THING.Selector#reduce

**描述:** 在选择器中执行用户提供的"reducer"回调函数，按顺序对数组的每个元素进行计算，并传入前一个元素的计算结果。在数组的所有元素上运行reducer的最终结果是一个单一的值。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `OnReduceObjectsInSelector` | 回调函数。 |
| `initialValue` | `number` | 初始值。 |

#### 返回值

- **类型:** `number`
- **描述:** 返回计算结果。

#### 示例

```javascript
// 获取实体的平均高度let entities = app.query('.Entity');let height = entities.reduce((value, entity) => {	return value + entity.position[1];}, 0) / entities.length;
```

---

### slice

**类型:** `function`

**继承:** THING.Selector#slice

**重写:** THING.Selector#slice

**描述:** 返回指定范围内的元素。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `start` | `number` | 起始索引。 |
| `end` | `number` | 结束索引。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回一个新的选择器，包含指定范围内的元素。

#### 示例

```javascript
// 返回 [1, 4] 范围内的对象let objects1 = selector.slice(1, 4);// 返回 [1, ...] 范围内的对象let objects2 = selector.slice(1);
```

---

### filter

**类型:** `function`

**继承:** THING.Selector#filter

**重写:** THING.Selector#filter

**描述:** 筛选对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `OnFilterObjectsInSelector` | 回调函数。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回一个新的选择器，包含通过回调函数筛选后的对象。

#### 示例

```javascript
// 根据名称筛选对象let objects = selector.filter((object) => {	return !!object.name;});
```

---

### sort

**类型:** `function`

**继承:** THING.Selector#sort

**重写:** THING.Selector#sort

**描述:** 按照回调函数的结果，从低到高对对象进行排序。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `callback` | `OnSortObjectsInSelector` | 用于排序的回调函数。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回排序后的选择器实例。

#### 示例

```javascript
// 按照名称对对象进行排序selector.sort((obj1, obj2) => {	return obj1.name.localeCompare(obj2.name);})
```

---

### toArray

**类型:** `function`

**继承:** THING.Selector#toArray

**重写:** THING.Selector#toArray

**描述:** 转换为数组（返回一个新的数组）。

#### 返回值

- **类型:** `Array.<THING.BaseObject>`
- **描述:** 返回一个包含选择器中所有对象的新数组。

#### 示例

```javascript
// 获取/转换为数组模式的对象let objects = selector.objects;console.log(objects);
```

---

### includes

**类型:** `function`

**继承:** THING.Selector#includes

**重写:** THING.Selector#includes

**描述:** 检查是否包含指定元素。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `object` | 对象。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果选择器包含指定对象，则返回true，否则返回false。

#### 示例

```javascript
// 检查是否包含指定对象let exists = selector.includes(object);
```

---

### indexOf

**类型:** `function`

**继承:** THING.Selector#indexOf

**重写:** THING.Selector#indexOf

**描述:** 获取对象在数组中的索引。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `object` | 对象。 |

#### 返回值

- **类型:** `number`
- **描述:** 对象在选择器中的索引，如果对象不存在，则返回-1。

#### 示例

```javascript
// 获取对象在选择器中的索引let index = selector.indexOf(object);
```

---

### splice

**类型:** `function`

**继承:** THING.Selector#splice

**重写:** THING.Selector#splice

**描述:** 删除对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 起始索引。 |
| `number` | `number` | 要删除的对象数量。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 被删除的对象。

#### 示例

```javascript
// 删除 [1, 4] 范围内的对象let removeObjects = selector.splice(1, 4);
```

---

### insert

**类型:** `function`

**继承:** THING.Selector#insert

**重写:** THING.Selector#insert

**描述:** 按索引插入对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 要插入的索引。 |
| `object` | `THING.BaseObject` | 要插入的对象。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回当前选择器实例，用于链式调用。

#### 示例

```javascript
// 在选择器的开头插入对象selector.insert(0, [obj1, obj2]);
```

---

### removeAt

**类型:** `function`

**继承:** THING.Selector#removeAt

**重写:** THING.Selector#removeAt

**描述:** 移除指定索引处的对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index` | `number` | 要移除的对象的索引。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回当前选择器实例，用于链式调用。

#### 示例

```javascript
// 移除选择器中的第一个对象。selector.removeAt(0);
```

---

### swap

**类型:** `function`

**继承:** THING.Selector#swap

**重写:** THING.Selector#swap

**描述:** 交换指定索引处的对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `index0` | `number` | 第一个对象的索引。 |
| `index1` | `number` | 第二个对象的索引。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回当前选择器实例，用于链式调用。

#### 示例

```javascript
// 交换选择器中索引为0和索引为3的对象。selector.swap(0, 3);
```

---

### concat

**类型:** `function`

**继承:** THING.Selector#concat

**重写:** THING.Selector#concat

**描述:** 合并数组。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `selector` | `THING.Selector, Array.<THING.BaseObject>` | 对象数组或选择器。 |

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回一个新的选择器实例，包含合并后的对象。

#### 示例

```javascript
// 将其他对象/选择器与当前选择器合并并创建新的选择器。let newSelector = selector.concat([obj1, obj2]);
```

---

### reverse

**类型:** `function`

**继承:** THING.Selector#reverse

**重写:** THING.Selector#reverse

**描述:** 反转对象。

#### 返回值

- **类型:** `THING.Selector`
- **描述:** 返回当前选择器实例，用于链式调用。

#### 示例

```javascript
// 反转选择器中的对象。selector.reverse();
```

---

### has

**类型:** `function`

**继承:** THING.Selector#has

**重写:** THING.Selector#has

**描述:** 检查是否包含指定对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `object` | 对象。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果选择器包含指定对象，则返回true，否则返回false。

#### 示例

```javascript
// 检查选择器是否包含指定对象。let exists = selector.has(object);
```

---

### equals

**类型:** `function`

**继承:** THING.Selector#equals

**重写:** THING.Selector#equals

**描述:** 检查是否为相同的选择器。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `objects` | `Array.<object>, THING.Selector` | 对象数组或选择器。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果当前选择器与传入的对象数组或选择器相同，则返回true，否则返回false。

#### 示例

```javascript
let isSame = selector.equals([obj1, obj2]);
```

---

### makeInstancedDrawing

**类型:** `function`

**继承:** THING.Selector#makeInstancedDrawing

**重写:** THING.Selector#makeInstancedDrawing

**描述:** 将对象设置为实例化绘制模式。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 如果为true，则启用实例化绘制模式。 |
| `options` | `object` | 选项。 |

#### 示例

```javascript
// 启用对象的实例化绘制selector.makeInstancedDrawing(true);// 禁用对象的实例化绘制selector.makeInstancedDrawing(false);
```

---

### getInstancedDrawingObjects

**类型:** `function`

**继承:** THING.Selector#getInstancedDrawingObjects

**重写:** THING.Selector#getInstancedDrawingObjects

**描述:** 获取启用实例化绘制的对象。

#### 返回值

- **类型:** `Array.<THING.BaseObject>`
- **描述:** 启用实例化绘制的对象数组。

#### 示例

```javascript
// 获取启用实例化绘制的对象let instancedDrawingObjects = selector.getInstancedDrawingObjects();
```

---

### setVisible

**类型:** `function`

**继承:** THING.Selector#setVisible

**重写:** THING.Selector#setVisible

**描述:** 设置可见状态。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 如果为true，则显示，否则隐藏。 |
| `recursive` | `boolean` | 如果为true，则对所有子对象进行处理。 |

#### 示例

```javascript
// 将选择器中所有对象的可见属性设置为trueselector.setVisible(true);// 将选择器中所有对象及其子对象的可见属性设置为trueselector.setVisible(true, true);
```

---

### waitForComplete

**类型:** `function`

**继承:** THING.Selector#waitForComplete

**重写:** THING.Selector#waitForComplete

**描述:** 等待所有对象加载完成。

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** 返回一个Promise，resolve时传入已加载完成的对象数组。

#### 示例

```javascript
// 等待所有对象加载完成，然后打印它们的名称selector.waitForComplete().then((objects) => {	objects.forEach(object => {		console.log(object.name);	});});
```

---

### destroy

**类型:** `function`

**继承:** THING.Selector#destroy

**重写:** THING.Selector#destroy

**描述:** 销毁所有对象。

#### 示例

```javascript
selector.destroy();
```

---

### loadResource

**类型:** `function`

**继承:** THING.Selector#loadResource

**重写:** THING.Selector#loadResource

**描述:** 加载资源。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `options` | `object` | 加载选项。 |

#### 示例

```javascript
selector.loadResource();
```

---

### unloadResource

**类型:** `function`

**继承:** THING.Selector#unloadResource

**重写:** THING.Selector#unloadResource

**描述:** 卸载资源。

#### 示例

```javascript
selector.unloadResource();
```

---

### on

**类型:** `function`

**继承:** THING.Selector#on

**重写:** THING.Selector#on

**描述:** 注册所有对象事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。 |
| `callback` | `function` | 回调函数。 |
| `tag` | `string` | 事件标签。 |
| `priority` | `number` | 优先级值（默认为0，值越高越先处理）。 |
| `options` | `ObjectEventOptions` | 选项。 |

#### 示例

```javascript
// 注册所有实体的'click'事件监听器let mark = 0;let entity = new THING.Entity();entity.on('test', ()=> {   mark = 1;})let selector = new THING.Selector([entity]);let markOn = 0;selector.on('testOn', function(ev) {		markOn = 1;});selector.trigger('testOn');// @expect(markOn == 1 && mark == 1);
```

---

### once

**类型:** `function`

**继承:** THING.Selector#once

**重写:** THING.Selector#once

**描述:** 注册所有对象事件，只触发一次。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。 |
| `callback` | `function` | 回调函数。 |
| `tag` | `string` | 事件标签。 |
| `priority` | `number` | 优先级值（默认为0，值越高越先处理）。 |
| `options` | `ObjectEventOptions` | 选项。 |

#### 示例

```javascript
// 注册所有实体的'click'事件监听器let mark = 0;let entity = new THING.Entity();entity.on('test', ()=> {   mark = 1;})let selector = new THING.Selector([entity]);let markOnce = 0;selector.once('testOnce', function(ev) {		markOnce = 1;});selector.trigger('testOnce');// @expect(markOnce == 1 && mark == 1);markOnce = 0;mark = 0;selector.trigger('testOnce');// @expect(markOnce == 0 && mark == 0);
```

---

### off

**类型:** `function`

**继承:** THING.Selector#off

**重写:** THING.Selector#off

**描述:** 注销所有对象事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。 |
| `tag` | `string` | 事件标签。 |

#### 示例

```javascript
// 通过标签名注销所有具有'click'事件监听器的实体let mark = 0;let entity = new THING.Entity();entity.on('test', ()=> {   mark = 1;})let selector = new THING.Selector([entity]);let markOff = 0;selector.on('testOff', function(ev) {		markOff = 1;});selector.trigger('testOff');// @expect(markOff == 1 && mark == 1);markOff = 0;mark = 0;selector.off('testOff');selector.trigger('testOff');// @expect(markOff == 0 && mark == 0);
```

---

### pauseEvent

**类型:** `function`

**继承:** THING.Selector#pauseEvent

**重写:** THING.Selector#pauseEvent

**描述:** 暂停所有对象的事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。 |
| `tag` | `string` | 事件标签。 |

#### 示例

```javascript
// 通过标签名暂停所有具有'click'事件监听器的实体let mark = 0;let entity = new THING.Entity();entity.on('test', ()=> {   mark = 1;})let selector = new THING.Selector([entity]);let markPause = 0;selector.on('testPause', function(ev) {		markPause = 1;});selector.trigger('testPause');// @expect(markPause == 1 && mark == 1);markPause = 0;mark = 0;selector.PauseEvent('testPause');selector.trigger('testPause');// @expect(markPause == 0 && mark == 0);
```

---

### resumeEvent

**类型:** `function`

**继承:** THING.Selector#resumeEvent

**重写:** THING.Selector#resumeEvent

**描述:** 恢复所有对象的事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `condition` | `string` | 选择对象的条件。 |
| `tag` | `string` | 事件标签。 |

#### 示例

```javascript
// 通过标签名恢复所有具有'click'事件监听器的实体let mark = 0;let entity = new THING.Entity();entity.on('test', ()=> {   mark = 1;})let selector = new THING.Selector([entity]);let markResume = 0;selector.on('testPause', function(ev) {		markResume = 1;});selector.trigger('testPause');// @expect(markResume == 1 && mark == 1);markResume = 0;mark = 0;selector.PauseEvent('testPause');selector.trigger('testPause');// @expect(markResume == 0 && mark == 0);selector.resumeEvent('testPause');selector.trigger('testPause');// @expect(markResume == 1 && mark == 1);
```

---

### trigger

**类型:** `function`

**继承:** THING.Selector#trigger

**重写:** THING.Selector#trigger

**描述:** 触发所有对象的事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `ev` | `object` | 事件信息。 |
| `options` | `object` | 选项。 |
| `options.tag` | `string` | 标签名称。 |

#### 示例

```javascript
// 通过标签名触发所有具有'click'事件监听器的实体let mark = 0;let entity = new THING.Entity();entity.on('test', ()=> {   mark = 1;})let selector = new THING.Selector([entity]);selector.trigger('test');// @expect(mark == 1)
```

---

### invoke

**类型:** `function`

**继承:** THING.Selector#invoke

**重写:** THING.Selector#invoke

**描述:** 触发所有对象的事件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 事件类型。 |
| `ev` | `object` | 事件信息。 |
| `options` | `object` | 选项。 |
| `options.tag` | `string` | 标签名称。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** 返回一个Promise对象，包含所有对象的事件触发结果。

---

### getBoundingBox

**类型:** `function`

**继承:** THING.Selector#getBoundingBox

**重写:** THING.Selector#getBoundingBox

**描述:** 获取轴对齐的边界框（AABB）。

#### 返回值

- **类型:** `THING.Box3`
- **描述:** -

#### 示例

```javascript
let selector = new THING.Selector();let box = selector.getBoundingBox();let ret = box.size[0] == 0;// @expect(ret == true);
```

---

