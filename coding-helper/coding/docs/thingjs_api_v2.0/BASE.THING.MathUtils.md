# 类: MathUtils

**命名空间:** BASE.THING

**描述:** 空

## 实例属性

### vec3

**类型:** `member`

**描述:** vec3是gl-matrix库中的一个类，请参考https://glmatrix.net/docs/module-vec3.html

---

### quat

**类型:** `member`

**描述:** quat是gl-matrix库中的一个类，请参考https://glmatrix.net/docs/module-quat.html

---

### mat3

**类型:** `member`

**描述:** mat3是gl-matrix库中的一个类，请参考https://glmatrix.net/docs/module-mat3.html

---

### mat4

**类型:** `member`

**描述:** mat4是gl-matrix库中的一个类，请参考https://glmatrix.net/docs/module-mat4.html

---

## 静态方法

### <span style="color: #0066cc">静态</span> clamp

**类型:** `function`

**描述:** 将数字限制在指定范围内。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `number` | 当前值。 |
| `min` | `number` | 最小值。 |
| `max` | `number` | 最大值。 |

#### 返回值

- **类型:** `number`
- **描述:** 限制在范围内的值。

#### 示例

```javascript
// 将值限制在0到100之间const value = 150;const clampedValue = THING.Math.clamp(value, 0, 100); // 返回 100
```

---

### <span style="color: #0066cc">静态</span> randomBoolean

**类型:** `function`

**描述:** 生成随机布尔值。

#### 返回值

- **类型:** `boolean`
- **描述:** 随机生成的布尔值。

#### 示例

```javascript
// 生成一个随机布尔值const randomBool = THING.Math.randomBoolean(); // 返回 true 或 false
```

---

### <span style="color: #0066cc">静态</span> randomFloat

**类型:** `function`

**描述:** 在[min, max]范围内生成随机浮点数。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `min` | `number` | 最小值。 |
| `max` | `number` | 最大值。 |

#### 返回值

- **类型:** `number`
- **描述:** 生成的随机浮点数。

#### 示例

```javascript
// 生成0到1之间的随机浮点数const random = THING.Math.randomFloat(0, 1); // 例如返回 0.7231...
```

---

### <span style="color: #0066cc">静态</span> randomInt

**类型:** `function`

**描述:** 在[min, max]范围内生成随机整数。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `min` | `number` | 最小值。 |
| `max` | `number` | 最大值。 |

#### 返回值

- **类型:** `number`
- **描述:** 生成的随机整数。

#### 示例

```javascript
// 生成1到10之间的随机整数const randomInt = THING.Math.randomInt(1, 10); // 返回1到10之间的整数
```

---

### <span style="color: #0066cc">静态</span> getDistance

**类型:** `function`

**描述:** 获取两个向量之间的距离。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v1` | `Array.<number>` | 第一个向量。 |
| `v2` | `Array.<number>` | 第二个向量。 |

#### 返回值

- **类型:** `number`
- **描述:** 两个向量之间的欧几里得距离。

#### 示例

```javascript
// 计算2D点之间的距离const point1 = [0, 0];const point2 = [3, 4];const distance2D = THING.Math.getDistance(point1, point2); // 返回 5
```

---

### <span style="color: #0066cc">静态</span> randomVector

**类型:** `function`

**描述:** 在[min, max]范围内生成随机向量。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `min` | `Array.<number>` | 最小向量。 |
| `max` | `Array.<number>` | 最大向量。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** The generated random vector.

#### 示例

```javascript
// 生成2D随机向量const min2D = [0, 0];const max2D = [10, 5];const random2D = THING.Math.randomVector(min2D, max2D); // 返回如 [3.7, 2.1] 的随机向量// 生成3D随机向量const min3D = [-5, 0, -10];const max3D = [5, 10, 10];const random3D = THING.Math.randomVector(min3D, max3D); // 返回如 [2.4, 7.8, -3.2] 的随机向量// 在游戏中生成随机位置const minBounds = [0, 0, 0];const maxBounds = [100, 0, 100]; // 平面上的随机位置const randomPosition = THING.Math.randomVector(minBounds, maxBounds);
```

---

### <span style="color: #0066cc">静态</span> randomVector2Range

**类型:** `function`

**描述:** 在[min, max]范围内生成随机向量 [x, y]。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `min` | `number` | 最小值。 |
| `max` | `number` | 最大值。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 生成的2D随机向量。

#### 示例

```javascript
// 生成[0, 10]范围内的随机2D向量const random2D = THING.Math.randomVector2Range(0, 10); // 返回如 [3.7, 8.2] 的随机向量
```

---

### <span style="color: #0066cc">静态</span> equalsVector

**类型:** `function`

**描述:** 检查向量是否相同。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v1` | `Array.<number>` | 第一个向量。 |
| `v2` | `Array.<number>` | 第二个向量。 |
| `epsilon` | `number` | 误差范围。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果向量在误差范围内相同则返回true，否则返回false。

#### 示例

```javascript
// 检查2D向量是否相等const vec1 = [1, 2];const vec2 = [1, 2];const areEqual2D = THING.Math.equalsVector(vec1, vec2); // 返回 true
```

---

### <span style="color: #0066cc">静态</span> addVector

**类型:** `function`

**描述:** 向量相加。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v1` | `Array.<number>` | 第一个向量。 |
| `v2` | `Array.<number>` | 第二个向量或标量。 |
| `result` | `Array.<number>` | 可选的结果数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 相加后的向量。

#### 示例

```javascript
// 两个3D向量相加const vec1 = [1, 2, 3];const vec2 = [4, 5, 6];const sum = THING.Math.addVector(vec1, vec2); // 返回 [5, 7, 9]
```

---

### <span style="color: #0066cc">静态</span> subVector

**类型:** `function`

**描述:** 向量相减。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v1` | `Array.<number>` | 第一个向量。 |
| `v2` | `Array.<number>` | 第二个向量或标量。 |
| `result` | `Array.<number>` | 可选的结果数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 相减后的向量。

#### 示例

```javascript
// 两个3D向量相减const vec1 = [5, 7, 9];const vec2 = [1, 2, 3];const diff = THING.Math.subVector(vec1, vec2); // 返回 [4, 5, 6]
```

---

### <span style="color: #0066cc">静态</span> scaleVector

**类型:** `function`

**描述:** 缩放向量。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v` | `Array.<number>` | 要缩放的向量。 |
| `scale` | `Array.<number>, number` | 缩放因子或向量。 |
| `result` | `Array.<number>` | 可选的结果数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 缩放后的向量。

#### 示例

```javascript
// 向量乘以标量const vec = [1, 2, 3];const scalar = 2;const scaled = THING.Math.scaleVector(vec, scalar); // 返回 [2, 4, 6]
```

---

### <span style="color: #0066cc">静态</span> divideVector

**类型:** `function`

**描述:** 向量相除。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v` | `Array.<number>` | 被除向量。 |
| `scale` | `Array.<number>, number` | 除数向量或标量。 |
| `result` | `Array.<number>` | 可选的结果数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 相除后的向量。

