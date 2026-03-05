# 类: TransformControlComponent

**继承:** [BaseComponent](./BaseComponent.md)

**描述:** transform control component

## 实例属性

### mode

**类型:** `member`

**数据类型:** `string`

**描述:** 控制变换模式，包括平移translate、旋转angle和缩放scale，默认为平移。

---

### space

**类型:** `member`

**数据类型:** `string`

**描述:** 控制坐标系的变换，包括世界坐标系world和本地坐标系local，默认为世界坐标系。

---

### snap

**类型:** `member`

**数据类型:** `number`

**描述:** 设置物体操作时平移、旋转和缩放变化的阈值。

---

### keepSize

**类型:** `member`

**数据类型:** `boolean`

**描述:** 设置操作杆是否固定呈现出的大小，true开启、false关闭，默认开启。

---

### size

**类型:** `member`

**数据类型:** `number`

**描述:** 操作杆固定大小情况下，再设置操作杆的大小。

---

## 实例方法

### setObjects

**类型:** `function`

**描述:** 设置多个需添加组件的对象。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `objs` | `Array.<Object>` | 需要添加组件的对象。 |
| `ignoreCenter` | `boolean` | 是否忽略中心位置，默认为false，表示不忽略中心位置，需计算中心点。 |

---

### getObjects

**类型:** `function`

**描述:** 获取添加组件的对象。

#### 返回值

- **类型:** `Array.<Object>`
- **描述:** 添加组件的对象。

---

### lockAxis

**类型:** `function`

**描述:** 锁定指定轴，使其无法移动

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `axis` | `string` | 要锁定的轴 ('x', 'y', 'z', 'xy', 'yz', 'xz', 'xyz') |
| `locked` | `boolean` | 是否锁定 |

---

### lockAllAxes

**类型:** `function`

**描述:** 锁定所有轴

---

### unlockAllAxes

**类型:** `function`

**描述:** 解锁所有轴

---

### unlockAxis

**类型:** `function`

**描述:** 解锁指定轴

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `axis` | `string` | 要解锁的轴 ('x', 'y', 'z', 'xy', 'yz', 'xz', 'xyz') |

---

### isAxisLocked

**类型:** `function`

**描述:** 获取轴的锁定状态

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `axis` | `string` | 轴名称 ('x', 'y', 'z') |

#### 返回值

- **类型:** `boolean`
- **描述:** 是否锁定

---

### getLockedAxesState

**类型:** `function`

**描述:** 获取当前轴锁定状态

#### 返回值

- **类型:** `object`
- **描述:** 轴锁定状态

---

