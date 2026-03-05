# 类: Utils

**命名空间:** THING.EARTH

**描述:** 空

## 静态方法

### <span style="color: #0066cc">静态</span> convertColorToZeroToOne

**类型:** `function`

**描述:** 将以255为最大值的颜色数组转为以1为最大值的颜色数组

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `color` | `Array.<Number>` | 以255为最大值的颜色数组 |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** color 以1为最大值的颜色数组

#### 示例

```javascript
const color = Utils.convertColorToZeroToOne([255,0,0]);//return [1,0,0]
```

---

### <span style="color: #0066cc">静态</span> convertLonlatToWebMercator

**类型:** `function`

**描述:** 经纬度坐标转Web墨卡托投影坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `lonLat` | `Array.<Number>` | [经度，纬度] |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** Web墨卡托投影坐标[x,y]

#### 示例

```javascript
const coords = Utils.convertLonlatToWebMercator([119.5,36.5]); //返回web墨卡托坐标 [12968720.675611112, 4793547.458437541]
```

---

### <span style="color: #0066cc">静态</span> convertWebMercatorToLonlat

**类型:** `function`

**描述:** 墨卡托投影转经纬度坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `mercator` | `Array.<Number>` | Web墨卡托坐标 [x,y] |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** 经纬度坐标 [经度，纬度]

#### 示例

```javascript
const coords = Utils.convertWebMercatorToLonlat([12968720.675611112, 4793547.458437541]); //返回经纬度坐标 [116.5,36.5]
```

---

### <span style="color: #0066cc">静态</span> convertLonlatToWorld

**类型:** `function`

**描述:** 经纬度转世界坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `lonLat` | `Array.<Number>` | [经度,纬度] |
| `height` | `Number` | 离地高度 默认0 |
| `mode` | `SceneMode` | 地图模式 2.5D还是3D 默认使用当前地图的模式 |
| `map` | `Map` | 地图对象 主要是判断使用哪种投影类型 默认使用当前的map对象 避免多app冲突 |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** 世界坐标 [x,y,z]

---

### <span style="color: #0066cc">静态</span> convertWorldToLonlat

**类型:** `function`

**描述:** 世界坐标转经纬度

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pos` | `Array.<Number>` | 世界坐标[x,y,z] |
| `mode` | `SceneMode` | 地图模式 2.5D还是3D 默认使用当前地图的模式 |
| `map` | `Map` | 地图对象 主要是判断使用哪种投影类型 默认使用当前的map对象 避免多app冲突 |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** 经纬度坐标(带高度) [经度，纬度，高度]

---

### <span style="color: #0066cc">静态</span> convertWgs84ToGcj02

**类型:** `function`

**描述:** wgs84坐标转为gcj02坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `lonlat` | `Array.<Number>` | wgs84经纬度坐标 [经度，纬度] |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** gcj02经纬度坐标 [经度，纬度]

#### 示例

```javascript
const gcj02Coords = Utils.convertWgs84ToGcj02([116.5,39.5]); //返回gcj02坐标 [116.5059564261526, 39.501157091519175]
```

---

### <span style="color: #0066cc">静态</span> getCenterCoordinates

**类型:** `function`

**描述:** 获取坐标的中心点

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `coordinates` | `Array` | 待求坐标点数组 |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** [x,y] 中心点坐标

---

### <span style="color: #0066cc">静态</span> convertGeoJSONCrs

**类型:** `function`

**描述:** 空

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `geojson` | `Object` | GeoJSON数据 |
| `origin` | `string` | 原始坐标系 支持wgs84 gcj020 bd09 |
| `dest` | `string` | 目标坐标系 支持wgs84 gcj020 bd09 |

#### 返回值

- **类型:** `Object`
- **描述:** 转换后的GeoJSON对象

---

### <span style="color: #0066cc">静态</span> getCenterOfGravityPoint

**类型:** `function`

**描述:** 获取多边形重心/质心 返回[116.47585641025641, 39.98538461538462]

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `coordinates` | `Array` | 多边形经纬度坐标数组 符合GeoJSON 线和面的coordinates数组 |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** [x,y] 重心点坐标

#### 示例

```javascript
// 返回多边形的重心的经纬度坐标
			const center = Utils.getCenterOfGravityPoint([[[116.4757, 39.9851],
			[116.4755, 39.9852],
			[116.4761, 39.9857],
			[116.4762, 39.9856],
			[116.4757, 39.9851]]]);
