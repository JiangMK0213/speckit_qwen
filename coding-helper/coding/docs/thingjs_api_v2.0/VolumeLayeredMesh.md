# 类: VolumeLayeredMesh

**描述:** 分层体积网格，用于创建具有多层结构的体积效果。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 配置参数 |
| param.width | `number` | - | 否 | 体积宽度（默认值1） |
| param.height | `number` | - | 否 | 体积高度（默认值1） |
| param.depth | `number` | - | 否 | 体积深度（默认值1） |
| param.layerCount | `number` | - | 否 | 分层数量（默认值10） |
| param.opacityFactor | `number` | - | 否 | 透明度因子（默认值0.5） |
| param.diskSize | `Array` | - | 否 | 圆片大小 [x, y]（默认值[0.008, 0.008]） |
| param.diskSpacing | `Array` | - | 否 | 圆片间距 [x, y]（默认值[0.002, 0.002]） |
| param.valueRange | `Array` | - | 否 | 值范围 [min, max]（默认值[0, 1]） |
| param.platteTexture | `THING.ImageTexture` | - | 否 | 调色板纹理 |
| param.densityTexture | `THING.ImageTexture` | - | 否 | 密度纹理 |

## 实例属性

### colorRampTexture

**类型:** `member`

**描述:** 设置颜色渐变纹理

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `texture` | `THING.ImageTexture` | 颜色渐变纹理 |

---

### colorRampTexture

**类型:** `member`

**描述:** 获取当前颜色渐变纹理

#### 返回值

- **类型:** `THING.ImageTexture`
- **描述:** 当前颜色渐变纹理

---

### densityTexture

**类型:** `member`

**描述:** 设置密度纹理

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `texture` | `THING.ImageTexture` | 密度纹理 |

---

### densityTexture

**类型:** `member`

**描述:** 获取当前密度纹理

#### 返回值

- **类型:** `THING.ImageTexture`
- **描述:** 当前密度纹理

---

### layerCount

**类型:** `member`

**描述:** 设置分层数量

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `count` | `number` | 分层数量 |

---

### layerCount

**类型:** `member`

**描述:** 获取当前分层数量

#### 返回值

- **类型:** `number`
- **描述:** 当前分层数量

---

### layerRandom

**类型:** `member`

**描述:** 设置分层随机值

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `number` | 随机值（范围0-1） |

---

### layerRandom

**类型:** `member`

**描述:** 获取当前分层随机值

#### 返回值

- **类型:** `number`
- **描述:** 当前分层随机值

---

### diskSize

**类型:** `member`

**描述:** 设置圆片大小

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array` | 圆片大小 [x, y] |

---

### diskSize

**类型:** `member`

**描述:** 获取当前圆片大小

#### 返回值

- **类型:** `Array`
- **描述:** 当前圆片大小 [x, y]

---

### diskSpacing

**类型:** `member`

**描述:** 设置圆片间距

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array` | 圆片间距 [x, y] |

---

### diskSpacing

**类型:** `member`

**描述:** 获取当前圆片间距

#### 返回值

- **类型:** `Array`
- **描述:** 当前圆片间距 [x, y]

---

### valueRange

**类型:** `member`

**描述:** 设置值范围

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Array` | 值范围 [min, max] |

---

### valueRange

**类型:** `member`

**描述:** 获取当前值范围

#### 返回值

- **类型:** `Array`
- **描述:** 当前值范围 [min, max]

---

### opacityFactor

**类型:** `member`

**描述:** 设置透明度因子

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `number` | 透明度因子（默认值 0.5） |

---

### opacityFactor

**类型:** `member`

**描述:** 获取当前透明度因子

#### 返回值

- **类型:** `number`
- **描述:** 当前透明度因子

---

## 实例方法

### onLoadResource

**类型:** `function`

**描述:** 空

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `options` | `unknown` | - |
| `resolve` | `unknown` | - |
| `reject` | `unknown` | - |

---

### setData

**类型:** `function`

**描述:** 空

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `data` | `unknown` | - |

---

