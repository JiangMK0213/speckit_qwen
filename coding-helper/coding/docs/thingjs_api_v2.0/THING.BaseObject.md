# 类: BaseObject

**命名空间:** THING

**继承:** [THING.BaseComponentGroup](./THING.BaseComponentGroup.md)

**描述:** 构造函数

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 初始化BaseObject的属性 |
| param.name | `string` | `''` | 是 | 物体名称 |
| param.id | `string` | `''` | 是 | 物体id |
| param.uuid | `string` | - | 是 | 物体唯一标识 如果不传底层会自动生成一个唯一的字符串作为唯一标识 |
| param.userData | `object` | - | 是 | 设置/获取 物体的自定义属性 |
| param.queryabled | `boolean` | `true` | 是 | 物体是否可被查询 默认true |
| param.destroyable | `boolean` | `true` | 是 | 物体是否可被销毁 默认true |

## 实例属性

### app

**类型:** `member`

**数据类型:** `THING.App`

**描述:** 获取app对象

#### 示例

```javascript
let object = new THING.BaseObject();let app = object.app;let ret = app == THING.App.current;// @expect(ret == true)
```

---

### type

**类型:** `member`

**数据类型:** `string`

**描述:** 获取类型

#### 示例

```javascript
let object = new THING.BaseObject();let type = object.type;// @expect(type == 'BaseObject')
```

---

### dtType

**类型:** `member`

**数据类型:** `string`

**描述:** 设置/获取 孪生体类型

#### 示例

```javascript
let object = new THING.BaseObject();object.dtType = 'Equipment';// @expect(object.dtType == 'Equipment')
```

---

### name

**类型:** `member`

**数据类型:** `string`

**描述:** 设置/获取 物体名称

#### 示例

```javascript
let object = new THING.BaseObject();// @expect(object.name == '');object.name = 'car';// @expect(object.name == 'car');
```

---

### id

**类型:** `member`

**数据类型:** `string`

**描述:** 设置/获取 物体id

#### 示例

```javascript
let object = new THING.BaseObject();object.id = 'DEVICE_007';// @expect(object.id == 'DEVICE_007')
```

---

### uuid

**类型:** `member`

**数据类型:** `string`

**描述:** 设置/获取 物体的唯一标识

#### 示例

```javascript
let object = new THING.BaseObject({uuid: 10000});// @expect(object.uuid == 10000)object.uuid = THING.Math.generateUUID();// @expect(object.id != 10000)
```

---

### tags

**类型:** `member`

**数据类型:** `Set.<string>`

**描述:** 设置/获取 物体标签

#### 示例

```javascript
// Get tags	let tags = object.tags; console.log(tags); // Set tags by array object.tags = ['one','two','three']; // Set tags by set object.tags = new Set(['one','two','three']);
```

---

### userData

**类型:** `member`

**数据类型:** `object`

**描述:** 设置/获取 物体的自定义属性

#### 示例

```javascript
let object = new THING.BaseObject();object.userData['Notebook'] = {	name: 'FlyingCar',	price: 100};let name = object.userData['Notebook'].name;// @expect(name == 'FlyingCar')let price = object.userData['Notebook'].price// @expect(price == 100)
```

---

### destroyable

**类型:** `member`

**数据类型:** `boolean`

**描述:** 设置/获取 对象是否可以被销毁

#### 示例

```javascript
let object = new THING.BaseObject();object.destroyable = true;// @expect(object.destroyable == true)
```

---

### queryable

**类型:** `member`

**数据类型:** `boolean`

**描述:** 设置/获取 对象是否可以被查询

#### 示例

```javascript
let object = new THING.BaseObject();object.name = 'Hidden';let ret = app.query('Hidden');// @expect(ret[0].name = 'Hidden')object.queryable = false;ret = app.query('Hidden');// @expect(ret.length = 0)
```

---

### parent

**类型:** `member`

**数据类型:** `THING.BaseObject`

**描述:** 设置/获取 父物体

#### 示例

```javascript
let parent = new THING.BaseObject(); let child = new THING.BaseObject({parent: parent});	let ret = child.parent == parent;	// @expect(ret == true);
```

---

### relationships

**类型:** `member`

**数据类型:** `Array.<THING.Relationship>`

**描述:** 设置/获取 关系

#### 示例

```javascript
let object = new THING.Object3D();let source = new THING.Object3D();let target = new THING.Object3D();let relationship = new THING.Relationship({     type: 'control',     source: source,     target: target});object.addRelationship(relationship);let ret = object.relationships[0].type == 'control';// @expect(ret == true)
```

---

### parents

**类型:** `member`

**数据类型:** `THING.Selector`

**描述:** 获取所有的祖先(父物体,父物体的父物体等,直到查询到根节点--app.root)

#### 示例

```javascript
let box1 = new THING.Box();	let box2 = new THING.Box({parent: box1});	let parents = box2.parents; // @expect(parents.length == 2);
```

---

### brothers

**类型:** `member`

**数据类型:** `THING.Selector`

**描述:** 获取兄弟节点(同级节点)

#### 示例

```javascript
let box1 = new THING.Box();	let box2 = new THING.Box({parent: box1});	let box3 = new THING.Box({parent: box1});	let brothers = box3.brothers; // @expect(brothers.length == 1);
```

---

### children

**类型:** `member`

**数据类型:** `THING.Selector`

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

**重写:** THING.BaseComponentGroup#components

**描述:** 获取所有组件

#### 示例

```javascript
let obj = new THING.BaseObject();;obj.addComponent(new THING.BaseComponent(), 'component1');obj.addComponent(new THING.BaseComponent(), 'component2');// @expect(obj.components.size == 2)
```

---

## 实例方法

### hasAttribute

**类型:** `function`

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

### add

**类型:** `function`

**描述:** 添加一个BaseObject作为自己的孩子

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 待添加的BaseObject |
| `options` | `object` | 参数 主要是子类定义 |

#### 返回值

- **类型:** `boolean`
- **描述:** 返回一个布尔值，表示是否添加成功

#### 示例

```javascript
let parent = new THING.BaseObject();let child = new THING.BaseObject();parent.add(child);let ret = child.isChildOf(parent); // @expect(ret == true);
```

---

### remove

**类型:** `function`

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

