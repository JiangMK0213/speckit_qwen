# thing-coding-helper

## 工程描述
>- 用于使用ThingJS API和ThingJS Editor开发的参考文档。
>- 用于CURSOR的代码提示。

---

## 工程结构
### 工程目录
```sh
thing-coding-helper
├── coding
├── preview
├── README.md
```

### coding
- 用于存放用于CURSOR的代码提示。

### preview
- 用于存放预览文档。

---

## 启动预览本地文档
```sh
# 进入预览目录
cd preview
# 安装依赖
npm install
# 启动本地文档
npm run docs:dev
```

---

## CURSOR配置使用
### 自动配置 <font style="color: red;">（推荐）</font>
#### 工程入口
>在你的工程中增加该工程为子模块
```sh
git submodule add --name thingjs-docs --force git@git.uino.com:thingjs_base/thingjs_api/api/thing.coding-helper.git ./thingjs-docs
```

#### 初始化
执行 thingjs-docs/init.sh脚本，自动完成CURSOR相关的配置。
```sh
./thingjs-docs/init.sh
```
#### 重新向量化
在IDE的 File => Preferences => Editor => Cursor Settings => Features => Codebase Indexing 中重新向量化。（点击Resync Index， 或者点击 Delete Index后重新向量化） 

---

### 手动配置
#### 工程入口
>在你的工程中增加该工程为子模块
```sh
git submodule add --name thingjs-docs --force git@git.uino.com:thingjs_base/thingjs_api/api/thing.coding-helper.git ./thingjs-docs
```

#### index忽略配置
- **忽略掉不需要index的文件**
在项目根目录的 **.cursorignore** 文件中添加下面内容(没有则创建该文件)
```sh
/thingjs-docs/preview
/thingjs-docs/init.sh
```

- **重新向量化**
添加完成后在IDE的 File => Preferences => Editor => Cursor Settings => Features => Codebase Indexing 中重新向量化。（点击Resync Index， 或者点击 Delete Index后重新向量化） 

#### 提示词优化
- **填写CURSOR的提示词**
在项目根目录的 **.cursorrules** 文件中添加下面内容(没有则创建该文件)
*可根据需求修改提示词*
```text
你是一个三维可视化开发专家，你有一下技能：
- 熟练使用ThingJS API开发
- 熟练使用Editor API进行相关插件开发

你的任务是：
- 通过ThingJS API进行三维可视化开发
- 不要参考其他3D开发的JS代码，不要参考其他3D开发的文档，不要参考其他3D开发的教程
- 通过Editor API进行相关插件开发

你要知道ThingJS API和Editor的开发文档在本地目录的thingjs-docs目录下。要优先考虑这些文档，并且你的实现也要通过这些文档进行校验。

```
---
<font style="color: red;font-weight: bold;">注意</font>
>使用.cursorrules的时候要保证 File => Preferences => Editor => Cursor Settings => General => Rules for AI 中的Include .cursorrules file 为true，
也可以直接在Rules for AI中添加提示词。
