# 类: GeoGroundLineStyle

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
| param.url | `String` | - | 是 | 贴图路径 |
| param.width | `Number` | `5` | 是 | 宽度 |
| param.repeat | `Array.<Number>` | `[1,1]` | 是 | 贴图在 x 轴和 y 轴的重复次数，默认 [1, 1] |
| param.speed | `Number` | `0` | 是 | 流动速度 |
| param.gradient | `Object` | - | 是 | 渐变色 格式为 { '0': 'rgba(255,0,0,1)', '0.5': 'rgba(0,255,0,1)', '1.0': 'rgba(0,0,255,1)' } |
| param.growSpeed | `Number` | `0` | 是 | 生长速度 |
| param.growLoop | `String` | `Repeat` | 是 | 生长的循环方式 |

## 实例属性

### gradient

**类型:** `member`

**数据类型:** `Object`

**描述:** 设置/获取渐变色

---

### growSpeed

**类型:** `member`

**数据类型:** `Number`

**默认值:** `0`

**描述:** 获取/设置生长速度

---

### growLoop

**类型:** `member`

**数据类型:** `THING.LoopType`

**描述:** 获取/设置生长的循环方式 如果不设置则只生长一次

---

### speed

**类型:** `member`

**数据类型:** `Number`

**默认值:** `0`

**描述:** 空

---

### width

**类型:** `member`

**数据类型:** `Number`

**默认值:** `5`

**描述:** 获取/设置宽度

---

### repeat

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1]`

**描述:** 获取/设置贴图在 x 轴和 y 轴的重复次数

---

### url

**类型:** `member`

**数据类型:** `String`

**描述:** 获取/设置贴图资源地址

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

