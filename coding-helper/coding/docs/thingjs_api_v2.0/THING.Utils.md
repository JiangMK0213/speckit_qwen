# 类: Utils

**命名空间:** THING

**描述:** 空

## 静态方法

### <span style="color: #0066cc">静态</span> loadCode

**类型:** `function`

**描述:** 加载代码。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `code` | `string` | 代码字符串。 |
| `options` | `object` | 选项。 |
| `options.es6Mode` | `boolean` | 是否以es6模式加载代码。 |
| `options.sourceURL` | `string` | 同步模式下的源URL。 |
| `options.onLoad` | `function` | 加载完成的回调函数。 |
| `options.onError` | `function` | 发生错误的回调函数。 |

#### 示例

```javascript
THING.Utils.loadCode('console.log("代码加载完成")');
```

---

### <span style="color: #0066cc">静态</span> loadCodeAsync

**类型:** `function`

**描述:** 异步加载代码。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `code` | `string` | 代码字符串。 |
| `options` | `object` | 选项。 |
| `options.es6Mode` | `boolean` | 是否以es6模式加载代码。 |
| `options.sourceURL` | `string` | 同步模式下的源URL。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
await THING.Utils.loadCodeAsync('console.log("代码加载完成")');
```

---

### <span style="color: #0066cc">静态</span> loadFile

**类型:** `function`

**描述:** 加载文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `resource` | `string, Array.<string>` | 文件的资源URL。 |
| `options` | `object, Array.<string>` | 选项。 |
| `options.onLoad` | `function` | 加载完成的回调函数。 |
| `options.onError` | `function` | 发生错误的回调函数。 |
| `options.cache` | `boolean` | 是否使用缓存。 |
| `options.inOrder` | `boolean` | 是否按顺序加载文件。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
// 通过加载和错误回调函数加载'my-lib.js'文件THING.Utils.loadFile('my-lib.js', {	onLoad: function() {		console.log('加载完成');	},	onError: function() {		console.error('加载失败');	}});
```

---

### <span style="color: #0066cc">静态</span> loadFileAsync

**类型:** `function`

**描述:** 异步加载文件（们）。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `resource` | `string, Array.<string>` | 文件的资源URL。 |
| `options` | `object, Array.<string>` | 选项。 |
| `options.cache` | `boolean` | 是否使用缓存。 |
| `options.inOrder` | `boolean` | 是否按顺序加载文件。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
// 加载'my-lib.js'文件并等待加载完成await THING.Utils.loadFileAsync('my-lib.js');
```

---

### <span style="color: #0066cc">静态</span> isCompressedTexture

**类型:** `function`

**描述:** 检查是否为压缩纹理。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 压缩纹理的URL。 |

#### 返回值

- **类型:** `boolean`
- **描述:** -

#### 示例

```javascript
let compress = THING.Utils.isCompressedTexture('image.dds');let uncompress = THING.Utils.isCompressedTexture('image.png');// @expect(compress == true && uncompress == false);
```

---

### <span style="color: #0066cc">静态</span> loadImageFile

**类型:** `function`

**描述:** 加载图片文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 图片文件的URL。 |
| `onLoad` | `function` | 加载完成时的回调函数。 |
| `onProgress` | `function` | 加载过程中的回调函数。 |
| `onError` | `function` | 加载错误时的回调函数。 |

#### 示例

```javascript
// 通过加载回调函数加载图片资源。THING.Utils.loadImageFile('./assets/images/blue.png',	function(image) {		console.log(image);	});
```

---

### <span style="color: #0066cc">静态</span> loadImageFileAsync

**类型:** `function`

**描述:** 异步加载图片文件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 图片地址 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
// Load image resource and wait to load finished.await THING.Utils.loadImageFileAsync('image.png');
```

---

### <span style="color: #0066cc">静态</span> isVideoResource

**类型:** `function`

**描述:** 加载二进制文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `resource` | `object` | 资源对象。 |

#### 示例

```javascript
let resource = document.createElement('video');;let check = THING.Utils.isVideoResource(resource);// @expect(check == true);
```

---

### <span style="color: #0066cc">静态</span> loadBinaryFile

**类型:** `function`

**描述:** 加载二进制文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 文件的URL。 |
| `onLoad` | `function` | 加载完成时的回调函数。 |
| `onProgress` | `function` | 加载过程中的回调函数。 |
| `onError` | `function` | 加载错误时的回调函数。 |
| `options` | `LoadFileOptions` | 选项。 |

#### 示例