#### 示例

```javascript
// 向量除以标量const vec = [10, 20, 30];const scalar = 2;const divided = THING.Math.divideVector(vec, scalar); // 返回 [5, 10, 15]// 向量与向量相除（逐元素除法）const v1 = [10, 20, 30];const v2 = [2, 4, 5];const divided2 = THING.Math.divideVector(v1, v2); // 返回 [5, 5, 6]
```

---

### <span style="color: #0066cc">静态</span> dotVector

**类型:** `function`

**描述:** 获取向量的点积。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v1` | `Array.<number>` | 第一个向量。 |
| `v2` | `Array.<number>` | 第二个向量。 |

#### 返回值

- **类型:** `number`
- **描述:** 两个向量的点积。

#### 示例

```javascript
// 计算两个向量的点积const v1 = [1, 0, 0];const v2 = [0, 1, 0];const dot1 = THING.Math.dotVector(v1, v2); // 返回 0，因为向量垂直
```

---

### <span style="color: #0066cc">静态</span> crossVector

**类型:** `function`

**描述:** 获取向量的叉积。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v1` | `Array.<number>` | 第一个向量。 |
| `v2` | `Array.<number>` | 第二个向量。 |
| `result` | `Array.<number>` | 可选的结果数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 两个向量的叉积。

#### 示例

```javascript
// 计算两个向量的叉积const v1 = [1, 0, 0]; // x轴单位向量const v2 = [0, 1, 0]; // y轴单位向量const cross = THING.Math.crossVector(v1, v2); // 返回 [0, 0, 1]，即z轴单位向量
```

---

### <span style="color: #0066cc">静态</span> negVector

**类型:** `function`

**描述:** 获取负向量。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v` | `Array.<number>` | 输入向量。 |
| `result` | `Array.<number>` | 可选的结果数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 输入向量的负向量。

#### 示例

```javascript
// 获取向量的负向量const vec = [1, 2, 3];const negated = THING.Math.negVector(vec); // 返回 [-1, -2, -3]
```

---

### <span style="color: #0066cc">静态</span> normalizeVector

**类型:** `function`

**描述:** 获取归一化向量。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v` | `Array.<number>` | 要归一化的向量。 |
| `target` | `Array.<number>` | 可选的目标数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 归一化后的向量。

#### 示例

```javascript
// 将向量归一化（单位化）const vec = [3, 0, 0];const normalized = THING.Math.normalizeVector(vec); // 返回 [1, 0, 0]
```

---

### <span style="color: #0066cc">静态</span> rotateVector

**类型:** `function`

**描述:** 绕指定轴旋转向量。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `vector` | `Array.<number>` | 要旋转的向量。 |
| `axis` | `Array.<number>` | 旋转轴。 |
| `angle` | `number` | 旋转角度（度）。 |
| `result` | `Array.<number>` | 可选的结果数组。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 旋转后的向量。

#### 示例

```javascript
// 绕Y轴旋转一个向量90度const vector = [1, 0, 0]; // X轴正方向的向量const axis = [0, 1, 0]; // Y轴作为旋转轴const angle = 90; // 旋转90度const result = THING.Math.rotateVector(vector, axis, angle); // 返回 [0, 0, -1]
```

---

### <span style="color: #0066cc">静态</span> getVectorLength

**类型:** `function`

**描述:** 获取向量的长度。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v` | `Array.<number>` | 输入向量。 |

#### 返回值

- **类型:** `number`
- **描述:** 向量的长度。

#### 示例

```javascript
// 计算向量的长度const vec = [3, 4, 0];const length = THING.Math.getVectorLength(vec); // 返回 5
```

---

### <span style="color: #0066cc">静态</span> getDistanceFromPoints

**类型:** `function`

**描述:** 从点集中获取距离。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `points` | `Array.<Array.<number>>` | 点集。 |
| `closure` | `boolean` | 是否闭合线段。 |

#### 返回值

- **类型:** `number`
- **描述:** 点集中所有相邻点之间的距离之和。

#### 示例

```javascript
// 计算路径的总长度const path = [  [0, 0, 0],  [10, 0, 0],  [10, 10, 0],  [0, 10, 0]];const pathLength = THING.Math.getDistanceFromPoints(path); // 返回 30
```

---

### <span style="color: #0066cc">静态</span> getCenterFromPoints

**类型:** `function`

**描述:** 从点集中获取中心点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `points` | `Array.<Array.<number>>` | 点集。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 所有点的几何中心。

#### 示例

```javascript
// 计算多个点的中心点const points = [  [0, 0, 0],  [10, 0, 0],  [10, 10, 0],  [0, 10, 0]];const center = THING.Math.getCenterFromPoints(points); // 返回 [5, 5, 0]
```

---

### <span style="color: #0066cc">静态</span> toUniquePoints

**类型:** `function`

**描述:** 创建新的点集，删除重复的点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `points` | `Array.<Array.<number>>` | 原始点集。 |
| `epsilon` | `number` | 判断点重复的误差范围。 |

#### 返回值

- **类型:** `Array.<Array.<number>>`
- **描述:** 去除重复点后的点集。

#### 示例

```javascript
// 移除数组中的重复点const points = [  [1, 2, 3],  [1.0001, 2, 3],  // 非常接近第一个点  [4, 5, 6],  [7, 8, 9],  [4.0002, 5.0001, 6]  // 非常接近第三个点];const uniquePoints = THING.Math.toUniquePoints(points); // 返回 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

---

### <span style="color: #0066cc">静态</span> getAngleBetweenVectors

**类型:** `function`

**描述:** 获取两个向量之间的夹角。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `v1` | `Array.<number>` | 第一个向量。 |
| `v2` | `Array.<number>` | 第二个向量。 |

#### 返回值

- **类型:** `number`
- **描述:** 两个向量之间的夹角（度）。

#### 示例

```javascript
// 计算2D向量之间的角度const vector1 = [1, 0];  // 指向x轴正方向的向量const vector2 = [0, 1];  // 指向y轴正方向的向量const angle2D = THING.Math.getAngleBetweenVectors(vector1, vector2); // 返回 90 (度)
```

---

### <span style="color: #0066cc">静态</span> getQuatFromAxisRadian

**类型:** `function`

**描述:** 通过轴向返回以弧度表示的角度的四元数表示。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `axis` | `Array.<number>` | 轴向。 |
| `radian` | `number` | 弧度。 |
| `target` | `Array.<number>` | 目标的引用值。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** The quaternion as an array of four numbers representing the x, y, z, and w components.

#### 示例

