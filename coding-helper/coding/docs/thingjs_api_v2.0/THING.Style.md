# 类: Style

**命名空间:** THING

**继承:** [THING.RefCountObject](./THING.RefCountObject.md)

**描述:** 对象的样式，可以改变对象的颜色、轮廓颜色等。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| modifier | `object` | - | 否 | 修改器。 |

## 实例属性

### blendingType

**类型:** `member`

**数据类型:** `BlendingType`

**描述:** 设置/获取 叠加类型

#### 示例

```javascript
style.blendingType = THING.BlendingType.Additive;
```

---

### sideType

**类型:** `member`

**数据类型:** `SideType`

**描述:** 设置/获取 正面|背面|双面渲染

#### 示例

```javascript
style.sideType = THING.SideType.Double;
```

---

### transparent

**类型:** `member`

**数据类型:** `boolean`

**描述:** 设置/获取 是否透明(即我们平时说的透明物体还是不透明物体,渲染排序时这两种物体在不同的队列中)如果transparent为false,即便设置透明度,或者对象是用的贴图是透明的,仍然没有透明效果

#### 示例

```javascript
style.transparent = true;
```

---

### wireframe

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否开启线框模式(绘制时使用组成mesh的三角面线框)

#### 示例

```javascript
style.wireframe = true;
```

---

### depthTest

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否开启深度测试

#### 示例

```javascript
style.depthTest = true;
```

---

### depthWrite

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否写入深度

#### 示例

```javascript
style.depthWrite = true;
```

---

### envMapping

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否开启环境贴图

#### 示例

```javascript
style.envMapping = true;
```

---

### imageSlotType

**类型:** `member`

**数据类型:** `ImageSlotType`

**描述:** 设置当前的纹理类型,主要在设置纹理参数时使用

#### 示例

```javascript
style.imageSlotType = THING.ImageSlotType.Map;
```

---

### image

**类型:** `member`

**数据类型:** `HTMLCanvasElement, THING.ImageTexture, string`

**描述:** 设置/获取当前贴图类型下的图片资源 (支持Canvas元素,THING.ImageTexture,url)

#### 示例

```javascript
style.image = new THING.ImageTexture('path/to/texture.png');
```

---

### map

**类型:** `member`

**数据类型:** `THING.ImageTexture`

**描述:** 设置/获取 基础纹理

#### 示例

```javascript
// 设置基础纹理style.map = new THING.ImageTexture('path/to/texture.png');
```

---

### envMap

**类型:** `member`

**数据类型:** `THING.ImageTexture`

**描述:** 设置/获取 环境光纹理

#### 示例

```javascript
// 设置环境光纹理style.envMap = new THING.ImageTexture('path/to/envMap.png');
```

---

### alphaMap

**类型:** `member`

**数据类型:** `THING.ImageTexture`

**描述:** 设置/获取 透明纹理

#### 示例

```javascript
// 设置透明纹理style.alphaMap = new THING.ImageTexture('path/to/alphaMap.png');
```

---

### emissiveMap

**类型:** `member`

**数据类型:** `THING.ImageTexture`

**描述:** 设置/获取 自发光纹理

#### 示例

```javascript
// 设置自发光纹理style.emissiveMap = new THING.ImageTexture('path/to/emissiveMap.png');
```

---

### normalMap

**类型:** `member`

**数据类型:** `THING.ImageTexture`

**描述:** 设置/获取 法线纹理

#### 示例

```javascript
// 设置法线纹理style.normalMap = new THING.ImageTexture('path/to/normalMap.png');
```

---

### colorMapping

**类型:** `member`

**数据类型:** `THING.ImageTexture`

**描述:** 设置/获取 颜色映射纹理

#### 示例

```javascript
// 设置颜色映射纹理style.colorMapping = new THING.ImageTexture('path/to/colorMapping.png');
```

---

### aoMap

**类型:** `member`

**数据类型:** `THING.ImageTexture`

**描述:** 设置/获取 环境光遮蔽纹理

#### 示例

```javascript
// 设置环境光遮蔽纹理style.aoMap = new THING.ImageTexture('path/to/aoMap.png');
```

---

### uv

**类型:** `member`

**数据类型:** `StyleUVMatrixResult`

**描述:** 设置/获取 纹理坐标矩阵

#### 示例

```javascript
// 获取当前纹理坐标矩阵let uvMatrix = style.uv;// 设置纹理坐标矩阵style.uv = {  offset: [0, 0],  repeat: [1, 1],  center: [0, 0],  rotation: 0};
```

---

### opacity

**类型:** `member`

**数据类型:** `number, StyleValueOperationCallback`

**描述:** 设置/获取 不透明度 如果该属性是一个方法,将该方法发返回值作为不透明度