```javascript
// Load 'my-file.bin' file in binary format.THING.Utils.loadBinaryFile('my-file.bin',	function(data) {		console.log('Load finished', data);	},	function() {		console.error('Load failed');	});
```

---

### <span style="color: #0066cc">静态</span> loadBinaryFileAsync

**类型:** `function`

**描述:** 异步加载二进制文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 文件的URL。 |
| `options` | `LoadFileOptions` | 选项。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
// 加载'my-file.bin'文件并等待加载完成。await THING.Utils.loadBinaryFileAsync('my-file.bin');
```

---

### <span style="color: #0066cc">静态</span> saveAsFile

**类型:** `function`

**描述:** 保存数据为文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `fileName` | `string` | 文件名。 |
| `data` | `string, Blob, Image` | 文件数据。 |

#### 返回值

- **类型:** `boolean`
- **描述:** -

#### 示例

```javascript
let data = JSON.stringify('{ name: "很高兴见到你" }');THING.Utils.saveAsFile('test.json', data);
```

---

### <span style="color: #0066cc">静态</span> saveAsImage

**类型:** `function`

**描述:** 保存数据为图片。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `width` | `number` | 图片的宽度（像素）。 |
| `height` | `number` | 图片的高度（像素）。 |
| `pixelBuffer` | `Uint8Array` | 图片的像素缓冲区。 |

#### 返回值

- **类型:** `object`
- **描述:** -

#### 示例

```javascript
// 保存一个32x32像素的图片，像素颜色随机const width = 32, height = 32;let pixelBuffer = [];for(let y = 0; y < height; y++) {	for(let x = 0; x < width * 4; x++) {		pixelBuffer[y * width * 4 + x] = THING.Math.randomInt(0, 255);	}}THING.Utils.saveAsImage(width, height, new Uint8Array(pixelBuffer));
```

---

### <span style="color: #0066cc">静态</span> loadTextFile

**类型:** `function`

**描述:** 加载文本文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 文件的URL。 |
| `onLoad` | `function` | 加载完成时的回调函数。 |
| `onProgress` | `function` | 加载过程中的回调函数。 |
| `onError` | `function` | 加载错误时的回调函数。 |
| `options` | `LoadFileOptions` | 选项。 |

#### 示例

```javascript
// 以文本格式加载'my-file.txt'文件。THING.Utils.loadTextFile('my-file.txt',	function(data) {		console.log('加载完成', data);	},	function() {		console.error('加载失败');	});
```

---

### <span style="color: #0066cc">静态</span> loadTextFileAsync

**类型:** `function`

**描述:** 异步加载文本文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 文件的URL。 |
| `options` | `LoadFileOptions` | 选项。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
// 加载'my-file.txt'文件并等待加载完成。await THING.Utils.loadTextFileAsync('my-file.txt');
```

---

### <span style="color: #0066cc">静态</span> loadJSONFile

**类型:** `function`

**描述:** 加载JSON文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 文件的URL。 |
| `onLoad` | `function` | 加载完成时的回调函数。 |
| `onProgress` | `function` | 加载过程中的回调函数。 |
| `onError` | `function` | 加载错误时的回调函数。 |
| `options` | `LoadFileOptions` | 选项。 |

#### 示例

```javascript
// 以JSON格式加载'my-file.json'文件。THING.Utils.loadJSONFile('my-file.json',	function(data) {		console.log('加载完成', data);	},	function() {		console.error('加载失败');	});
```

---

### <span style="color: #0066cc">静态</span> loadJSONFileAsync

**类型:** `function`

**描述:** 异步加载JSON文件。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string, Array.<string>` | 文件的URL。 |
| `options` | `LoadFileOptions` | 选项。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
// 加载'my-file.json'文件并等待加载完成。await THING.Utils.loadJSONFileAsync('my-file.json');
```

---

### <span style="color: #0066cc">静态</span> parseMouseButtonType

**类型:** `function`

**描述:** 当执行动作时。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `number` | 按钮类型。 |

#### 示例

```javascript
let type = THING.Utils.parseMouseButtonType(1);// @expect(type == '中键');
```

---

### <span style="color: #0066cc">静态</span> parseFlyParam

**类型:** `function`

**描述:** 解析飞行参数。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `object` | 飞行参数。 |

#### 返回值

- **类型:** `object`
- **描述:** -

#### 示例

```javascript
let ret1 = THING.Utils.parseFlyParam(100);let obj = new THING.BaseObject();let ret2 = THING.Utils.parseFlyParam(obj);// @expect(ret1 == 100 && ret2.target == obj);
```

---

### <span style="color: #0066cc">静态</span> parseLoopType

