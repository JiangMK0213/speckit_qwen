# 类: GeoLabelStyle

**命名空间:** THING.EARTH

**继承:** [THING.EARTH.GeoBaseStyle](./THING.EARTH.GeoBaseStyle.md)

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | - |
| param.fontColor | `Array.<Number>` | `[0,0,0]` | 是 | 字体颜色 |
| param.fontSize | `Number` | `18` | 是 | 字体大小 |
| param.fontFamily | `String` | `Arial,Microsoft YaHei` | 是 | 字体名称 |
| param.offset | `Array.<Number>` | `[0,0]` | 是 | 像素级别的偏移量 |
| param.imagePadding | `Array.<Number>` | `[0,0]` | 是 | 文字在x轴和y轴的距离背景图空间大小 像素级别 |
| param.dropShadow | `Boolean` | `false` | 是 | 是否有阴影 |
| param.dropShadowColor | `Array.<Number>` | `[0,0,0]` | 是 | 阴影颜色 |
| param.keepSize | `Boolean` | `true` | 是 | 是否维持渲染大小不变 |
| param.useSpriteMaterial | `Boolean` | `true` | 是 | 是否使用精灵材质 |
| param.url | `String` | - | 是 | 背景图片的路径 |

## 实例属性

### keepSize

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否保持大小

#### 示例

```javascript
label.keepSize = true; //设置标注字体保持大小
```

---

### useSpriteMaterial

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否使用精灵材质

#### 示例

```javascript
label.style.useSpriteMaterial = true;
```

---

### alwaysOnTop

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否保持在最上层

#### 示例

```javascript
label.style.alwaysOnTop = true; //设置label保持在最上层
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

### offset

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0]`

**描述:** Label的偏移 [xOffset,yOffset] 像素级别 xOffset左负右正 yOffset上正下负

#### 示例

```javascript
label.style.offset = [0,20]; //点的标注向上偏移20单位
```

---

### fontSize

**类型:** `member`

**数据类型:** `Number`

**默认值:** `18`

**描述:** Label的字体大小 默认18

#### 示例

```javascript
label.style.fontSize = 12; //设置字体大小为12
```

---

### fontColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0,0]`

**描述:** 文字颜色

#### 示例

```javascript
label.style.fontColor = [1,0,0]; //设置标注颜色为红色
```

---

### fontFamily

**类型:** `member`

**数据类型:** `String`

**默认值:** `'Arial,Microsoft YaHei'`

**描述:** 字体名称

#### 示例

```javascript
label.style.fontFamily = '黑体'; //设置标注字体为黑体
```

---

### dropShadow

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 是否设置字体阴影

#### 示例

```javascript
label.style.dropShadow = true; //设置字体阴影
```

---

### dropShadowColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0,0]`

**描述:** 设置/获取 字体阴影颜色

#### 示例

```javascript
label.dropShadowColor = [1,0,0]; //设置字体阴影颜色为红色
```

---

### url

**类型:** `member`

**数据类型:** `String`

**描述:** 设置/获取标注背景图url

#### 示例

```javascript
label.style.url = '/uGeo/image/pop.png';//设置标注背景图url
```

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1,1]`

**重写:** THING.EARTH.GeoBaseStyle#color

**描述:** 叠加的颜色

#### 示例

```javascript
geoPoint.style.color = [1,0,0];//设置geoPoint填充色为红色
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

