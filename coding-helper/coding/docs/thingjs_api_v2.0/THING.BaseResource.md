# 类: BaseResource

**命名空间:** THING

**继承:** [THING.RefCountObject](./THING.RefCountObject.md)

**描述:** 基础资源类构造函数，用于初始化资源对象。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | 初始参数对象，包含资源的配置和回调。 |
| param.extras | `string` | - | 否 | 额外的资源信息，通常用于存储附加数据。 |
| param.external | `string` | - | 否 | 外部资源的引用，可能用于加载外部文件。 |
| param.onComplete | `function` | - | 否 | 资源加载完成后的回调函数。 |

## 实例属性

### uuid

**类型:** `member`

**数据类型:** `string`

**描述:** 获取唯一标识符。

---

### isBaseResource

**类型:** `member`

**数据类型:** `boolean`

**描述:** 检查类类型。

---

## 实例方法

### waitForComplete

**类型:** `function`

**描述:** 等待资源加载完成。

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

---

