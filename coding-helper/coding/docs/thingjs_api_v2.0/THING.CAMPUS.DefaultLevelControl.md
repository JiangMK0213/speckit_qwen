# 类: DefaultLevelControl

**命名空间:** THING.CAMPUS

**继承:** [THING.BaseLevelControl](./THING.BaseLevelControl.md)

**描述:** Constructor for DefaultLevelControl class.

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| options | `Object` | - | 否 | Options for the level control. |

## 实例属性

### enableFly

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 启用/禁用相机飞行

---

### enableSkipLevel

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 启用/禁用跳过层级

---

### enableOutlineColor

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 启用/禁用设置轮廓颜色

---

### enableMouseEvent

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 启用/禁用鼠标事件

---

### outlineColor

**类型:** `member`

**数据类型:** `Array.<Number>`

**描述:** 获取/设置轮廓颜色

---

### enterLevelEventType

**类型:** `member`

**数据类型:** `THING.EventType`

**描述:** 获取/设置进入层级的鼠标事件（仅限 'THING.EventType.Click' 或 'THING.EventType.DBLClick'）

---

### leaveLevelEventType

**类型:** `member`

**数据类型:** `THING.EventType`

**描述:** 获取/设置离开层级的鼠标事件（仅限 'THING.EventType.Click' 或 'THING.EventType.DBLClick'）

---

### preferCachedViewpoint

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 优先使用缓存视角

---

### isCameraFirst

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 相机优先 (进入时最先执行相机设置)

---

### enableBrotherMouseEvent

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 启用/禁用兄弟节点鼠标事件

---

### isDefaultLevelControl

**类型:** `member`

**数据类型:** `Boolean`

**描述:** 获取是否是默认层级控制

---

## 实例方法

### onEnter

**类型:** `function`

**重写:** THING.BaseLevelControl#onEnter

**描述:** 当进入层级时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 进入层级的参数。 |

#### 返回值

- **类型:** `Promise`
- **描述:** -

---

### onLeave

**类型:** `function`

**重写:** THING.BaseLevelControl#onLeave

**描述:** 当离开层级时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 离开层级的参数。 |

---

### onRegisterEvent

**类型:** `function`

**描述:** 当注册事件时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 进入层级的参数。 |

---

### onUnregisterEvent

**类型:** `function`

**描述:** 当取消注册事件时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 离开层级的参数。 |

---

### onSetEffect

**类型:** `function`

**描述:** 进入层级时应用效果。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 进入层级的参数。 |

---

### onResetEffect

**类型:** `function`

**描述:** 离开层级时重置效果。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 离开层级的参数。 |

---

### filterObject

**类型:** `function`

**描述:** 处理对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `Object` | 要处理的对象。 |

#### 返回值

- **类型:** `Object, null`
- **描述:** - 要进一步处理处理过的对象，如果没有合适的对象则返回null。

---

### onFlyTo

**类型:** `function`

**描述:** 启动飞行动画到指定参数。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `flyParam` | `THING.LerpFlyToArgs` | 包含飞行动画参数的对象。 |

#### 返回值

- **类型:** `Promise`
- **描述:** -

---

### onSkipLevel

**类型:** `function`

**描述:** 检查给定路径是否涉及跳过层级。（默认情况下，兄弟节点会被跳过）

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `Object` | 包含层级变化参数的对象。 |

#### 返回值

- **类型:** `boolean`
- **描述:** 返回true表示跳过，返回false表示不跳过。

---

### onMouseEnter

**类型:** `function`

**描述:** 处理鼠标进入对象事件。（默认设置轮廓颜色）

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ev` | `THING.EventCallback` | 鼠标进入事件。 |

---

### onMouseLeave

**类型:** `function`

**描述:** 处理鼠标离开对象事件。（默认清除轮廓颜色）

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ev` | `THING.EventCallback` | 鼠标离开事件。 |

---

### onEnterObjectLevel

**类型:** `function`

**描述:** 进入对象层级的回调函数

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ev` | `THING.Object3D` | 对象。 |

---

### onBackToParentLevel

**类型:** `function`

**描述:** 返回到父级层级的回调函数

---

