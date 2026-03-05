# 类: RenderTexture

**命名空间:** THING

**继承:** [THING.BaseStaticTexture](./THING.BaseStaticTexture.md)

**描述:** 空

## 实例属性

### size

**类型:** `member`

**数据类型:** `Array.<number>`

**描述:** 获取或设置大小。

---

### pixelBuffer

**类型:** `member`

**数据类型:** `Uint8Array`

**描述:** 获取以RGBA颜色格式的像素缓冲区。

---

### wrapTypeS

**类型:** `member`

**数据类型:** `ImageWrapType`

**继承:** THING.BaseTexture#wrapTypeS

**重写:** THING.BaseStaticTexture#wrapTypeS

**描述:** 获取/设置S轴的包裹方式。

---

### wrapTypeT

**类型:** `member`

**数据类型:** `ImageWrapType`

**继承:** THING.BaseTexture#wrapTypeT

**重写:** THING.BaseStaticTexture#wrapTypeT

**描述:** 获取/设置T轴的包裹方式。

---

### encoding

**类型:** `member`

**数据类型:** `ImageEncodingType`

**继承:** THING.BaseTexture#encoding

**重写:** THING.BaseStaticTexture#encoding

**描述:** 获取/设置编码类型。

---

### isBaseTexture

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseTexture#isBaseTexture

**重写:** THING.BaseStaticTexture#isBaseTexture

**描述:** 检查类类型。

---

### uuid

**类型:** `member`

**数据类型:** `string`

**继承:** THING.BaseResource#uuid

**重写:** THING.BaseStaticTexture#uuid

**描述:** 获取唯一标识符。

---

### isBaseResource

**类型:** `member`

**数据类型:** `boolean`

**继承:** THING.BaseResource#isBaseResource

**重写:** THING.BaseStaticTexture#isBaseResource

**描述:** 检查类类型。

---

## 实例方法

### copy

**类型:** `function`

**重写:** THING.BaseStaticTexture#copy

**描述:** 从图片资源中拷贝数据。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `source` | `THING.RenderTexture` | 图片源. |

#### 返回值

- **类型:** `THING.RenderTexture`
- **描述:** -

---

### clone

**类型:** `function`

**描述:** 克隆图片

#### 返回值

- **类型:** `THING.RenderTexture`
- **描述:** -

---

### download

**类型:** `function`

**描述:** 以PNG文件格式下载文件作为图像资源。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `fileName` | `string` | 文件名。 |

#### 示例

```javascript
renderTexture.download('myScreenshot');
```

---

### waitForComplete

**类型:** `function`

**继承:** THING.BaseResource#waitForComplete

**重写:** THING.BaseStaticTexture#waitForComplete

**描述:** 等待资源加载完成。

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

---

