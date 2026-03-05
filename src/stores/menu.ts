import { defineStore } from 'pinia'
import { MENU_CONFIG, DEFAULT_MENU_ID } from '@/config'
import type { MenuItem } from '@/types/component'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeMenu: DEFAULT_MENU_ID,
    menuItems: [] as MenuItem[]
  }),

  actions: {
    initMenuItems() {
      this.menuItems = MENU_CONFIG
    },
    setActiveMenu(menu: string) {
      this.activeMenu = menu
    }
  }
})
