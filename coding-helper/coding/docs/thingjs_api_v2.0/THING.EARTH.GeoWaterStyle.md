# 类: GeoWaterStyle

**命名空间:** THING.EARTH

**继承:** [GeoStyle](./GeoStyle.md)

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.opacity | `Number` | `1` | 是 | 不透明度 |
| param.color | `Array.<Number>` | `[1,1,1]` | 是 | 叠加的颜色 |
| param.depthWrite | `Boolean` | `true` | 是 | 是否写入深度 |
| param.depthTest | `Boolean` | `true` | 是 | 是否进行深度测试 |
| param.blending | `Boolean` | `false` | 是 | 是否混色 |
| param.lights | `Boolean` | `false` | 是 | 是否接受光照 |
| param.tailing | `Boolean` | `false` | 是 | 物体的拖尾效果(垂直发光) |
| param.radial | `Boolean` | `false` | 是 | 物体的屏幕径向拖尾效果(扩散发光) |
| param.effect | `Boolean` | `false` | 是 | 发光效果 |
| param.glowStrength | `Number` | `0.5` | 是 | 发光强度 |
| param.metalness | `Number` | `0.0` | 是 | 金属度 |
| param.roughness | `Number` | `0.2` | 是 | 粗糙度 |
| param.normalMap | `BaseTextureStyle` | - | 是 | 法线纹理(normalMap)样式 |
| param.envMap | `BaseTextureStyle` | - | 是 | 环境图(envMap)样式 |
| param.waveAmplitude | `Number` | `1` | 是 | 波幅 |

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

### normalMap

**类型:** `member`

**数据类型:** `BaseTextureStyle`

**描述:** 获取/设置 法线纹理(envMap)的样式

#### 示例

```javascript
geoObject.style.normalMap = {url:'../uGeo/normal.png',repeat:[100,100],speed:[1,0]};//设置水面法线纹理url 重复度以及流速
```

---

### metalness

**类型:** `member`

**数据类型:** `Number`

**默认值:** `0.0`

**描述:** 获取/设置 金属度

#### 示例

```javascript
geoObject.style.metalness = 1.0;
```

---

### roughness

**类型:** `member`

**数据类型:** `Number`

**默认值:** `0.2`

**描述:** 获取/设置 粗糙度

#### 示例

```javascript
geoObject.style.roughness = 0.0;
```

---

### waveAmplitude

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 获取/设置 波幅

---

