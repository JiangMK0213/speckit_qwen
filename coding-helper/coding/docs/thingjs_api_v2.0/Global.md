# 全局

## 常量

### BezierMode

**类型:** `string`

**描述:** 贝塞尔曲线模式

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Symmetry | `string` | 对称模式 |
| Pursuit | `string` | 追逐模式 |

---

### CameraMode

**类型:** `string`

**描述:** 相机模式

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Map | `string` | 地图模式 |
| Normal | `string` | 普通模式 |

---

### EventType

**类型:** `string`

**描述:** 事件类型

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| AppQuit | `string` | 当应用程序退出时。 |
| AppEnter | `string` | 当应用程序被设置为当前时。 |
| AppLeave | `string` | 当应用程序被设置为非当前时。 |
| Update | `string` | 当更新时。 |
| FocusIn | `string` | 当应用程序获得焦点时。 |
| FocusOut | `string` | 当应用程序失去焦点时。 |
| Resize | `string` | 当应用程序调整大小时。 |
| MouseEnter | `string` | 当鼠标进入对象时。 |
| MouseLeave | `string` | 当鼠标离开对象时。 |
| MouseMove | `string` | 当鼠标移动时。 |
| MouseUp | `string` | 当鼠标按钮抬起时。 |
| MouseDown | `string` | 当鼠标按钮按下时。 |
| Wheel | `string` | 当鼠标滚轮滚动时。 |
| Click | `string` | 当触摸结束时。 |
| DBLClick | `string` | 当双击触摸结束时。 |
| KeyDown | `string` | 当按键按下时。 |
| KeyUp | `string` | 当按键抬起时。 |
| KeyPress | `string` | 当按键正在按下时。 |
| DropFiles | `string` | 当将文件拖放到应用程序容器中时。 |
| TimelineChange | `string` | 当时间线改变时。 |
| EnterState | `string` | 当进入状态时。 |
| AfterEnterState | `string` | 空 |
| LeaveState | `string` | 当离开状态时。 |
| AfterLeaveState | `string` | 空 |
| RegisterLevelAction | `string` | 当第一次为层级组件注册层级动作时 |
| BeforeLeaveLevel | `string` | 在离开对象层级之前。 |
| LeaveLevel | `string` | 离开对象层级。 |
| LeaveObjectLevel | `string` | 离开对象层级。 |
| AfterLeaveLevel | `string` | 离开对象层级之后。 |
| BeforeEnterLevel | `string` | 在进入对象层级之前。 |
| EnterLevel | `string` | 进入对象层级。 |
| EnterObjectLevel | `string` | 进入对象层级。 |
| AfterEnterLevel | `string` | 进入对象层级之后。 |
| CompleteEnterLevel | `string` | 完成对象层级进入。 |
| ObjectLevelComplete | `string` | 离开对象层级完成。 |
| ColliderEnter | `string` | 当进入（碰撞）对象的碰撞体时（在离开碰撞体之前只触发一次）。 |
| ColliderLeave | `string` | 当离开对象的碰撞体时。 |
| CreateSync | `string` | 当创建对象事件时（同步）。 |
| Create | `string` | 当创建对象事件时。 |
| Load | `string` | 当加载对象资源事件时。 |
| Progress | `string` | 当加载对象资源时。 |
| Error | `string` | 当加载对象资源失败时。 |
| BeforeDestroy | `string` | 在销毁对象事件之前。 |
| Destroy | `string` | 当销毁对象事件时。 |
| AfterDestroy | `string` | 在销毁对象事件之后。 |
| BeforeAddChild | `string` | 在将子对象添加到对象之前。 |
| AfterAddChild | `string` | 在将子对象添加到对象之后。 |
| BeforeRemoveChild | `string` | 在从对象中移除子对象之前。 |
| AfterRemoveChild | `string` | 在从对象中移除子对象之后。 |
| StartFlying | `string` | 当对象开始飞行时。 |
| Flying | `string` | 当对象正在飞行时。 |
| StopFlying | `string` | 当对象停止飞行时。 |
| CompleteFlying | `string` | 当对象完成飞行时。 |
| ActiveChange | `string` | 当对象的活动属性改变时。 |
| VisibleChange | `string` | 当对象的可见属性改变时。 |
| StopAnimation | `string` | 当对象停止播放动画时。 |
| PlayAnimation | `string` | 当对象开始播放动画时。 |
| ChangeAttributes | `string` | 当对象改变属性时。 |
| EnableViewport | `string` | 当相机启用视口时。 |
| CameraChangePreStart | `string` | 当相机准备开始改变时。 |
| CameraChangeStart | `string` | 当相机开始改变时。 |
| CameraChange | `string` | 当相机正在改变时。 |
| CameraChangePreEnd | `string` | 当相机准备结束改变时。 |
| CameraChangeEnd | `string` | 当相机结束改变时。 |
| BeforeCameraCapture | `string` | 当相机开始捕获屏幕时。 |
| AfterCameraCapture | `string` | 当相机完成捕获屏幕时。 |
| BeforeLoadResolvers | `string` | 在场景加载器中加载解析器之前 |
| Select | `string` | 空 |
| Deselect | `string` | 空 |
| SelectionChange | `string` | 空 |
| RenderSettingsLightChange | `string` | 空 |

---

### LoopType

**类型:** `string`

**描述:** 循环类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Repeat | `string` | 值在重复循环模式下变化。 |
| PingPong | `string` | 值在乒乓循环模式下变化。 |

---

### MouseButtonType

**类型:** `string`

**描述:** 鼠标按钮类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| None | `string` | 无效的鼠标按钮类型。 |
| Left | `string` | 鼠标左键类型。 |
| Middle | `string` | 鼠标中键类型。 |
| Right | `string` | 鼠标右键类型。 |

---

### SpaceType

**类型:** `string`

**描述:** 空间类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Self | `string` | 基于自身空间。 |
| Local | `string` | 基于局部空间。 |
| World | `string` | 基于世界空间。 |

---

### CodeType

**类型:** `string`

