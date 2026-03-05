# 类: Relationship

**命名空间:** THING

**描述:** 对象之间的关系。

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `object` | - | 否 | - |
| param.type | `string` | - | 否 | 关系类型。 |
| param.name | `string` | - | 否 | 关系名称。 |
| param.source | `THING.BaseObject, Array.<THING.BaseObject>, THING.Selector` | - | 否 | 关系源对象。 |
| param.target | `THING.BaseObject, Array.<THING.BaseObject>, THING.Selector` | - | 否 | 关系目标对象。 |
| param.queryDirection | `string` | - | 是 | 默认查询关系方向。 |
| param.uuid | `string` | - | 是 | 关系UUID。 |

## 实例属性

### type

**类型:** `member`

**数据类型:** `string`

**描述:** 获取/设置关系类型。

#### 示例

```javascript
let source = new THING.Object3D();let target = new THING.Object3D();let rel = new THING.Relationship({     type: 'control',     source: source,     target: target});// @expect(rel.type == 'control')
```

---

### name

**类型:** `member`

**数据类型:** `string`

**描述:** 获取/设置关系名称。

#### 示例

```javascript
let source = new THING.Object3D();let target = new THING.Object3D();let rel = new THING.Relationship({     type: 'control',		name: 'myRelationship',     source: source,     target: target});// @expect(rel.name == 'myRelationship')
```

---

### source

**类型:** `member`

**数据类型:** `THING.BaseObject, Array.<THING.BaseObject>, THING.Selector`

**描述:** 获取/设置关系源对象。

#### 示例

```javascript
let source = new THING.Object3D();let target = new THING.Object3D();let rel = new THING.Relationship({     type: 'control',		name: 'myRelationship',     source: source,     target: target});// @expect(rel.source == source)
```

---

### target

**类型:** `member`

**数据类型:** `THING.BaseObject, Array.<THING.BaseObject>, THING.Selector`

**描述:** 获取/设置关系目标对象。

#### 示例

```javascript
let source = new THING.Object3D();let target = new THING.Object3D();let rel = new THING.Relationship({     type: 'control',		name: 'myRelationship',     source: source,     target: target});// @expect(rel.target == target)
```

---

### queryDirection

**类型:** `member`

**数据类型:** `RelationshipDirection`

**描述:** 获取/设置关系查询方向。

#### 示例

```javascript
let source = new THING.Object3D();let target = new THING.Object3D();let rel = new THING.Relationship({     type: 'control',		name: 'myRelationship',     source: source,     target: target});// @expect(rel.queryDirection == THING.RelationshipDirection.OUT)
```

---

## 实例方法

### destroy

**类型:** `function`

**描述:** 销毁关系。

#### 示例

```javascript
let source = new THING.Object3D()();let target = new THING.Object3D()();let rel = new THING.Relationship({     type: 'control',     source: source,     target: target});rel.destroy()// @expect(source.relationships.length == 0)
```

---

