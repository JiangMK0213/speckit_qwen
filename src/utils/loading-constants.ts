/**
 * 3D 加载页面常量定义
 */

/** 默认旋转速度（秒/圈） */
export const DEFAULT_ROTATION_SPEED = 10;

/** 淡出过渡时间（毫秒） */
export const FADE_OUT_DURATION = 500;

/** 最小显示时间（毫秒），避免闪烁 */
export const MIN_DISPLAY_TIME = 300;

/** 超时阈值（毫秒） */
export const TIMEOUT_THRESHOLD = 30000;

/** FPS 检测窗口大小（帧数） */
export const FPS_WINDOW_SIZE = 60;

/** 性能降级 FPS 阈值 */
export const FPS_DROP_THRESHOLD = 20;

/** 粒子数量（高性能模式） */
export const PARTICLE_COUNT_HIGH = 100;

/** 粒子数量（中性能模式） */
export const PARTICLE_COUNT_MEDIUM = 0;

/** 默认场景配置 */
export const DEFAULT_SCENE_CONFIG = {
  performanceLevel: 'high' as const,
  antialias: true,
  enableParticles: true,
  geometryFaceLimit: 0,
  targetFPS: 60,
  primaryColor: '#1890ff',
};
