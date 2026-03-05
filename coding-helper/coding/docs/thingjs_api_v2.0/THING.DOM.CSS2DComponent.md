# 类: CSS2DComponent

**命名空间:** THING.DOM

**继承:** [THING.DOM.BaseCSSComponent](./THING.DOM.BaseCSSComponent.md)

**描述:** 空

## 实例属性

### autoRemove

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否在移除时自动移除 DOM 元素。

#### 示例

```javascript
// 组件移除时自动移除 DOM 元素component.autoRemove = true;
```

---

### autoBind

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否在添加到场景时自动绑定 DOM 元素。

#### 示例

```javascript
// 添加到场景时自动绑定 DOM 元素component.autoBind = true;
```

---

### offset

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置对象在自身空间中的偏移量，null表示使用对象的边界框中心。

#### 示例

```javascript
// 设置偏移量为 [10, 20]component.offset = [10, 20];
```

---

### pivot

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取/设置从左下角计算的轴心点。

#### 示例

```javascript
// 设置轴心点为中心component.pivot = [0.5, 0.5];
```

---

### factor

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置缩放因子。

#### 示例

```javascript
// 设置缩放因子为 2component.factor = 2;
```

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

### domElement

**类型:** `member`

**数据类型:** `object`

**继承:** THING.DOM.BaseCSSComponent#domElement

**重写:** THING.DOM.BaseCSSComponent#domElement

**描述:** 获取/设置DOM元素。

---

