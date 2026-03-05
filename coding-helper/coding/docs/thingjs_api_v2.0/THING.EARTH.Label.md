# 类: Label

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.relativePositionToDefault | `Array.<Number>` | `[0,0,0]` | 是 | 基于父物体默认label位置的偏移(例如GeoBuilding默认的label位置是建筑顶面中心点) 单位米 [x,y,z]分别代表三个轴偏移量 上下为y轴 左右为x轴 前后为z轴 |
| param.visible | `Boolean` | `true` | 是 | 是否显示 |
| param.text | `String` | - | 否 | 标注内容 |
| param.pivot | `Array.<Number>` | `[0.5,0]` | 是 | 轴心点 |
| param.style | `GeoLabelStyle` | - | 否 | 样式效果 |

## 实例属性

### relativePositionToDefault

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0,0,0]`

**描述:** 基于父物体默认label位置的偏移(例如GeoBuilding默认的label位置是建筑顶面中心点) </br>单位米 [x,y,z]分别代表三个轴偏移量 上下为y轴 左右为x轴 前后为z轴

---

### pivot

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[0.5,0]`

**描述:** 获取/设置相对于本地坐标系下的轴心点信息 注意: 轴心点参考原点为: [left, bottom, back]

---

### style

**类型:** `member`

**数据类型:** `GeoLabelStyle`

**描述:** 获取/设置样式

---

### text

**类型:** `member`

**数据类型:** `String`

**描述:** 标注的文字内容

#### 示例

```javascript
//通过下面的代码，设置标签的文本内容，其中，name 为标注对象的 userData 中的属性名称，//即被标注物体的 userData.name='花家地南街'，运行后，标签上会显示 '名称:花家地南街'。label.text = '名称:{{name}}'; //标注内容为 '名称:花家地南街'
```

---

