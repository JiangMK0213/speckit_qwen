/**
 * 3D 加载页面相关类型定义
 */

import * as THREE from 'three';

/**
 * 性能级别枚举
 */
export enum PerformanceLevel {
  /** 高性能设备：独立显卡、桌面设备 */
  HIGH = 'high',
  
  /** 中等性能设备：集成显卡、高端手机 */
  MEDIUM = 'medium',
  
  /** 低性能设备：低端手机、旧浏览器 */
  LOW = 'low',
}

/**
 * 加载进度状态
 */
export interface LoadingProgress {
  /** 当前进度值（0-100），null 表示不确定进度 */
  value: number | null;
  
  /** 加载状态 */
  status: 'loading' | 'completed' | 'error';
  
  /** 加载开始时间戳 */
  startTime: number;
  
  /** 加载完成时间戳（可选） */
  completedTime?: number;
  
  /** 错误信息（如果状态为 error） */
  errorMessage?: string;
}

/**
 * 3D 场景配置
 */
export interface SceneConfig {
  /** 性能级别 */
  performanceLevel: PerformanceLevel;
  
  /** 是否启用抗锯齿 */
  antialias: boolean;
  
  /** 是否启用粒子效果 */
  enableParticles: boolean;
  
  /** 几何体面数限制（0 表示无限制） */
  geometryFaceLimit: number;
  
  /** 目标 FPS */
  targetFPS: number;
  
  /** 主题色（从 CSS 变量获取） */
  primaryColor: string;
}

/**
 * 几何体组合
 */
export interface Geometries {
  /** 中心立方体 */
  cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>;
  
  /** 外围环 */
  torus: THREE.Mesh<THREE.TorusGeometry, THREE.MeshStandardMaterial>;
  
  /** 装饰球体（可选） */
  sphere?: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;
  
  /** 粒子系统（可选） */
  particles?: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
}

/**
 * 3D 加载组件 Props
 */
export interface ThreeDLoadingProps {
  /** 是否显示加载页面 */
  visible?: boolean;
  
  /** 加载进度（0-100），null 表示不确定进度 */
  progress?: number | null;
  
  /** 加载提示文字 */
  loadingText?: string;
  
  /** 最小显示时间（毫秒），避免闪烁 */
  minDisplayTime?: number;
  
  /** 超时阈值（毫秒） */
  timeout?: number;
}

/**
 * useThreeScene Hook 返回值
 */
export interface UseThreeSceneReturn {
  /** 场景容器 ref */
  containerRef: Ref<HTMLElement | null>;
  
  /** 场景是否已初始化 */
  isInitialized: Ref<boolean>;
  
  /** 当前 FPS */
  fps: Ref<number>;
  
  /** 是否暂停 */
  isPaused: Ref<boolean>;
  
  /** 初始化场景 */
  initScene: (config?: Partial<SceneConfig>) => Promise<void>;
  
  /** 更新进度 */
  updateProgress: (progress: number | null) => void;
  
  /** 销毁场景 */
  disposeScene: () => void;
  
  /** 暂停渲染 */
  pause: () => void;
  
  /** 恢复渲染 */
  resume: () => void;
  
  /** 更新主题色 */
  updateColor: (color: string) => void;
  
  /** 更新性能级别 */
  updatePerformanceLevel: (level: PerformanceLevel) => void;
}

import type { Ref } from 'vue';
