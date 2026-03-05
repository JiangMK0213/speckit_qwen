# 类: CanvasLayerStyle

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | - |
| param.url | `String` | - | 是 | 贴图路径 |
| param.color | `Array.<Number>` | `[1,1,1]` | 是 | 叠加颜色 |
| param.mosaic | `Boolean` | `false` | 是 | 是否开启马赛克效果 |
| param.mosaicSize | `Number` | `5` | 是 | 马赛克尺寸 |
| param.opacity | `Number` | `1.0` | 是 | 透明度 |
| param.depthWrite | `Boolean` | `true` | 是 | 是否写入深度 |
| param.lights | `Boolean` | `false` | 是 | 是否接受光照 |
| param.gradient | `Object` | - | 是 | 渐变色带 |
| param.minMaxRatio | `Array.<Number>` | `[0,1]` | 是 | 剔除比例最大最小值 |
| param.discardWhenExceedMinMax | `Boolean` | `true` | 是 | 超过最大值或者低于最小是是否剔除 如果给false 超过最大值使用最大值，小于最小值使用最小值，不剔除 |

## 实例属性

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 透明度

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1,1]`

**描述:** 叠加颜色

---

### url

**类型:** `member`

**数据类型:** `String`

**描述:** 图片的url

---

### lights

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 获取/设置是否接受光照

---

### gradient

**类型:** `member`

**数据类型:** `Object`

**描述:** 获取/设置渐变色带

#### 示例

```javascript
layer.style.gradient = {0: "rgb(0,0,255)",0.33: "rgb(0,255,0)",0.66: "rgb(255,255,0)",1.0: "rgb(255,0,0)"};
```

---

### minMaxRatio

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,1]`

**描述:** 获取/设置剔除比例最大最小值,默认[0,1]是不剔除

---

### discardWhenExceedMinMax

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 设置/获取 超过最大值或者低于最小是是否剔除 如果给false 超过最大值使用最大值，小于最小值使用最小值，不剔除

---

### depthWrite

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 获取/设置是否写入深度

---