**描述:** 按键代码。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Escape | `string` | ESC键 |
| Digit1 | `string` | 数字键1 |
| Digit2 | `string` | 数字键2 |
| Digit3 | `string` | 数字键3 |
| Digit4 | `string` | 数字键4 |
| Digit5 | `string` | 数字键5 |
| Digit6 | `string` | 数字键6 |
| Digit7 | `string` | 数字键7 |
| Digit8 | `string` | 数字键8 |
| Digit9 | `string` | 数字键9 |
| Digit0 | `string` | 数字键0 |
| Minus | `string` | 减号 |
| Equal | `string` | 等号 |
| Backspace | `string` | 退格键 |
| Tab | `string` | Tab键 |
| KeyQ | `string` | Q键 |
| KeyW | `string` | W键 |
| KeyE | `string` | E键 |
| KeyR | `string` | R键 |
| KeyT | `string` | T键 |
| KeyY | `string` | Y键 |
| KeyU | `string` | U键 |
| KeyI | `string` | I键 |
| KeyO | `string` | O键 |
| KeyP | `string` | P键 |
| BracketLeft | `string` | 左方括号 |
| BracketRight | `string` | 右方括号 |
| Enter | `string` | 回车键 |
| ControlLeft | `string` | 左控制键 |
| KeyA | `string` | A键 |
| KeyS | `string` | S键 |
| KeyD | `string` | D键 |
| KeyF | `string` | F键 |
| KeyG | `string` | G键 |
| KeyH | `string` | H键 |
| KeyJ | `string` | J键 |
| KeyK | `string` | K键 |
| KeyL | `string` | L键 |
| Semicolon | `string` | 分号 |
| Quote | `string` | 引号 |
| Backquote | `string` | 反引号 |
| ShiftLeft | `string` | 左Shift键 |
| Backslash | `string` | 反斜杠 |
| KeyZ | `string` | Z键 |
| KeyX | `string` | X键 |
| KeyC | `string` | C键 |
| KeyV | `string` | V键 |
| KeyB | `string` | B键 |
| KeyN | `string` | N键 |
| KeyM | `string` | M键 |
| Comma | `string` | 逗号 |
| Period | `string` | 句点 |
| Slash | `string` | 斜杠 |
| ShiftRight | `string` | 右Shift键 |
| NumpadMultiply | `string` | 小键盘乘法 |
| AltLeft | `string` | 左Alt键 |
| Space | `string` | 空格键 |
| CapsLock | `string` | 大写锁定 |
| F1 | `string` | F1键 |
| F2 | `string` | F2键 |
| F3 | `string` | F3键 |
| F4 | `string` | F4键 |
| F5 | `string` | F5键 |
| F6 | `string` | F6键 |
| F7 | `string` | F7键 |
| F8 | `string` | F8键 |
| F9 | `string` | F9键 |
| F10 | `string` | F10键 |
| Pause | `string` | 暂停键 |
| ScrollLock | `string` | 滚动锁定 |
| Numpad7 | `string` | 小键盘7 |
| Numpad8 | `string` | 小键盘8 |
| Numpad9 | `string` | 小键盘9 |
| NumpadSubtract | `string` | 小键盘减法 |
| Numpad4 | `string` | 小键盘4 |
| Numpad5 | `string` | 小键盘5 |
| Numpad6 | `string` | 小键盘6 |
| NumpadAdd | `string` | 小键盘加法 |
| Numpad1 | `string` | 小键盘1 |
| Numpad2 | `string` | 小键盘2 |
| Numpad3 | `string` | 小键盘3 |
| Numpad0 | `string` | 小键盘0 |
| NumpadDecimal | `string` | 小键盘小数点 |
| F11 | `string` | F11键 |
| F12 | `string` | F12键 |
| F13 | `string` | F13键 |
| F14 | `string` | F14键 |
| F15 | `string` | F15键 |
| F16 | `string` | F16键 |
| F17 | `string` | F17键 |
| F18 | `string` | F18键 |
| F19 | `string` | F19键 |
| F20 | `string` | F20键 |
| F21 | `string` | F21键 |
| F22 | `string` | F22键 |
| F23 | `string` | F23键 |
| F24 | `string` | F24键 |
| NumpadComma | `string` | 小键盘逗号 |
| NumpadEnter | `string` | 小键盘回车 |
| ControlRight | `string` | 右控制键 |
| BrowserHome | `string` | 浏览器主页 |
| NumpadDivide | `string` | 小键盘除法 |
| PrintScreen | `string` | 打印屏幕 |
| AltRight | `string` | 右Alt键 |
| NumLock | `string` | 数字锁定 |
| Home | `string` | Home键 |
| ArrowUp | `string` | 上箭头 |
| PageUp | `string` | Page Up键 |
| ArrowLeft | `string` | 左箭头 |
| ArrowRight | `string` | 右箭头 |
| End | `string` | End键 |
| ArrowDown | `string` | 下箭头 |
| PageDown | `string` | Page Down键 |
| Insert | `string` | 插入键 |
| Delete | `string` | 删除键 |

---

### AxisType

**类型:** `string`

**描述:** 坐标轴类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| X | `string` | X轴 |
| Y | `string` | Y轴 |
| Z | `string` | Z轴 |

---

### ProjectionType

**类型:** `string`

**描述:** 投影类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Orthographic | `string` | 正交投影 |
| Perspective | `string` | 透视投影 |

---

### ViewMode

**类型:** `string`

**描述:** 视图模式。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Top | `string` | 顶视图 |
| Bottom | `string` | 底视图 |
| Left | `string` | 左视图 |
| Right | `string` | 右视图 |
| Front | `string` | 前视图 |
| Back | `string` | 后视图 |

---

### AlignType

**类型:** `string`

**描述:** 对齐类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Center | `string` | 居中对齐。 |
| Left | `string` | 左对齐。 |
| Top | `string` | 顶部对齐。 |
| TopLeft | `string` | 左上对齐。 |
| TopRight | `string` | 右上对齐。 |
| Right | `string` | 右对齐。 |
| Bottom | `string` | 底部对齐。 |
| BottomLeft | `string` | 左下对齐。 |
| BottomRight | `string` | 右下对齐。 |

---

### SideType

**类型:** `string`

**描述:** 面渲染类型.

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Front | `string` | 只绘制正面 |
| Back | `string` | 只绘制背面 |
| Double | `string` | 绘制正面和背面 |

---

### RenderType

**类型:** `string`

**描述:** 渲染类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Sprite | `string` | 精灵 |
| Plane | `string` | 平面 |

---

### PivotMode

**类型:** `string`

**描述:** 轴心点模式。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Auto | `string` | 自动 |
| Location | `string` | 位置 |

---

### PlayState

**类型:** `string`

**描述:** 动画播放状态

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Ready | `string` | 准备就绪。 |
| Playing | `string` | 正在播放。 |
| Paused | `string` | 已暂停。 |
| Stopped | `string` | 已停止。 |
| Finished | `string` | 已完成。 |

---

### AnimationDirectionType

**类型:** `string`

**描述:** 动画方向类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Normal | `string` | 正常模式播放。 |
| Reverse | `string` | 反向模式播放。 |

---

### InheritType

**类型:** `string`