```javascript
// 创建一个绕Y轴旋转90度（π/2弧度）的四元数const yAxis = [0, 1, 0];const angle90Rad = Math.PI / 2;const result = [0, 0, 0, 0]; // 用于存储结果的数组THING.Math.getQuatFromAxisRadian(yAxis, angle90Rad, result); // result 变为 [0, 0.7071, 0, 0.7071]// 创建一个绕X轴旋转45度（π/4弧度）的四元数const xAxis = [1, 0, 0];const angle45Rad = Math.PI / 4;const xRotation = THING.Math.getQuatFromAxisRadian(xAxis, angle45Rad, [0, 0, 0, 0]);// 在物理模拟中使用const rotationAxis = [0, 0, 1]; // Z轴const rotationSpeed = 0.01; // 每帧旋转的弧度function updateRotation(deltaTime) {  const rotationAmount = rotationSpeed * deltaTime;  const deltaRotation = THING.Math.getQuatFromAxisRadian(rotationAxis, rotationAmount);  // 应用旋转增量  // object.quaternion = THING.Math.multiplyQuat(object.quaternion, deltaRotation);}
```

---

### <span style="color: #0066cc">静态</span> getQuatFromAngles

**类型:** `function`

**描述:** 将欧拉角（'XYZ'）以度数表示转换为四元数表示。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `angles` | `Array.<number>` | 欧拉角（以度数表示）。 |
| `target` | `Array.<number>` | 目标的引用值。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 四元数，作为四个数字的数组，分别代表x, y, z, 和w分量。

#### 示例

```javascript
// 创建一个从欧拉角转换的四元数const eulerAngles = [30, 45, 0]; // 绕X轴旋转30度，绕Y轴旋转45度const quaternion = THING.Math.getQuatFromAngles(eulerAngles); // 返回对应的四元数// 使用自定义目标数组const angles = [0, 90, 0]; // 绕Y轴旋转90度const result = [0, 0, 0, 1];THING.Math.getQuatFromAngles(angles, result); // result 被修改为对应的四元数// 在3D对象旋转中使用const objectRotation = [10, 20, 30]; // 绕X轴10度，绕Y轴20度，绕Z轴30度const objectQuaternion = THING.Math.getQuatFromAngles(objectRotation);// 应用旋转到对象// object.quaternion = objectQuaternion;
```

---

### <span style="color: #0066cc">静态</span> getQuatFromEuler

**类型:** `function`

**描述:** Returns a quaternion representation of an euler angle('XYZ') in radians.

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `euler` | `Array.<number>` | The euler in radians. |
| `target` | `Array.<number>` | The referenced value of target. |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** The quaternion as an array of four numbers representing the x, y, z, and w components.

#### 示例

```javascript
// 将欧拉角（弧度）转换为四元数const eulerRadians = [Math.PI/4, 0, 0]; // X轴旋转45度（π/4弧度）const quaternion = THING.Math.getQuatFromEuler(eulerRadians); // 返回对应的四元数// 使用自定义目标数组const euler = [0, Math.PI/2, 0]; // Y轴旋转90度（π/2弧度）const result = [0, 0, 0, 1];THING.Math.getQuatFromEuler(euler, result); // result被修改为对应的四元数// 在3D对象旋转中使用const rotationRadians = [Math.PI/6, Math.PI/4, 0]; // X轴30度，Y轴45度const objectQuaternion = THING.Math.getQuatFromEuler(rotationRadians);// 应用旋转到对象// object.quaternion = objectQuaternion;
```

---

### <span style="color: #0066cc">静态</span> getQuatFromMat4

**类型:** `function`

**描述:** Returns a quaternion representation of 4x4 matrix.

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `mat` | `Array.<number>` | The 4x4 matrix. |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** The quaternion as an array of four numbers representing the x, y, z, and w components.

#### 示例

```javascript
// 从旋转矩阵中提取四元数const rotationMatrix = [  1, 0, 0, 0,  0, 0, -1, 0,  0, 1, 0, 0,  0, 0, 0, 1]; // 绕X轴旋转90度的矩阵const quaternion = THING.Math.getQuatFromMat4(rotationMatrix); // 返回对应的四元数// 从lookAt矩阵中提取旋转const eye = [0, 5, 10];const center = [0, 0, 0];const up = [0, 1, 0];const lookAtMatrix = THING.Math.lookAt(eye, center, up);const cameraRotation = THING.Math.getQuatFromMat4(lookAtMatrix);// 在3D变换中使用function extractRotation(transformMatrix) {  const rotationQuat = THING.Math.getQuatFromMat4(transformMatrix);  // 使用提取的旋转  // object.quaternion = rotationQuat;}
```

---

### <span style="color: #0066cc">静态</span> getQuatFromTarget

**类型:** `function`

**描述:** Get the quaternion from target and eye position.

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `eye` | `Array.<number>` | The position of the viewer. |
| `center` | `Array.<number>` | The position where viewer is looking at. |
| `up` | `Array.<number>` | The up direction. |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** The quaternion as an array of four numbers representing the x, y, z, and w components.

#### 示例

```javascript
// 从相机位置和目标位置计算四元数const eyePosition = [0, 5, 10];    // 相机位置const targetPosition = [0, 0, 0];  // 目标位置（相机看向的点）const upDirection = [0, 1, 0];     // 向上方向const quaternion = THING.Math.getQuatFromTarget(eyePosition, targetPosition, upDirection);// 在相机控制中使用function updateCameraRotation(camera, lookAtPoint) {  const cameraPos = camera.position;  const upDir = [0, 1, 0];  // 计算相机的旋转四元数  const rotation = THING.Math.getQuatFromTarget(cameraPos, lookAtPoint, upDir);  // camera.quaternion = rotation;}// 在物体朝向控制中使用const objectPosition = [5, 0, 5];const targetPoint = [0, 0, 0];const worldUp = [0, 1, 0];// 计算物体需要的旋转，使其朝向目标点const objectRotation = THING.Math.getQuatFromTarget(objectPosition, targetPoint, worldUp);
```

---

### <span style="color: #0066cc">静态</span> lookAtRH

**类型:** `function`

**描述:** 计算右手坐标系下的观察矩阵。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `eye` | `Array.<number>` | 观察者的位置。 |
| `target` | `Array.<number>` | 观察者的目标位置。 |
| `up` | `Array.<number>` | 观察者的上方向。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 观察矩阵。

#### 示例

```javascript
const eyePosition = [0, 5, 10];    // 观察者的位置const targetPosition = [0, 0, 0];  // 观察者的目标位置const upDirection = [0, 1, 0];   // 观察者的上方向const lookAtMatrix = MathUtils.lookAtRH(eyePosition, targetPosition, upDirection);
```

---

### <span style="color: #0066cc">静态</span> setFromRotationMatrix

**类型:** `function`

**描述:** 从旋转矩阵中提取四元数。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `mat` | `Array.<number>` | 旋转矩阵。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 四元数。

#### 示例

```javascript
const rotationMatrix = [...]; // 旋转矩阵const quaternion = MathUtils.setFromRotationMatrix(rotationMatrix);
```