**类型:** `function`

**描述:** 解析循环类型。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `string` | 循环类型。 |

#### 返回值

- **类型:** `string`
- **描述:** -

#### 示例

```javascript
let ret1 = THING.Utils.parseLoopType('repeat');let ret2 = THING.Utils.parseLoopType('pingpong');let ret3 = THING.Utils.parseLoopType('temp');// @expect(ret1 == '重复' && ret2 == '来回' && ret3 == '');
```

---

### <span style="color: #0066cc">静态</span> parseLerpType

**类型:** `function`

**描述:** 解析插值类型

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `name` | `String, Object` | 插值名称。 |

#### 返回值

- **类型:** `function`
- **描述:** -

#### 示例

```javascript
let func1 = THING.Utils.parseLerpType('quadratic.in');let ret1 = func1(10);let customFunc = (amount) => {return amount + amount;};let func2 = THING.Utils.parseLerpType(customFunc);let ret2 = func2(10);let func3 = THING.Utils.parseLerpType('temp');let ret3 = func3(10);// @expect(ret1 == 100 && ret2 == 20 && ret3 == 10)
```

---

### <span style="color: #0066cc">静态</span> parseCubeTextureUrlsByPath

**类型:** `function`

**描述:** 解析立方体纹理的URL。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `path` | `string` | 立方体纹理的路径。 |

#### 返回值

- **类型:** `string`
- **描述:** -

#### 示例

```javascript
let ret1 = THING.Utils.parseCubeTextureUrlsByPath();let ret2 = THING.Utils.parseCubeTextureUrlsByPath('./tempPath');let ret3 = THING.Utils.parseCubeTextureUrlsByPath('./tempPath/');// @expect(ret1 == null && ret2[0] == './tempPath/posx.jpg' && ret3[0] == './tempPath/posx.jpg')
```

---

### <span style="color: #0066cc">静态</span> createObject

**类型:** `function`

**描述:** 根据类型创建对象

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `type` | `string` | 对象类型。 |
| `options` | `object` | 创建选项。 |

#### 返回值

- **类型:** `object`
- **描述:** -

#### 示例

```javascript
let line = THING.Utils.createObject('PixelLine');let ret = line instanceof THING.PixelLine;// @expect(ret == true)
```

---

### <span style="color: #0066cc">静态</span> isValidTexture

**类型:** `function`

**描述:** 检查是否为有效的纹理

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `object` | 纹理对象。 |

#### 示例

```javascript
let ret1 = THING.Utils.isValidTexture(new THING.ImageTexture());let ret2 = THING.Utils.isValidTexture(new THING.CubeTexture());let ret3 = THING.Utils.isValidTexture(new THING.RenderTexture());let ret4 = THING.Utils.isValidTexture(new THING.VideoTexture());let ret5 = THING.Utils.isValidTexture(new THING.EmptyTexture());let ret6 = THING.Utils.isValidTexture(new THING.BaseObject());// @expect(ret1 == true && ret2 == true && ret3 == true && ret4 == true && ret5 == true && ret6 == false)
```

---

### <span style="color: #0066cc">静态</span> login

**类型:** `function`

**描述:** 登录。

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `options` | `string, LoginOptions` | URL或选项。 |

#### 返回值

- **类型:** `Promise.<any>`
- **描述:** -

#### 示例

```javascript
let promise1 = THING.Utils.login('http://127.0.0.1:3000/auth.json');	let promise2 = THING.Utils.login({		method: 'GET',		url: 'http://127.0.0.1:3000/auth.json',		wasmRootPath: 'js/wasm',		postFields: 'post data'	});
```

---

### <span style="color: #0066cc">静态</span> isModelSceneUrl

**类型:** `function`

**描述:** 检查是否为gltf或glb文件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `url` | `string` | 场景的URL。 |

#### 示例

```javascript
let ret1 = THING.Utils.isModelSceneUrl('a.gltf');let ret2 = THING.Utils.isModelSceneUrl('b.json');// @expect(ret1 == true && ret2 == false)
```

---

### <span style="color: #0066cc">静态</span> isModelSceneExtension

**类型:** `function`

**描述:** 检查是否为gltf或glb文件

#### 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ext` | `string` | 文件扩展名。 |

#### 示例

```javascript
let ret1 = THING.Utils.isModelSceneExtension('gltf');let ret2 = THING.Utils.isModelSceneExtension('json');// @expect(ret1 == true && ret2 == false)
```

---

### <span style="color: #0066cc">静态</span> clearCaches

**类型:** `function`

**描述:** 清除缓存

---

