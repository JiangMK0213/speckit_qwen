# 类: TileLayerStyle

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| tilelayer | `THING.EARTH.TileLayer` | - | 否 | 要应用样式的瓦片图层 |
| param | `Object` | - | 否 | 参数列表 |
| param.template | `THING.EARTH.TileLayerEffect` | `TileLayerEffect.Normal` | 是 | 样式名称 支持TileLayerEffect.DarkBlue,TileLayerEffect.DarkGreen,TileLayerEffect.Normal,TileLayerEffect.CustomColor |
| param.customColor | `Array.<Number>` | `[1,1,1]` | 是 | 当template==TileLayerEffect.CustomColor时生效，代表瓦片图上的一层颜色滤镜，格式为[r,g,b] |
| param.brightness | `Number` | `1.0` | 是 | 瓦片图亮度设置默认1.0 |
| param.contrast | `Number` | `1.0` | 是 | 瓦片对比度默认1.0 |
| param.hue | `Number` | `0.0` | 是 | 瓦片色调默认0.0 |
| param.saturation | `Number` | `1.0` | 是 | 瓦片饱和度默认1.0 |
| param.grayFilterEnable | `Boolean` | `false` | 是 | 是否允许灰度滤镜,仅当template==TileLayerEffect.CustomColor时生效 |
| param.grayFilterGradient | `Object` | `{0:'rgba(0,0,0,1)', 0.5: 'rgba(125,125,125,1)', 1.0: 'rgba(255,255,255,1)'}` | 是 | grayFilterEnable为true时生效 默认值{0:'rgba(0,0,0,1)', 0.5: 'rgba(125,125,125,1)', 1.0: 'rgba(255,255,255,1)' } |
| param.gamma | `Number` | `1.0` | 是 | 瓦片伽马值默认1.0 |

## 实例属性

### template

**类型:** `member`

**数据类型:** `TileLayerEffect`

**描述:** 瓦片样式模板,TileLayerEffect.DarkBlue,TileLayerEffect.DarkGreen,TileLayerEffect.Normal,TileLayerEffect.CustomColor

#### 示例

```javascript
tileLayer.style.template = THING.EARTH.TileLayerEffect.DarkBlue;//瓦片样式调为深蓝
```

---

### grayFilterGradient

**类型:** `member`

**数据类型:** `Object`

**描述:** 瓦片滤镜色带

#### 示例

```javascript
tileLayer.style.grayFilterGradient = {0: 'rgba(255,255,0,1)', 0.5: 'rgba(0,0,125,1)', 1: 'rgba(0,255,255,1)'};
```

---

### customColor

**类型:** `member`

**数据类型:** `Array`

**默认值:** `[1, 1, 1]`

**描述:** 瓦片图层滤镜颜色,仅当tileStyle==TileLayerEffect.CustomColor时生效,格式为[r,g,b]

#### 示例

```javascript
tileLayer.style.template = THING.EARTH.TileLayerEffect.CustomColor;tileLayer.style.customColor = [1,0,0];//瓦片添加红色滤镜
```

---

### grayFilterEnable

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 瓦片图层灰度滤镜 开关,仅当tileStyle==TileLayerEffect.CustomColor时生效

---

### brightness

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 瓦片亮度,默认值是1.0

#### 示例

```javascript
tileLayer.style.brightness = 0.5;//瓦片亮度调为0.5
```

---

### contrast

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 对比度

#### 示例

```javascript
tileLayer.style.contrast = 0.5;//瓦片对比度调为0.5
```

---

### hue

**类型:** `member`

**数据类型:** `Number`

**描述:** 瓦片色调，默认为0

#### 示例

```javascript
tileLayer.style.hue = 0.5;//瓦片色调设置为0.5
```

---

### gamma

**类型:** `member`

**数据类型:** `number`

**默认值:** `1.0`

**描述:** 瓦片gamma值

#### 示例

```javascript
tileLayer.style.gamma = 0.5;//瓦片伽马值设置为0.5
```

---

### saturation

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 瓦片饱和度

#### 示例

```javascript
tileLayer.style.saturation = 0.5;//瓦片饱和度设置为0.5
```

---

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 瓦片透明度

---

