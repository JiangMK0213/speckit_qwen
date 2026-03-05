/**
 * 3D 场景 Hook
 * 封装 Three.js 场景初始化、动画循环和资源释放逻辑
 */

import { ref, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import type { SceneConfig, Geometries, UseThreeSceneReturn } from '@/types/loading';
import { PerformanceLevel } from '@/types/loading';
import {
  getRecommendedPerformanceLevel,
  getFallbackConfig,
  createLoadingGeometries,
  disposeThreeScene,
} from '@/utils/loading-scene';
import { FPS_DROP_THRESHOLD } from '@/utils/loading-constants';

/**
 * 3D 场景 Hook
 */
export function useThreeScene(): UseThreeSceneReturn {
  // 场景容器 ref
  const containerRef = ref<HTMLElement | null>(null);
  
  // 场景是否已初始化
  const isInitialized = ref(false);
  
  // 当前 FPS
  const fps = ref(60);
  
  // 是否暂停
  const isPaused = ref(false);
  
  // 私有变量
  let scene: THREE.Scene | null = null;
  let camera: THREE.PerspectiveCamera | null = null;
  let renderer: THREE.WebGLRenderer | null = null;
  let geometries: Geometries | null = null;
  let animationFrameId: number | null = null;
  let frameCount = 0;
  let lastFpsUpdate = performance.now();
  let currentConfig: SceneConfig = {
    performanceLevel: PerformanceLevel.HIGH,
    antialias: true,
    enableParticles: true,
    geometryFaceLimit: 0,
    targetFPS: 60,
    primaryColor: '#1890ff',
  };
  let colorObserver: MutationObserver | null = null;

  /**
   * 初始化场景
   */
  async function initScene(config?: Partial<SceneConfig>): Promise<void> {
    if (!containerRef.value) {
      throw new Error('Container ref is not set');
    }

    // 获取推荐性能级别
    const recommendedLevel = getRecommendedPerformanceLevel();
    const baseConfig = getFallbackConfig(recommendedLevel);
    currentConfig = { ...baseConfig, ...config };

    // 创建场景
    scene = new THREE.Scene();

    // 创建相机
    camera = new THREE.PerspectiveCamera(
      75,
      containerRef.value.clientWidth / containerRef.value.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({
      antialias: currentConfig.antialias,
      alpha: true,
    });
    renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 添加渲染器到容器
    containerRef.value.appendChild(renderer.domElement);

    // 创建几何体
    geometries = createLoadingGeometries(currentConfig);

    // 添加几何体到场景
    if (geometries) {
      scene.add(geometries.cube);
      scene.add(geometries.torus);
      if (geometries.sphere) scene.add(geometries.sphere);
      if (geometries.particles) scene.add(geometries.particles);
    }

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    // 监听主题色变化
    setupColorObserver();

    // 开始动画循环
    animate();

    isInitialized.value = true;
  }

  /**
   * 处理窗口大小变化
   */
  function handleResize(): void {
    if (!camera || !renderer || !containerRef.value) return;

    camera.aspect = containerRef.value.clientWidth / containerRef.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight);
  }

  /**
   * 设置颜色观察者
   */
  function setupColorObserver(): void {
    colorObserver = new MutationObserver(() => {
      const style = getComputedStyle(document.documentElement);
      const primaryColor = style.getPropertyValue('--color-primary').trim() || '#1890ff';
      updateColor(primaryColor);
    });

    colorObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'data-theme'],
    });
  }

  /**
   * 动画循环
   */
  function animate(): void {
    if (isPaused.value || !scene || !camera || !renderer || !geometries) {
      animationFrameId = requestAnimationFrame(animate);
      return;
    }

    const currentTime = performance.now();

    // FPS 计算
    frameCount++;
    if (currentTime - lastFpsUpdate >= 1000) {
      fps.value = Math.round((frameCount * 1000) / (currentTime - lastFpsUpdate));
      frameCount = 0;
      lastFpsUpdate = currentTime;

      // FPS 过低时降级
      if (fps.value < FPS_DROP_THRESHOLD && currentConfig.performanceLevel !== PerformanceLevel.LOW) {
        console.warn('FPS too low, downgrading performance level');
        // 可以在这里实现动态降级
      }
    }

    // 旋转动画
    const rotationSpeed = (2 * Math.PI) / (currentConfig.targetFPS * 10);
    if (geometries.cube) {
      geometries.cube.rotation.y += rotationSpeed;
      geometries.cube.rotation.x += rotationSpeed * 0.5;
    }
    if (geometries.torus) {
      geometries.torus.rotation.x += rotationSpeed * 0.8;
      geometries.torus.rotation.y += rotationSpeed * 0.3;
    }
    if (geometries.sphere) {
      geometries.sphere.rotation.y += rotationSpeed * 1.2;
      // 缩放脉冲
      const scale = 1 + Math.sin(currentTime * 0.002) * 0.1;
      geometries.sphere.scale.set(scale, scale, scale);
    }
    if (geometries.particles) {
      geometries.particles.rotation.y += rotationSpeed * 0.2;
    }

    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  }

  /**
   * 更新进度（预留接口）
   */
  function updateProgress(_progress: number | null): void {
    // 进度更新逻辑可以在组件层面实现
    // 这里预留接口供未来扩展
  }

  /**
   * 销毁场景
   */
  function disposeScene(): void {
    // 停止动画
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    // 移除事件监听
    window.removeEventListener('resize', handleResize);

    // 停止颜色观察
    if (colorObserver) {
      colorObserver.disconnect();
      colorObserver = null;
    }

    // 释放 3D 资源
    if (scene && renderer && camera) {
      disposeThreeScene(scene, renderer, camera);
    }

    // 清空引用
    scene = null;
    camera = null;
    renderer = null;
    geometries = null;
    isInitialized.value = false;
  }

  /**
   * 暂停渲染
   */
  function pause(): void {
    isPaused.value = true;
  }

  /**
   * 恢复渲染
   */
  function resume(): void {
    isPaused.value = false;
  }

  /**
   * 更新主题色
   */
  function updateColor(color: string): void {
    if (!geometries) return;

    const materialColor = new THREE.Color(color);

    // 更新所有几何体材质颜色
    Object.values(geometries).forEach((geometry) => {
      if (geometry instanceof THREE.Mesh && geometry.material) {
        if (Array.isArray(geometry.material)) {
          geometry.material.forEach(m => m.color = materialColor);
        } else {
          geometry.material.color = materialColor;
        }
      } else if (geometry instanceof THREE.Points && geometry.material) {
        geometry.material.color = materialColor;
      }
    });
  }

  /**
   * 更新性能级别
   */
  function updatePerformanceLevel(level: PerformanceLevel): void {
    currentConfig.performanceLevel = level;
    // 可以在此重新创建几何体以适配新的性能级别
  }

  // 组件卸载时自动清理
  onBeforeUnmount(() => {
    disposeScene();
  });

  return {
    containerRef,
    isInitialized,
    fps,
    isPaused,
    initScene,
    updateProgress,
    disposeScene,
    pause,
    resume,
    updateColor,
    updatePerformanceLevel,
  };
}
