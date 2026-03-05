# 数据监控模块详细指南

## 9. 数据监控

ThingJS 提供数据监控功能，通过配置不同的数据源，可以利用 monitorManager 启动多个监控任务。当接收到数据后，引擎会自动将数据分发给场景中的对象。您可以通过对象的 monitorData 属性获取监控数据，也可以使用 monitorData.subscribe() 方法订阅感兴趣的数据变化。

注意：ThingJS 的数据监控功能是可选的。如果您的项目对监控数据有特殊需求，可以自行开发监控数据功能。

### 9.1 启动监控

启动监控前，首先要配置数据源：

```javascript
// ajax数据源配置
const ajaxConfig = {
  type: 'ajax',
  requestMethod: 'GET',
  url: 'https://example.com/api',
  interval: 3000, // 请求数据时间间隔
  disableCache: true, // 禁用缓存
  onReceiveData: data => {
    // 接收数据后调用
    console.log(data)
  }
}

// websocket数据源配置
const websocketConfig = {
  type: 'websocket',
  url: 'wss://example.com/socket',
  interval: 3000, // 请求数据时间间隔
  onReceiveData: data => {
    // 接收数据后调用
    console.log(data)
  }
}
```

然后使用app.monitorManager.start()启动监控任务，返回值是这个任务的id，当不再需要监控时，可以使用stop()停止监控。

```javascript
// 启动监控任务1
let taskId1 = app.monitorManager.start(ajaxConfig);

// 启动监控任务2
let taskId2 = app.monitorManager.start(websocketConfig);
......

// 停止监控
app.monitorManager.stop(taskId1);
```

也可以配置一个模拟数据源来进行测试：

```javascript
// 模拟数据源配置
const simulationConfig = {
  type: 'simulation',
  interval: 3000, // 更新间隔 (毫秒),
  onGenerateData: () => {
    // 创造模拟数据
    return {
      ciCode: '101',
      metric: 'temper',
      value: Math.ceil(Math.random() * 30) + '℃'
    }
  },
  onReceiveData: data => {
    // 接收数据后调用
    console.log(data)
  }
}
```

此外，还支持自定义数据源，需要用户自定义数据适配器：

```javascript
// 自定义数据适配器
class CustomAdapter {
  constructor(config) {
    this.needsDuplicateRequest = true // 如果该网络服务需要重复请求，则设置为true
  }

  // 当连接服务器时调用
  connect() {
    let that = this
    return new Promise((res, rej) => {
      fetch('https://api.example.com/data')
        .then(response => {
          // 检查HTTP响应状态
          if (response.status !== 200) {
            return
          }

          // 将响应数据传给数据监控任务管理器
          if (that.messageCallback) {
            that.messageCallback(response.json())
          }
        })
        .catch(error => {
          rej()
        })
    })
  }

  // 当该网络连接需要主动断开调用
  disconnect() {}

  // 当接收到服务器消息调用
  onMessage(callback) {
    this.messageCallback = callback
  }
}

// 自定义数据源配置
const customConfig = {
  type: 'custom',
  interval: 3000, // 更新间隔 (毫秒),
  adapter: CustomAdapter
}
```

### 9.2 数据处理

ThingJS 引擎在进行数据监控时，当接收到的数据内容为下面的格式时，会根据id寻找对象去设置monitorData：

```javascript
{
    id: '101',      // 孪生体ID
    key: 'temper',  // 属性名
    value: 30       // 属性值
}
```

但由于项目的不同，接收到的数据格式可能也会不同，比如接收到下面的数据：

```javascript
{
	ciCode: "101",    // 孪生体ID
	metric: "temper", // 数据类型：温度
	value: "30℃"     // 温度值
}
```

为了将接收到的数据转换成 ThingJS 引擎需要的格式，可以通过 数据处理 方法进行转换：

```javascript
// 启动监控，设置数据处理方法
app.monitorManager.start(config, {
  processor: function () {
    let newData = {}
    newData['id'] = data['ciCode']
    newData['key'] = data['metric']
    newData['value'] = data['value']
    return newData
  }
})
```

### 9.3 推送数据

启动数据监控后，可以使用 森数据 等工具，从服务器推送数据，例如推送下面的数据：

```javascript
{
	"ciCode":"NA-B83-87",
	"metric":"speed",
	"value":"20",
}
{
	"ciCode":"NA-B83-87",
	"metric":"power",
	"value":"10",
}
{
	"ciCode":"NA-B83-87",
	"metric":"freq",
	"value":"10",
}
```

ThingJS 引擎接收到监控数据后，会将上面的数据自动更新到对象的monitorData属性中：

```javascript
let obj = app.query('#NA-B83-87')[0]
let speed = obj.monitorData['speed']
```

### 9.4 订阅数据

使用对象的subscribe方法，可以对监控数据进行订阅，当这个对象的监控数据发生变化时会得到通知，比如：标记、图表等面板等界面，可以订阅对象的监控数据。

```javascript
// 订阅任何数据变化
let watcher1 = obj.monitorData.subscribe(ev => {
  console.log(ev.data) // data是变化的数据
  console.log(obj.monitorData) // 完整的数据
})

// 订阅部分数据变化
let watcher2 = obj.monitorData.subscribe(['power', 'freq'], ev => {
  console.log(ev.data['power'])
  console.log(ev.data['freq'])
})

// 订阅单个数据变化
let watcher3 = obj.monitorData.subscribe('power', ev => {
  console.log(ev.data['power'])
})

// 取消某个订阅
obj.monitorData.unsubscribe(watcher1)

// 取消所有订阅
obj.monitorData.unsubscribeAll()

// 清空所有属性（不会取消订阅）
obj.monitorData.clearAttributes()
```

### 9.5 存取监控数据

可以通过对象的monitorData属性，存取对象的监控数据

```javascript
// 获取监控属性
let power = obj.monitorData["power"];
let freq = obj.monitorData["freq"];
for (let key in obj.monitorData) {
	let val = obj.monitorData[key];
    ......
}

// 设置监控属性（一般由监控管理器调用）
obj.monitorData.setAttributes({
  "power": 3200,
  "brand": "ant",
  "freq": 95,
});
```
