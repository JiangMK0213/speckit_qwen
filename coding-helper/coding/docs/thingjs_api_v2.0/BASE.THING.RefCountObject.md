# 类: RefCountObject

**命名空间:** BASE.THING

**描述:** 构造函数。

## 实例属性

### onDispose

**类型:** `member`

**数据类型:** `OnDisposeCallback`

**描述:** 当引用计数等于 0 时。

---

### refCount

**类型:** `member`

**数据类型:** `number`

**描述:** 获取引用计数。

#### 示例

```javascript
// 创建引用计数对象let refObj = new THING.BASE.RefCountObject();// 获取引用计数console.log(refObj.refCount); // 1refObj.addRef();console.log(refObj.refCount); // 2
```

---

## 实例方法

### addRef

**类型:** `function`

**描述:** 增加引用计数。

#### 示例

```javascript
// 创建引用计数对象let refObj = new THING.BASE.RefCountObject();console.log(refObj.refCount); // 1// 增加引用计数refObj.addRef();console.log(refObj.refCount); // 2
```

---

### release

**类型:** `function`

**描述:** 释放引用计数。

#### 示例

```javascript
// 创建引用计数对象let refObj = new THING.BASE.RefCountObject();refObj.addRef(); // 引用计数为2// 设置释放回调refObj.onDispose = function() {  console.log('对象已被释放');};// 释放引用计数refObj.release(); // 引用计数减为1refObj.release(); // 引用计数减为0，触发onDispose回调
```

---