**描述:** 继承类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Normal | `string` | 对象将正常处理动作（处理后传递给子对象）。 |
| Break | `string` | 对象将处理动作但不传递给子对象。 |
| Jump | `string` | 对象将跳过动作但继续传递给子对象。 |
| Stop | `string` | 对象将中断动作且不传递给子对象。 |

---

### BoxHelperModeType

**类型:** `string`

**描述:** 包围盒显示方案

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| All | `string` | All 物体以及所有子物体都计算到一个包围盒中(会显示一个最大的包围盒) |
| Root | `string` | Root 只显示物体自身的包围盒，忽略所有子物体 |
| Bodies | `string` | Bodies 显示物体以及所有子物体自身的包围盒(会显示多个包围盒) |

---

### BlendingType

**类型:** `string`

**描述:** 混合类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| No | `string` | 禁用混合。 |
| Normal | `string` | 正常混合。颜色(RGB) = (源颜色 * 1) + (目标颜色 * (1 - 源Alpha))颜色(A) = (源Alpha * 1) + (目标Alpha * (1 - 源Alpha)) |
| Additive | `string` | 加法混合。颜色(RGBA) = (源颜色 * 1) + (目标颜色 * 1)。 |
| Subtractive | `string` | 减法混合。颜色(RGB) = 目标颜色 * (1 - 源Alpha)颜色(A) = 目标Alpha * 1 |
| Multiply | `string` | 乘法混合。颜色(RGB) = 目标颜色 * 源颜色颜色(A) = 目标Alpha * 源Alpha |

---

### UVMode

**类型:** `string`

**描述:** UV模式。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Tile | `string` | 以平铺方式重复填充UV。 |
| Stretch | `string` | 以拉伸图像模式填充UV。 |
| Custom | `string` | 自定义UV。 |

---

### ImageSlotType

**类型:** `string`

**描述:** 图像槽类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Map | `string` | 贴图 |
| EnvMap | `string` | 环境贴图 |
| AlphaMap | `string` | 透明度贴图 |
| EmissiveMap | `string` | 自发光贴图 |
| NormalMap | `string` | 法线贴图 |
| ColorMapping | `string` | 颜色映射 |
| AOMap | `string` | 环境光遮蔽贴图 |

---

### TexelEncodingType

**类型:** `string`

**描述:** 纹理元素编码类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| LINEAR | `string` | 线性编码 |
| SRGB | `string` | sRGB编码 |
| RGBE | `string` | RGBE编码 |
| RGBM7 | `string` | RGBM7编码 |
| RGBM16 | `string` | RGBM16编码 |
| RGBD | `string` | RGBD编码 |
| GAMMA | `string` | 伽马编码 |

---

### ImageColorFormat

**类型:** `string`

**描述:** 图像颜色格式类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| RGB | `string` | 红、绿、蓝(RGB)颜色格式。 |
| RGBA | `string` | 透明度、红、绿、蓝(RGBA)颜色格式。 |
| BC7_M6_OPAQUE_ONLY | `string` | BC7_M6_OPAQUE_ONLY压缩格式 |

---

### ImageWrapType

**类型:** `string`

**描述:** 图像填充类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Repeat | `string` | 图像以重复模式填充。 |
| ClampToEdge | `string` | 图像使用边缘重复。 |
| MirroredRepeat | `string` | 图像以重复/镜像一一对应模式填充。 |

---

### ImageMappingType

**类型:** `string`

**描述:** 图像映射类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| UV | `string` | 图像纹理正常映射。 |
| CubeReflection | `string` | 立方体反射 |
| CubeRefraction | `string` | 立方体折射 |
| EquirectangularReflection | `string` | 使用单一环境贴图显示图像，如天空盒等。 |
| EquirectangularRefraction | `string` | 等矩形折射 |

---

### ImageFilterType

**类型:** `string`

**描述:** 图像过滤类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| NearestFilter | `string` | 使用最接近指定纹理坐标的纹理元素的值。 |
| NearestMipmapNearestFilter | `string` | 选择与被纹理化像素大小最接近的mipmap，并使用NearestFilter。 |
| NearestMipmapLinearFilter | `string` | 选择与被纹理化像素大小最接近的两个mipmap，并使用NearestFilter。 |
| LinearFilter | `string` | 使用最接近指定纹理坐标的四个纹理元素的加权平均值。 |
| LinearMipmapNearestFilter | `string` | 选择与被纹理化像素大小最接近的mipmap，并使用LinearFilter。 |
| LinearMipmapLinearFilter | `string` | 选择与被纹理化像素大小最接近的两个mipmap，并使用LinearFilter。 |

---

### ShadowQualityType

**类型:** `number`

**描述:** 阴影质量类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Low | `number` | 512x512 阴影纹理大小。 |
| Medium | `number` | 1024x1024 阴影纹理大小。 |
| High | `number` | 2048x2048 阴影纹理大小。 |
| Ultra | `number` | 4096x4096 阴影纹理大小。 |

---

### ActionQueueType

**类型:** `string`

**描述:** 动作队列类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| EnterLevel | `string` | 进入对象层级的动作。 |

---

### ColliderType

**类型:** `string`

**描述:** 碰撞体类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Box | `string` | 使用包围盒检查碰撞。 |
| Sphere | `string` | 使用包围球检查碰撞。 |

---

### RelationshipDirection

**类型:** `string`

**描述:** 关系方向类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Out | `string` | 出 源 -> 目标 |
| In | `string` | 入 目标 -> 源 |
| InOut | `string` | 双向 |
| None | `string` | 无 |

---

### ImageEncodingType

**类型:** `string`

**描述:** 图像编码类型。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| LINEAR | `string` | 线性编码 |
| SRGB | `string` | sRGB编码 |
| RGBE | `string` | RGBE编码 |
| RGBM7 | `string` | RGBM7编码 |
| RGBM16 | `string` | RGBM16编码 |
| RGBD | `string` | RGBD编码 |
| GAMMA | `string` | 伽玛编码 |

---

### ExtrudeShapeDirection

**类型:** `string`

**描述:** 挤压形状的可见方向

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Top | `string` | 前 |
| Bottom | `string` | 后 |
| Both | `string` | 两者 |
| None | `string` | 无 |

---

### Transform

**类型:** `number`

**描述:** 变换类型

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Rotation | `number` | 旋转变换 |
| Scale | `number` | 缩放变换 |

---

### ScaleMode

**类型:** `string`

**描述:** 缩放模式

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| ScaleFactor | `string` | 宽高乘系数作为缩放 |
| ScaleRatio | `string` | 宽高比乘系数作为缩放 |
| ScaleFixed | `string` | 固定缩放 (宽大于高，固定宽，修改高保持宽高比。反之固定高，修改宽保持宽高比) |

