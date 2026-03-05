# 类: Utils

**命名空间:** THING.DATAVIZ

**描述:** 空

## 静态方法

### <span style="color: #0066cc">静态</span> generateImage

**类型:** `function`

**描述:** 此函数通过归一化矩阵数据，将其映射到指定的色带上，然后将结果渲染为一个Canvas图像。通过计算每个矩阵元素的颜色并填充到相应的像素位置，从而生成一个图像。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `matrix` | `Array.<Array.<number>>` | 输入的二维矩阵数据。 |
| `minVal` | `number` | 矩阵数据的最小值，用于归一化。 |
| `maxVal` | `number` | 矩阵数据的最大值，用于归一化。 |
| `mcolorMap` | `Object` | 用于映射归一化值到颜色的色带。 |

#### 返回值

- **类型:** `HTMLCanvasElement`
- **描述:** - 包含生成图像的Canvas元素。

---

### <span style="color: #0066cc">静态</span> computeScalarData

**类型:** `function`

**描述:** 计算给定三维数组的每个点的标量值	标量值的计算公式是 Math.sqrt(u*u+v*v+w*w)

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `data` | `Object` | {u,v,w} 三维数组 |

#### 返回值

- **类型:** `Object`
- **描述:** {data,minValue,maxValue} 根据三个方向分量计算出的的标量,标量最小值,标量最大值

---

### <span style="color: #0066cc">静态</span> getGridData

**类型:** `function`

**描述:** 计算给定3D网格的x,y,z方向的唯一坐标数据	每个方向的坐标数据是从min到max,间隔为delta

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `data` | `Object` | {minX,maxX,minY,maxY,minZ,maxZ,dimX,dimY,dimZ}  3D网格的数据 |

#### 返回值

- **类型:** `Object`
- **描述:** {x,y,z} 3D网格的x,y,z方向的唯一坐标数据

---

### <span style="color: #0066cc">静态</span> getImageTextureFromVectorFieldData

**类型:** `function`

**描述:** 根据风场数据和颜色渐变生成一个图像纹理对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `windData` | `Object` | 风场数据 |
| `gradient` | `Object` | 颜色渐变 |
| `encoding` | `ImageEncodingType` | 图像编码方式 |

#### 返回值

- **类型:** `ImageTexture`
- **描述:** 生成的图像纹理对象

---

### <span style="color: #0066cc">静态</span> getMin

**类型:** `function`

**描述:** 返回给定数组中的最小元素，该方法支持长度很大的数组。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `arr` | `Array.<number>` | 要查找最小值的数组。 |

#### 返回值

- **类型:** `number`
- **描述:** 数组中的最小元素。

---

### <span style="color: #0066cc">静态</span> getMax

**类型:** `function`

**描述:** 返回给定数组中的最大元素，该方法支持长度很大的数组。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `arr` | `Array.<number>` | 要查找最大值的数组。 |

#### 返回值

- **类型:** `number`
- **描述:** 数组中的最大元素。

---

### <span style="color: #0066cc">静态</span> getGradientTexture

**类型:** `function`

**描述:** 根据给定的渐变对象生成一个256x1的渐变纹理。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `grad` | `Object` | 包含渐变颜色停止点的对象 例如:{0:"rgb(0,255,0)",0.5:"{255,255,0}",1:"rgb(255,0,0)"} |

#### 返回值

- **类型:** `Texture2D`
- **描述:** 一个256x1的T3D渐变纹理。

---

### <span style="color: #0066cc">静态</span> nextPowerOfTwo

**类型:** `function`

**描述:** 返回比给定值的大的下一个2的n次幂。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `number` | 输入值。 |

#### 返回值

- **类型:** `number`
- **描述:** 下一个2的幂。

---

### <span style="color: #0066cc">静态</span> addColorToModelByXYZData

**类型:** `function`

**描述:** 基于离散的XYZ数据为3D模型表面进行着色

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 参数对象 |
| `param.entity` | `Object` | 实体对象 |
| `param.texture3D` | `THING.T3D.Texture3D` | 体纹理 如果传texture3D会忽略data,直接使用 |
| `param.data` | `Array` | 数据数组 data extent minMaxValue gridSize都是为了计算texture3D 如果已经传了texture3D 后面的参数可以不传 |
| `param.gradient` | `Object` | 色带 |
| `param.extent` | `Object` | 场数据的范围(如果不传,基于模型包围盒自动计算) 包含字段minX,maxX,minY,maxY,minZ,maxZ |
| `param.minMaxValue` | `Object` | 最小最大值对象(如果不传,基于data自动计算) 包含字段min,max |
| `param.gridSize` | `Number` | 网格大小,即基于离散数据生产的场数据每个网格的尺寸(单位:米),如果不传则根据数据范围自动计算,以模型包围盒三个维度最小尺寸的1/10 |
| `param.blending` | `Boolean` | 是否混合 |
| `param.depthWrite` | `Boolean` | 是否写入深度，默认为false |
| `param.drawSide` | `Number` | 绘制面，默认为THING.T3D.DRAW_SIDE.DOUBLE |
| `param.opacity` | `Number` | 透明度，默认为0.5 |
| `param.power` | `Number` | 透明度衰减系数 |
| `param.glowInverse` | `Boolean` | 是否反向发光，默认为false |

#### 返回值

- **类型:** `Object`
- **描述:** 包含材质和原始材质缓存的对象

---

### <span style="color: #0066cc">静态</span> revertModelMaterial

**类型:** `function`

**描述:** 还原模型中所有对象的材质为原始材质。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `entity` | `THING.Entity` | 模型对象 |
| `originMaterialCache` | `Object` | 原始材质的缓存。 |

#### 返回值

- **类型:** `void`
- **描述:** -

---

