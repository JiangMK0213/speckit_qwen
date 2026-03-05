<template>
  <div id="scene-3d"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { initScene3D, getApp, CameraOrbitController } from '@/scene3d'
import { cameraOrbitConfig } from '@/config/modules/camera-orbit'

let controller: CameraOrbitController | null = null

onMounted(async () => {
  try {
    // 初始化 3D 场景
    await initScene3D('scene-3d')
    
    // 获取 ThingJS App 实例
    const app = await getApp()
    
    // 创建相机环绕控制器
    controller = new CameraOrbitController(app, cameraOrbitConfig)
    
    // 启动自动环绕
    controller.start()
    
    // 绑定用户交互事件监听
    const interactionEvents = [
      'mousedown',
      'mousemove',
      'mouseup',
      'mousewheel',
      'touchstart',
      'touchmove',
      'touchend'
    ]
    
    interactionEvents.forEach(event => {
      app.on(event, () => {
        controller?.onUserInteraction()
      })
    })
    
    // 创建一个立方体
    new THING.Box({
      name: 'Box',
    })
  } catch (error) {
    console.error('初始化 3D 场景失败:', error)
  }
})

onBeforeUnmount(() => {
  // 组件卸载时清理控制器资源
  if (controller) {
    controller.destroy()
    controller = null
  }
})
</script>

<style lang="scss" scoped>
#scene-3d {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
