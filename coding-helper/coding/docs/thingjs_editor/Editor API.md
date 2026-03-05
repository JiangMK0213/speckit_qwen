## 属性

### isModified

`boolean` 是否处于已修改状态

### isPlaying

`boolean` 是否处于运行状态

### isSubEditor

`boolean` 是否是子编辑器

## 方法

### on

为指定事件添加一个监听器

**参数**:

|参数名|类型|描述|
|---|---|---|
|`event`|`string`|事件名称|
|`listener`|`function`|事件处理函数|

**示例**:

```javascript
// 定义事件处理函数
function handleEvent(data) {
  console.log(data)
}
// 添加事件监听器
editor.on('some-event', handleEvent)
```

### off

移除指定事件的一个监听器

**参数**:

|参数名|类型|描述|
|---|---|---|
|`event`|`string`|事件名称|
|`listener`|`function`|事件处理函数|

**示例**:

```javascript
// 移除事件监听器
editor.off('some-event', handleEvent)
```

### emit

触发一个事件，调用所有关联的监听器

**参数**:

|参数名|类型|描述|
|---|---|---|
|`event`|`string`|事件名称|
|`...args`|`any[]`|参数列表|

**示例**:

```javascript
// 触发事件
editor.emit('some-event', 'some data')
```

### invoke

发送请求并等待响应

**参数**:

|参数名|类型|描述|
|---|---|---|
|`event`|`string`|事件名称|
|`...args`|`any[]`|请求参数|

**返回值**:

* `Promise`：返回请求的响应结果

**示例**:

```javascript
// 发送请求
await editor.invoke('test', 'some data1', 'some data2')
```

### handle

请求响应处理

**参数**:

|参数名|类型|描述|
|---|---|---|
|`event`|`string`|事件名称|
|`handler`|`function`|处理函数|

**示例**:

```javascript
// 请求响应
editor.handle('test', async (arg1, arg2) => {
  return `Handled ${arg1} ${arg2}`
})
```

### addPanel

向编辑器中添加一个新的面板，并返回创建的面板

**参数**:

|参数名|类型|描述|
|---|---|---|
|`panel`|`object`|面板配置信息|

**返回值**:

* `object`：创建的面板对象

**示例**:

```javascript
// 添加面板
editor.addPanel({
  id: 'panel1', // 面板 ID，不可重复
  name: '我的面板', // 面板名称（标签页显示的名称）
  template: template // 挂载的模版（Vue 的模版引用和原生 DOM）
})
```

### usePanel

使用预定义的系统面板，如果面板存在，则返回对应的面板

**参数**:

|参数名|类型|描述|
|---|---|---|
|`id`|`string`|系统面板的标识符|
|`options`|`object`|面板配置信息（可选）|

**返回值**:

* `object` | `undefined`：系统面板对象

**示例**:

```javascript
// 使用面板（资源面板）
editor.usePanel('Resource')
```

### getPanel

根据提供的标识符获取一个面板，如果存在则返回对应的面板

**参数**:

|参数名|类型|描述|
|---|---|---|
|`id`|`string`|面板的标识符|

**返回值**:

**示例**:

```javascript
// 获取面板
editor.getPanel('my-panel')
```

* `object` | `undefined`：获取的面板对象

### selectPanel

选择面板（激活对应的面板 tab），该面板同时会获得焦点

**参数**:

|参数名|类型|描述|
|---|---|---|
|`id`|`string`|面板的标识符|

**示例**:

```javascript
// 选择面板
editor.selectPanel('my-panel')
```

### removePanel

根据提供的标识符移除一个面板

**参数**:

|参数名|类型|描述|
|---|---|---|
|`id`|`string`|面板的标识符|

**示例**:

```javascript
// 移除面板
editor.removePanel('my-panel')
```

### layout

应用一个布局配置到编辑器

**参数**:

|参数名|类型|描述|
|---|---|---|
|`layoutConfig`|`object`|布局配置信息|

**示例**:

