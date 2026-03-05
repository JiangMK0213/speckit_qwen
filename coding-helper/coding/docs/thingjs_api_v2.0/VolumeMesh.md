# 类: VolumeMesh

**描述:** 体积网格。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | - |
| param.data | `object` | - | 否 | 剪辑形状数据 {position: [x, y, z, x1, y1, y2, .... ], index: [1 ,2, 3, ...]} |
| param.alphaThreshold | `number` | - | 否 | 默认值 0 范围 0 - 1 |
| param.opacity | `number` | - | 否 | 默认值 0 范围 0 - 1 |
| param.unitDistanceOpacity | `number` | - | 否 | 默认值 1.2 范围 0 - 10 |
| param.mixType | `string` | - | 否 | 混合类型 "mix" 或 "normal" 默认值 "normal" |
| param.colorRampTexture | `ImageTexture` | - | 否 | 颜色渐变纹理 |
| param.ValueAffectsOpacity | `boolean` | - | 否 | 值是否影响透明度 默认值 true |
| param.volumeSize | `Array` | - | 否 | 体积大小 [x, y, z] |
| param.volumeOffset | `Array` | - | 否 | 体积偏移 [x, y, z] |
| param.volumeRotation | `Array` | - | 否 | 体积旋转 [x, y, z] |
| param.particleRadius | `number` | - | 否 | 粒子半径 默认值 0.7 |
| param.particleDensity | `number` | - | 否 | 粒子密度 默认值 1.6 |
| param.isParticleBased | `boolean` | - | 否 | 是否粒子化 默认值 true |

## 实例属性

### opacity

**类型:** `member`

**数据类型:** `boolean`

**描述:** 网格不透明度（默认值 1，范围 0 - 1）。

---

### mixType

**类型:** `member`

**数据类型:** `string`

**描述:** 此对象与场景颜色的混合方法（混合类型为 mix 或 "normal"，默认值为 "normal"）

---

### alphaThreshold

**类型:** `member`

**数据类型:** `number`

**描述:** Alpha 阈值，低于此值的项将被裁剪（默认值 0，范围 0 - 1）

---

### unitDistanceOpacity

**类型:** `member`

**数据类型:** `number`

**描述:** 每单位距离内的透明度（默认值 1.2，范围 0 - 10）

---

### valueOpacityEnable

**类型:** `member`

**数据类型:** `boolean`

**描述:** 对象渲染数据是否影响透明度（默认值为 true）

---

## 实例方法

### setData

**类型:** `function`

**描述:** 设置体积数据

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `object` | 体积数据对象 |
| `object.data` | `object` | 包含体积数据的详细信息 |
| `object.data.radius` | `number` | 体积的半径 |
| `object.data.type` | `string` | 体积数据的类型，支持 'temperature' 和其他类型 |

---

