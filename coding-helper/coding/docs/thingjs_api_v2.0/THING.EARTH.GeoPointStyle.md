# 类: GeoPointStyle

**命名空间:** THING.EARTH

**继承:** [THING.EARTH.GeoBaseStyle](./THING.EARTH.GeoBaseStyle.md)

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | - |
| param.pointType | `String` | `Vector` | 是 | 点类型  支持图片(Image),模型(Model),矢量(Vector),Canvas |
| param.opacity | `Number` | `1` | 是 | 不透明度 |
| param.color | `Array.<Number>` | `[1,1,1]` | 是 | 叠加的颜色 |
| param.blending | `Boolean` | `false` | 是 | 是否混色 |
| param.tailing | `Boolean` | `false` | 是 | 物体的拖尾效果(垂直发光) |
| param.radial | `Boolean` | `false` | 是 | 物体的屏幕径向拖尾效果(扩散发光) |
| param.effect | `Boolean` | `false` | 是 | 发光效果 |
| param.glowStrength | `Number` | `0.5` | 是 | 发光强度 |
| param.url | `String` | - | 是 | 贴图或者模型的路径 |
| param.autoFitBodyScale | `Boolean` | `true` | 是 | 自动调节自身尺寸大小以适应图片宽高比 |
| param.canvas | `Canvas` | - | 是 | 如果pointType为Canvas 需要传一个canvas对象 |
| param.vectorType | `String` | `Circle` | 是 | pointType为Vector时 需传入矢量类型 矢量图标的形状，目前有Circle(圆形),Triangle(三角形),Rectangle(正方形),Cross(十字) |
| param.lineColor | `String, Array.<Number>` | `[0,0,1]` | 是 | 边框颜色 如果vectorType为Cross 设置该参数代表十字的颜色 |
| param.useSpriteMaterial | `Boolean` | `true` | 是 | 是否使用精灵材质 默认true 只有初始化时可以设置，true代表图片会随摄影机转动 false则不会 |
| param.alwaysOnTop | `Boolean` | `true` | 是 | pointType!=Model时 设置物体是否始终在最前端渲染显示 |
| param.lineWidth | `Number` | `2` | 是 | pointType=Vector时 边框宽度 如果vectorType为Cross 设置该参数代表十字的宽度 |
| param.lineOpacity | `Number` | `1.0` | 是 | pointType=Vector时 边框不透明度 |
| param.keepSize | `Boolean` | `true` | 是 | pointType!=Model时 是否保持像素大小 |
| param.rotateSpeed | `Number` | `0` | 是 | pointType!=Model时 旋转速度 |
| param.size | `Number` | `1` | 是 | Image Vector或者Canvas尺寸是一个number,模型尺寸是一个数组,代表xyz轴的缩放倍数 |
| param.animationLoopType | `LoopType` | - | 是 | pointType=Model时 动画循环方式 THING.LoopType.Repeat、THING.LoopType.PingPong |
| param.animationName | `String` | - | 是 | pointType=Model时 动画名称 |
| param.animationSpeed | `Number` | `1` | 是 | pointType=Model时 播放动画的速度 |
| param.playAnimation | `Boolean` | `false` | 是 | pointType=Model时 是否播动画 |

## 实例属性

### pointType

**类型:** `member`

**数据类型:** `String`

**默认值:** `Vector`

**描述:** 点类型 支持图片(Image),模型(Model),矢量(Vector),Canvas

---

### url

**类型:** `member`

**数据类型:** `String`

**描述:** pointType为Image或Model时，图片或者模型的url

#### 示例

```javascript
geoPoint.style.pointType = 'Image';//设置geoPoint渲染类型为图片geoPoint.style.url = '/uGeo/image/pop.png';//设置图片url
```

---

### alwaysOnTop

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 设置物体是否始终在最前端渲染显示 pointType为Model时不生效

#### 示例

```javascript
geoPoint.style.pointType = 'Vector';//设置geoPoint渲染类型为矢量geoPoint.style.alwaysOnTop = true;//设置物体始终在最前端渲染显示 即不会被其他物体遮挡
```

---

### useSpriteMaterial

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 是否使用精灵材质 默认true 只有初始化时可以设置，设置之后图片不会随摄影机转动

---

### rotateSpeed

**类型:** `member`

**数据类型:** `Number`

**默认值:** `0`

**描述:** 旋转速度 pointType为Vector Image Canvas时生效

#### 示例

```javascript
geoPoint.style.pointType = 'Image';//设置geoPoint渲染类型为图片geoPoint.style.rotateSpeed = 2;//设置图片自身的旋转速度
```

---

### size

**类型:** `member`

**数据类型:** `Number, Array.<Number>`

**默认值:** `1`

**描述:** 尺寸

#### 示例

```javascript
geoPoint.style.size = 2;//设置缩放比例为2 对于pointType为Image,Vector和Canvas 长宽等比缩放 对于model 长宽高等比缩放 也可以设置一个数组代表xyz三个轴方向的缩放
```

---

### keepSize

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否保持像素大小不变 pointType为Vector Image或者Canvas时生效

#### 示例

