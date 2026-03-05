/**
 * 3D 加载场景工具函数
 */

import * as THREE from 'three';
import { PerformanceLevel, type SceneConfig, type Geometries } from '@/types/loading';
import {
  PARTICLE_COUNT_HIGH,
  PARTICLE_COUNT_MEDIUM,
  DEFAULT_SCENE_CONFIG,
} from './loading-constants';

/**
 * 检测 WebGL 2.0 支持
 */
export function hasWebGL2Support(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2');
    return !!context;
  } catch {
    return false;
  }
}

/**
 * 检测 GPU 性能级别
 */
export function detectGPUPerformance(): PerformanceLevel {
  if (!hasWebGL2Support()) {
    return PerformanceLevel.LOW;
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
      return PerformanceLevel.LOW;
    }

    const debugInfo = (gl as WebGL2RenderingContext).getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      const rendererStr = renderer.toLowerCase();

      // 高性能 GPU
      if (
        rendererStr.includes('nvidia') ||
        rendererStr.includes('amd') ||
        rendererStr.includes('radeon') ||
        rendererStr.includes('geforce')
      ) {
        return PerformanceLevel.HIGH;
      }

      // 中等性能 GPU
      if (
        rendererStr.includes('intel') ||
        rendererStr.includes('iris') ||
        rendererStr.includes('uhd') ||
        rendererStr.includes('adreno') ||
        rendererStr.includes('mali')
      ) {
        return PerformanceLevel.MEDIUM;
      }
    }

    // 默认中等性能
    return PerformanceLevel.MEDIUM;
  } catch {
    return PerformanceLevel.MEDIUM;
  }
}

/**
 * 检测设备类型
 */
export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * 获取推荐的性能级别
 */
export function getRecommendedPerformanceLevel(): PerformanceLevel {
  const gpuLevel = detectGPUPerformance();
  
  // 移动设备降级一级
  if (isMobileDevice() && gpuLevel === PerformanceLevel.HIGH) {
    return PerformanceLevel.MEDIUM;
  }
  
  return gpuLevel;
}

/**
 * 获取降级配置
 */
export function getFallbackConfig(level: PerformanceLevel): SceneConfig {
  switch (level) {
    case PerformanceLevel.HIGH:
      return { ...DEFAULT_SCENE_CONFIG };
    
    case PerformanceLevel.MEDIUM:
      return {
        ...DEFAULT_SCENE_CONFIG,
        performanceLevel: PerformanceLevel.MEDIUM,
        enableParticles: false,
        targetFPS: 30,
      };
    
    case PerformanceLevel.LOW:
      return {
        ...DEFAULT_SCENE_CONFIG,
        performanceLevel: PerformanceLevel.LOW,
        antialias: false,
        enableParticles: false,
        targetFPS: 30,
      };
    
    default:
      return { ...DEFAULT_SCENE_CONFIG };
  }
}

/**
 * 创建中心立方体
 */
export function createCube(
  color: string
): THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial> {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.7,
    roughness: 0.2,
  });
  const cube = new THREE.Mesh(geometry, material);
  return cube;
}

/**
 * 创建外围环
 */
export function createTorus(
  color: string
): THREE.Mesh<THREE.TorusGeometry, THREE.MeshStandardMaterial> {
  const geometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100);
  const material = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.7,
    roughness: 0.2,
  });
  const torus = new THREE.Mesh(geometry, material);
  return torus;
}

/**
 * 创建装饰球体
 */
export function createSphere(
  color: string
): THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial> {
  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.7,
    roughness: 0.2,
  });
  const sphere = new THREE.Mesh(geometry, material);
  return sphere;
}

/**
 * 创建粒子系统
 */
export function createParticles(
  color: string,
  count: number = PARTICLE_COUNT_HIGH
): THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color,
    size: 0.05,
    transparent: true,
    opacity: 0.8,
  });

  const particles = new THREE.Points(geometry, material);
  return particles;
}

/**
 * 创建加载场景几何体组合
 */
export function createLoadingGeometries(config: SceneConfig): Geometries {
  const geometries: Geometries = {
    cube: createCube(config.primaryColor, config.geometryFaceLimit),
    torus: createTorus(config.primaryColor, config.geometryFaceLimit),
  };

  // 高性能设备添加球体
  if (config.performanceLevel === PerformanceLevel.HIGH) {
    geometries.sphere = createSphere(config.primaryColor, config.geometryFaceLimit);
  }

  // 启用粒子效果
  if (config.enableParticles && config.performanceLevel !== PerformanceLevel.LOW) {
    const particleCount = config.performanceLevel === PerformanceLevel.HIGH
      ? PARTICLE_COUNT_HIGH
      : PARTICLE_COUNT_MEDIUM;
    geometries.particles = createParticles(config.primaryColor, particleCount);
  }

  return geometries;
}

/**
 * 释放几何体资源
 */
export function disposeGeometry(
  geometry: THREE.BufferGeometry
): void {
  geometry.dispose();
}

/**
 * 释放材质资源
 */
export function disposeMaterial(
  material: THREE.Material | THREE.Material[]
): void {
  if (Array.isArray(material)) {
    material.forEach(m => m.dispose());
  } else {
    material.dispose();
  }
}

/**
 * 释放纹理资源
 */
export function disposeTexture(texture: THREE.Texture | null): void {
  if (texture) {
    texture.dispose();
  }
}

/**
 * 释放 3D 场景资源
 */
export function disposeThreeScene(
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  _camera: THREE.Camera
): void {
  // 遍历场景对象并释放资源
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      disposeGeometry(object.geometry);
      disposeMaterial(object.material);
    } else if (object instanceof THREE.Points) {
      disposeGeometry(object.geometry);
      disposeMaterial(object.material);
    }
  });

  // 释放渲染器
  renderer.dispose();
  renderer.forceContextLoss();

  // 移除 DOM 元素
  if (renderer.domElement && renderer.domElement.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement);
  }

  // 清空引用
  scene.clear();
}
