# 类: VideoTexture

**命名空间:** THING

**继承:** [THING.BaseStaticTexture](./THING.BaseStaticTexture.md)

**描述:** 视频纹理，可以播放视频流，并可以用于对象的样式。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 初始参数。 |
| param.url | `string` | - | 是 | 视频文件的url。 |
| param.video | `object` | - | 是 | 视频元素。 |
| param.onLoad | `function` | - | 否 | 加载完成后的回调函数。 |

## 实例属性

### resource

**类型:** `member`

**数据类型:** `object`

**描述:** 获取/设置视频元素

---

### url

**类型:** `member`

**数据类型:** `string`

**描述:** 获取/设置url

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

**描述:** 从视频纹理复制。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `source` | `THING.VideoTexture` | 源视频纹理。 |

#### 返回值

- **类型:** `THING.VideoTexture`
- **描述:** 返回一个新的视频纹理实例。

#### 示例

```javascript
var videoTexture = new THING.VideoTexture({url:'.assets/videos/test.mp4'});var newVideoTexture = videoTexture.copy(videoTexture);
```

---

### clone

**类型:** `function`

**描述:** 克隆视频纹理。

#### 返回值

- **类型:** `THING.VideoTexture`
- **描述:** 返回一个新的视频纹理实例。

#### 示例

```javascript
var videoTexture = new THING.VideoTexture({url:'.assets/videos/test.mp4'});var newVideoTexture = videoTexture.clone();
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

