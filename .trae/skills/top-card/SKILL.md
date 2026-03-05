# 物体顶牌创建技能

## 功能说明

本技能提供了在ThingJS场景中为物体创建HTML顶牌的能力，可以用于显示物体名称、状态等信息。

## 技术原理

使用ThingJS的CSS2DComponent组件，将HTML元素绑定到3D物体上，实现2D界面与3D场景的融合。

## 代码示例

### 基本用法

```javascript
/**

 * @version 2.0

 * @author ThingJS

 * 说明：展示建筑结构

 * 功能：获取园区中的建筑（buildings）、物体（things）、地面（ground），设置外立面的显示隐藏

 * 操作：点击按钮，查看功能

 */

 //创建app，默认绑定到 'div3d' DIV 元素

 var app = new THING.App({

     url: ' `https://www.thingjs.com/static/models/factory` ',  // 场景地址

     compatibleOptions: { rendering: true },  // 开启兼容1.0渲染的模式

 });

  

 var campus;// 园区对象

  

 // 加载效果模板

 app.on('load', function () {

     app.load("/static/resource/ThingJS/6606/resource.json", {

         root: app.query('.Campus')[0], // 应用场景

     });

 })

  

 app.on('load',(ev) => {

     // 创建提示

     initThingJsTip("点击按钮，可获取园区中的建筑（buildings）、物体（things）、地面（ground），设置建筑外立面显示隐藏");

     create_html()

  

     campus = ev.campus;  // 获取园区对象

     new THING.widget.Button("获取buildings", function () {

         // 初始化设置

         reset();

         const buildings = campus.buildings; // 获取园区下的所有建筑，返回为 Selector 结构

         buildings.forEach(function (item) {

             create_html()

             create_element(item, "textAndPictureMarker");

             $('#' + item.id + ' .text').text(item.name);

         })

     })

  

     new THING.widget.Button("获取things", function () {

         // 初始化设置

         reset();

         // 获取园区下的所有 Thing 类物体，返回为 Selector 结构

         var things = app.query('.Campus')[0].children;

         var sel = things.query(/a/)

         sel.forEach(function (item) {

             create_html();

             create_element(item, "textAndPictureMarker");

             $('#' + item.id + ' .text').text(item.name);

         })

         var gate = app.query('#Gate')[0]

         create_html();

         create_element(gate, "textAndPictureMarker");

         $('#' + gate.id + ' .text').text(gate.id);

     })

  

     new THING.widget.Button("获取ground", function () {

         // 初始化设置

         reset()

         var ground = campus.ground;  // 获取园区下的 ground

         create_html()

         create_element(ground, "textAndPictureMarker");

         $('.text').text('ground');

     })

  

     new THING.widget.Button("隐藏外立面", function () {

         // 初始化设置

         reset(true);

         var build = app.query('107')[0];  // 获取园区中的建筑

         if ($("input[value='隐藏外立面']").length) {

             $("input[value='隐藏外立面']").val('显示外立面');

  

             build.facades.visible = false;  // 隐藏外立面

             build.floors.visible = true;  // 显示楼层

         } else {

             $("input[value='显示外立面']").val('隐藏外立面');

             build.facades.visible = true;  // 显示外立面

             build.floors.visible = false;  // 隐藏楼层

         }

     })

  

     new THING.widget.Button("重置", function () {

         // 初始化设置

         reset();

     })

  

     /**

      * 恢复初始化

      */

     function reset(flag) {

         $("#textAndPictureMarker").remove();  // 移除标注

  

         if (flag) return;

         $("input[value='显示外立面']").val('隐藏外立面');

  

         var build = app.query('107')[0];  // 获取园区中的建筑

         build.facades.visible = true;  // 显示外立面

         build.floors.visible = false;  // 隐藏楼层

  

         create_html()

         // 创建提示

         initThingJsTip("点击按钮，可获取园区中的建筑（buildings）、物体（things）、地面（ground），设置建筑外立面显示隐藏");

     }

 })

  

 /**

  * 创建html

  */

 function create_html() {

     var textAndPictureMarkerHtml =

         `<div id="textAndPictureMarker" class="marker" style="position: absolute;">

 			<div class="text" style="color: #FF0000;font-size: 12px;text-shadow: white  0px 2px, white  2px 0px, white  -2px 0px, white  0px -2px, white  -1.4px -1.4px, white  1.4px 1.4px, white  1.4px -1.4px, white  -1.4px 1.4px;margin-bottom: 5px;">

 				测试标签2

 			</div>

 			<div class="picture" style="height: 30px;width: 30px;margin: auto;">

 				<img src="/guide/examples/images/navigation/pointer.png" style="height: 100%;width: 100%;">

 			</div>

 		</div>`;

     $('#div3d').append($(textAndPictureMarkerHtml));

 }

  

 /**

  * 创建顶牌

  * @param {Object} obj - 创建顶牌的父物体

  * @param {String} cla - 创建顶牌的dom元素的class

  */

 function createTopCard(obj) {

     obj.addComponent(THING.DOM.CSS2DComponent, 'css');

     const css = obj.css;

     css.domElement = document.getElementById('textAndPictureMarker');

     css.domElement.setAttribute("id", obj.id);

     css.pivot = [0.5, 0];

     css.autoUpdateVisible = true;

     css.visible = true;

     return css;

 }

  

 /**

  * 创建顶牌界面

  * @param {Object} obj - 创建顶牌界面的父物体

  * @param {String} value - 创建顶牌界面的类型

  */

 function create_element(obj) {

     let css = createTopCard(obj);

 }
