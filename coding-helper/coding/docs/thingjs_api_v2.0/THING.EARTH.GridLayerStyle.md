# 类: GridLayerStyle

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.opacity | `Number` | `1` | 是 | 透明度 |
| param.blending | `Boolean` | `false` | 是 | 结果是否混色 |
| param.useGradient | `Boolean` | `true` | 是 | 展示结果是否对单个柱子使用渐变色 默认true 如果传false 代表每一根柱子的颜色是唯一的,不同柱子根据自身数值使用不同颜色 |
| param.gradient | `Object` | - | 是 | 聚合结果展示所用的色带 |
| param.colorList | `Array` | - | 是 | 如果聚合图是分段展示(传extrudeFieldArray),聚合结果展示所用的颜色数组 |

## 实例属性

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 透明度

---

### useGradient

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 展示结果是否对单个柱子使用渐变色 默认true </br>如果传false 代表每一根柱子的颜色是唯一的,不同柱子根据自身数值使用不同颜色

---

### blending

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 结果是否混色

---

### gradient

**类型:** `member`

**数据类型:** `Object`

**描述:** 聚合结果展示所用的颜色

---

### colorList

**类型:** `member`

**数据类型:** `Array`

**描述:** 聚合结果的单个柱子如果要分段显示,使用的颜色集合,</br>这个要配合GridLayer的extrudeFieldArray使用,长度需要和extrudeFieldArray长度一致

---

