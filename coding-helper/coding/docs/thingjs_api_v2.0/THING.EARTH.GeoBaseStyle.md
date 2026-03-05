# 类: GeoBaseStyle

**命名空间:** THING.EARTH

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
| param.outlineColor | `Array.<Number>` | - | 是 | 勾边颜色 |

## 实例属性

### effect

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 获取/设置 发光效果

#### 示例

```javascript
geoObject.style.effect = true; //开启发光效果
```

---

### glowStrength

**类型:** `member`

**数据类型:** `Number`

**默认值:** `0.5`

**描述:** 获取/设置发光强度

---

### tailing

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 开启/关闭物体的拖尾效果(垂直发光)

---

### radial

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 开启/关闭物体的屏幕径向拖尾效果(扩散发光)

---

### depthTest

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 获取/设置是否进行深度测试

---

### depthWrite

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 获取/设置是否写入深度

---

### blending

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 开启/关闭混色

#### 示例

```javascript
geoObject.style.blending = true;
```

---

### lights

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 获取/设置是否接受光照

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1,1]`

**描述:** 叠加的颜色

#### 示例

```javascript
geoPoint.style.color = [1,0,0];//设置geoPoint填充色为红色
```

---

### outlineColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**描述:** 勾边颜色

#### 示例

```javascript
geoPoint.style.outlineColor = [1,0,0];//设置geoPoint红色勾边geoPoint.style.outlineColor = null;//取消勾边
```

---

### opacity

**类型:** `member`

**数据类型:** `Number`

**默认值:** `1.0`

**描述:** 获取/设置透明度

#### 示例

```javascript
geoItem.style.opacity = 1; //将不透明度设置为1
```

---

### sideType

**类型:** `member`

**数据类型:** `THING.SideType`

**默认值:** `THING.SideType.Back`

**描述:** 设置对象正面/背面/双面渲染

#### 示例

```javascript
geoObject.style.sideType = THING.SideType.Back;
```

---

