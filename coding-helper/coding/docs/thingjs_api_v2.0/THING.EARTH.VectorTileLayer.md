# 类: VectorTileLayer

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.tileExtendNum | `Number` | `1` | 是 | 瓦片扩展范围 |
| param.maxTileFactor | `Number` | `12` | 是 | 从屏幕中心到边缘请求的瓦片个数上限 |
| param.url | `String` | - | 否 | 矢量瓦片地址 |
| param.vectorLayers | `Array` | - | 否 | 矢量切片配置 |
| param.resourcePrefix | `String` | - | 否 | 资源的相对地址，同map的resourcePrefix传参,如果样式配置是绝对地址，就不用用这个 |
| param.sourceCrs | `String` | - | 否 | 矢量切片数据本身的坐标系 |
| param.targetCrs | `String` | - | 否 | 渲染时要使用的坐标系 如果需要转换坐标系，就需要同时设置sourceCrs,targetCrs |
| param.visible | `Boolean` | `true` | 是 | 是否可见 |
| param.filterArea | `Array` | - | 是 | 剪裁范围（geojson中的Polygon或者MultiPolygon格式的coordinates） |
| param.tag | `Boolean` | - | 是 | 标识 用作模板效果 |

## 实例属性

### vectorLayers

**类型:** `member`

**数据类型:** `Array.<Object>`

**描述:** 设置/获取 矢量切片图层的配置

---

### filterArea

**类型:** `member`

**数据类型:** `Object`

**描述:** 设置/获取 剪裁的几何范围（符合geojson标准的Polygon或者MultiPolygon坐标）

---

### maxTileFactor

**类型:** `member`

**数据类型:** `Number`

**描述:** 设置/获取 从屏幕中心到边缘请求的瓦片个数上限

---

## 实例方法

### updateSubLayerVisible

**类型:** `function`

**描述:** 设置子图层的可见性

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `layerName` | `String` | 子图层名称 与初始化传入vectorLayers中的name一致 |
| `visible` | `Boolean` | 是否可见 |

#### 示例

```javascript
layer.updateSubLayerVisible('Water',false);//隐藏矢量切片中的水
```

---

### updateVectorLayers

**类型:** `function`

**描述:** 空

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `vectorLayers` | `Object` | 矢量图层配置，同构造参数中的 vectorLayers |
| `resourcePrefix` | `String` | 资源的相对地址，同map的resourcePrefix传参,如果没有改变，可以不传 |

---

### gc

**类型:** `function`

**描述:** 清理非视野范围内的瓦片,释放内存

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `force` | `Boolean` | 是否强制清理,默认为false,瓦片数量不多的时候不清理 |

---

