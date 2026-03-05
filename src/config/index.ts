import type { ModuleConfig } from '@/types/config'
import configModuleA from './modules/module-a'
import configModuleB from './modules/module-b'

// 业务模块配置
export const APP_CONFIG: Record<string, ModuleConfig> = {
  menuA: {
    name: 'menuA',
    ...configModuleA
  },
  menuB: {
    name: 'menuB',
    ...configModuleB
  }
}

/**
 * 获取菜单配置
 * @returns
 */
function getMenuConfig() {
  return Object.keys(APP_CONFIG).map(key => ({
    name: key,
    label: APP_CONFIG[key].name
  }))
}

// 菜单配置
export const MENU_CONFIG = getMenuConfig()

// 默认菜单ID
export const DEFAULT_MENU_ID = MENU_CONFIG[0].name

/**
 * 获取模块配置
 * @param id 模块对应的菜单ID
 * @returns 模块配置
 */
export function getModuleConfig(id: string): ModuleConfig {
  return APP_CONFIG[id]
}