---

### <span style="color: #0066cc">静态</span> getEulerFromQuat

**类型:** `function`

**描述:** 返回四元数的欧拉角表示

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `quat` | `Array.<number>` | 四元数 |
| `target` | `Array.<number>` | 目标的引用值 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 欧拉角作为三个数字的数组，分别代表x、y和z坐标

#### 示例

```javascript
// 将四元数转换为欧拉角（弧度）const quaternion = [0, 0.7071, 0, 0.7071]; // 绕Y轴旋转90度的四元数const eulerRadians = THING.Math.getEulerFromQuat(quaternion); // 返回 [0, π/2, 0]// 使用自定义目标数组const quat = [0, 0, 0.7071, 0.7071]; // 绕Z轴旋转90度的四元数const result = [0, 0, 0];THING.Math.getEulerFromQuat(quat, result); // result 现在包含欧拉角（弧度）// 在动画系统中使用function updateRotationUI(objectQuaternion) {  const eulerAngles = THING.Math.getEulerFromQuat(objectQuaternion);  // 显示角度（需要转换为度数）  console.log('Rotation: ' +    'X=' + (eulerAngles[0] * 180/Math.PI) + '°, ' +    'Y=' + (eulerAngles[1] * 180/Math.PI) + '°, ' +    'Z=' + (eulerAngles[2] * 180/Math.PI) + '°'  );}
```

---

### <span style="color: #0066cc">静态</span> getAnglesFromQuat

**类型:** `function`

**描述:** 从四元数中获取角度。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `quat` | `Array.<number>` | 四元数。 |
| `target` | `Array.<number>` | 目标的引用值。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 欧拉角作为三个数字的数组，分别代表x、y和z坐标。

#### 示例

```javascript
// 将四元数转换为欧拉角（度）const quaternion = [0, 0.7071, 0, 0.7071]; // 绕Y轴旋转90度的四元数const eulerDegrees = THING.Math.getAnglesFromQuat(quaternion); // 返回 [0, 90, 0]// 使用自定义目标数组const quat = [0, 0, 0.7071, 0.7071]; // 绕Z轴旋转90度的四元数const result = [0, 0, 0];THING.Math.getAnglesFromQuat(quat, result); // result 变为 [0, 0, 90]// 在3D对象旋转中使用function displayObjectRotation(objectQuaternion) {  const angles = THING.Math.getAnglesFromQuat(objectQuaternion);  console.log(`物体旋转角度: X=${angles[0]}°, Y=${angles[1]}°, Z=${angles[2]}°`);}// 在相机控制中使用const cameraQuat = [0.2706, 0.6533, 0.2706, 0.6533]; // 某个相机旋转const cameraAngles = THING.Math.getAnglesFromQuat(cameraQuat);// 使用角度设置UI控件// xRotationSlider.value = cameraAngles[0];// yRotationSlider.value = cameraAngles[1];// zRotationSlider.value = cameraAngles[2];
```

---

### <span style="color: #0066cc">静态</span> pixelToScreenCoordinate

**类型:** `function`

**描述:** 将像素坐标转换为屏幕坐标在[-1, 1]范围内。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 位置。 |
| `size` | `Array.<number>` | 画布的大小。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 屏幕坐标在[-1, 1]范围内，作为代表x和y坐标的两个数字的数组。

#### 示例

```javascript
// 将像素坐标转换为标准化设备坐标（NDC）const canvasSize = [800, 600]; // 画布大小const pixelPos = [400, 300];   // 像素坐标（画布中心）const ndcPos = THING.Math.pixelToScreenCoordinate(pixelPos, canvasSize); // 返回 [0, 0]// 将鼠标位置转换为NDC坐标function handleMouseMove(event) {  const mousePos = [event.clientX, event.clientY];  const screenSize = [window.innerWidth, window.innerHeight];  const normalizedPos = THING.Math.pixelToScreenCoordinate(mousePos, screenSize);  // 使用标准化的坐标进行射线投射等操作}// 在WebGL渲染中使用const viewport = [1920, 1080]; // 视口大小const corner = [0, 0];         // 左上角const ndc = THING.Math.pixelToScreenCoordinate(corner, viewport); // 返回 [-1, 1]
```

---

### <span style="color: #0066cc">静态</span> screenCoordinateToPixel

**类型:** `function`

**描述:** 将屏幕坐标[-1, 1]转换为像素坐标。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 屏幕坐标[-1, 1]。 |
| `size` | `Array.<number>` | 画布的大小。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 像素坐标，作为代表x和y坐标的两个数字的数组。

#### 示例

```javascript
// 将标准化设备坐标（NDC）转换为像素坐标const canvasSize = [800, 600];  // 画布大小const ndcPos = [0, 0];          // NDC坐标（屏幕中心）const pixelPos = THING.Math.screenCoordinateToPixel(ndcPos, canvasSize); // 返回 [400, 300]// 在射线拾取结果处理中使用function handlePickingResult(ndcPosition) {  const viewportSize = [1920, 1080];  const pixelPosition = THING.Math.screenCoordinateToPixel(ndcPosition, viewportSize);  console.log(`点击位置：x=${pixelPosition[0]}, y=${pixelPosition[1]}`);}// 转换边界点const viewport = [1024, 768];const topRight = [1, 1];        // NDC空间的右上角const pixels = THING.Math.screenCoordinateToPixel(topRight, viewport); // 返回 [1024, 0]
```

---

### <span style="color: #0066cc">静态</span> getPositionOnDirection

**类型:** `function`

**描述:** 根据距离获取方向上的位置。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 起始位置。 |
| `direction` | `Array.<number>` | 方向。 |
| `scale` | `number` | 缩放因子。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 方向上的位置，作为代表x、y和z坐标的三个数字的数组。

#### 示例

```javascript
// 获取在指定方向上按指定距离的点const startPos = [0, 0, 0];const direction = [1, 0, 0];const distance = 10;const result = THING.Math.getPositionOnDirection(startPos, direction, distance);// @expect(result === [10, 0, 0]);
```

---

### <span style="color: #0066cc">静态</span> getPositionOnPlane

**类型:** `function`

**描述:** 根据方向获取虚拟平面上的位置。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `origin` | `Array.<number>` | 起始（眼睛）位置。 |
| `target` | `Array.<number>` | 平面上的目标位置。 |
| `direction` | `Array.<number>` | 平面方向。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 平面上的位置，作为代表x、y和z坐标的三个数字的数组。

#### 示例

```javascript
// 获取虚拟平面上根据方向的位置const eyePosition = [0, 0, 0]; // 眼睛位置const targetOnPlane = [10, 0, 0]; // 平面上的目标位置const planeDirection = [0, 1, 0]; // 平面方向（Y轴）const positionOnPlane = THING.Math.getPositionOnPlane(eyePosition, targetOnPlane, planeDirection);// @expect(positionOnPlane === [10, 0, 0]);
```

