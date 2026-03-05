<template>
  <el-dropdown class="locale-switch" @command="handleCommand">
    <div class="locale-btn">
      {{ localeMap[locale as LocaleType].label }}
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in Object.values(localeMap)"
          :key="item.value"
          :command="item.value"
          :disabled="locale === item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { localeMap, type LocaleType } from '@/locales'
import { useLocale } from '@/hooks/useLocale'

const { locale, setLocale } = useLocale()

const handleCommand = (value: LocaleType) => {
  setLocale(value)
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.locale-btn {
  @include flex-center;
  min-width: 60px;
  font-size: 16px;
  color: $text-color;
  cursor: pointer;
  &:focus-visible {
    outline: none;
  }
}
</style>
