<template>
  <Teleport to="body">
    <Transition
      enter-active-class="three-d-loading-transition-enter-active"
      leave-active-class="three-d-loading-transition-leave-active"
      enter-from-class="three-d-loading-transition-enter-from"
      leave-to-class="three-d-loading-transition-leave-to"
      @after-leave="handleAfterLeave"
    >
      <div v-if="visible || modelValue" class="three-d-loading-container">
        <!-- 3D 场景或 2D 降级 -->
        <slot v-if="!useFallback" :progress="progress">
          <LoadingScene3D
            :performance-level="performanceLevel"
            :primary-color="primaryColor"
            :enable-particles="enableParticles"
            @initialized="handleSceneInitialized"
            @error="handleSceneError"
            @fps-drop="handleFpsDrop"
          />
        </slot>
        <slot v-else name="fallback" :progress="progress">
          <FallbackLoading :progress="progress" :loading-text="loadingText" :primary-color="primaryColor" />
        </slot>

        <!-- 不确定进度（点状闪烁） -->
        <div v-if="progress === null" class="three-d-loading-indeterminate">
          <span class="three-d-loading-dot"></span>
          <span class="three-d-loading-dot"></span>
          <span class="three-d-loading-dot"></span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { PerformanceLevel } from '@/types/loading'
import { getRecommendedPerformanceLevel } from '@/utils/loading-scene'
import LoadingScene3D from './LoadingScene3D.vue'
import FallbackLoading from './FallbackLoading.vue'

interface Props {
  modelValue?: boolean
  progress?: number | null
  loadingText?: string
  minDisplayTime?: number
  timeout?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  progress: null,
  loadingText: '加载中…',
  minDisplayTime: 300,
  timeout: 30000
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
  timeout: [duration: number]
  error: [error: Error]
}>()

// 使用 modelValue 作为 visible
const visible = ref(props.modelValue)

// 监听外部变化
watch(
  () => props.modelValue,
  newVal => {
    visible.value = newVal
  }
)

// 关闭时通知父组件
function handleClose() {
  emit('update:modelValue', false)
  emit('close')
}

defineExpose({
  forceClose,
  reset,
  checkTimeout
})

// 性能级别
const performanceLevel = ref<PerformanceLevel>(PerformanceLevel.HIGH)
const useFallback = ref(false)
const enableParticles = ref(true)

// 主题色（从 CSS 变量获取）
const primaryColor = ref('#1890ff')

// 显示状态
const isSceneInitialized = ref(false)
const displayStartTime = ref(0)
const timeoutTimer = ref<number | null>(null)

// 计算性能级别
onMounted(() => {
  // 获取主题色
  const style = getComputedStyle(document.documentElement)
  primaryColor.value = style.getPropertyValue('--color-primary').trim() || '#1890ff'

  const recommended = getRecommendedPerformanceLevel()
  performanceLevel.value = recommended

  // 低性能设备使用 2D 降级
  if (recommended === PerformanceLevel.LOW) {
    useFallback.value = true
    enableParticles.value = false
  }
})

// 超时检测
const startTimeoutTimer = () => {
  if (timeoutTimer.value) {
    clearTimeout(timeoutTimer.value)
  }

  timeoutTimer.value = window.setTimeout(() => {
    emit('timeout', props.timeout)
  }, props.timeout)
}

// 场景初始化完成
function handleSceneInitialized() {
  isSceneInitialized.value = true
  displayStartTime.value = Date.now()
  startTimeoutTimer()
}

// 场景错误
function handleSceneError(error: Error) {
  console.error('3D scene error:', error)
  // 降级到 2D
  useFallback.value = true
  emit('error', error)
}

// FPS 下降处理
function handleFpsDrop(fps: number) {
  if (fps < 20 && performanceLevel.value === PerformanceLevel.HIGH) {
    performanceLevel.value = PerformanceLevel.MEDIUM
  }
}

// 过渡结束后处理
function handleAfterLeave() {
  handleClose()
}

// 强制关闭
function forceClose(): void {
  if (timeoutTimer.value) {
    clearTimeout(timeoutTimer.value)
    timeoutTimer.value = null
  }
  emit('close')
}

// 重置状态
function reset(): void {
  isSceneInitialized.value = false
  displayStartTime.value = 0
  if (timeoutTimer.value) {
    clearTimeout(timeoutTimer.value)
    timeoutTimer.value = null
  }
}

// 检查超时
function checkTimeout(): boolean {
  if (!displayStartTime.value) return false

  const elapsed = Date.now() - displayStartTime.value
  if (elapsed >= props.timeout) {
    emit('timeout', elapsed)
    return true
  }
  return false
}

onBeforeUnmount(() => {
  if (timeoutTimer.value) {
    clearTimeout(timeoutTimer.value)
  }
})
</script>

<style scoped>
.three-d-loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.three-d-loading-scene {
  width: 300px;
  height: 300px;
  position: relative;
}

.three-d-loading-text {
  margin-top: 24px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.three-d-loading-progress {
  margin-top: 16px;
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.three-d-loading-progress-fill {
  height: 100%;
  background-color: var(--color-primary, #1890ff);
  transition: width 0.3s ease-out;
}

.three-d-loading-indeterminate {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.three-d-loading-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-primary, #1890ff);
  border-radius: 50%;
  animation: dot-bounce 1.4s infinite ease-in-out both;
}

.three-d-loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.three-d-loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

.three-d-loading-dot:nth-child(3) {
  animation-delay: 0s;
}

/* 过渡动画 */
.three-d-loading-transition-enter-active,
.three-d-loading-transition-leave-active {
  transition: opacity v-bind(`${minDisplayTime}ms`) ease-out;
}

.three-d-loading-transition-enter-from,
.three-d-loading-transition-leave-to {
  opacity: 0;
}

@keyframes dot-bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .three-d-loading-scene {
    width: 200px;
    height: 200px;
  }

  .three-d-loading-text {
    font-size: 14px;
  }

  .three-d-loading-progress {
    width: 160px;
  }
}
</style>
