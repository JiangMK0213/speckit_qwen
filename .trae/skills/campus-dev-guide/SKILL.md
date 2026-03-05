---
name: "campus-dev-guide"
description: "提供ThingJS园区开发指南，包括园区场景构建、层级控制、对象获取等核心功能。当用户需要开发数字孪生园区项目时调用。"
---

# 园区开发指南

## 园区场景概述

在数字孪生项目中，园区场景是很常见的应用场景。园区由一栋或多栋建筑及其周边环境组成，每栋建筑通常包含一个或多个楼层，每个楼层又由一个或多个房间组成。ThingJS 引擎的扩展库 thing.campus 提供了一个基础的园区、建筑、楼层、房间类型以及他们层级控制的实现，用于支持园区场景的应用。

## 安装与引入

### 安装
- 如果使用 ThingJS 脚手架构建的工程，默认会包含并引入了园区扩展库
- 否则需要自行下载并引入：thing.campus.min.js

### 引入

```html
<script src="./libs/thing.campus.min.js"></script>
```

引入园区扩展库后，园区会自动将自身所有类型（如 Campus、Building等）添加到 THING 命名空间中。

## 加载园区

可以通过app.load()的方法来加载园区场景：

```javascript
// 加载园区
let bundle = await app.load('./scenes/uino.json');

// 获取园区对象
const campus = bundle.campus;

// 切换园区层级
app.level.change(campus);
```

加载方法返回园区对象后，可选择切换到园区层级，更多加载场景相关内容可参考：加载场景

## 获取对象

通过上面代码加载园区后，返回的园区对象 campus 中可以或得到园区的各种类型对象，例如：

```javascript
let building = campus.buildings; 	 // 获取建筑集合
let floor = building[1].floors; 	 // 获取建筑中的楼层集合
let room = floor[0].rooms; 	 	 	 // 获取楼层中的房间集合
let door = room[0].doors; 	 	 	 // 获取房间中的门集合

let facades = building.facades; 	 // 获取建筑所有外立面
let ground = campus.ground; 	 	 // 获取园区地面
```

也可以通过 query 方法进行查询，例如：

```javascript
THING.App.current.query(".Campus");   // 获取园区列表
THING.App.current.query(".Building"); // 获取建筑列表
THING.App.current.query(".Floor");    // 获取楼层列表
THING.App.current.query(".Room");     // 获取房间列表
THING.App.current.query(".Door");     // 获取门列表

THING.App.current.query(".Campus")[0] // 获取第一个园区
```

## 层级控制

园区扩展库，对 app.level 进行了扩展，增加园区相关的层级控制，可以通过 app.level.controls 访问：

```javascript
let campusControl = app.level.controls['campus']; // 园区控制器
let buildingControl = app.level.controls['building']; // 建筑控制器
let floorControl = app.level.controls['floor']; // 楼层控制器
let roomControl = app.level.controls['room']; // 房间控制器
let placementControl = app.level.controls['placement']; // 物体控制器
```

### 层级控制参数

可以给每个层级控制设置一些配置参数，开启或关闭一些功能，例如：

```javascript
buildingControl.enableFly = false // 是否开启层级飞行动画，默认是 `true`
buildingControl.enableSkipLevel = false // 是否跳过层级切换，默认是 `true`；(会跳过兄弟节点之间切换先反回到父的情况)
buildingControl.enableOutlineColor = false // 是否开启勾边，默认是 `true`
buildingControl.outlineColor = [1, 0.5, 0] // 勾边颜色，默认是 `[1, 0.5, 0]`
```

也可以通过对层级的全局控制，修改这些配置项：

```javascript
// 关闭所有level control 的飞行
app.level.setControlOption(THING.LevelControlOptions.EnableFly, false);
app.level.setControlOption(THING.LevelControlOptions.EnableSkipLevel, false);
app.level.setControlOption(THING.LevelControlOptions.EnableOutlineColor, false);
app.level.setControlOption(THING.LevelControlOptions.OutlineColor, [1, 0, 0]);
```

如果只需在切换本次层级时生效某些参数，而非始终生效，可以在 app.level.change 时传递该参数，以便仅影响本次层级切换的效果。

```javascript
// 查询到一个楼层
let floor = app.queryByType('Floor');

// 层级切换，设置跳过本次切换过程
app.level.change(floor, { jumping: true });
```

### 层级控制回调

可以通过重写以下回调，实现复杂一些的需求。例如，重写飞行回调：

```javascript
buildingControl.onFlyTo = (flyParam) => {
	 return new Promise((resolve) => {
     // 设置飞行时间
     flyParam.time = 5000;
 
   // 重写飞行结束回调，触发promise结束
   let complete = flyParam.onComplete;
   flyParam.onComplete = () => {
     complete && complete();
       resolve();
   }

   // 调用flyto
   app.camera.flyTo(flyParam);
 });
}
```

重写终止层级回调：

```javascript
floorControl.onSkipLevel = (levelParam) => {
	 return false;
}
```

### 层级控制继承

如果层级空之的配置和接口重写都无法满足需求，想基于现有的层级逻辑继续扩展，可以选择继承默认层级控制类去实现。您可以对下面的层级控制类型进行继承重写：

- THING.CampusLevelControl
- THING.BuildingLevelControl
- THING.FloorLevelControl
- THING.RoomLevelControl
- THING.PlacementLevelControl

针对不同的层级，可以选择不同的类去重写。

```javascript
// 继承默认的园区层级控制，实现自定义层级控制
class CustomCampusLevelControl extends THING.CampusLevelControl {
// 实现自定义逻辑...
}

// 覆盖默认的
app.level.controls.campus = new CustomCampusLevelControl();
```

如果有其它类型的对象需要单独设置设置层级逻辑，可以通过继承THING.DefaultLevelControl去实现，例如，如继承THING.Entity实现了Device类，需要对该类型的对象做提供层级控制类型：

```javascript
// 实现Device类
class Device extends THING.Entity {}

// 实现Device的层级控制
class DeviceLevelControl extends THING.CampusLevelControl {
// 实现自定义逻辑...
}
	 
// 注册一个新的层级控制
app.level.register('.Device', new DeviceLevelControl());
```

## 使用场景

当您需要开发数字孪生园区项目时，可以使用此skill获取园区开发的详细指南，包括：
- 园区场景的基本概念和结构
- 园区扩展库的安装和引入方法
- 园区场景的加载和初始化
- 园区对象的获取和管理
- 层级控制的配置和自定义
- 高级层级控制的继承和扩展

通过本指南，您可以快速上手ThingJS园区开发，构建功能完整的数字孪生园区应用。