```

### 高级用法

#### 1. 自定义顶牌样式

```javascript
// 创建自定义样式的顶牌
function createCustomTopCard(obj, title, content) {
    // 创建HTML元素
    const html = `
        <div class="custom-marker" style="position: absolute; background: rgba(0, 0, 0, 0.7); color: white; padding: 10px; border-radius: 5px;">
            <h3 style="margin: 0 0 5px 0;">${title}</h3>
            <p style="margin: 0;">${content}</p>
        </div>
    `;
    
    // 添加到DOM
    $('#div3d').append($(html));
    
    // 创建CSS2DComponent
    obj.addComponent(THING.DOM.CSS2DComponent, 'css');
    const css = obj.css;
    css.domElement = $('.custom-marker').last()[0];
    css.domElement.setAttribute("id", obj.id + "_marker");
    css.pivot = [0.5, 1]; // 底部中心对齐
    css.autoUpdateVisible = true;
    css.visible = true;
    
    return css;
}

// 使用示例
const building = app.query('building1')[0];
createCustomTopCard(building, building.name, `高度: ${building.height}m`);
```

#### 2. 动态更新顶牌内容

```javascript
// 创建可更新的顶牌
function createDynamicTopCard(obj) {
    // 创建HTML元素
    const html = `
        <div class="dynamic-marker" style="position: absolute; background: rgba(255, 255, 255, 0.9); color: #333; padding: 8px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
            <div class="name" style="font-weight: bold;">${obj.name}</div>
            <div class="status" style="font-size: 12px;">状态: 正常</div>
        </div>
    `;
    
    // 添加到DOM
    $('#div3d').append($(html));
    
    // 创建CSS2DComponent
    obj.addComponent(THING.DOM.CSS2DComponent, 'css');
    const css = obj.css;
    css.domElement = $('.dynamic-marker').last()[0];
    css.domElement.setAttribute("id", obj.id + "_marker");
    css.pivot = [0.5, 0];
    css.autoUpdateVisible = true;
    css.visible = true;
    
    // 动态更新状态
    setInterval(() => {
        const statuses = ['正常', '警告', '故障'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        $(`#${obj.id}_marker .status`).text(`状态: ${randomStatus}`);
    }, 3000);
    
    return css;
}

// 使用示例
const equipment = app.query('equipment1')[0];
createDynamicTopCard(equipment);
```

## 注意事项

1. **性能优化**：当场景中有大量物体需要添加顶牌时，建议使用批处理和动态加载，避免一次性创建过多DOM元素。

2. **兼容性**：确保在ThingJS 2.0环境中使用，对于1.0版本可能需要调整代码。

3. **样式调整**：根据实际场景需求调整顶牌的样式和位置，确保在不同视角下都能清晰显示。

4. **事件处理**：可以为顶牌添加点击事件，实现与用户的交互。

5. **资源加载**：如果顶牌中使用了图片等外部资源，确保资源路径正确。

## 常见问题

### 顶牌不显示
- 检查DOM元素是否正确创建
- 确保CSS2DComponent的visible属性为true
- 检查物体是否在场景中可见

### 顶牌位置偏移
- 调整css.pivot属性来改变顶牌的对齐方式
- 可以通过设置offset属性来微调位置

### 性能问题
- 减少顶牌中的DOM元素数量
- 使用CSS动画代替JavaScript动画
- 当物体不可见时，隐藏顶牌

## 扩展应用

1. **设备状态监控**：显示设备的实时状态、温度、压力等信息
2. **导航系统**：在导航路径上添加指示顶牌
3. **信息展示**：为景点、展览品等添加介绍信息
4. **告警系统**：当设备出现异常时，顶牌显示告警信息

通过本技能，您可以为场景中的物体添加丰富的2D信息展示，提升用户体验和交互性。