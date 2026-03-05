# 类: GeoDiffusionStyle

**命名空间:** THING.EARTH

**继承:** [THING.EARTH.GeoBaseStyle](./THING.EARTH.GeoBaseStyle.md)

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | - |
| param.opacity | `Number` | `1` | 是 | 不透明度 |
| param.color | `Array.<Number>` | `[1,1,1]` | 是 | 叠加的颜色 |
| param.blending | `Boolean` | `false` | 是 | 是否混色 |
| param.tailing | `Boolean` | `false` | 是 | 物体的拖尾效果(垂直发光) |
| param.radial | `Boolean` | `false` | 是 | 物体的屏幕径向拖尾效果(扩散发光) |
| param.effect | `Boolean` | `false` | 是 | 发光效果 |
| param.glowStrength | `Number` | `0.5` | 是 | 发光强度 |
| param.type | `GeoDiffusionType` | `THING.EARTH.GeoDiffusionType.TextureRotate` | 是 | 扩散类型 THING.EARTH.GeoDiffusionType.Cylinder,THING.EARTH.GeoDiffusionType.TextureRotate,THING.EARTH.GeoDiffusionType.TextureScale |
| param.url | `String` | - | 是 | 贴图路径 |
| param.speed | `Number` | `1` | 是 | 扩散速度 |
| param.radius | `Number` | `500` | 是 | 扩散圆半径 |
| param.extrudeHeight | `Number` | `300` | 是 | 扩散高度 type=THING.EARTH.GeoDiffusionType.Cylinder时生效 |
| param.startPosition | `Number` | `0` | 是 | 扩散开始的位置(0~1) type=THING.EARTH.GeoDiffusionType.TextureScale时生效 |
| param.endPosition | `Number` | `1` | 是 | 扩散结束的位置(0~1)  type=THING.EARTH.GeoDiffusionType.TextureScale时生效 |
| param.alphaGradient | `Object` | - | 是 | 扩散的透明度曲线 例如{0:0.0,0.5:1,1:0.0} key代表扩散到的位置 value代表此时的透明度 type=THING.EARTH.GeoDiffusionType.TextureScale时生效 |
| param.linePositionRatio | `Number` | `0` | 是 | 扩散边框扫面线在扫描圆的位置(0~1)type=THING.EARTH.GeoDiffusionType.TextureScale时生效 |
| param.lineColor | `Array.<Number>` | `[1,1,1]` | 是 | 扩散边框扫面线的颜色 type=THING.EARTH.GeoDiffusionType.TextureScale时生效 |
| param.lineOpacity | `Number` | `1` | 是 | 扩散边框扫面线的透明度(0~1) type=THING.EARTH.GeoDiffusionType.TextureScale时生效 |
| param.lineWidthRatio | `Number` | `0.01` | 是 | 扩散边框扫面线宽占扩散圆半径的比例 type=THING.EARTH.GeoDiffusionType.TextureScale时生效 |
| param.lerpType | `LerpType` | `THING.LerpType.Linear.None` | 是 | 扫描速度变化曲线 |

## 实例属性

### type

**类型:** `member`

**数据类型:** `GeoDiffusionType`

**描述:** 扫光类型 THING.EARTH.GeoDiffusionType.Cylinder,THING.EARTH.GeoDiffusionType.TextureRotate,THING.EARTH.GeoDiffusionType.TextureScale

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1,1]`

**重写:** THING.EARTH.GeoBaseStyle#color

**描述:** 叠加的颜色

#### 示例

```javascript
geoPoint.style.color = [1,0,0];// 设置填充色为红色
```

---

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**重写:** THING.EARTH.GeoBaseStyle#opacity

**描述:** 获取/设置透明度

#### 示例

```javascript
geoItem.style.opacity = 1; //将不透明度设置为1
```

---

### url

**类型:** `member`

**数据类型:** `String`

**描述:** 获取/设置扫光使用的贴图纹理 type为THING.EARTH.GeoDiffusionType.TextureRotate或THING.EARTH.GeoDiffusionType.TextureScale时生效

---

### radius

**类型:** `member`

**数据类型:** `Number`

**描述:** 获取/设置扫光半径 单位米

---

### lerpType

**类型:** `member`

**数据类型:** `LerpType`

**描述:** 获取/设置扫光速度变化曲线

---

### speed

**类型:** `member`

**数据类型:** `Number`

**描述:** 获取/设置扫光速度 type为THING.EARTH.GeoDiffusionType.TextureScale时生效

---

### lineOpacity

**类型:** `member`

**数据类型:** `Number`

**描述:** 获取/设置边线透明度 type为THING.EARTH.GeoDiffusionType.TextureScale时生效

---

### lineColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**描述:** 空

---

### linePositionRatio

**类型:** `member`

**数据类型:** `Number`

**描述:** 空

---

### lineWidthRatio

**类型:** `member`

**数据类型:** `Number`

**描述:** 空

---

### startPosition

**类型:** `member`

**数据类型:** `Number`

**描述:** 空

---

### endPosition

**类型:** `member`

**数据类型:** `Number`

**描述:** 空

---

### alphaGradient

**类型:** `member`

**数据类型:** `Object`

**描述:** 空

#### 示例

```javascript
geoObject.renderer.alphaGradient = { 0:0,0.5:1,1:0};
```

---

### extrudeHeight

**类型:** `member`

**数据类型:** `Number`

**描述:** 空

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

