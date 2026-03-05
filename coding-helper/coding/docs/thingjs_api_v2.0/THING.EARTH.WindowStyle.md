# 类: WindowStyle

**命名空间:** THING.EARTH

**继承:** [BaseTextureStyle](./BaseTextureStyle.md)

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | - |
| param.url | `Array.<String>` | - | 否 | 图片路径 |
| param.color | `String, Array.<Number>` | - | 是 | 颜色 默认[1,1,1] |
| param.speed | `Array.<Number>` | - | 是 | 流动速度 数组 代表x方向和y方向的流动速度 默认[0, 0] |
| param.intensity | `Number` | - | 是 | 强度 默认1.0 |
| param.offset | `Array.<Number>` | - | 是 | 偏移 数组 代表 x方向和y方向的偏移量[0, 0] |
| param.repeat | `Array.<Number>` | - | 是 | 重复度 数组 代表 x方向和y方向的重复度 默认[1, 1] |
| param.textureSize | `Array.<Number>` | - | 是 | 纹理代表的实际大小 数组 代表x方向和y方向的实际纹理尺寸 |
| param.textureWrap | `TextureWrapMode` | - | 是 | 窗体贴图模式 默认 TextureWrapMode.Normal |

## 实例属性

### textureWrap

**类型:** `member`

**数据类型:** `TextureWrapMode`

**描述:** 获取/设置窗体贴图模式 有两种模式</br>一种是normal即窗体的贴图与建筑或者多边形的贴图采用一套uv</br>另一种是around 即窗体单独采用一套uv 是绕着建筑或者多边形，依据纹理尺寸环绕贴

#### 示例

```javascript
geoBuilding.window.textureWrap = TextureWrapMode.Around;//设置窗体贴图模式为环绕模式
```

---

### color

**类型:** `member`

**数据类型:** `Array.<Number>, String`

**描述:** 获取/设置窗体的颜色

#### 示例

```javascript
geoBuilding.window.color = [1,0,0];//设置窗体颜色为红色
```

---

