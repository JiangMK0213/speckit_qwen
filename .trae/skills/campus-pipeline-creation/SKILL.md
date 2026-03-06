---
name: 'campus-pipeline-creation'
description: '提供ThingJS园区管线创建指南，包括PolygonLine的使用、参数配置、示例代码等。当用户需要在园区中创建管线时调用。'
---

# 园区管线创建指南

## PolygonLine 简介

`PolygonLine` 是 ThingJS 中的管状线类，用于创建具有一定半径的三维管线效果。它继承自 `THING.BaseLine`，支持多种参数配置，可用于模拟园区中的管道、电缆等设施。

## 构造函数

```javascript
new PolygonLine(param)
```

**注**:设置管线的点的参数时，不支持重复点和折回（重复）的线。例如，从点1，点2，点3经过，又从点3折回点2，这样折回的管线是不支持的。

### 参数说明

| 参数名               | 类型                   | 默认值 | 描述                                         |
| -------------------- | ---------------------- | ------ | -------------------------------------------- |
| param                | object                 | -      | 初始化参数                                   |
| param.points         | Array.<Array.<number>> | -      | 路径坐标的数组                               |
| param.radius         | number                 | 0.5    | 管线半径大小(单位米)                         |
| param.cornerRadius   | number                 | 0.3    | 拐角半径                                     |
| param.cornerSplit    | number                 | 10     | 拐角分割面数，数值越大拐角越平滑             |
| param.frenet         | boolean                | true   | 是否开启Frenet模式                           |
| param.radialSegments | number                 | 8      | 管线精细度，数值越大拐角越精细               |
| param.startDegree    | number                 | 0      | 起始角度值(沿着管线路径方向顺时针旋转的角度) |
| param.uvScroll       | boolean                | false  | 是否开启贴图流动                             |
| param.uvScrollSpeed  | Array.<number>         | [1,0]  | 贴图流动速度                                 |
| param.style          | object                 | -      | 线样式                                       |

## 园区中创建管线的示例

### 1. 基本管线创建

```javascript
// 创建一个简单的管线
const pipeline = new THING.PolygonLine({
  points: [
    [0, 0, 0],
    [10, 0, 0],
    [10, 0, 10],
    [20, 0, 10]
  ],
  radius: 0.5,
  cornerRadius: 0.5,
  cornerSplit: 15
})

// 设置管线位置
pipeline.position = [10, 0, 10]
```

### 2. 园区内的管线网络

```javascript
// 创建园区场景
const app = new THING.App({
  url: './scenes/campus.json'
})

app.on('load', function () {
  // 获取园区对象
  const campus = app.query('campus')[0]

  // 创建供水管道
  const waterPipeline = new THING.PolygonLine({
    points: [
      [-50, 0, -50],
      [50, 0, -50],
      [50, 0, 50],
      [-50, 0, 50]
    ],
    radius: 0.3,
    cornerRadius: 0.4,
    cornerSplit: 12,
    style: {
      color: 0x0099ff
    }
  })

  // 创建电缆管道
  const powerPipeline = new THING.PolygonLine({
    points: [
      [-40, 0.5, -40],
      [40, 0.5, -40],
      [40, 0.5, 40],
      [-40, 0.5, 40]
    ],
    radius: 0.2,
    cornerRadius: 0.3,
    cornerSplit: 10,
    style: {
      color: ‘#fff000’
    }
  })

  // 将管线添加到园区
  campus.add(waterPipeline)
  campus.add(powerPipeline)

  console.log('园区管线创建完成')
})
```

### 3. 带贴图的管线

```javascript
// 创建带贴图的管线
const texturedPipeline = new THING.PolygonLine({
  points: [
    [0, 0, 0],
    [20, 0, 0],
    [20, 5, 10],
    [0, 5, 10]
  ],
  radius: 0.4,
  cornerRadius: 0.5,
  cornerSplit: 20,
  uvScroll: true,
  uvScrollSpeed: [0.5, 0],
  style: {
    image: './.trae/skills/campus-pipeline-creation/assets/pipeline_arrow.png'
  }
})
```

### 4. 复杂路径的管线

```javascript
// 创建复杂路径的管线
const complexPipeline = new THING.PolygonLine({
  points: [
    [0, 0, 0],
    [10, 0, 0],
    [10, 2, 5],
    [5, 2, 10],
    [0, 2, 10],
    [0, 0, 5]
  ],
  radius: 0.3,
  cornerRadius: 0.4,
  cornerSplit: 15,
  frenet: true,
  radialSegments: 12,
  style: {
    color: 0x00cc66
  }
})
```

## 常用属性

| 属性名             | 类型                   | 默认值    | 描述                             |
| ------------------ | ---------------------- | --------- | -------------------------------- |
| active             | boolean                | true      | 激活状态主要影响可见性           |
| alwaysOnTop        | boolean                | false     | 是否开启渲染置顶                 |
| angles             | Array.<number>         | [0, 0, 0] | 世界坐标系下的旋转角度           |
| autoAdjustPosition | boolean                | false     | 是否自动调整点坐标               |
| closure            | boolean                | false     | 启用/禁用闭包                    |
| cornerRadius       | number                 | 0.3       | 管线转弯半径                     |
| cornerSplit        | number                 | 10        | 拐角分割面数，数值越大拐角越平滑 |
| frenet             | boolean                | true      | 开启/关闭 Frenet 模式            |
| facingDirection    | Array.<number>         | [0, 1, 0] | 本地坐标系下线路面的朝向         |
| groups             | Array.<Array.<number>> | []        | 点的索引分组                     |
| groupsVisible      | Array.<boolean>        | []        | 分组的可见性                     |

## 常见问题与解决方案

### 1. 管线出现折回错误

**问题**：创建管线时出现"不支持重复点和折回的线"错误

**解决方案**：确保管线的路径点没有重复，也没有折回路径。例如，避免从点A到点B再回到点A的路径。

### 2. 管线拐角不够平滑

**问题**：管线拐角处有明显的棱角

**解决方案**：增加 `cornerSplit` 参数的值，数值越大拐角越平滑。同时可以适当调整 `cornerRadius` 参数。

### 3. 管线渲染质量问题

**问题**：管线看起来比较粗糙

**解决方案**：增加 `radialSegments` 参数的值，数值越大管线越精细。

### 4. 管线位置调整

**问题**：管线位置不符合预期

**解决方案**：可以通过设置 `position` 属性调整管线的整体位置，或通过修改 `points` 数组中的坐标来调整路径。

## 最佳实践

1. **路径规划**：在创建管线前，先规划好路径点，确保没有重复点和折回路径
2. **性能优化**：对于复杂场景，合理设置 `cornerSplit` 和 `radialSegments` 参数，平衡视觉效果和性能
3. **样式统一**：使用一致的颜色和样式，使管线与园区整体风格协调
4. **分层管理**：对于复杂的管线网络，可以使用 `groups` 属性进行分组管理
5. **动态效果**：对于需要展示流动效果的管线（如水流、电流），开启 `uvScroll` 属性

通过本指南，您可以在ThingJS园区场景中创建各种类型的管线，为园区增添更多细节和真实感。
