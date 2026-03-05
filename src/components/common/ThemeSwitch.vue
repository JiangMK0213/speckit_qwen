<template>
  <div class="theme-switch">
    <el-tooltip :content="tooltipContent" placement="bottom">
      <div class="switch-icon" @click="handleToggleTheme">
        <el-icon v-if="theme === 'dark'"><Moon /></el-icon>
        <el-icon v-else><Sunny /></el-icon>
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'
import useTheme from '@/hooks/useTheme'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 使用主题管理
const { theme, toggleTheme } = useTheme()

const tooltipContent = computed(() => {
  return theme.value === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')
})

const handleToggleTheme = () => {
  toggleTheme()
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.theme-switch {
  @include flex-center;
}

.switch-icon {
  width: 36px;
  height: 36px;
  @include flex-center;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: $btn-hover-bg;
  }
}
</style>
