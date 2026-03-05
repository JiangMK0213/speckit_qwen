<template>
  <div class="app-container">
    <Layout>
      <!-- 顶部 -->
      <Header>
        <template #title>
          <div class="header-title">ThingJS Editor 示例项目</div>
        </template>
        <NavMenu />
        <template #right>
          <ThemeSwitch />
          <LocaleSetting />
          <TimeDisplay format="YYYY-MM-DD HH:mm:ss" />
        </template>
      </Header>
      <!-- 子路由视图 -->
      <router-view />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { TimeDisplay, ThemeSwitch, LocaleSetting } from '@/components'
import NavMenu from '@/views/Home/components/NavMenu.vue'
import { useMenuStore } from '@/stores/menu'
import { getApp } from '@/scene3d/index'
import { UI_EVENTS } from '@/events/event-types'

const menuStore = useMenuStore()

// 监听菜单变化
watch(
  () => menuStore.activeMenu,
  async (value: string) => {
    const app = await getApp()
    app.trigger(UI_EVENTS.MENU_SELECTED, value)
  }
)
</script>

<style lang="scss" scoped>
.app-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.header-title {
  font-size: $header-title-font-size;
}
</style>