```javascript
// 获取面板
const Resource = editor.getPanel('Resource')
const Scene = editor.getPanel('Scene')
const ScenePlayer = editor.getPanel('ScenePlayer')
const Blueprint = editor.getPanel('Blueprint')
const Inspector = editor.getPanel('Inspector')
const Code = editor.getPanel('Code')
const Hierarchy = editor.getPanel('Hierarchy')

// 定义布局配置
const layout = {
  main: {
    // 主布局
    orientation: 'horizontal', // 整体的布局方向，这里为横向布局
    type: 'split-area', // 布局类型，这里为 “拆分区域”
    sizes: [0.2, 0.6, 0.2], // 每一列占的比例
    children: [
      // 每一列的具体布局
      {
        // 第一列的布局
        currentIndex: 0, // 当前选中的标签页索引
        type: 'tab-area', // 布局类型，这里为 “标签页区域”
        widgets: [Resource] // 包含的面板（资源面板在最左侧）
      },
      {
        // 第二列的布局
        orientation: 'vertical', // 第二列的布局方向，竖向布局
        sizes: [0.5, 0.5], // 每一行占的比例
        type: 'split-area', // 布局类型为拆分区域
        children: [
          // ...以此类推
          {
            currentIndex: 0,
            type: 'tab-area',
            widgets: [Scene, ScenePlayer]
          },
          {
            currentIndex: 0,
            type: 'tab-area',
            widgets: [Blueprint]
          }
        ]
      },
      {
        orientation: 'vertical',
        sizes: [0.5, 0.5],
        type: 'split-area',
        children: [
          {
            currentIndex: 0,
            type: 'tab-area',
            widgets: [Inspector, Code]
          },
          {
            currentIndex: 0,
            type: 'tab-area',
            widgets: [Hierarchy]
          }
        ]
      }
    ]
  }
}

// 应用布局配置
editor.layout(layout)
```

### openEditor

打开一个子编辑器，加载指定的入口文件

**参数**:

|参数名|类型|描述|
|---|---|---|
|`entrance`|`string`|要加载的入口文件绝对路径|
|`title`|`string`|新窗口标题（可选）|

**返回值**:

* `string`：子编辑器 id

**示例**:

```javascript
// 在主编辑器中关闭子编辑器
editor.closeEditor(editorId)
```

### closeEditor

关闭子编辑器

**参数**:

|参数名|类型|描述|
|---|---|---|
|`editorId`|`string`|要关闭的子编辑器 id|

**示例**:

```javascript
// 在主编辑器中关闭子编辑器
editor.closeEditor(editorId)
```

### postMessage

跨窗口发送消息

**参数**:

|参数名|类型|描述|
|---|---|---|
|`message`|`string`|消息内容|

**示例**:

```javascript
// 子编辑器发送消息
editor.postMessage('data-from-subeditor')
```

### addMessageListener

监听其他窗口发送的消息

**参数**:

|参数名|类型|描述|
|---|---|---|
|`callback`|`function`|监听的回调函数|

```javascript
// 定义消息处理函数
function handleMessage(message, id) {
  //  第二个参数为子编辑器的 id，主编辑器发来的消息没有这个参数
  // 注意：为避免其他子编辑器发来的消息影响，只处理来自特定子编辑器的消息
  if (id !== editorId) {
    return
  }
  console.log(message) // data-from-subeditor
}
// 主编辑器接收消息
editor.addMessageListener(handleMessage)
```

### removeMessageListener

取消监听其他窗口发送的消息

**参数**:

|参数名|类型|描述|
|---|---|---|
|`callback`|`function`|监听的回调函数|

```javascript
editor.removeMessageListener(handleMessage)
```

### getPlugin

获取一个插件实例，如果存在则返回

**参数**:

|参数名|类型|描述|
|---|---|---|
|`name`|`string`|插件名称|

**返回值**:

* `object` | `undefined`：插件对象实例

### selectFileAndUpload

选择文件并上传

**参数**:

|参数名|类型|描述|
|---|---|---|
|`uploadConfig`|`object`|上传配置|

**示例**:

```javascript
editor.selectFileAndUpload({
  uploadPath: '上传路径', // 绝对路径
  directory: true, // 是否上传文件夹
  multiple: true, // 是否支持多文件上传（directory 为 true 时，该配置自动为 true）
  onSuccess: (file) => {
    // 上传成功的回调函数，参数为上传的文件对象
    console.log(file)
  },
  onError: (error) => {
    // 上传失败的回调函数
    console.error(error)
  }
})
```

### selectFile

选择文件

**参数**:

|参数名|类型|描述|
|---|---|---|
|`extensions`|`array`|规定用户可见或可选的文件的特定类型范围（可选）|
|`name`|`string`|自定义文件选择框右下角的提示文本（可选）|

