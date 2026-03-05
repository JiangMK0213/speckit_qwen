# 类: MapStyle

**命名空间:** THING.EARTH

**描述:** 空

**参数:**

| 名称 | 类型 | 默认值 | 可选 | 描述 |
|------|------|--------|-------------|--------|
| param | `Object` | - | 否 | 参数列表 |
| param.night | `Boolean` | `false` | 是 | 是否开启白天黑夜 默认false |
| param.gradient | `GradientStyle` | - | 是 | 地球遮罩的样式 |
| param.fogDensity | `Number` | `1` | 是 | 雾的浓度 默认1 |
| param.fogExpDensity | `Number` | `0` | 是 | 浓雾的浓度 默认0 |
| param.fogExpColor | `Number` | `[1,1,1]` | 是 | 浓雾的颜色 默认[1,1,1] |
| param.atmosphere | `Boolean` | `true` | 是 | 是否开启大气 |
| param.baseColor | `Array.<Number>` | `[0,0,0.5]` | 是 | 获取/设置地球的基础颜色(即瓦片未加载出来的时候地球的颜色) |
| param.baseVisible | `Boolean` | `true` | 是 | 获取/设置地块显隐 |

