import { setApp } from './thing-app'

const authUrl = 'https://www.thingjs.org.cn/auth/login'

/**
 * 初始化 3D 场景
 * @param divId 容器 ID
 */
export async function initScene3D(divId: string): Promise<void> {
  // 验证容器元素存在
  const container = document.getElementById(divId)
  if (!container) {
    return Promise.reject(`容器元素不存在: 未找到ID为"${divId}"的DOM元素`)
  }

  // 验证环境变量
  if (!import.meta.env.VITE_SCENE_URL) {
    return Promise.reject('环境配置错误: 缺少 VITE_SCENE_URL 环境变量')
  }

  try {
    // 等待初始化 3D 场景
    await window.THING.Utils.init({
      url: import.meta.env.VITE_SCENE_URL,
      container: divId,
      authUrl: authUrl
    })
  } catch (error) {
    return Promise.reject(
      '项目资源未初始化: 请先双击 `public/editor/sample` 中的 `myproj.thing` 打开该项目，对项目资源进行初始化。'
    )
  }

  // 获取 App 实例
  const app = window.THING.App.current

  setApp(app)

  console.log('3D场景初始化完成:', app)
}