```

---

### <span style="color: #0066cc">静态</span> getSphericalDistance

**类型:** `function`

**描述:** 计算两点间的球面距离 单位:米

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `lonlat1` | `Array.<Number>` | 起点经纬度 |
| `lonlat2` | `Array.<Number>` | 终点经纬度 |

#### 返回值

- **类型:** `Number`
- **描述:** 球面距离

---

### <span style="color: #0066cc">静态</span> getLongitudeScaleFactorByLatitude

**类型:** `function`

**描述:** 空

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `latitude` | `Number` | 纬度 |
| `map` | `THING.EARTH.Map` | 地图示例 如果不传,则使用当前app中的map对象 |

#### 返回值

- **类型:** `Number`
- **描述:** 变形倍数

---

### <span style="color: #0066cc">静态</span> getHeightByCoordinates

**类型:** `function`

**描述:** 根据经纬度获取当前经纬度对应的海拔高度 该方法是根据当前场景的加载的地形数据及倾斜数据进行拾取,</br>如果需要拾取的地形没有加载或者加载精度不足，会导致拾取结果不准确2.5D下 仅支持获取地形高度

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `coordinates` | `Array` | 经纬度坐标 |

#### 返回值

- **类型:** `Number`
- **描述:** 在当前地形服务中 该经纬度对应的海拔高度

---

### <span style="color: #0066cc">静态</span> getHeightByCoordinatesAsync

**类型:** `function`

**描述:** 根据经纬度获取当前经纬度对应的海拔高度(通过地形获取,不支持3dtiles) 该方法需要依赖地形服务，通过网络请求根据最高精度的地形数据获取高程

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `coordinates` | `Array` | 经纬度坐标 |

#### 返回值

- **类型:** `Promise`
- **描述:** 返回promise对象

---

### <span style="color: #0066cc">静态</span> convertWindowToWorld

**类型:** `function`

**描述:** 屏幕坐标转世界坐标

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `windowPosition` | `Array.<Number>` | 屏幕坐标[x,y] |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** 世界坐标 [x,y,z]

---

### <span style="color: #0066cc">静态</span> getExtent

**类型:** `function`

**描述:** 获取坐标的范围(最大最小经纬度)

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `coordinates` | `Array` | - |

#### 返回值

- **类型:** `Extent`
- **描述:** result

---

### <span style="color: #0066cc">静态</span> getAnglesFromPosition

**类型:** `function`

**描述:** 根据世界坐标和方位角得到可以使物体贴地的旋转信息

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pos` | `Array.<Number>` | 世界坐标 |
| `azimuth` | `Number` | azimuth 方位角 |
| `pitch` | `Number` | pitch 物体倾角 |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** 旋转角度 [x,y,z]

---

### <span style="color: #0066cc">静态</span> getAnglesFromLonlat

**类型:** `function`

**描述:** 根据经纬度和方位角得到可以使物体贴地的旋转信息

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `lonlat` | `Array.<Number>` | 经纬度 |
| `azimuth` | `Number` | azimuth 方位角 |
| `pitch` | `Number` | pitch 物体倾角 |
| `mode` | `THING.EARTH.SceneMode` | 场景模式 如果不传 用当前app.map的mode |
| `map` | `THING.EARTH.Map` | map实例 如果不传 使用当前app.map |

#### 返回值

- **类型:** `Array.<Number>`
- **描述:** 旋转角度 [x,y,z]

---

### <span style="color: #0066cc">静态</span> getAzimuth

**类型:** `function`

**描述:** 计算两点间的方位角

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `lonlat1` | `Array.<Number>` | 起点经纬度 |
| `lonlat2` | `Array.<Number>` | 终点经纬度 |

#### 返回值

- **类型:** `Number`
- **描述:** 方位角

---

### <span style="color: #0066cc">静态</span> getEuclideanDistance

**类型:** `function`

**描述:** 计算两点间的欧式距离(两点直连的距离) 单位:米

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `lonlat1` | `Array.<Number>` | 起点经纬度 |
| `lonlat2` | `Array.<Number>` | 终点经纬度 |
| `mode` | `THING.EARTH.SceneMode` | 场景模式 如果不传 用当前app.map的mode |
| `map` | `THING.EARTH.Map` | map实例 如果不传 使用当前app.map 主要作用是在转世界坐标时判断投影类型 |

#### 返回值

- **类型:** `Number`
- **描述:** 欧式距离

---

### <span style="color: #0066cc">静态</span> getFeatureCollectionExtent

**类型:** `function`

**描述:** 获取geojson的范围

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `featureCollection` | `GeoJSONFeatureCollection` | geojson对象 |

#### 返回值

- **类型:** `Extent`
- **描述:** geojson数据的范围

#### 示例

```javascript
//返回geojson数据的范围 {minX: -73.99995803833008, minY: 40.71805432623303, maxX: -73.98167610168457, maxY: 40.726087955120704}
		 const extent = Utils.getFeatureCollectionExtent({
				"type": "FeatureCollection",
				"crs": {
						"properties": {
								"name": "urn:ogc:def:crs:OGC:1.3:CRS84"
						},
						"type": "name"
				},
				"features": [
						{
								"type": "Feature",
								"properties": {
										"type": "rain",
										"value": 5
								},
								"geometry": {
										"type": "Point",
										"coordinates": [
												-73.99995803833008,
												40.71805432623303
										]
								}
						},
						{
								"type": "Feature",
								"properties": {
										"type": "water",
										"value": 7
								},
								"geometry": {
										"type": "Point",
										"coordinates": [
												-73.98167610168457,
												40.726087955120704
										]
								}
						}
				]
		});
```

---

### <span style="color: #0066cc">静态</span> getLineLength

**类型:** `function`

**描述:** 计算线的长度单位:米

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `coords` | `Array.<Number>` | 经纬度 |
| `isSpherical` | `Boolean` | 是否计算球面距离 默认true 如果传入false 则计算欧氏距离 |

#### 返回值

- **类型:** `Number`
- **描述:** -

#### 示例

```javascript
//根据经纬度计算折线长度 返回结果 29.952const length = Utils.getLineLength([[116.482141, 40.068031], [116.482137, 40.06816],[116.482133, 40.06802]]);
```

---

### <span style="color: #0066cc">静态</span> getSphericalArea

**类型:** `function`

**描述:** 计算多边形的球面面积

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `coords` | `Array.<Number>` | 多边形的坐标 |

#### 返回值

- **类型:** `Number`
- **描述:** 球面面积 单位平方米

---

