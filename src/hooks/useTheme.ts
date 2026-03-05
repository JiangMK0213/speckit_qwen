import { ref } from 'vue'

// 主题类型 - 与 styles/themes/index.scss 中的 $dark-theme 和 $light-theme 保持一致
export type ThemeType = 'dark' | 'light'

// 本地存储主题的键名
const THEME_STORAGE_KEY = 'app-theme'

// 默认主题
const DEFAULT_THEME: ThemeType = 'dark'

/**
 * 主题管理组合式函数
 * @returns 主题相关的状态和方法
 */
export default function useTheme() {
  // 当前主题的响应式引用
  const theme = ref<ThemeType>(DEFAULT_THEME)

  /**
   * 初始化主题
   */
  function initTheme(): void {
    // 从本地存储获取主题
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType | null

    // 如果有保存的主题则使用，否则使用默认主题
    const currentTheme = savedTheme || DEFAULT_THEME

    // 设置主题
    setTheme(currentTheme)
  }

  /**
   * 设置主题
   * @param newTheme 要设置的主题
   */
  function setTheme(newTheme: ThemeType) {
    // 移除所有主题类名
    document.documentElement.classList.remove('dark', 'light')

    // 添加新主题类名
    document.documentElement.classList.add(newTheme)

    // 更新状态
    theme.value = newTheme

    // 保存到本地存储
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
  }

  /**
   * 切换主题
   */
  function toggleTheme(): void {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // 初始化
  initTheme()

  return {
    theme,
    setTheme,
    toggleTheme,
  }
}
