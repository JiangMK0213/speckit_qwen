<template>
  <div id="scene-3d"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initScene3D } from '@/scene3d'

onMounted(async () => {
  try {
    // 初始化 3D 场景
    await initScene3D('scene-3d')
    // 创建一个立方体
    new THING.Box({
      name: 'Box',
    })
  } catch (error) {
    console.error('初始化3D场景失败:', error)
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