---

### AccuracyMode

**类型:** `string`

**描述:** 精确模式

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Basic | `string` | 基础模式 |
| Accurate | `string` | 精确模式 |

---

### StreamlineRenderType

**类型:** `String`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Streamline | `String` | 流线 |
| Line | `String` | 普通线 |

---

### HeatmapRenderType

**类型:** `String`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Plane | `String` | 平面2d模式 |
| Mesh | `String` | 3d模式 |

---

### VariogramModel

**类型:** `String`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Gaussian | `String` | 高斯模型 |
| Exponential | `String` | 指数模型 |
| Spherical | `String` | 球体模型 |

---

## 类型定义

### CircleParam

**类型:** `object`

**描述:** 构造圆形需要的参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| options.radius | `number` | 半径 |
| options.segments | `number` | 模拟圆形使用的多边形的边数 |
| options.startRad | `number` | 开始位置(弧度) |
| options.arc | `number` | 所形成的扇形的角度(弧度) |

**示例:**

```javascript
let cirecle = THING.MeshBuilder.createCircle();// @expect(cirecle.index.length == 192 );
```

---

### CylinderParam

**类型:** `object`

**描述:** 构造圆柱需要的参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| radiusTop | `number` | 顶部半径 |
| radiusBottom | `number` | 底部半径 |
| height | `number` | 高度 |
| radialSegments | `number` | 圆柱体截面是几边形 默认64代表圆柱体截面是64边形 |
| heightSegments | `number` | 高度方向分段数 |
| openEnded | `boolean` | 顶面和地面是否封闭 |
| thetaStart | `number` | 开始的角度(弧度) |
| thetaLength | `number` | 结束角度(弧度) |

---

### TorusParam

**类型:** `object`

**描述:** 构造圆环需要的参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| options.radius | `number` | 圆环内径 |
| options.tube | `number` | 圆环截面(管)的半径 |
| options.radialSegments | `number` | 圆环横切面使用多少边形 |
| options.tubularSegments | `number` | 圆环纵切面(管)使用多少边形 |
| options.arc | `number` | 圆环范围(默认是一圈,即Math.PI*2,如果是Math.PI,代表圆环是一个半圆) |

---

### CapsuleParam

**类型:** `object`

**描述:** 构造胶囊需要的参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| radius | `number` | 中间界面的半径 |
| cylinderHeight | `number` | 胶囊的高度 |
| widthSegments | `number` | 横截面是多少边形,值越大越精细,三角面越密集 |
| heightSegments | `number` | 高度方向片段个数,值越大越精细,三角面越密集 |

---

### OnInitComponentCallback

**类型:** `function`

**描述:** 当初始化组件时。

---

### OnLoadResourceComponentCallback

**类型:** `function`

**描述:** 当加载资源时。

---

### OnUnloadResourceComponentCallback

**类型:** `function`

**描述:** 当卸载资源时。

---

### OnUpdateComponentCallback

**类型:** `function`

**描述:** 当更新组件时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `deltaTime` | `number` | 以秒为单位的时间增量。 |

---

### GetCenterFunction

**类型:** `function`

**描述:** 获取中心位置。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `target` | `Array.<number>` | 用于保存结果的目标数组。 |

**返回值:**

- **类型:** `Array.<number>`
- **描述:** 目标数组的引用。

---

### SelfToWorldFunction

**类型:** `function`

**描述:** 将自身位置转换为世界位置。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 世界位置。 |
| `ignoreScale` | `boolean` | 为true表示忽略缩放。 |
| `target` | `Array.<number>` | 用于保存结果的目标数组。 |

**返回值:**

- **类型:** `Array.<number>`
- **描述:** 目标数组的引用。

---

### WorldToScreenFunction

**类型:** `function`

**描述:** 将世界位置转换为屏幕位置。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `position` | `Array.<number>` | 世界位置。 |
| `target` | `Array.<number>` | 用于保存结果的目标数组。 |

**返回值:**

- **类型:** `Array.<number>`
- **描述:** 目标数组的引用。

---

### OnRenderComponentCallback

**类型:** `function`

**描述:** 当渲染组件时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `layout` | `RenderLayout` | 布局信息 |

---

### OnParentChangeComponentCallback

**类型:** `function`

**描述:** 当父对象改变时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `parent` | `THING.BaseObject` | 新的父对象。 |

---

### OnResizeComponentCallback

**类型:** `function`

**描述:** 当组件调整大小时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `width` | `number` | 以像素为单位的宽度。 |
| `height` | `number` | 以像素为单位的高度。 |

---

### OnRefreshComponentCallback

**类型:** `function`

**描述:** 当刷新组件时。

---

### OnActiveChangeComponentCallback

**类型:** `function`

**描述:** 当活动状态改变时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 活动状态。 |

---

### OnVisibleChangeComponentCallback

**类型:** `function`

**描述:** 当（主体）可见性改变时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `boolean` | 可见状态。 |

---

### OnCopyComponentCallback

**类型:** `function`

**描述:** 当复制组件时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `component` | `THING.BaseComponent` | 组件。 |

---

### OnAddChildComponentCallback

**类型:** `function`

**描述:** 当添加子对象时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 子对象。 |

---

### OnRemoveChildComponentCallback

**类型:** `function`

**描述:** 当移除子对象时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 子对象。 |

---

### OnBeforeAddComponentCallback

**类型:** `function`

**描述:** 当添加组件之前。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 子对象。 |

---

### OnAfterAddComponentCallback

**类型:** `function`

**描述:** 当添加组件之后。

---

### OnBeforeRemoveComponentCallback

**类型:** `function`

**描述:** 当移除组件之前。

---

### OnAfterRemoveComponentCallback

**类型:** `function`

**描述:** 当移除组件之后。

---

### OnImportComponentCallback

**类型:** `function`

**描述:** 当导入数据时。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `param` | `object` | 参数。 |

---

### OnExportComponentCallback

**类型:** `function`

**描述:** 当导出数据时。

**返回值:**

- **类型:** `object`
- **描述:** -

---

### CameraGlowEffect

**类型:** `object`

**描述:** 发光效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| strength | `number` | 强度 |
| threshold | `number` | 阈值 |
| radius | `number` | 半径 |

---

### CameraInnerGlowEffect

**类型:** `object`

**描述:** 内发光效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| color | `Array.<number>` | 颜色 |
| strength | `number` | 强度 |
| stride | `number` | 跨度 |

---

### CameraTailingEffect

**类型:** `object`