---

### <span style="color: #0066cc">静态</span> createVec3

**类型:** `function`

**描述:** 创建一个新的三维向量 [0,0,0]。

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 返回一个包含3个元素的数组，表示三维向量。

#### 示例

```javascript
// 创建一个新的三维向量（表示原点）const vector = THING.Math.createVec3(); // 返回 [0, 0, 0]// 在3D对象初始化中使用const position = THING.Math.createVec3();// object.position = position;// 用作相机位置的起始值const cameraPosition = THING.Math.createVec3();// 进行相机位置计算...
```

---

### <span style="color: #0066cc">静态</span> createQuat

**类型:** `function`

**描述:** 创建一个新的四元数 [0,0,0,1]。

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 返回一个包含4个元素的数组，表示四元数。

#### 示例

```javascript
// 创建一个新的四元数（表示无旋转）const quaternion = THING.Math.createQuat(); // 返回 [0, 0, 0, 1]// 在3D对象旋转初始化中使用const rotation = THING.Math.createQuat();// object.quaternion = rotation;// 用作旋转插值的起始值const startRotation = THING.Math.createQuat();// 进行四元数插值计算...
```

---

### <span style="color: #0066cc">静态</span> createEuler

**类型:** `function`

**描述:** 创建一个新的欧拉角 [0,0,0]。

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 返回一个包含3个元素的数组，表示欧拉角（以弧度为单位）。

#### 示例

```javascript
// 创建一个新的欧拉角（表示无旋转）const euler = THING.Math.createEuler(); // 返回 [0, 0, 0]// 在相机旋转中使用const cameraRotation = THING.Math.createEuler();// camera.rotation = cameraRotation;// 初始化物体的旋转角度const objectRotation = THING.Math.createEuler();// 可以之后修改各个轴的旋转角度objectRotation[0] = Math.PI/2; // 绕X轴旋转90度
```

---

### <span style="color: #0066cc">静态</span> createMat3

**类型:** `function`

**描述:** 创建一个新的3x3矩阵（单位矩阵）。

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 返回一个包含9个元素的数组，表示3x3矩阵。

#### 示例

```javascript
// 创建一个新的3x3单位矩阵const matrix = THING.Math.createMat3();// 返回 [//   1, 0, 0,//   0, 1, 0,//   0, 0, 1// ]// 在2D变换中使用const transform2D = THING.Math.createMat3();// 可以用于2D旋转、缩放等操作// 用于法线矩阵计算const normalMatrix = THING.Math.createMat3();// 进行法线变换计算...
```

---

### <span style="color: #0066cc">静态</span> getPointOnLine

**类型:** `function`

**描述:** 获取线段上的一点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `start` | `Array.<number>` | 线段的起点。 |
| `end` | `Array.<number>` | 线段的终点。 |
| `target` | `number` | 目标点在线段上的位置，0为起点，1为终点，其他值为线段上的点。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 线段上目标点的坐标。

#### 示例

```javascript
const start = [0, 0, 0]; // 线段起点const end = [10, 10, 10]; // 线段终点const target = 0.5; // 目标点在线段上的位置const pointOnLine = MathUtils.getPointOnLine(start, end, target);// pointOnLine 将是线段上距离起点50%的点的坐标
```

---

### <span style="color: #0066cc">静态</span> getQuatLength

**类型:** `function`

**描述:** 计算四元数的长度。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `quat` | `Array.<number>` | 四元数。 |

#### 返回值

- **类型:** `number`
- **描述:** 四元数的长度。

#### 示例

```javascript
const quat = [0.5, 0.5, 0.5, 0.5]; // 四元数const length = MathUtils.getQuatLength(quat);// length 将是四元数的长度
```

---

### <span style="color: #0066cc">静态</span> multiplyQuat

**类型:** `function`

**描述:** 计算四元数的乘法。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `a` | `Array.<number>` | 第一个四元数。 |
| `b` | `Array.<number>` | 第二个四元数。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 结果四元数。

#### 示例

```javascript
// 计算两个四元数的乘积const q1 = [0.5, 0.5, 0.5, 0.5];const q2 = [0.5, 0.5, 0.5, 0.5];const result = THING.Math.multiplyQuat(q1, q2);// @expect(result === [0.5, 0.5, 0.5, 0.5]);
```

---

### <span style="color: #0066cc">静态</span> intersectPlane

**类型:** `function`

**描述:** 计算射线与平面的交点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `origin` | `Array.<number>` | 射线的起点。 |
| `direction` | `Array.<number>` | 射线的方向（已标准化）。 |
| `normal` | `Array.<number>` | 平面的法线（已标准化）。 |
| `constant` | `number` | 平面的常数（起点的距离）。 |

#### 返回值

- **类型:** `Array.<number>, null`
- **描述:** 交点或如果没有交点则返回null。

#### 示例

```javascript
// 计算射线与平面的交点const rayOrigin = [0, 0, 0];const rayDirection = [0, 0, 1];const planeNormal = [0, 0, 1];const planeConstant = 5;const intersection = THING.Math.intersectPlane(rayOrigin, rayDirection, planeNormal, planeConstant);// 返回 [0, 0, 5]
```

---

### <span style="color: #0066cc">静态</span> intersectsBox

**类型:** `function`

**描述:** 检查两个轴对齐的边界框是否相交。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `min1` | `Array.<number>` | 第一个框的最小点。 |
| `max1` | `Array.<number>` | 第一个框的最大点。 |
| `min2` | `Array.<number>` | 第二个框的最小点。 |
| `max2` | `Array.<number>` | 第二个框的最大点。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果框相交返回true。

#### 示例

```javascript
// 检查两个AABB包围盒是否相交const box1Min = [0, 0, 0];const box1Max = [2, 2, 2];const box2Min = [1, 1, 1];const box2Max = [3, 3, 3];const isIntersecting = THING.Math.intersectsBox(box1Min, box1Max, box2Min, box2Max);// 返回 true
```

---

### <span style="color: #0066cc">静态</span> intersectsPoint

**类型:** `function`

**描述:** 检查点是否在轴对齐的边界框内。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `point` | `Array.<number>` | 要检查的点。 |
| `min` | `Array.<number>` | 盒子的最小点。 |
| `max` | `Array.<number>` | 盒子的最大点。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果点在盒子内返回true。

#### 示例

```javascript
// 检查点是否在包围盒内const point = [1, 1, 1];const boxMin = [0, 0, 0];const boxMax = [2, 2, 2];const isInside = THING.Math.intersectsPoint(point, boxMin, boxMax);// 返回 true
```

---

### <span style="color: #0066cc">静态</span> snapPoint

**类型:** `function`

**描述:** 将点吸附到工作平面网格上。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `point` | `Array.<number>` | 要吸附的点。 |
| `workPlane` | `object` | 包含位置、四元数和精度的工作平面。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 吸附后的点。

