# 类: GradientStyle

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | - |
| param.map | `THING.EARTH.Map` | - | 是 | 当前map实例 |
| param.enable | `Boolean` | `false` | 是 | 是否开启地球遮罩 |
| param.value | `Object` | - | 是 | 渐变色 |
| param.opacity | `Number` | `1` | 是 | 透明度 |
| param.direction | `Array.<Number>` | `[1,0,0]` | 是 | 渐变方向 |
| param.autoFadeout | `Boolean` | `true` | 是 | 是否随相机高度自动变淡 |

## 实例属性

### enable

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 是否开启地球遮罩 默认false

#### 示例

```javascript
map.style.gradient.enable = true;//开启地球遮罩
```

---

### value

**类型:** `member`

**数据类型:** `Object`

**描述:** 获取/设置地球遮罩的渐变色 默认值 { 0:'rgb(255,0,0)', 0.5: 'rgb(0,255,0)', 1:'rgb(0,0,255)'} 支持rgb和rgba格式的颜色

#### 示例

```javascript
map.style.gradient.value = { 0:'rgba(255,0,1)', 0.5: 'rgba(0,255,0.5)', 1:'rgba(0,0,255,0)' };//设置渐变色色带
```

---

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 获取/设置地球遮罩的透明度 默认值1.0

---

### direction

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,0,0]`

**描述:** 获取/设置地球遮罩的方向 [x,y,z]分别代表三个轴方向的分量 例如[1,0,0]代表沿x轴渐变 即沿赤道方向渐变 默认值[1,0,0]

---

### autoFadeout

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 地球遮罩是否随相机高度自动变淡

---

