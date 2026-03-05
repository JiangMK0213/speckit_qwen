# 类: LevelControls

**命名空间:** THING.CAMPUS

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| app | `Object` | - | 否 | 应用实例，包含 level、levelControlManager 等 |

## 实例方法

### setControlOption

**类型:** `function`

**描述:** 批量设置所有已注册控件的选项

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `option` | `string` | 要设置的选项名 |
| `value` | `*` | 要设置的值 |

---

### addControl

**类型:** `function`

**描述:** 添加（注册）控件实例到 level 管理器，并在当前实例上建立访问属性

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `condition` | `String` | 控件的启用条件 |
| `name` | `string` | 控件名称（用于在 this 上创建属性） |
| `control` | `DefaultLevelControl` | 控件实例（需满足 isDefaultLevelControl） |
| `options` | `Object` | 注册时的额外选项（会与默认 tag 和优先级合并） |

---

### removeControl

**类型:** `function`

**描述:** 移除（注销）指定名称的控件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 要移除的控件名 |

---