**描述:** 拖尾效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| direction | `Array.<number>` | 方向 |
| center | `Array.<number>` | 中心点 |

---

### CameraRadialEffect

**类型:** `object`

**描述:** 扩散效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| center | `Array.<number>` | 中心 |

---

### CameraGhostingEffect

**类型:** `object`

**描述:** 残影效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| center | `Array.<number>` | 中心位置 |

---

### CameraLineBloomEffect

**类型:** `object`

**描述:** 线辉光效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| blendRate | `number` | 混合比例 |
| blurSize | `number` | 模糊半径 |
| strength | `number` | 强度 |

---

### CameraLineBloomEffect

**类型:** `object`

**描述:** 选中效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| thickness | `number` | 厚度 |
| strength | `number` | 强度 |

---

### FogInfo

**类型:** `object`

**描述:** 雾效配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| type | `FogType` | 雾的类型 |
| near | `number` | 雾效起始位置(仅线性雾生效) |
| far | `number` | 雾效结束位置(仅线性雾生效) |
| density | `number` | 雾的强度(仅指数雾生效) |
| color | `number, string, Array.<string>` | 颜色 |
| SkyFog | `SkyFog` | 天空盒的雾效 |

---

### SkyFog

**类型:** `object`

**描述:** 天空盒的雾效

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| start | `number` | 开始位置 |
| height | `number` | 高度 |

---

### PickResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| object | `THING.BaseObject` | 拾取到的对象 |
| position | `Array.<number>` | 拾取的位置 |
| normal | `Array.<number>` | 拾取的法向量 |
| pickedId | `number` | 拾取的ID |
| external | `object` | 拾取到的附加信息 |

---

### Bloom

**类型:** `object`

**描述:** 辉光效果

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| strength | `number` | 强度 |
| radius | `number` | 半径 |
| threshold | `number` | 阈值 |

---

### ScreenSpaceAmbientOcclusion

**类型:** `object`

**描述:** 屏幕空间环境光遮蔽配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| radius | `number` | 半径 |
| quality | `string` | SSAO的质量。可选值为'low'|'medium'|'high'|'ultra'。 |
| intensity | `number` | 强度 |
| temporalFilter | `boolean` | 是否在时序超采样模式下使用滤波器。 |
| ignoreTransparent | `boolean` | 是否忽略透明物体。 |

---

### GroundTruthAmbientOcclusion

**类型:** `object`

**描述:** GTAO

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| multiBounce是否开启多次反弹 | `boolean` | 开启产生更加真实和逼真的环境光遮蔽效果,也会增加计算的复杂度和资源消耗 |
| maxDistance | `number` | 环境光遮蔽计算的最大距离 |
| maxPixel | `number` | 环境光遮蔽计算的最大像素数量 |
| rayMarchSegment | `number` | 光线追踪的段数 |
| darkFactor | `number` | 深度因子 |

---

### ScreenSpaceReflection

**类型:** `object`

**描述:** 屏幕空间反射配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 开关 |
| maxRayDistance | `number` | 反射光线追踪的最大距离 |
| pixelStride | `number` | 步长 |
| enablePixelStrideZCutoff | `boolean` | 是否限制反射光线的最大距离，以避免对远处或过远的物体进行反射计算 |
| falloff | `number` | 屏幕空间反射效果的衰减函数或者衰减参数 |
| strength | `number` | 反射强度 |
| pixelStrideZCutoff | `number` | 屏幕空间反射计算中根据像素之间的距离进行截断 |
| screenEdgeFadeStart | `number` | 屏幕边缘开始淡化的距离 |
| eyeFadeStart | `number` | 屏幕空间反射效果在摄像机视角附近开始逐渐减弱的位置 |
| eyeFadeEnd | `number` | 屏幕空间反射效果在摄像机视角附近结束减弱的位置 |
| minGlossiness | `number` | 控制屏幕空间反射效果中反射光滑度的最小值，具有高光滑度的表面通常会产生清晰的反射，而具有低光滑度的表面则会产生模糊的反射。 |

---

### ColorCorrection

**类型:** `object`

**描述:** 颜色校正配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| exposure | `number` | 曝光度 |
| brightness | `number` | 亮度 |
| contrast | `number` | 对比度 |
| saturation | `number` | 饱和度 |
| gamma | `number` | 伽马值 |

---

### Dof

**类型:** `object`

**描述:** 景深效果配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| focalDepth | `number` | 相机焦点的深度位置 |
| focalLength | `number` | 焦距 |
| fstop | `number` | 光圈 |
| maxblur | `number` | 最大允许的模糊半径 |
| threshold | `number` | 阈值 |
| gain | `number` | 模糊效果的增益因子 越大越模糊 |
| bias | `number` | 偏差 可以改变焦点周围模糊区域的过渡方式 |
| dithering | `number` | 抖动 改善模糊边缘的过渡效果 |

---

### Vignetting

**类型:** `object`

**描述:** 镜头暗角效果配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| color | `Array.<number>` | 边缘的颜色，仅适用于颜色类型 |
| offset | `number` | 偏移 |

---

### BlurEdge

**类型:** `object`

**描述:** 模糊边缘效果配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| offset | `number` | 偏移 |

---

### Film

**类型:** `object`

**描述:** 电影效果配置

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| grayscale | `boolean` | 是否开启灰度模式(黑白效果) |
| noiseIntensity | `number` | 噪声强度 |
| scanlinesIntensity | `number` | 扫描线强度 |
| scanlinesCount | `number` | 扫面线个数 |

---

### ChromaticAberration

**类型:** `object`

**描述:** 色差

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启 |
| chromaFactor | `number` | 色彩分离系数 |

---

### FXAA

**类型:** `object`

**描述:** FXAA的配置信息。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启。True表示开启。 |

---

### MSAA

**类型:** `object`

**描述:** MSAA配置信息。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启。True表示开启。 |

---

### PostEffectInfo

**类型:** `object`

**描述:** 后期效果的配置。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | true表示开启。是否开启后期效果 |
| bloom | `Bloom` | 泛光效果。 |
| screenSpaceAmbientOcclusion | `ScreenSpaceAmbientOcclusion` | 屏幕空间环境光遮蔽(SSAO)效果。 |
| groundTruthAmbientOcclusion | `GroundTruthAmbientOcclusion` | 真实世界环境光遮蔽(GTAO)效果。 |
| screenSpaceReflection | `ScreenSpaceReflection` | 屏幕空间反射(SSR)效果。 |
| colorCorrection | `ColorCorrection` | 颜色校正效果。 |
| dof | `Dof` | 景深效果。 |
| vignetting | `Vignetting` | 暗角效果。 |
| blurEdge | `BlurEdge` | 边缘模糊效果。 |
| film | `Film` | 胶片效果。 |
| chromaticAberration | `ChromaticAberration` | 色彩分离效果。 |
| FXAA | `FXAA` | 快速近似抗锯齿效果。 |
| MSAA | `MSAA` | 多重采样抗锯齿效果。 |
| temporalSuperSampling | `TemporalSuperSampling` | 时序超采样效果。(TSS) |

