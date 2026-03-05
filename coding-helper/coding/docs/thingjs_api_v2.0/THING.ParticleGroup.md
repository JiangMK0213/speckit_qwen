# 类: ParticleGroup

**命名空间:** THING

**描述:** 空

## 实例属性

### emitters

**类型:** `member`

**数据类型:** `Array.<ParticleEmitter>`

**描述:** 获取发射器。

---

### maxParticleCount

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置最大粒子数。这些粒子的最大数量。

---

### useMesh

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否使用网格。当为true时，表示粒子使用网格而不是点。

---

### meshUrl

**类型:** `member`

**数据类型:** `string`

**描述:** 获取/设置网格URL。当UseMesh为true时生效，表示粒子网格类型的属性。可选值为'BuildIn/Box'、'BuildIn/Plane'、'BuildIn/Sphere'。

---

### meshParams

**类型:** `member`

**数据类型:** `Array`

**描述:** 获取/设置网格参数。当UseMesh为true时生效，表示粒子网格类型的属性。

---

### texture

**类型:** `member`

**数据类型:** `ImageTextureResource`

**描述:** 获取/设置纹理。粒子的图像值。

---

### textureAnimation

**类型:** `member`

**数据类型:** `TextureAnimation`

**描述:** 获取/设置纹理动画。

---

### blendingMode

**类型:** `member`

**数据类型:** `string`

**描述:** 获取/设置混合模式。粒子的混合模式。可选值为'none'、'normal'、'add'、'sub'、'mul'、'custom'。

---

### isTransparent

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否透明。表示这些粒子是否应该以透明方式渲染。

---

### isColorize

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否着色。表示这些粒子是否应该以颜色渲染，或者粒子的颜色仅来自提供的纹理。

---

### alphaTest

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置alpha测试。设置粒子的alpha值。取值范围为0到1。

---

### depthWrite

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置深度写入。设置粒子的深度写入。

---

### depthTest

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置深度测试。设置粒子的深度测试。

---

### url

**类型:** `member`

**数据类型:** `string`

**描述:** 获取/设置纹理URL。粒子的图像URL。

---

### fog

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置雾效。表示这些粒子是否受到场景雾效的影响。

---

## 实例方法

### getAttribute

**类型:** `function`

**描述:** 获取属性值。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `key` | `ParticleGroupAttributeType` | 属性键。 |

#### 返回值

- **类型:** `any`
- **描述:** -

---

### setAttribute

**类型:** `function`

**描述:** 设置属性值。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `key` | `ParticleGroupAttributeType` | 属性键。 |
| `value` | `any` | 属性值。 |

---

### addEmitter

**类型:** `function`

**描述:** 添加发射器。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `emitter` | `ParticleEmitter` | 发射器。 |

#### 返回值

- **类型:** `ParticleEmitter`
- **描述:** -

#### 示例

```javascript
const emitter = new THING.ParticelEmitter();group.addEmitter(emitter);
```

---

### removeEmitter

**类型:** `function`

**描述:** 根据发射器移除发射器。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `emitter` | `ParticleEmitter` | 发射器。 |

#### 示例

```javascript
const emitter = group.getEmitters();group.removeEmitter(emitter);
```

---

