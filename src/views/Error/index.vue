<template>
  <div class="not-found">
    <div class="content">
      <h1 class="error-code">{{ t('error.code') }}</h1>
      <div class="error-message">{{ t('error.title') }}</div>
      <p class="error-description">{{ t('error.description') }}</p>
      <button class="back-button" @click="goHome">{{ t('error.backHome') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const goHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.not-found {
  @include flex-center;
  height: 100vh;
  width: 100vw;
  background-color: $bg-color;
}

.content {
  text-align: center;
  padding: 32px;
}

.error-code {
  font-size: 128px;
  font-weight: bold;
  color: $primary-color;
  margin: 0;
  line-height: 1;
}

.error-message {
  font-size: 32px;
  color: $text-color;
  margin: spacing(4) 0;
}

.error-description {
  font-size: 16px;
  color: $text-color-secondary;
  margin-bottom: spacing(8);
}

.back-button {
  background-color: $btn-bg;
  color: white;
  border: none;
  padding: spacing(2) spacing(4);
  font-size: 16px;
  border-radius: $border-radius;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: $btn-hover-bg;
}
</style>