```javascript
geoPoint.style.pointType = 'Image';//设置geoPoint渲染类型为图片geoPoint.style.keepSize = true;//设置图片保持像素大小不变，图片大小不随地图放大缩小而改变
```

---

### canvas

**类型:** `member`

**数据类型:** `Canvas`

**描述:** pointType为Canvas时渲染用到的Canvas对象

---

### playAnimation

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** pointType为Model时 是否播放动画

---

### animationName

**类型:** `member`

**数据类型:** `String`

**描述:** pointType为Model时 动画名

---

### animationSpeed

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** pointType为Model时 动画播放速度

---

### animationLoopType

**类型:** `member`

**数据类型:** `LoopType`

**描述:** pointType为Model时 动画循环方式

---

### lineColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**描述:** pointType为Vector时，代表边框颜色

#### 示例

```javascript
geoPoint.style.pointType = 'Vector';//设置geoPoint渲染类型为矢量geoPoint.style.lineColor = [1,0,0]//设置geoPoint填充色为红色
```

---

### lineOpacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 边框填充色不透明度 仅在pointType为Vector情况下生效

#### 示例

```javascript
geoItem.style.lineOpacity = 1; //将不透明度设置为1
```

---

### lineWidth

**类型:** `member`

**数据类型:** `Number`

**描述:** pointType为Vector时，代表边框宽度

#### 示例

```javascript
geoPoint.style.type = 'Vector';//设置geoPoint渲染类型为矢量geoPoint.style.lineWidth = 2;//设置geoPoint边框宽度为2
```

---

### vectorType

**类型:** `member`

**数据类型:** `String`

**描述:** GeoPoint的pointType为vector时，矢量图标的类型 支持Circle,Rectangle,Triangle,Cross

#### 示例

```javascript
geoPoint.style.pointType = 'Vector';//设置geoPoint渲染类型为矢量geoPoint.style.vectorType = 'Circle';//设置geoPoint使用圆形填充
```

---

### effect

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**继承:** THING.EARTH.GeoBaseStyle#effect

**重写:** THING.EARTH.GeoBaseStyle#effect

**描述:** 获取/设置 发光效果

#### 示例

```javascript
geoObject.style.effect = true; //开启发光效果
```

---

### glowStrength

**类型:** `member`

**数据类型:** `Number`

**默认值:** `0.5`

**继承:** THING.EARTH.GeoBaseStyle#glowStrength

**重写:** THING.EARTH.GeoBaseStyle#glowStrength

**描述:** 获取/设置发光强度

---

### tailing

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**继承:** THING.EARTH.GeoBaseStyle#tailing

**重写:** THING.EARTH.GeoBaseStyle#tailing

**描述:** 开启/关闭物体的拖尾效果(垂直发光)

---

### radial

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**继承:** THING.EARTH.GeoBaseStyle#radial

**重写:** THING.EARTH.GeoBaseStyle#radial

**描述:** 开启/关闭物体的屏幕径向拖尾效果(扩散发光)

---

### depthTest

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**继承:** THING.EARTH.GeoBaseStyle#depthTest

**重写:** THING.EARTH.GeoBaseStyle#depthTest

**描述:** 获取/设置是否进行深度测试

---

### depthWrite

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**继承:** THING.EARTH.GeoBaseStyle#depthWrite

**重写:** THING.EARTH.GeoBaseStyle#depthWrite

**描述:** 获取/设置是否写入深度

---

### blending

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**继承:** THING.EARTH.GeoBaseStyle#blending

**重写:** THING.EARTH.GeoBaseStyle#blending

**描述:** 开启/关闭混色

#### 示例

```javascript
geoObject.style.blending = true;
```

---

### lights

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**继承:** THING.EARTH.GeoBaseStyle#lights

**重写:** THING.EARTH.GeoBaseStyle#lights

**描述:** 获取/设置是否接受光照

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1,1]`

**继承:** THING.EARTH.GeoBaseStyle#color

**重写:** THING.EARTH.GeoBaseStyle#color

**描述:** 叠加的颜色

#### 示例

```javascript
geoPoint.style.color = [1,0,0];//设置geoPoint填充色为红色
```

---

### outlineColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**继承:** THING.EARTH.GeoBaseStyle#outlineColor

**重写:** THING.EARTH.GeoBaseStyle#outlineColor

**描述:** 勾边颜色

#### 示例

```javascript
geoPoint.style.outlineColor = [1,0,0];//设置geoPoint红色勾边geoPoint.style.outlineColor = null;//取消勾边
```

---

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**继承:** THING.EARTH.GeoBaseStyle#opacity

**重写:** THING.EARTH.GeoBaseStyle#opacity

**描述:** 获取/设置透明度

#### 示例

```javascript
geoItem.style.opacity = 1; //将不透明度设置为1
```

---

### sideType

**类型:** `member`

**数据类型:** `THING.SideType`

**默认值:** `THING.SideType.Back`

**继承:** THING.EARTH.GeoBaseStyle#sideType

**重写:** THING.EARTH.GeoBaseStyle#sideType

**描述:** 设置对象正面/背面/双面渲染

#### 示例

```javascript
geoObject.style.sideType = THING.SideType.Back;
```

---