#### 示例

```javascript
// 设置不透明度为0.5style.opacity = 0.5;// 使用函数设置不透明度style.opacity = function(baseValue) {  return baseValue * 0.5;};
```

---

### color

**类型:** `member`

**数据类型:** `number, string, Array.<number>, StyleColorOperationCallback`

**描述:** 设置/获取 颜色值 如果该属性是一个方法,将该方法发返回值作为颜色值

#### 示例

```javascript
// 设置颜色为红色style.color = [1, 0, 0]; // RGB// 使用函数设置颜色style.color = function(baseValue) {  return [baseValue[0], baseValue[1], baseValue[2]];};
```

---

### metalness

**类型:** `member`

**数据类型:** `number, StyleValueOperationCallback`

**描述:** 设置/获取 金属度 如果该属性是一个方法,将该方法发返回值作为金属度</br>取值范围0~1 具有较高金属度的材质表面通常具有金属的光泽和反射特性</br>可以控制材质表面的反射特性，从而影响光照效果和最终的视觉呈现

#### 示例

```javascript
// 设置金属度为0.8style.metalness = 0.8;// 使用函数设置金属度style.metalness = function(baseValue) {  return baseValue * 0.8;};
```

---

### roughness

**类型:** `member`

**数据类型:** `number, StyleValueOperationCallback`

**描述:** 设置/获取 粗糙度 如果该属性是一个方法,将该方法发返回值作为粗糙度</br>取值范围0~1 具有较高粗糙度的材质表面通常是不规则、粗糙和光滑度较低的，如砂纸、混凝土等材质。</br>可以控制材质表面的细节和光滑程度，从而影响光照效果和最终的视觉呈现</br>

#### 示例

```javascript
// 设置粗糙度为0.6style.roughness = 0.6;// 使用函数设置粗糙度style.roughness = function(baseValue) {  return baseValue * 0.6;};
```

---

### emissive

**类型:** `member`

**数据类型:** `number, string, Array.<number>, StyleColorOperationCallback`

**描述:** 设置/获取 自发光颜色值 值越高,颜色越亮(越白)

#### 示例

```javascript
// 设置自发光颜色为白色style.emissive = [1, 1, 1]; // RGB// 使用函数设置自发光颜色style.emissive = function(baseValue) {  return [baseValue[0], baseValue[1], baseValue[2]];};
```

---

### outlineColor

**类型:** `member`

**数据类型:** `number, string, Array.<number>`

**描述:** 设置/获取 勾边颜色

#### 示例

```javascript
// 设置勾边颜色为黑色style.outlineColor = [0, 0, 0]; // RGB
```

---

### clippingPlanes

**类型:** `member`

**数据类型:** `Array.<THING.ClippingPlanes>`

**描述:** 设置/获取 裁剪平面 在范围内的片元会被裁剪

#### 示例

```javascript
let clippingPlanes = [	{ direction: [0, -1, 0], height: 10 }, // top	{ direction: [0, 1, 0], height: 10 }, // bottom	{ direction: [-1, 0, 0], height: 10 }, // right	{ direction: [1, 0, 0], height: 10 }, // left	{ direction: [0, 0, -1], height: 10 }, // front	{ direction: [0, 0, 1], height: 10 } // back];let clippingPlanesObject = new THING.ClippingPlanes({	parent: object,	planes: clippingPlanes,});object.query('*', { includeSelf: true }).style.clippingPlanes = clippingPlanesObject;
```

---

### edge

**类型:** `member`

**数据类型:** `StyleEdgeResult`

**描述:** 设置/获取 边框效果

#### 示例

```javascript
// 设置边框效果style.edge = {	enable: true, // 是否开启边框	color: [1, 1, 1], // 边框颜色	opacity: 1, // 边框不透明度	glow: false, // 边框是否开启发光效果	thresholdAngle: 0.5 // 边框阈值角度};
```

---

### effect

**类型:** `member`

**数据类型:** `StyleEffectResult`

**描述:** 设置/获取 物体级后期配置 需配合app.camera.effect中的属性配置生效

#### 示例

```javascript
// 设置物体级后期配置style.effect = {	glow: true, // 是否开启发光效果	innerGlow: true, // 是否开启内发光效果	lineBloom: true, // 是否开启线性发光效果	tailing: true, // 是否开启拖尾效果	radial: true, // 是否开启扩散效果	ghosting: true // 是否开启残影效果};
```

---

## 实例方法

### beginDefaultValues

**类型:** `function`

**描述:** Begin to set default values.

#### 示例

```javascript
style.beginDefaultValues();
```

---

### endDefaultValues

**类型:** `function`

**描述:** End to set default values.

#### 示例

```javascript
style.endDefaultValues();
```

---

