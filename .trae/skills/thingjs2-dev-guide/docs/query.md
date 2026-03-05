# 查询模块详细指南

## 3. 查询

ThingJS 引擎通过 query 接口提供对象的查询功能，可以通过 app.query() 接口进行全局范围内的对象查询，也可以通过 obj.query() 接口在某个对象的子对象范围内进行局部查询，查询结果返回一个包含对象的选择器 Selector：

### 全局查询

全局查询是在场景中所有对象的范围内进行查询，app.query() 接口提供了多种接口查询对象的方式：

```javascript
// 按名字查，查询名字为 car01 的对象
app.queryByName('car01')

// 按id查，查询id为 100 的对象
app.queryById('100')

// 按类型查，查询类型为 Building 的对象
app.queryByType('Building')

// 按标签查，查询带有 Building 或 BuildingElement 标签的对象
app.queryByTags('Building | BuildingElement')

// 按标自定义属性查，userData中， 包含 '设备类型' 名称的对象
app.queryByUserData('设备类型')

// 按标自定义属性查，userData中， 包含 '设备类型' 名称，并且属性值为 '服务器' 的对象
app.queryByUserData('设备类型=服务器')

// 按照正则表达式查
const exp = new RegExp('car')
app.queryByRegExp(exp)
```

有些情况下，查询条件可能是由单个字符串组成的参数，所以 app.query() 接口还提供了使用单个字符串做条件的查询方式：

```javascript
app.query('car01') // 按名称
app.query('#100') // 按id
app.query('tags:or(Building | BuildingElement)') // 按tags
app.query('.Building') // 按类型查
app.query('[levelNumber]') // 按属性查
app.query('[userData/设备类型=服务器]') // 按用户自定义属性查

app.query(/car/) // 查询名称中含有字符串“car”的对象
app.query(/car|bus/) // 查询名称中含有字符串“car”、或含有字符串“bus”的对象

// 查询所有
app.query('*')
```

query 接口返回值可以再次调用 query，进行多条件查询：

```javascript
app.query('.Entity').query('[userData/品牌=IBM]')
```

### 局部查询

局部查询是指在某个对象的子对象范围内进行查询，通过 obj.query() 接口实现，接口的参数与 app.query() 一致，下面举一些例子，其中 building 是一个建筑对象：

```javascript
// 子对象查询，查询自定义属性中包含 '设备类型' 的子对象
obj.query('[userData/设备类型]')

// 查询建筑内的所有楼层
building.query('.Floor')

// 查询建筑内的所有对象
building.query('*')

// 查询建筑中大于2层的楼层 building.levelNumber>2
building.query('[levelNumber>2]')

// 查询建筑一层中的所有品牌为ABC的对象
building.floors[0].query('[userData/品牌=UINO]')
```

查询时，如果希望忽略某对象，可以设置对象的 queryable 属性为 false，这个对象就不会被查询到：

```javascript
obj.queryable = false
```

### 查询结果

query 的查询结果会返回一个选择器 Selector，选择器用来存储一批对象集合，选择器可以像数组一样访问，提供对象的批量注册事件、属性的批量设置等操作。

```javascript
// 获取查询结果的第一个元素
let obj = app.query('.Entity')[0]

// 循环选择器对象
let objs = app.query('.Entity')
for (let i = 0; i < objs.length; i++) {
  console.log(objs[i])
}
objs.forEach(function (obj) {
  console.log(obj.name)
})
```

对选择器中的所有对象，进行批量操作：

```javascript
app.query('car01').on('click', function (e) {
  console.log(e.object)
})
app.query('car01').visible = false
app.query('car01').style.color = '#FF0000'
```

选择器的增加和删除操作：

```javascript
// 查询结果操作
let result = app.query('car01')
app.query('car03').add(result)
app.query('.Entity').remove('car04')
```

除了通过query接口返回选择器，用户也可以直接创建一个选择器：

```javascript
// 自己创建选择器
let sel = new THING.Selector()
sel.push(obj)
```

选择器支持动态查询，当有场景中新增对象或删除对象时，选择器会根据查询条件进行自动更新：

```javascript
// 以动态查询的方式，收集 Box 类型的对象集合
let result = app.query('.Box', { dynamic: true })

// 创建选择器后，场景中新增两个 Box
let box1 = new THING.Box()
let box2 = new THING.Box({ position: [0, 3, 0] })

// 当最第二个对象创建完毕后，输出对象集合信息
box2.on(THING.EventType.Create, function () {
  console.log(result)
})
```

**注意**：Selector 采用了 Proxy 代理技术，这可以加快对象集合的存取速度。为便于直观观察对象集合的内容，请确保在浏览器的设置中启用 Enable custom formatters 选项（启用自定义格式化程序）。