#### 示例

```javascript
// 将点吸附到网格const point = [1.2, 0.8, 2.3];const workPlane = {  position: [0, 0, 0],  quaternion: [0, 0, 0, 1],  precision: 1  // 网格大小为1};const snapped = THING.Math.snapPoint(point, workPlane);// 在CAD编辑中使用function snapToGrid(mousePosition) {  const grid = {    position: [0, 0, 0],    quaternion: [0, 0, 0, 1],    precision: 0.5  // 0.5单位网格  };  return THING.Math.snapPoint(mousePosition, grid);}// 在精确定位中使用const workPlane = {  position: [10, 0, 10],  // 网格原点  quaternion: [0, 0, 0, 1],  precision: 0.1  // 精确到0.1单位};const position = [10.23, 0, 9.87];const snappedPos = THING.Math.snapPoint(position, workPlane);
```

---

### <span style="color: #0066cc">静态</span> getPointsSteps

**类型:** `function`

**描述:** 获取路径的归一化步长数组。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `points` | `Array.<Array.<number>>` | 路径点。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 每段路径占总长度的比例。

#### 示例

```javascript
// 计算路径的归一化步长const path = [  [0, 0, 0],  [10, 0, 0],  [10, 10, 0]];const steps = THING.Math.getPointsSteps(path);// 返回每段路径占总长度的比例，如 [0.5, 0.5]// 在动画路径中使用function createPathAnimation(points) {  const steps = THING.Math.getPointsSteps(points);  // 使用steps来计算每段路径的动画时间  return { path: points, segmentRatios: steps };}// 计算不等长路径的步长const complexPath = [  [0, 0, 0],  [10, 0, 0],  // 长度10  [10, 5, 0],  // 长度5  [0, 5, 0]    // 长度10];const pathSteps = THING.Math.getPointsSteps(complexPath);// 返回 [0.4, 0.2, 0.4] 表示每段路径的比例
```

---

### <span style="color: #0066cc">静态</span> getArrayIndexFromProgress

**类型:** `function`

**描述:** 根据进度获取数组索引。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `array` | `Array` | 输入数组。 |
| `progress` | `number` | 进度值，介于0和1之间。 |
| `steps` | `Array.<number>` | 可选的步长比例数组。 |

#### 返回值

- **类型:** `number`
- **描述:** 计算出的数组索引。

#### 示例

```javascript
// 根据进度获取数组索引const array = ['a', 'b', 'c', 'd'];const progress = 0.5;const index = THING.Math.getArrayIndexFromProgress(array, progress);// 返回 2
```

---

### <span style="color: #0066cc">静态</span> getArrayProgress

**类型:** `function`

**描述:** 获取当前数组段内的进度。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `array` | `Array` | 输入数组。 |
| `progress` | `number` | 总体进度值，介于0和1之间。 |
| `steps` | `Array.<number>` | 可选的步长比例数组。 |

#### 返回值

- **类型:** `number`
- **描述:** 当前段内的进度（0到1）。

#### 示例

```javascript
// 获取当前数组段内的进度const array = ['a', 'b', 'c', 'd'];const progress = 0.6;const segmentProgress = THING.Math.getArrayProgress(array, progress);// 返回当前段内的进度值
```

---

### <span style="color: #0066cc">静态</span> lerpPoints

**类型:** `function`

**描述:** 沿路径插值点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `points` | `Array.<Array.<number>>` | 路径点数组。 |
| `steps` | `Array.<number>` | 可选的步长比例数组。 |
| `progress` | `number` | 进度值，介于0和1之间。 |

#### 返回值

- **类型:** `object`
- **描述:** 包含插值点和段信息的对象。

#### 示例

```javascript
// 在路径上插值计算点位置const path = [[0, 0, 0], [10, 0, 0], [10, 10, 0]];const progress = 0.5;const result = THING.Math.lerpPoints(path, null, progress);// 返回插值点和相关信息
```

---

### <span style="color: #0066cc">静态</span> makeSphericalFromCartesianCoords

**类型:** `function`

**描述:** 从笛卡尔坐标生成球面坐标的radius、phi和theta属性。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `vector` | `Array.<number>` | 坐标。 |

#### 返回值

- **类型:** `Spherical`
- **描述:** 球面坐标。

#### 示例

```javascript
// 将笛卡尔坐标转换为球面坐标const vector = [1, 1, 1];const spherical = THING.Math.makeSphericalFromCartesianCoords(vector);// @expect(spherical.radius === Math.sqrt(3));// @expect(spherical.phi === Math.PI / 4);// @expect(spherical.theta === Math.PI / 4);
```

---

### <span style="color: #0066cc">静态</span> makeSphericalSafe

**类型:** `function`

**描述:** 将极角phi限制在0.000001到pi - 0.000001之间。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `spherical` | `Spherical` | 一个点的球面坐标。 |

#### 返回值

- **类型:** `Spherical`
- **描述:** 球面坐标。

#### 示例

```javascript
// 限制球面坐标的极角const spherical = { radius: 1, phi: Math.PI / 2, theta: 0 };const safeSpherical = THING.Math.makeSphericalSafe(spherical);// @expect(safeSpherical.phi === Math.PI / 2);
```

---

### <span style="color: #0066cc">静态</span> getFromSphericalCoords

**类型:** `function`

**描述:** 从球面坐标的半径、phi和theta获取向量。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `spherical` | `Spherical` | 一个点的球面坐标。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 向量。

#### 示例

```javascript
// 将球面坐标转换为笛卡尔坐标const spherical = { radius: 1, phi: Math.PI / 4, theta: Math.PI / 4 };const vector = THING.Math.getFromSphericalCoords(spherical);// @expect(vector[0] === 0.5);// @expect(vector[1] === 0.5);// @expect(vector[2] === 0.5);
```

---

### <span style="color: #0066cc">静态</span> pointInLineSegment

**类型:** `function`

**描述:** 判断点是否在直线段上。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pointA` | `Array.<number>` | 直线段点A。 |
| `pointB` | `Array.<number>` | 直线段点B。 |
| `point` | `Array.<number>` | 测试点。 |
| `deviation` | `number` | 偏差。 |
| `containsEndpoint` | `boolean` | 默认包含端点。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果点在直线段上，则返回true，否则返回false。

#### 示例

```javascript
const inLineSegment = THING.MathUtils.pointInLineSegment([10,0],[10,10],[10,5]);console.log(inLineSegment);
```

---

### <span style="color: #0066cc">静态</span> pointToLineDistance

**类型:** `function`

**描述:** 点与线之间的距离。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pointA` | `Array.<number>` | 线段点A。 |
| `pointB` | `Array.<number>` | 线段点B。 |
| `point` | `Array.<number>` | 测试点。 |

#### 返回值

- **类型:** `number`
- **描述:** 距离。

#### 示例

