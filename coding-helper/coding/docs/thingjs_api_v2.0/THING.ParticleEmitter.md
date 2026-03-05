# 类: ParticleEmitter

**命名空间:** THING

**描述:** 空

## 实例属性

### particleCount

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置粒子数量。渲染时的粒子数量。

---

### direction

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置方向。粒子的方向。如果值为 `1`，粒子将从粒子生命周期的开始位置开始。如果值为 `-1`，粒子将从粒子生命周期的结束位置开始，并逆向运动。

---

### isStatic

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否静态。如果为 true，则表示这些粒子不会被模拟。

---

### activeMultiplier

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置活跃倍数。介于 0 和 1 之间的值，描述应该发射的粒子数量的百分比，其中 0 表示 0%，1 表示 100%。

---

### distribution

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置分布方式。用于控制粒子的生成位置和力的行为。选项有 1（盒子）、2（球体）、3（圆盘）、4（线段）。

---

### duration

**类型:** `member`

**数据类型:** `number, null`

**描述:** 获取/设置持续时间。以秒为单位，表示此发射器应持续存在的时间。如果未指定，则发射器将无限期地发射粒子。

---

### isLookAtCamera

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否始终朝向相机。当 UseMesh 为 true 时生效。如果为 true，则表示其粒子将始终朝向相机。

---

### isLookAtCameraY

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否始终朝向相机并锁定 Y 轴。当 UseMesh 为 true 时生效。如果为 true，则表示其粒子将始终朝向相机并锁定 Y 轴。

---

### maxAge

**类型:** `member`

**数据类型:** `MaxAge`

**描述:** 获取/设置最大寿命属性。

---

### position

**类型:** `member`

**数据类型:** `Position`

**描述:** 获取位置。

---

### rotation

**类型:** `member`

**数据类型:** `Rotation`

**描述:** 获取旋转属性。

---

### velocity

**类型:** `member`

**数据类型:** `Velocity`

**描述:** 获取速度。

---

### color

**类型:** `member`

**数据类型:** `ListColor`

**描述:** 获取颜色。

---

### opacity

**类型:** `member`

**数据类型:** `ListOpacity`

**描述:** 获取不透明度。

---

### size

**类型:** `member`

**数据类型:** `ListSize`

**描述:** 获取尺寸。

---

### angle

**类型:** `member`

**数据类型:** `ListAngle`

**描述:** 获取角度。

---

### acceleration

**类型:** `member`

**数据类型:** `Acceleration`

**描述:** 获取加速度。

---

### drag

**类型:** `member`

**数据类型:** `Drag`

**描述:** 获取拖拽属性。

---

## 实例方法

### getAttribute

**类型:** `function`

**描述:** 获取属性值。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `key` | `ParticleEmitterAttributeType` | 属性键 |

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
| `key` | `ParticleEmitterAttributeType` | 属性键 |
| `value` | `any` | 属性值 |

---