---

### BoxHelperResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| visible | `boolean` | 是否可见 |
| color | `Array.<number>` | 颜色 |
| mode | `BoxHelperModeType` | 显示模式 |

---

### FlyInfoParams

**类型:** `object`

**描述:** 计算飞行插值参数的对象

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| position | `Array.<number>` | 要飞到的位置 |
| target | `Array.<number>, THING.BaseObject` | 飞行的目标位置，如果是一个物体，则自动选择其边界框的最佳位置。</br>飞行到目标位置后，物体的target属性表示物体的方向，即target和position的差表示物体的方向。</br>如果传入一个BaseObject，则target是目标对象的位置。如果没有传入position，则会根据目标对象的距离、水平角度和垂直角度来计算position。</br>参见 https://en.wikipedia.org/wiki/Spherical_coordinate_system |
| up | `Array.<number>` | 飞行到目标位置后物体的上方向。 |
| distance | `number` | 距离（仅适用于对象目标模式）。如果目标位置是一个Object3D对象，则表示与目标对象的距离。 |
| horzAngle | `number` | 水平角度（仅适用于对象目标模式）。如果目标位置是一个Object3D对象，则表示与目标对象的水平夹角。 |

---

### LevelConfig

**类型:** `object`

**描述:** 层级配置参数信息

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| ignoreVisible | `boolean` | 是否忽略层级设置中对象的可见性设置。 |
| ignoreEvent | `boolean` | 是否忽略层级设置中对象的鼠标事件。 |
| ignoreStyle | `boolean` | 是否忽略层级设置中对象的样式。 |

---

### Viewpoint

**类型:** `object`

**描述:** 视点信息

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| position | `Array.<number>` | 摄像机位置。 |
| target | `Array.<number>` | 目标位置。 |

---

### MouseEventData

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| type | `string` | 事件类型，小写形式。 |
| altKey | `boolean` | 检查是否按下 alt 键。 |
| ctrlKey | `boolean` | 检查是否按下 control 键。 |
| shiftKey | `boolean` | 检查是否按下 shift 键。 |
| deltaX | `number` | 鼠标光标的 x 方向位移（以像素为单位）。 |
| deltaY | `number` | 鼠标光标的 y 方向位移（以像素为单位）。 |
| x | `number` | 鼠标光标的 x 坐标（以像素为单位）。 |
| y | `number` | 鼠标光标的 y 坐标（以像素为单位）。 |
| object | `THING.BaseObject` | 选中的对象（可能为 null）。 |
| pickedPosition | `Array.<number>` | 选中位置的世界坐标。 |
| normal | `Array.<number>` | 世界坐标中的法线方向。 |

---

### Linear

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| None | `LerpCallback` | 无插值 |

---

### Quadratic

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 二次插值 - 进入 |
| Out | `LerpCallback` | 二次插值 - 离开 |
| InOut | `LerpCallback` | 二次插值 - 进入和离开 |

---

### Cubic

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 三次插值 - 进入 |
| Out | `LerpCallback` | 三次插值 - 离开 |
| InOut | `LerpCallback` | 三次插值 - 进入和离开 |

---

### Quartic

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 四次插值 - 进入 |
| Out | `LerpCallback` | 四次插值 - 离开 |
| InOut | `LerpCallback` | 四次插值 - 进入和离开 |

---

### Quintic

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 五次插值 - 进入 |
| Out | `LerpCallback` | 五次插值 - 离开 |
| InOut | `LerpCallback` | 五次插值 - 进入和离开 |

---

### Sinusoidal

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 正弦插值 - 进入 |
| Out | `LerpCallback` | 正弦插值 - 离开 |
| InOut | `LerpCallback` | 正弦插值 - 进入和离开 |

---

### Exponential

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 指数插值 - 进入 |
| Out | `LerpCallback` | 指数插值 - 离开 |
| InOut | `LerpCallback` | 指数插值 - 进入和离开 |

---

### Circular

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 圆形插值 - 进入 |
| Out | `LerpCallback` | 圆形插值 - 离开 |
| InOut | `LerpCallback` | 圆形插值 - 进入和离开 |

---

### Elastic

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 弹性插值 - 进入 |
| Out | `LerpCallback` | 弹性插值 - 离开 |
| InOut | `LerpCallback` | 弹性插值 - 进入和离开 |

---

### Back

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 回弹插值 - 进入 |
| Out | `LerpCallback` | 回弹插值 - 离开 |
| InOut | `LerpCallback` | 回弹插值 - 进入和离开 |

---

### Bounce

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| In | `LerpCallback` | 弹跳插值 - 进入 |
| Out | `LerpCallback` | 弹跳插值 - 离开 |
| InOut | `LerpCallback` | 弹跳插值 - 进入和离开 |

---

### LerpType

**类型:** `object`

**描述:** 插值类型。用于描述插值行为的配置对象。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| Linear | `object` | 线性插值 |
| Quadratic | `object` | 二次插值 |
| Cubic | `object` | 三次插值 |
| Quartic | `object` | 四次插值 |
| Quintic | `object` | 五次插值 |
| Sinusoidal | `object` | 正弦插值 |
| Exponential | `object` | 指数插值 |
| Circular | `object` | 圆形插值 |
| Elastic | `object` | 弹性插值 |
| Back | `object` | 回弹插值 |
| Bounce | `object` | 弹跳插值 |

---

### EventCallback

**类型:** `function`

