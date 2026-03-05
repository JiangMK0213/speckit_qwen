# 类: GeoBuildingStyle

**命名空间:** THING.EARTH

**继承:** [THING.EARTH.GeoBaseStyle](./THING.EARTH.GeoBaseStyle.md)

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.opacity | `Number` | `1` | 是 | 不透明度,如果设置gradient,opacity仅影响顶面 |
| param.color | `Array.<Number>` | `[1,1,1]` | 是 | 叠加的颜色,如果设置gradient,color仅影响顶面 |
| param.depthWrite | `Boolean` | `true` | 是 | 是否写入深度 |
| param.depthTest | `Boolean` | `true` | 是 | 是否进行深度测试 |
| param.blending | `Boolean` | `false` | 是 | 是否混色 |
| param.lights | `Boolean` | `false` | 是 | 是否接受光照 |
| param.tailing | `Boolean` | `false` | 是 | 物体的拖尾效果(垂直发光) |
| param.radial | `Boolean` | `false` | 是 | 物体的屏幕径向拖尾效果(扩散发光) |
| param.effect | `Boolean` | `false` | 是 | 发光效果 |
| param.glowStrength | `Number` | `0.5` | 是 | 发光强度 |
| param.url | `Array.<String>, String` | - | 是 | 填充图片的路径 如果传数组 代表顶面和侧面的贴图 如果传一个路径 代表顶面侧面都用该贴图 |
| param.textureWrap | `TextureWrapMode` | `'RepeatY'` | 是 | 贴图模式 |
| param.textureSize | `Array.<Number>` | - | 是 | 纹理尺寸 单位米 数组 代表侧面x方向和y方向的贴图尺寸 |
| param.window | `WindowStyle` | - | 是 | 窗体效果 |
| param.sideType | `THING.SideType` | `THING.SideType.Front` | 是 | 正面/背面/双面渲染 |
| param.repeat | `Array.<Number>` | `[1,1]` | 是 | 重复度 数组 代表x方向和y方向的属性 |
| param.specularFactor | `Array.<Number>` | `[1,1]` | 是 | 高光强度 数组 代表顶面和侧面的属性 |
| param.envMap | `BaseTextureStyle` | - | 是 | 环境图(evnMap)样式 |
| param.aoMap | `BaseTextureStyle` | - | 是 | 环境光遮蔽贴图(aoMap)样式 |
| param.metalness | `Array.<Number>` | `[0.0,0.0]` | 是 | 金属度属性 材质像金属的程度 数组 代表顶面和侧面的属性 |
| param.roughness | `Array.<Number>` | `[1.0,1.0]` | 是 | 粗糙度属性 材质的粗糙程度 数组 代表顶面和侧面的属性 |
| param.gradient | `Object` | - | 是 | 渐变色 格式为 {0:'rgba(255,0,0,1)',0.5:'rgba(0,255,0,1)',1.0:'rgba(0,0,255,1)'}（也支持rgb) 设置gradient之后,侧面的贴图和颜色都会覆盖 |

## 实例属性

### envMap

**类型:** `member`

**数据类型:** `BaseTextureStyle`

**描述:** 获取/设置 环境图(envMap)的样式

#### 示例

```javascript
geoObject.style.envMap = {url:'../uGeo/envMap.png',intensity:1.0};
```

---

### aoMap

**类型:** `member`

**数据类型:** `BaseTextureStyle`

**描述:** 获取/设置 环境光遮蔽贴图(aoMap)的样式

#### 示例

```javascript
geoObject.style.aoMap = {url:'../uGeo/aoMap.png',intensity:0.85};
```

---

### window

**类型:** `member`

**数据类型:** `WindowStyle`

**描述:** 获取/设置 窗体的样式

---

### repeat

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1]`

**描述:** 获取/设置贴图在 x 轴和 y 轴的重复次数

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>, String`

**重写:** THING.EARTH.GeoBaseStyle#color

**描述:** 设置建筑/多边形的颜色 如果设置了style.gradient,color仅影响顶面

#### 示例

```javascript
geoObject.style.color = [1,0,0];//设置geoObject的颜色为红色
```

---

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**重写:** THING.EARTH.GeoBaseStyle#opacity

**描述:** 设置建筑/多边形的透明度 如果设置了style.gradient,opacity仅影响顶面

#### 示例

```javascript
geoObject.style.opacity = 0.5;//设置geoObject的透明度为0.5
```

---

### metalness

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0.0,0.0]`

**描述:** 设置金属度,第一个为顶面金属度，第二个为侧面金属度

#### 示例

```javascript
geoObject.style.metalness = [0.8,0.2];
```

---

### roughness

**类型:** `member`

**数据类型:** `Array.<Number>`

**描述:** 设置金属度,第一个为顶面粗糙度，第二个为侧面粗糙度

#### 示例

```javascript
geoObject.style.roughness = [0.0,0.8];
```

---

### specularFactor

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1]`

**描述:** 设置高光强度 [顶面,侧面]

#### 示例

```javascript
geoObject.style.specularFactor = [1,1];
```

---

### gradient

**类型:** `member`

**数据类型:** `Object`

**描述:** 渐变色 如果设置gradient会覆盖侧面的贴图和color格式为 {0:'rgba(255,0,0,1)',0.5:'rgba(0,255,0,1)',1.0:'rgba(0,0,255,1)'}（也支持rgb)

---

### sideType

**类型:** `member`

**数据类型:** `THING.SideType`

**默认值:** `THING.SideType.Back`

**重写:** THING.EARTH.GeoBaseStyle#sideType

**描述:** 设置对象正面/背面/双面渲染

#### 示例

```javascript
geoObject.style.sideType = THING.SideType.Back;
```

---

### textureWrap

**类型:** `member`

**数据类型:** `TextureWrapMode`

**默认值:** `RepeatY`

**描述:** 设置贴图循环方式，仅对GeoBuilding生效 Stretch 拉伸 RepeatY 高度方向平铺 Repeat 水平和高度方向均平铺

#### 示例

```javascript
geoObject.style.textureWrap = THING.EARTH.TextureWrapMode.RepeatY;
```

---

### textureSize

**类型:** `member`

**数据类型:** `Array`

**描述:** 纹理尺寸单位米 侧面贴图时会根据纹理尺寸去计算uv</br>在textureWrap为repeatY时 设置数组第二个参数生效 第一个参数无效

#### 示例

```javascript
geoObject.style.textureSize = [3,3];  // 设置贴图纹理尺寸为3*3m
```

---

### url

**类型:** `member`

**数据类型:** `String, Array.<String>`

**描述:** 贴图url 包括顶部的贴图和侧面的贴图 数组第一个代表顶部贴图，第二个代表侧面贴图 </br>如果不区分顶部和侧面，数组中就只有一个元素或者传一个字符串

#### 示例

```javascript
//设置楼顶部的贴图和侧面的贴图，第一个代表顶部贴图路径，第二个代表侧面的贴图路径geoObject.style.url = ['./temp/image1.png','./temp/image1.png'];
```

---

### speed

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0]`

**描述:** 贴图流动速度 [x轴流动速度,y轴流动速度]

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

