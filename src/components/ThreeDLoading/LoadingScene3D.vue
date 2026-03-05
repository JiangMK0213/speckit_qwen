<template>
  <div ref="containerRef" class="three-d-loading-scene"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useThreeScene } from '@/hooks/useThreeScene';
import { PerformanceLevel } from '@/types/loading';

interface Props {
  performanceLevel?: PerformanceLevel;
  primaryColor?: string;
  rotationSpeed?: number;
  enableParticles?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  performanceLevel: PerformanceLevel.HIGH,
  primaryColor: '#1890ff',
  rotationSpeed: 10,
  enableParticles: true,
});

const emit = defineEmits<{
  initialized: [];
  error: [error: Error];
  'fps-drop': [fps: number];
}>();

const containerRef = ref<HTMLElement | null>(null);
const {
  initScene,
  disposeScene,
  updateColor,
  updatePerformanceLevel,
  fps,
} = useThreeScene();

onMounted(async () => {
  try {
    await initScene({
      performanceLevel: props.performanceLevel,
      primaryColor: props.primaryColor,
      enableParticles: props.enableParticles,
    });
    emit('initialized');
  } catch (error) {
    emit('error', error instanceof Error ? error : new Error('Failed to initialize 3D scene'));
  }
});

// 监听主题色变化
watch(
  () => props.primaryColor,
  (newColor) => {
    updateColor(newColor);
  }
);

// 监听性能级别变化
watch(
  () => props.performanceLevel,
  (newLevel) => {
    updatePerformanceLevel(newLevel);
  }
);

// 监听 FPS 下降
watch(fps, (newFps) => {
  if (newFps < 30) {
    emit('fps-drop', newFps);
  }
});

onBeforeUnmount(() => {
  disposeScene();
});
</script>

<style scoped>
.three-d-loading-scene {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
}

:deep(canvas) {
  outline: none;
}
</style>