```javascript
const distance = THING.MathUtils.pointToLineDistance([10,0],[10,10],[10,5]);console.log(distance);
```

---

### <span style="color: #0066cc">静态</span> projectionInside

**类型:** `function`

**描述:** 检查点到线段的投影是否在内部。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pointA` | `Array.<number>` | 线段点A。 |
| `pointB` | `Array.<number>` | 线段点B。 |
| `point` | `Array.<number>` | 测试点。 |
| `containsEndpoint` | `boolean` | 默认包含端点。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果点到线段的投影在内部，则返回true，否则返回false。

#### 示例

```javascript
const inside = THING.MathUtils.projectionInside([10,0],[10,10],[10,5]);console.log(inside);
```

---

### <span style="color: #0066cc">静态</span> projectPointToLineSegment

**类型:** `function`

**描述:** 通过线段和原点获取投影点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pointA` | `Array.<number>` | 线段点A。 |
| `pointB` | `Array.<number>` | 线段点B。 |
| `point` | `Array.<number>` | 测试点。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 投影点。

#### 示例

```javascript
const projectPoint = THING.MathUtils.projectPointToLineSegment([10,0],[10,10],[10,5]);console.log(projectPoint);
```

---

### <span style="color: #0066cc">静态</span> simplifyPoints

**类型:** `function`

**描述:** 通过删除冗余点和几乎共线的点，简化点数组。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `array` | `Array.<Array.<number>>` | 要简化的点数组。 |
| `filterEqualpoints` | `boolean` | 如果为true，删除重复的点集。 |
| `deviation` | `number` | 用于确定共线性的向量的角度偏差。 |

#### 返回值

- **类型:** `Array.<Array.<number>>`
- **描述:** 简化后的点数组。

#### 示例

```javascript
// 简化一个多边形的点集const polygon = [  [0, 0, 0],  [1, 0, 0],  [1.01, 0, 0],  // 几乎共线的点  [2, 0, 0],  [2, 0, 1],  [2, 0, 1.01],  // 重复的点  [0, 0, 1]];const simplified = THING.Math.simplifyPoints(polygon);// 返回简化后的点集：[[0,0,0], [2,0,0], [2,0,1], [0,0,1]]// 使用自定义参数const path = [  [0, 0, 0],  [1, 0, 0],  [1, 0, 1],  [1, 0, 1],  // 重复点  [0, 0, 1]];const result = THING.Math.simplifyPoints(  path,  true,    // 过滤重复点  2.0      // 更大的角度偏差);// 在路径优化中使用function optimizePath(waypoints) {  // 移除冗余点，保持路径的基本形状  return THING.Math.simplifyPoints(waypoints);}
```

---

### <span style="color: #0066cc">静态</span> intersectLineSegments

**类型:** `function`

**描述:** 检查两个线段是否相交。在调用此函数之前，确保两个线段不是共线的。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `a` | `Array.<number>` | 线段1的起点。 |
| `b` | `Array.<number>` | 线段1的终点。 |
| `c` | `Array.<number>` | 线段2的起点。 |
| `d` | `Array.<number>` | 线段2的终点。 |
| `deviation` | `number` | 线段上点的偏差。 |

#### 返回值

- **类型:** `Array.<number>, null`
- **描述:** 如果线段相交，则返回交点作为[x, y]数组，否则返回null。

#### 示例

```javascript
const intersectPoint = THING.MathUtils.intersectLineSegments([0, 0], [2, 0], [1, 0], [1, 1])console.log(intersectPoint);
```

---

### <span style="color: #0066cc">静态</span> genSmoothPathByBezier

**类型:** `function`

**描述:** 通过输入已知点位数组，根据二次贝塞尔规则，生成平滑曲线的点位数组

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `path` | `Array` | 必选参数，输入点位数组 |
| `curvature` | `number` | 平滑范围，表示平滑位置与折线的关系，默认0.5,取值范围（0,1.0） |
| `divisions` | `number` | 切割份数，表示每段平滑曲线分割的份数。默认50, 取值为大于0的整数 |
| `mode` | `string` | 类型，表示平滑曲线的过渡类型，默认为THING.BezierMode.Pursuit；取值为THING.BezierMode枚举。 |

#### 返回值

- **类型:** `Array`
- **描述:** 返回平滑曲线的点位数组

#### 示例

```javascript
let path1 = [[0,10,0],[0,10,50],[50,10,50],[50,10,0],[0,10,0]];let path2 = THING.MathUtils.genSmoothPathByBezier(path1, 0.2, 100, THING.BezierMode.Symmetry);// var line1 = new THING.PixelLine({ selfPoints: path1, style: {color: 'red'} });// var line2 = new THING.PixelLine({ selfPoints: path2, style: {color: 'blue'} });let camera = THING.App.current.camera;camera.control.enable = false;camera.movePath(path2, {    time: 30000,    loopType: 'pingpong'})
```

---

### <span style="color: #0066cc">静态</span> getPositionByBoundingBoxAngles

**类型:** `function`

