# 类: BaseStaticTexture

**命名空间:** THING

**继承:** [THING.BaseTexture](./THING.BaseTexture.md)

**描述:** The base static texture means we can not change any attributes of it in runtime(only use the initial attributes).

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | The initial parameters. |

## 实例属性

### wrapTypeS

**类型:** `member`

**数据类型:** `ImageWrapType`

**继承:** THING.BaseTexture#wrapTypeS

**重写:** THING.BaseTexture#wrapTypeS

**描述:** 获取/设置S轴的包裹方式。

---

### wrapTypeT

**类型:** `member`

**数据类型:** `ImageWrapType`

**继承:** THING.BaseTexture#wrapTypeT

**重写:** THING.BaseTexture#wrapTypeT

**描述:** 获取/设置T轴的包裹方式。

---

### encoding

**类型:** `member`

**数据类型:** `ImageEncodingType`

**继承:** THING.BaseTexture#encoding

**重写:** THING.BaseTexture#encoding

**描述:** 获取/设置编码类型。

---

### isBaseTexture

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseTexture#isBaseTexture

**重写:** THING.BaseTexture#isBaseTexture

**描述:** 检查类类型。

---

### uuid

**类型:** `member`

**数据类型:** `string`

**继承:** THING.BaseResource#uuid

**重写:** THING.BaseTexture#uuid

**描述:** 获取唯一标识符。

---

### isBaseResource

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseResource#isBaseResource

**重写:** THING.BaseTexture#isBaseResource

**描述:** 检查类类型。

---

## 实例方法

### copy

**类型:** `function`

**继承:** THING.BaseTexture#copy

**重写:** THING.BaseTexture#copy

**描述:** 复制纹理。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `source` | `THING.BaseTexture` | 源纹理。 |

#### 返回值

- **类型:** `THING.BaseTexture`
- **描述:** -

---

### waitForComplete

**类型:** `function`

**继承:** THING.BaseResource#waitForComplete

**重写:** THING.BaseTexture#waitForComplete

**描述:** 等待资源加载完成。

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

---