**描述:** EventCallback表示一个事件触发的回调函数。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ev` | `MouseEvent, KeyboardEvent` | 事件对象，包含了事件的类型和相关属性。 |

**返回值:**

- **类型:** `any`
- **描述:** -

---

### Object3DInitialOptions

**类型:** `BaseObjectInitialOptions`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| localPosition? | `Array.<number>` | 本地位置。相对于父物体的位置 |
| localScale? | `Array.<number>` | 本地缩放。相对于父物体的缩放 |
| localAngels? | `Array.<number>` | 本地旋转角度。相对于父物体的旋转角度 |
| position? | `Array.<number>` | 世界位置。世界坐标系下的位置 |
| scale? | `Array.<number>` | 世界缩放。世界坐标系下的缩放 |
| angels? | `Array.<number>` | 世界旋转角度。世界坐标系下的旋转角度 |

---

### LoadTextureResourceSamplerInfo

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| minFilter | `ImageFilterType` | 放大时的过滤方式 |
| magFilter | `ImageFilterType` | 缩小时的过滤方式 |
| wrapS | `ImageWrapType` | 水平方向的循环方式 |
| wrapT | `ImageWrapType` | 垂直方向的循环方式 |
| mappingType | `ImageMappingType` | 纹理映射类型 例如普通的UV映射 立方体映射 单张图作为环境图的映射 |

---

### LevelChangedCallback

**类型:** `function`

**描述:** 层级改变时调用的函数

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ev` | `object` | 回调参数 |
| `ev.current` | `THING.BaseObject` | 当前层级 |
| `ev.prev` | `THING.BaseObject` | 上一层级 |
| `ev.path层级切换的路径(都经过了哪些层级)` | `Array.<THING.BaseObject>` | - |

---

### LevelChangeOptions

**类型:** `object`

**描述:** 层级切换参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| onStop | `LevelChangedCallback` | 停止切换层级的回调 |
| onComplete | `LevelChangedCallback` | 最终切换完成的回调 |

---

### PlayAnimationArgs

**类型:** `object`

**描述:** 动画播放的参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| name | `string` | 动画名称 |
| times? | `number` | 循环次数 |
| loopType? | `LoopType` | 循环类型 |
| speed | `number` | 播放速度 |
| reverse | `boolean` | 是否反向播放 |
| onComplete | `function` | 播放完成回调函数 |

---

### AnimationResult

**类型:** `object`

**描述:** 动画信息

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| name | `string` | 动画名称 |
| duration | `number` | 时长（秒） |
| speed | `number` | 播放速度 |
| state | `PlayState` | 播放状态 |

---

### ObjectEventOptions

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| once | `boolean` | 是否只触发一次 |
| useCapture | `boolean` | 如果是true,会阻断孩子身上原有的事件,并给所有孩子注册这个事件 |
| propagate | `boolean` | 是否传播事件 |

---

### ObjectQueryOptions

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| recursive | `boolean` | 是否递归查询 默认true |
| includeSelf | `boolean` | 是否包括自身 默认不包含 |

---

### ShadowRangeInfo

**类型:** `object`

**描述:** 阴影范围

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| width | `number` | 宽度 |
| height | `number` | 高度 |
| near | `number` | 近 |
| far | `number` | 远 |

---

### BoundingBoxResult

**类型:** `object`

**描述:** BoundingBox对象

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| center | `Array.<number>` | 中心点坐标 |
| halfSize | `Array.<number>` | 包围盒三个轴向尺寸的一半 |

---

### TraverseNodesCallback

**类型:** `function`

**描述:** 空

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `nodeObject` | `NodeObject` | 子节点对象 |

---

### ClippingPlaneResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| direction | `Array.<number>` | 世界坐标系下的方向 |
| height | `number` | 高度，单位：米 |

---

### LensflareElement

**类型:** `object`

**描述:** 镜头光晕元素。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| imageTexture | `ImageTexture` | 元素的图像纹理资源。 |
| color | `Array.<number>` | 元素的颜色。 |
| scale | `number` | 元素的缩放比例。 |
| offset | `number` | 元素的偏移量。 |

---

### OnFitBodyScaleCallback

**类型:** `function`

**描述:** 当适应图片尺寸时调用的函数。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `info` | `object` | 参数 |
| `info.object` | `THING.Marker` | 对象。Marker对象 |
| `info.image` | `object` | 图片。图片对象 |

---

### InheritData

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| style? | `InheritType` | 是否继承样式 |
| visible? | `InheritType` | 是否继承可见状态 |
| pickable? | `InheritType` | 是否继承拾取状态 |

---

### RaycastInfo

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| origin | `Array.<number>` | 射线起点位置 |
| direction | `Array.<number>` | 射线在世界坐标系下的方向 |

---

### RaycastResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| object | `THING.Object3D` | 被射线检测到的对象 |
| position | `Array.<number>` | 射线与对象相交的位置 |
| distance | `number` | 射线起点到相交点的距离 |

---

### ResourceResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| url | `string` | 资源路径 |
| localPosition | `Array.<number>` | 相对父物体的位置 |
| localAngles | `Array.<number>` | 相对父物体的旋转 |
| localScale | `Array.<number>` | 相对父物体的缩放 |
| children | `Array.<ResourceResult>` | 孩子的资源 |

---

### InstancingNodeOptions

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| maxNumber | `number` | 最大数量。 |
| number | `number` | 当前数量。 |
| matrices | `Array.<Array.<number>>` | 矩阵。 |
| pickedIds | `Array.<number>` | 被选中的ID。 |
| colors? | `Array.<Array.<number>>` | 颜色。 |

---

### OrientedBoxResult

**类型:** `object`

**描述:** 旋转包围盒对象

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| angles | `Array.<number>` | 中心点旋转角度 |
| center | `Array.<number>` | 中心点世界坐标 |
| size | `Array.<number>` | 包围盒尺寸 |
| halfSize | `Array.<number>` | 包围盒尺寸x,y,z三个方向分别除以2可得到该参数 |
| radius | `number` | 包围盒最小点和最大点的距离的一半 |

---

### LerpArgs

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| from | `object` | 源属性 |
| to | `object` | 目标属性 |
| times | `number` | 循环次数 -1代表无限 |
| duration | `number` | 时间 单位毫秒 |
| delayTime | `number` | 延时 单位毫秒 |
| lerpType | `LerpType` | 插值类型 见THING.LerpType |
| loopType | `LoopType` | 循环类型 见THING.LoopType |
| orientToPath | `boolean` | 移动时是随路径调整自身朝向 |
| onRepeat | `function` | 每一次插值结束,下一次插值开始时触发 |
| onStart | `function` | 开始时触发 |
| onStop | `function` | 停止时触发 |
| onUpdate | `function` | 插值过程每帧触发 |
| onComplete | `function` | 所有插值结束时触发 |

---

### LerpWithSpaceTypeArgs

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| from | `object` | 源属性 |
| to | `object` | 目标属性 |
| times | `number` | 循环次数 -1代表无限 |
| duration | `number` | 时间 单位毫秒 |
| delayTime | `number` | 延时 单位毫秒 |
| lerpType | `LerpType` | 插值类型 见THING.LerpType |
| loopType | `LoopType` | 循环类型 见THING.LoopType |
| orientToPath | `boolean` | 移动时是随路径调整自身朝向 |
| onRepeat | `function` | 每一次插值结束,下一次插值开始时触发 |
| onStart | `function` | 开始时触发 |
| onStop | `function` | 停止时触发 |
| onUpdate | `function` | 插值过程每帧触发 |
| onComplete | `function` | 所有插值结束时触发 |
| spaceType | `THING.SpaceType` | 参数中的位置是在世界空间还是自身空间 |

