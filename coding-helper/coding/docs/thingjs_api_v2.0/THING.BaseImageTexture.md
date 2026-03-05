# 类: BaseImageTexture

**命名空间:** THING

**继承:** [THING.BaseTexture](./THING.BaseTexture.md)

**描述:** 图像纹理，加载图像资源并由样式使用。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 初始参数。 |

## 实例属性

### url

**类型:** `member`

**数据类型:** `string`

**描述:** 获取/设置 url。

---

### colorFormat

**类型:** `member`

**数据类型:** `number`

**继承:** THING.BaseTexture#colorFormat

**重写:** THING.BaseTexture#colorFormat

**描述:** 获取/设置颜色格式。

---

### anisotropy

**类型:** `member`

**数据类型:** `number`

**继承:** THING.BaseTexture#anisotropy

**重写:** THING.BaseTexture#anisotropy

**描述:** 获取/设置各向异性。

---

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

### wrapType

**类型:** `member`

**数据类型:** `ImageWrapType`

**继承:** THING.BaseTexture#wrapType

**重写:** THING.BaseTexture#wrapType

**描述:** 获取/设置S轴和T轴的包裹方式。

---

### mappingType

**类型:** `member`

**数据类型:** `ImageMappingType`

**继承:** THING.BaseTexture#mappingType

**重写:** THING.BaseTexture#mappingType

**描述:** 获取/设置映射类型。

---

### minFilterType

**类型:** `member`

**数据类型:** `ImageFilterType`

**继承:** THING.BaseTexture#minFilterType

**重写:** THING.BaseTexture#minFilterType

**描述:** 获取/设置最小过滤类型。

---

### magFilterType

**类型:** `member`

**数据类型:** `ImageFilterType`

**继承:** THING.BaseTexture#magFilterType

**重写:** THING.BaseTexture#magFilterType

**描述:** 获取/设置最大过滤类型。

---

### flipY

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseTexture#flipY

**重写:** THING.BaseTexture#flipY

**描述:** 获取/设置是否在Y轴翻转。

---

### premultiplyAlpha

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseTexture#premultiplyAlpha

**重写:** THING.BaseTexture#premultiplyAlpha

**描述:** 获取/设置是否预乘Alpha通道。

---

### generateMipmaps

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseTexture#generateMipmaps

**重写:** THING.BaseTexture#generateMipmaps

**描述:** 获取/设置是否生成Mipmaps。

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

### waitForComplete

**类型:** `function`

**继承:** THING.BaseResource#waitForComplete

**重写:** THING.BaseTexture#waitForComplete

**描述:** 等待资源加载完成。

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

---

