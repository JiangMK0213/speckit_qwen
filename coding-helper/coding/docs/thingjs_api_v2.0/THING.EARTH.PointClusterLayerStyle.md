# 类: PointClusterLayerStyle

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.fontColor | `Array.<Number>` | `[1,0,0]` | 是 | 字体颜色 |
| param.fontSize | `Number` | `15` | 是 | 字体大小 |
| param.fontFamily | `String` | `Arial,Microsoft YaHei` | 是 | 字体名称 |
| param.offset | `Array.<Number>` | `[0,0]` | 是 | 像素级别的偏移量 |
| param.keepSize | `Boolean` | `true` | 是 | 是否维持渲染大小不变 |
| param.useSpriteMaterial | `Boolean` | `true` | 是 | 是否使用精灵材质 |
| param.dropShadow | `Boolean` | `false` | 是 | 是否有阴影 |
| param.dropShadowColor | `Array.<Number>` | `[0,0,0]` | 是 | 阴影颜色 |
| param.url | `String` | - | 是 | 背景图片的路径 |
| param.color | `Array.<Number>` | - | 是 | 背景图片叠加颜色 |
| param.showNonCluster | `Boolean` | `true` | 是 | 是否显示未聚合的点 |
| param.fitBackgroundImage | `Boolean` | `false` | 是 | 背景图尺寸是否随聚合结果变化而变化 如果设置成true 背景图可能会变形 |

## 实例属性

### fontColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,0,0]`

**描述:** 文字颜色

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1,1]`

**描述:** 背景图叠加的颜色

---

### fontSize

**类型:** `member`

**数据类型:** `Number`

**默认值:** `15`

**描述:** 字体大小

---

### fontFamily

**类型:** `member`

**数据类型:** `String`

**默认值:** `'Arial,Microsoft YaHei'`

**描述:** 字体名称

---

### offset

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0]`

**描述:** 像素级偏移 [xOffset,yOffset] 像素级别 xOffset左负右正 yOffset上正下负

---

### imagePadding

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[5,5]`

**描述:** 文字在x轴和y轴的距离背景图空间大小 [x,y] 像素级别

---

### keepSize

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否保持大小

---

### useSpriteMaterial

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否使用精灵材质

---

### dropShadow

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `false`

**描述:** 设置/获取 字体是否使用阴影

---

### dropShadowColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0,0]`

**描述:** 设置/获取 字体阴影颜色

---

### url

**类型:** `member`

**数据类型:** `String`

**描述:** 设置/获取标注背景图url

---

### showNonCluster

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否显示未聚合的结果

---

