# 类: CSS3DComponent

**命名空间:** THING.DOM

**继承:** [THING.DOM.BaseCSSComponent](./THING.DOM.BaseCSSComponent.md)

**描述:** 空

## 实例属性

### css3DNode

**类型:** `member`

**数据类型:** `THING.DOM.CSS3DNode`

**描述:** 获取CSS3D节点。

---

### domElement

**类型:** `member`

**数据类型:** `object`

**重写:** THING.DOM.BaseCSSComponent#domElement

**描述:** 获取/设置DOM元素。

---

### pivot

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置从左下角计算的轴心点。

---

### offset

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置偏移量（以像素为单位）。

---

### factor

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置缩放因子。

---

### renderType

**类型:** `member`

**数据类型:** `THING.RenderType`

**描述:** 获取/设置渲染类型。

---

### active

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.DOM.BaseCSSComponent#active

**重写:** THING.DOM.BaseCSSComponent#active

**描述:** 获取/设置是否激活组件。

---

### enableEventProxy

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.DOM.BaseCSSComponent#enableEventProxy

**重写:** THING.DOM.BaseCSSComponent#enableEventProxy

**描述:** 获取/设置是否启用事件代理。<br>True 表示可以触发对象的事件，例如 'click', 'mousemove' 等。

---

### visible

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.DOM.BaseCSSComponent#visible

**重写:** THING.DOM.BaseCSSComponent#visible

**描述:** 获取/设置可见状态，null 表示自动更新 DOM 元素的可见状态。

---

### zIndex

**类型:** `member`

**数据类型:** `number`

**继承:** THING.DOM.BaseCSSComponent#zIndex

**重写:** THING.DOM.BaseCSSComponent#zIndex

**描述:** 获取/设置 DOM 元素的 Z-Index 值，null 表示自动设置 Z-Index。

---

### interactive

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.DOM.BaseCSSComponent#interactive

**重写:** THING.DOM.BaseCSSComponent#interactive

**描述:** 获取/设置是否可交互。

---

### glassBlur

**类型:** `member`

**数据类型:** `number`

**继承:** THING.DOM.BaseCSSComponent#glassBlur

**重写:** THING.DOM.BaseCSSComponent#glassBlur

**描述:** 获取/设置玻璃模糊效果值（以像素为单位），默认值为 0。

---

