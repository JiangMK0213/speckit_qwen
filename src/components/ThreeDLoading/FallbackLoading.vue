<template>
  <div class="fallback-loading-container">
    <!-- 2D 旋转动画 -->
    <div class="fallback-loading-spinner"></div>
    
    <!-- 加载文字 -->
    <slot name="text">
      <div class="fallback-loading-text">{{ loadingText }}</div>
    </slot>

    <!-- 不确定进度（点状闪烁） -->
    <div v-if="progress === null" class="fallback-loading-indeterminate">
      <span class="fallback-loading-dot"></span>
      <span class="fallback-loading-dot"></span>
      <span class="fallback-loading-dot"></span>
    </div>

    <!-- 确定进度（进度条） -->
    <div v-else-if="progress !== undefined" class="fallback-loading-progress">
      <div
        class="fallback-loading-progress-fill"
        :style="{ width: `${progress}%` }"
      ></div>
      <span v-if="showPercentage" class="fallback-loading-percentage">
        {{ progress }}%
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  progress?: number | null;
  loadingText?: string;
  primaryColor?: string;
  showPercentage?: boolean;
}

withDefaults(defineProps<Props>(), {
  progress: null,
  loadingText: '加载中…',
  primaryColor: '#1890ff',
  showPercentage: true,
});
</script>

<style scoped lang="scss">
.fallback-loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.fallback-loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: v-bind(primaryColor);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.fallback-loading-text {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.fallback-loading-indeterminate {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.fallback-loading-dot {
  width: 8px;
  height: 8px;
  background-color: v-bind(primaryColor);
  border-radius: 50%;
  animation: dot-bounce 1.4s infinite ease-in-out both;
}

.fallback-loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.fallback-loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

.fallback-loading-dot:nth-child(3) {
  animation-delay: 0s;
}

.fallback-loading-progress {
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.fallback-loading-progress-fill {
  height: 100%;
  background-color: v-bind(primaryColor);
  transition: width 0.3s ease-out;
}

.fallback-loading-percentage {
  position: absolute;
  top: -20px;
  right: 0;
  font-size: 12px;
  color: #ffffff;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dot-bounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .fallback-loading-spinner {
    width: 40px;
    height: 40px;
  }

  .fallback-loading-text {
    font-size: 14px;
  }

  .fallback-loading-progress {
    width: 160px;
  }
}
</style>