---

### MovePathLerpArgs

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| from | `object` | 源属性 |
| to | `object` | 目标属性 |
| times | `number` | 循环次数 -1代表无限 |
| duration | `number` | 时间 单位毫秒 |
| delayTime | `number` | 延时 单位毫秒 |
| lerpType? | `LerpType` | 插值类型 见THING.LerpType |
| loopType? | `LoopType` | 循环类型 见THING.LoopType |
| orientToPath? | `boolean` | 移动时是随路径调整自身朝向 |
| onRepeat | `function` | 每一次插值结束,下一次插值开始时触发 |
| onStart | `function` | 开始时触发 |
| onStop | `function` | 停止时触发 |
| onUpdate | `function` | 插值过程每帧触发 |
| onComplete | `function` | 所有插值结束时触发 |
| spaceType | `THING.SpaceType` | 参数中的位置是在世界空间还是自身空间 |
| up | `Array.<number>` | 向上的方向 |
| closure | `boolean` | 路径是否闭合,即移动到最后一个点之后是否要返回第一个点 |

---

### LerpFlyToArgs

**类型:** `object`

**描述:** 飞行的插值参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| position | `Array.<number>` | 要飞到的位置 |
| target | `Array.<number>, THING.BaseObject` | </br>飞到目标位置之后物体的target,即物体target和position的差代表对象的方向,</br>如果传入一个BaseObject,target就是目标对象的位置,如果没有传position,会根据距离目标对象的距离,水平角,垂直角来计算position</br>参见 https://en.wikipedia.org/wiki/Spherical_coordinate_system |
| up | `Array.<number>` | 飞到目标点后对象的up朝向 |
| duration | `number` | 飞行时间 |
| delayTime | `number` | 延迟时间 |
| distance | `number` | 如果目标点是一个Object3D,且没传position,代表距离目标对象的距离,用于计算position |
| horzAngle | `number` | 如果目标点是一个Object3D,且没传position,代表与目标对象的水平夹角,用于计算position |
| vertAngle | `number` | 如果目标点是一个Object3D,且没传position,代表与目标对象的垂直夹角,用于计算position |
| lerpType | `LerpType` | 插值类型 |
| positionLerpType | `LerpType` | 飞行时positoin的插值类型 |
| targetLerpType | `LerpType` | 飞行时target的插值类型 |
| upLerpType | `LerpType` | 飞行时up的插值类型 |
| onStart | `function` | 开始飞行时的回调 |
| onStop | `function` | 停止飞行时的回调 |
| onResume | `function` | 恢复飞行时的回调 |
| onPause | `function` | 暂停飞行时的回调 |
| onUpdate | `function` | 飞行时每帧回调 |
| onComplete | `function` | 飞行完成时的回调 |

---

### LookAtArgs

**类型:** `object`

**描述:** lookAt的参数

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| up | `Array.<number>` | lookAt时 物体的up方向 |
| lockAxis | `AxisType` | 锁定自身的轴向(x,y,z) |
| always | `boolean` | 是否一直看目标 默认false 代表只看一次,如果传true,观察者或被观察者移动时也会看向目标 |
| lookOnPlane | `boolean` | 是看向目标物体还是看向目标物体的垂直平面 默认false 如果为true时,看的方向是当前位置与目标物体垂直平面的垂线方向 |

---

### StyleEdgeResult

**类型:** `object`

**描述:** 样式的边框效果。

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| enable | `boolean` | 是否开启边框。 |
| color | `Array.<number>` | 边框的颜色。 |
| opacity | `number` | 边框的不透明度。 |
| glow | `boolean` | 边框是否具有发光效果。 |
| thresholdAngle | `number` | 边框的阈值角度。 |

---

### StyleEffectResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| glow | `number` | 发光强度（null表示恢复原始效果） |
| innerGlow | `boolean` | 是否开启内发光（null表示恢复原始效果） |
| lineBloom | `boolean` | 是否开启辉光（null表示恢复原始效果） |
| tailing | `boolean` | 是否开启拖尾效果（null表示恢复原始效果） |
| radial | `boolean` | 是否开启扩散效果（null表示恢复原始效果） |
| ghosting | `boolean` | 是否开启残影效果（null表示恢复原始效果） |

---

### StyleImagesResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| map | `object` | 漫反射贴图(最基础的贴图) |
| envMap | `object` | 环境光贴图 |
| alphaMap | `object` | 透明贴图 |
| emissiveMap | `object` | 自发光贴图 |
| normalMap | `object` | 发现贴图 |
| colorMapping | `object` | 颜色映射 |
| aoMap | `object` | 环境光遮蔽贴图 |

---

### StyleUVMatrixResult

**类型:** `object`

**描述:** 空

**属性:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| offset | `Array.<number>` | 偏移 通过调整偏移可以使贴图移动 |
| repeat | `Array.<number>` | default: [1, 1] 贴图重复度 |
| center | `Array.<number>` | default: [0, 0] 纹理变换的中心位置,偏移 重复 旋转都基于该位置 |
| rotation | `number` | 旋转角度 |

---

### StyleValueOperationCallback

**类型:** `function`

**描述:** 当更新值时调用的函数。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `baseValue` | `number` | 基础值。 |
| `style` | `THING.Style` | 样式。 |

---

### StyleColorOperationCallback

**类型:** `function`

**描述:** 当更新颜色时调用的函数。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `baseValue` | `Array.<number>` | 基础颜色。 |
| `style` | `THING.Style` | 样式。 |

---

### OnFilterObjectsInSelector

**类型:** `function`

**描述:** 用于筛选对象的回调函数。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `object` | `THING.BaseObject` | 对象。 |
| `index` | `number` | 对象的索引。 |
| `objects` | `Array.<THING.BaseObject>` | 对象数组。 |

**返回值:**

- **类型:** `boolean`
- **描述:** -

---

### OnSortObjectsInSelector

**类型:** `function`

**描述:** 用于排序对象的回调函数。

**参数:**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `obj1` | `THING.BaseObject` | 第一个对象。 |
| `obj2` | `THING.BaseObject` | 第二个对象。 |

**返回值:**

- **类型:** `number`
- **描述:** < 0: obj1 < obj2== 0: obj1 == obj2> 0: obj1 > obj2

---

## 其他

### THING

**描述:** 空

---

### THING

**描述:** 空

---

