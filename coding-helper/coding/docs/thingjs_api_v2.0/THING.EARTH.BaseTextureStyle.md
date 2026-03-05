# 类: BaseTextureStyle

**命名空间:** THING.EARTH

**继承:** [EventDispatcher](./EventDispatcher.md)

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | - |
| param.url | `Array.<String>` | - | 是 | 图片路径 |
| param.speed | `Array.<Number>` | `[0,0]` | 是 | 流动速度 数组 代表x方向和y方向的流动速度 默认[0, 0] |
| param.intensity | `Number` | `1.0` | 是 | 强度 默认1.0 |
| param.offset | `Array.<Number>` | `[0,0]` | 是 | 偏移 数组 代表 x方向和y方向的偏移量[0, 0] |
| param.repeat | `Array.<Number>` | `[1,1]` | 是 | 重复度 数组 代表 x方向和y方向的重复度 默认[1, 1] |
| param.textureSize | `Array.<Number>` | - | 是 | 纹理代表的实际大小 数组 代表x方向和y方向的实际纹理尺寸 |

## 实例属性

### textureSize

**类型:** `member`

**数据类型:** `Array.<Number>`

**描述:** 设置/获取纹理代表尺寸 数组中对象单位为米

---

### url

**类型:** `member`

**数据类型:** `String`

**描述:** 设置/获取纹理路径

---

### repeat

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1]`

**描述:** 设置/获取纹理重复度

---

### offset

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0]`

**描述:** 设置/获取纹理偏移

---

### intensity

**类型:** `member`

**数据类型:** `Number, Array.<Number>`

**默认值:** `1.0`

**描述:** 设置/获取强度

#### 示例

```javascript
//geoBuilding.envMap geoWater.envMap均为一个BaseTextureStyle实例geoBuilding.envMap.intensity = [1,1]; //设置顶面和侧面的反射强度均为1.0geoWater.envMap.intensity = 1.0; //设置水体的反射强度为1.0
```

---

### speed

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0]`

**描述:** 设置/获取纹理流动速度

---

