<template>
  <nav class="nav-menu">
    <router-link
      v-for="item in menuItems"
      :key="item.name"
      :to="`/${item.name}`"
      replace
      custom
      v-slot="{ navigate, isActive }"
    >
      <div
        @click="navigate"
        class="menu-item"
        :class="{ 'menu-item-active': isActive }"
      >
        {{ t(item.label) }}
      </div>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { MenuItem } from '@/types/component'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()
const menuStore = useMenuStore()
const menuItems = computed<MenuItem[]>(() => menuStore.menuItems)

// 初始化菜单项
menuStore.initMenuItems()

// 监听路由参数变化
watch(
  () => route.params.menuId,
  menuId => {
    if (menuId && menuItems.value.find(item => item.name === menuId)) {
      menuStore.setActiveMenu(menuId as string)
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.nav-menu {
  @include flex-y-center;
  gap: 60px;
}

.menu-item {
  line-height: $header-height;
  position: relative;
  padding: 0px 20px;
  border-radius: $border-radius;
  font-size: 18px;
  color: $text-color;
  transition: all 0.3s;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: transparent;
    transition: background 0.3s;
  }
}

.menu-item-active {
  font-weight: bold;

  &::after {
    background-color: $text-color;
  }
}
</style>
