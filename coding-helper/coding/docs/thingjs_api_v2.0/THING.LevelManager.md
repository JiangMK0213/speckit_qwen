# 类: LevelManager

**命名空间:** THING

**描述:** 层级管理器,用于管理对象之间的父子关系。

## 实例属性

### prev

**类型:** `member`

**数据类型:** `THING.BaseObject`

**描述:** 获取上一层级

#### 示例

```javascript
let app = THING.App.current;let level = app.level;let prev = level.prev;let target = app.query('.Entity')[0];level.change(target, {  onComplete: function(){		let ret = level.prev == prev;		// @expect(ret == true);	 }});
```

---

### current

**类型:** `member`

**数据类型:** `THING.BaseObject`

**描述:** 获取当前层级

#### 示例

```javascript
let app = THING.App.current;let level = app.level;let target = app.query('.Entity')[0];level.change(target, {  onComplete: function(){		let ret = level.current == target;		// @expect(ret == true);	 }});
```

---

### isChanging

**类型:** `member`

**数据类型:** `boolean`

**描述:** 是否正在切换层级

#### 示例

```javascript
let app = THING.App.current;let level = app.level;let target = app.query('.Entity')[0];level.change(target);let ret = level.isChanging;// @expect(ret == true);
```

---

## 实例方法

### change

**类型:** `function`

**描述:** 切换层级

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 要切换到的层级对象 |
| `options` | `LevelChangeOptions` | 层级切换的参数 |

#### 示例

```javascript
let app = THING.App.current;let level = app.level;let target = app.query('.Entity')[0];level.change(target, {  onComplete: function(){		let ret = level.current == target;		// @expect(ret == true);  }});
```

---

### back

**类型:** `function`

**描述:** 回退到上一层级

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `options` | `LevelChangeOptions` | 层级切换参数 |

#### 示例

```javascript
let app = THING.App.current;let level = app.level;let target = app.query('.Entity')[0];level.change(target, {  onComplete: function(){		let ret = level.current == target;		// @expect(ret == true);		level.back({  		onComplete: function(){				ret = level.current == target.parent;				// @expect(ret == true)  		}		});  }});
```

---

### quit

**类型:** `function`

**描述:** 退出层级

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
let app = THING.App.current;let level = app.level;level.quit({  onComplete: function(){		let ret = level.current == null;		// @expect(ret == true);  }});
```

---

