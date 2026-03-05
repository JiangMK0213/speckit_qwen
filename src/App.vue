<template>
  <el-config-provider :locale="elLocale">
    <!-- 3D 加载页面 -->
    <ThreeDLoading
      v-model="isLoading"
      :progress="loadingProgress"
      loading-text="正在初始化应用…"
      :timeout="30000"
      @timeout="handleLoadingTimeout"
    />
    
    <router-view v-if="!isLoading" />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ThreeDLoading from '@/components/ThreeDLoading/ThreeDLoading.vue'

const i18n = useI18n()
const elLocale = computed(() => i18n.messages.value[i18n.locale.value].el)

// 加载状态
const isLoading = ref(true)
const loadingProgress: Ref<number | null> = ref(null)

// 应用初始化
onMounted(async () => {
  try {
    // 模拟异步加载过程
    await initializeApp((progress) => {
      loadingProgress.value = progress
    })
  } catch (error) {
    console.error('应用初始化失败:', error)
  } finally {
    // 确保最小显示时间
    await new Promise(resolve => setTimeout(resolve, 500))
    isLoading.value = false
  }
})

/**
 * 应用初始化逻辑
 */
async function initializeApp(onProgress: (progress: number) => void) {
  // 模拟资源加载步骤
  const steps = [
    { name: '加载配置', weight: 20 },
    { name: '初始化主题', weight: 20 },
    { name: '加载路由', weight: 30 },
    { name: '准备就绪', weight: 30 },
  ]
  
  let totalProgress = 0
  
  for (const step of steps) {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 300))
    totalProgress += step.weight
    onProgress(Math.min(totalProgress, 100))
  }
}

/**
 * 加载超时处理
 */
function handleLoadingTimeout(duration: number) {
  console.warn(`加载超时：${duration}ms`)
}
</script>
