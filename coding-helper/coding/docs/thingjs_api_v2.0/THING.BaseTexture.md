# 类: BaseTexture

**命名空间:** THING

**继承:** [THING.BaseResource](./THING.BaseResource.md)

**描述:** 基础纹理资源构造函数，用于初始化纹理的各种参数。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 初始参数对象，包含纹理的配置选项。 |
| param.colorFormat | `string` | `THING.ImageColorFormat.RGBA` | 是 | 纹理的颜色格式，默认为THING.ImageColorFormat.RGBA。 |
| param.anisotropy | `number` | `THING.App.current.renderCapabilities.maxAnisotropy` | 是 | 纹理的各向异性过滤级别，默认为应用程序的最大各向异性。 |
| param.wrapTypeS | `string` | `THING.ImageWrapType.Repeat` | 是 | 纹理在S轴的包裹方式，默认为THING.ImageWrapType.Repeat。 |
| param.wrapTypeT | `string` | `THING.ImageWrapType.Repeat` | 是 | 纹理在T轴的包裹方式，默认为THING.ImageWrapType.Repeat。 |
| param.mappingType | `string` | `THING.ImageMappingType.UV` | 是 | 纹理的映射类型，默认为THING.ImageMappingType.UV。 |
| param.flipY | `boolean` | `true` | 是 | 是否在Y轴翻转纹理，默认为true。 |
| param.premultiplyAlpha | `boolean` | `false` | 是 | 是否预乘Alpha通道，默认为false。 |
| param.generateMipmaps | `boolean` | `true` | 是 | 是否生成Mipmaps，默认为true。 |
| param.minFilterType | `string` | - | 是 | 纹理的最小过滤类型，默认为根据是否生成Mipmaps选择的过滤类型。 |
| param.magFilterType | `string` | `THING.ImageFilterType.LinearFilter` | 是 | 纹理的放大过滤类型，默认为THING.ImageFilterType.LinearFilter。 |
| param.encoding | `string` | `null` | 是 | 纹理的编码类型，默认为null。 |
| param.onUpdateSampler | `function` | - | 是 | 纹理更新采样器时的回调函数。 |

## 实例属性

### colorFormat

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置颜色格式。

---

### anisotropy

**类型:** `member`

**数据类型:** `number`

**描述:** 获取/设置各向异性。

---

### wrapTypeS

**类型:** `member`

**数据类型:** `ImageWrapType`

**描述:** 获取/设置S轴的包裹方式。

---

### wrapTypeT

**类型:** `member`

**数据类型:** `ImageWrapType`

**描述:** 获取/设置T轴的包裹方式。

---

### wrapType

**类型:** `member`

**数据类型:** `ImageWrapType`

**描述:** 获取/设置S轴和T轴的包裹方式。

---

### mappingType

**类型:** `member`

**数据类型:** `ImageMappingType`

**描述:** 获取/设置映射类型。

---

### minFilterType

**类型:** `member`

**数据类型:** `ImageFilterType`

**描述:** 获取/设置最小过滤类型。

---

### magFilterType

**类型:** `member`

**数据类型:** `ImageFilterType`

**描述:** 获取/设置最大过滤类型。

---

### flipY

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否在Y轴翻转。

---

### premultiplyAlpha

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否预乘Alpha通道。

---

### generateMipmaps

**类型:** `member`

**数据类型:** `boolean`

**描述:** 获取/设置是否生成Mipmaps。

---

### encoding

**类型:** `member`

**数据类型:** `ImageEncodingType`

**描述:** 获取/设置编码类型。

---

### isBaseTexture

**类型:** `member`

**数据类型:** `boolean`

**描述:** 检查类类型。

---

### uuid

**类型:** `member`

**数据类型:** `string`

**继承:** THING.BaseResource#uuid

**重写:** THING.BaseResource#uuid

**描述:** 获取唯一标识符。

---

### isBaseResource

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseResource#isBaseResource

**重写:** THING.BaseResource#isBaseResource

**描述:** 检查类类型。

---

## 实例方法

### copy

**类型:** `function`

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

**重写:** THING.BaseResource#waitForComplete

**描述:** 等待资源加载完成。

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

---