**返回值**:

* `Promise<string>`：选择的文件路径

**示例**:

```javascript
const filePath = await editor.selectFile(['zip', 'bundle'], '自定义提示文本')
console.log(filePath) // 选择的文件路径
```

### selectFolder

弹框选择系统文件夹

**返回值**:

* `Promise<string>`：选择的系统文件夹路径

**示例**:

```javascript
const path = await editor.selectFolder()
console.log(path) // 选择的系统文件夹路径
```

### selectSavePath

弹窗选择保存路径，支持修改文件名

**参数**:

|参数名|类型|描述|
|---|---|---|
|`defaultPath`|`string`|保存的默认路径（可选）|

**返回值**:

* `Promise<string>`：选择的保存路径

**示例**:

```javascript
const defaultPath = '/path/test.txt' // 保存的默认路径
const path = await editor.selectSavePath(defaultPath)
console.log(path) // 选择的保存路径
```

### openFolder

打开指定的文件夹

**参数**:

|参数名|类型|描述|
|---|---|---|
|`path`|`string`|要打开的文件夹绝对路径|

### promptSave

提示用户保存

**参数**:

|参数名|类型|描述|
|---|---|---|
|message|`string`|提示信息（可选）|

**返回值**:

* `number`：0: 保存 1: 不保存 2: 取消

**示例**:

```javascript
// 提示保存
const result = await editor.promptSave('有未保存的内容，确定要离开吗？')
console.log(result)
```

### launch

启动一个应用程序

**参数**:

|参数名|类型|描述|
|---|---|---|
|`path`|`string`|应用程序的绝对路径|
|`options`|`object` / `string`|启动参数|
|`launchOpts`|`object`|启动配置|

**返回值**:

* `RenderCustomMessageChannel` | `null`：通信通道或 null

**示例**:

```javascript
const channelIns = await editor.launch(binPath, execArgStr, { channel: true })
let exitCode = -1
// 设置信息回调
channelIns?.setMessageCallback((ev) => {
  const data = ev.data
  switch (data.type) {
    case 'stdout': {
      console.log('标准输出:', data.data)
      break
    }
    case 'stderr': {
      console.log('标准错误:', data.data)
      break
    }
    case 'error': {
      console.log('错误信息:', data.data)
      break
    }
    case 'close': {
      // 关闭通信通道
      channelIns.stop()
      exitCode = data.data
      console.log('程序退出码:', exitCode)
      break
    }
  }
})
```

### terminate

关闭应用程序

**参数**:

|参数名|类型|描述|
|---|---|---|
|`path`|`string`|应用程序路径|
|`channelID`|`string`|频道ID（可选）|

### openWithCodeEditor

用代码编辑器打开文件夹

**参数**:

|参数名|类型|描述|
|---|---|---|
|`dir`|`string`|要打开的文件夹路径|
|`file`|`string`|要打开的文件路径（可选）|

### watch

监听文件变化

**参数**:

|参数名|类型|描述|
|---|---|---|
|`path`|`string`|要监听的文件路径|
|`callback`|`function`|文件变化的回调函数|

**返回值**:

* `string`：监听 id

**示例**:

```javascript
// 定义文件监听的处理函数
const watchHandler = (event, filePath) => {
  console.log(event, filePath)
}
// 开启文件监听（返回监听 id）
const listenerId = editor.watch('path/to/dir', watchHandler, options) // 可选项 options 为 chokidar 文件监听的配置项，可以配置忽略规则等
```

### unwatch

取消监听文件变化

**参数**:

|参数名|类型|描述|
|---|---|---|
|`listenerId`|`string`|监听 id|

**示例**:

```javascript
// 取消文件监听
editor.unwatch(listenerId)
```

### setRuntimeParams

设置插件的运行时参数

**参数**:

|参数名|类型|描述|
|---|---|---|
|`pluginName`|`string`|插件名|
|`params`|`object`|参数对象|

**示例**:

```javascript
// 设置运行时参数
editor.setRuntimeParams('plugin-name', {
  test: 123
})
```

### getRuntimeParams

获取插件的运行时参数

**参数**:

|参数名|类型|描述|
|---|---|---|
|`pluginName`|`string`|插件名|

**返回值**:

* `object`：参数对象

**示例**:

```javascript
// 获取运行时参数
editor.getRuntimeParams('plugin-name') // { test: 123 }
```