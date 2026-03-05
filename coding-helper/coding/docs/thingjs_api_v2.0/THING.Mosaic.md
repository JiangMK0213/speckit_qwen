# 类: Mosaic

**命名空间:** THING

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.enable | `Boolean` | `true` | 是 | 是否显示马赛克效果 |
| param.size | `Array.<Number>` | `[1,1]` | 是 | 马赛克尺寸 如果不在地图下使用 代表一个马赛克的尺寸在长和宽方向代表多少米,如果在地图上 代表一个马赛克代表的经度和纬度 |
| param.object | `Object3D` | - | 否 | 要是用马赛克效果的对象 |

## 实例属性

### enable

**类型:** `member`

**数据类型:** `Boolean`

**默认值:** `true`

**描述:** 是否显示马赛克效果

#### 示例

```javascript
heatmap.mosaic.enable = true;
```

---

### size

**类型:** `member`

**数据类型:** `Array.<Number>`

**默认值:** `[1,1]`

**描述:** 马赛克尺寸

#### 示例

```javascript
heatmap.mosaic.size = [1,1];
```

---