**描述:** 根据物体包围盒和角度计算位置。本函数根据物体的包围盒和给定的水平和垂直角度计算位置。位置是通过将从角度导出的方向向量按给定的半径缩放并加到原点上来计算的。原点是包围盒中心投影到水平平面上的点。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.Object3D` | 物体。 |
| `horzAngle` | `number` | 水平角度。 |
| `vertAngle` | `number` | 垂直角度。 |
| `boundingBox` | `THING.Box3` | 包围盒。 |
| `radius` | `number` | 半径。 |

#### 返回值

- **类型:** `Array.<number>`
- **描述:** 计算的位置作为三个数字的数组，分别代表x、y和z坐标。

#### 示例

```javascript
// 根据物体包围盒和角度计算位置const object = new THING.Box();  // 一个3D对象const horzAngle = 45;   // 水平角度45度const vertAngle = 30;   // 垂直角度30度const position = THING.Math.getPositionByBoundingBoxAngles(  object,  horzAngle,  vertAngle);// 使用自定义包围盒和半径const customBox = {  min: [0, 0, 0],  max: [10, 10, 10],  center: [5, 5, 5],  radius: 8.66  // √(5² + 5² + 5²)};const customRadius = 20;const pos = THING.Math.getPositionByBoundingBoxAngles(  object,  0,    // 正面视角  45,   // 45度俯视角  customRadius,  customBox);
```

---

### <span style="color: #0066cc">静态</span> genCirclePath

**类型:** `function`

**描述:** 根据位置、半径和密度计算圆路径。这个函数生成一系列点，形成一个圆路径。根据密度参数，这些点沿圆均匀分布。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 圆的位置，作为一个包含三个数字的数组，分别代表x, y, z坐标。 |
| `radius` | `number` | 圆的半径。 |
| `density` | `number` | 圆的密度，决定了沿圆生成多少点。密度越高，生成的点越多。 |

#### 返回值

- **类型:** `Array.<Array.<number>>`
- **描述:** 形成圆路径的一系列点。每个点作为一个包含三个数字的数组，分别代表x, y, z坐标。

#### 示例

```javascript
// Generate a circle pathconst center = [0, 0, 0];  // Circle center positionconst radius = 10;         // Circle radiusconst density = 36;        // Density, resulting in a point every 10 degreesconst circlePath = THING.Math.genCirclePath(center, radius, density);// Create a patrol pathconst patrolCenter = [100, 0, 100];const patrolRadius = 50;const pathPoints = THING.Math.genCirclePath(  patrolCenter,  patrolRadius,  24  // Density, resulting in a point every 15 degrees);// Use in animationfunction createCircularAnimation(object, center, radius) {  const path = THING.Math.genCirclePath(center, radius);  // object.movePath({  //   path: path,  //   time: 5000,  //   loop: true  // });}
```

---

### <span style="color: #0066cc">静态</span> containsPoint

**类型:** `function`

**描述:** 检查点是否在圆内。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `point` | `Array.<number>` | 检查的点，作为一个包含三个数字的数组，分别代表x, y, z坐标。 |
| `center` | `Array.<number>` | 圆心位置，作为一个包含三个数字的数组，分别代表x, y, z坐标。 |
| `radius` | `number` | 圆的半径。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果点在圆内，则返回true，否则返回false。

#### 示例

```javascript
// 检查点是否在圆内const point = [10, 0, 10]; // 检查的点const center = [0, 0, 0]; // 圆心位置const radius = 10; // 圆的半径const isInside = MathUtils.containsPoint(point, center, radius);console.log(isInside); // 输出：true
```

---

### <span style="color: #0066cc">静态</span> IsCollisionBoxAndSphere

**类型:** `function`

**描述:** 检查球是否在盒子里。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `min` | `Array.<number>` | 盒子的最小值。 |
| `max` | `Array.<number>` | 盒子的最大值。 |
| `center` | `Array.<number>` | 球的中心。 |
| `radius` | `number` | 球的半径。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 如果球在盒子里，则返回true，否则返回false。

#### 示例

```javascript
// 检查球是否在盒子里const min = [0, 0, 0]; // 盒子的最小值const max = [10, 10, 10]; // 盒子的最大值const center = [5, 5, 5]; // 球的中心const radius = 5; // 球的半径const isInside = MathUtils.isCollisionBoxAndSphere(min, max, center, radius);console.log(isInside); // 输出：true
```

---

### <span style="color: #0066cc">静态</span> getGradientPixelData

**类型:** `function`

**描述:** 获取渐变颜色像素数据。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `gradient` | `object` | 渐变对象。 |
| `steps` | `number` | 渐变步骤。 |
| `target` | `Uint8Array` | 目标像素数据。 |

#### 返回值

- **类型:** `Uint8Array`
- **描述:** 返回渐变颜色的像素数据。

#### 示例

```javascript
var gradient = {  0: '#000000',  1: '#ffffff'};var steps = 10;var target = new Uint8Array(steps * 4);var pixelData = THING.Math.getGradientPixelData(gradient, steps, target);console.log(pixelData);
```

---

### <span style="color: #0066cc">静态</span> generaTemperatureData

**类型:** `function`

**描述:** 生成温度数据的3D纹理。(IDW插值算法)

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pointsData` | `object` | 温度点数据对象 |
| `pointsData.points` | `Array.<Array.<number>>` | 温度点数组，每个点包含[x,y,z,温度值] |
| `pointsData.obb` | `object` | 定向包围盒数据 |
| `pointsData.obb.center` | `Array.<number>` | 包围盒中心点坐标[x,y,z] |
| `pointsData.obb.size` | `Array.<number>` | 包围盒大小[width,height,depth] |
| `pointsData.obb.angles` | `Array.<number>` | 包围盒旋转角度[x,y,z] |
| `options` | `object` | 配置选项 |
| `options.textureSize` | `Array.<number>` | 纹理尺寸[u,v,2] |
| `options.indoorTemperature` | `number` | 室内基础温度 |
| `options.decayExponent` | `number` | 温度衰减指数 |
| `options.minDistance` | `number` | 最小距离限制 |
| `options.influenceRadiusFactors` | `Array.<number>` | 影响半径系数[u,v,w] |
| `options.target` | `Uint8Array` | 目标数据数组，如果不提供则创建新数组 |
| `options.minValue` | `number` | 最小温度值限制 |
| `options.maxValue` | `number` | 最大温度值限制 |

#### 返回值

- **类型:** `object`
- **描述:** 返回生成的温度数据

#### 示例

```javascript
// 生成温度数据纹理const pointsData = {  points: [    [0, 0, 0, 25],    // x,y,z,温度    [10, 0, 0, 30],    [0, 10, 0, 28]  ],  obb: {    center: [5, 5, 0],    size: [20, 20, 1],    angles: [0, 0, 0]  }};const options = {  textureSize: [64, 64, 1],  indoorTemperature: 22,  decayExponent: 1.5};const result = THING.Math.generaTemperatureData(pointsData, options);// result.data 包含了温度分布数据// result.size 包含了纹理尺寸
```

---

### <span style="color: #0066cc">静态</span> generateHeatData

**类型:** `function`

**描述:** 生成热力图数据纹理。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `pointsData` | `object` | 热力点数据对象。 |
| `pointsData.points` | `Array.<Array.<number>>` | 热力点数组，每个点包含[x,y,z,热力值]。 |
| `pointsData.obb` | `object` | 包围盒数据。 |
| `pointsData.obb.center` | `Array.<number>` | 包围盒中心点。 |
| `pointsData.obb.size` | `Array.<number>` | 包围盒大小。 |
| `pointsData.obb.angles` | `Array.<number>` | 包围盒旋转角度。 |
| `options` | `object` | 配置选项。 |
| `options.textureSize` | `Array.<number>` | 纹理尺寸。 |
| `options.minDistance` | `number` | 最小距离限制。 |
| `options.radius` | `number` | 热力影响半径。 |
| `options.minValue` | `number` | 最小热力值。 |
| `options.maxValue` | `number` | 最大热力值。 |
| `options.target` | `Uint8Array` | 目标数据数组。 |

#### 返回值

- **类型:** `object`
- **描述:** 返回生成的热力图数据纹理对象。

#### 示例

```javascript
// 生成热力图数据const pointsData = {  points: [    [0, 0, 0, 100],  // 位置和热力值    [10, 0, 0, 80],    [0, 10, 0, 90]  ],  obb: {    center: [5, 5, 5],    size: [20, 20, 20],    angles: [0, 0, 0]  }};const options = {  textureSize: [64, 64, 64],  radius: 2,  minDistance: 0.1};const heatData = THING.Math.generateHeatData(pointsData, options);console.log(heatData);// heatData.data 包含了热力图的数据// heatData.size 包含了纹理的尺寸
```

---

