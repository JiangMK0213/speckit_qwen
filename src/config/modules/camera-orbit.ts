import type { CameraOrbitConfig } from '@/scene3d/camera-orbit-controller'

/**
 * 相机自动环绕配置
 * 
 * 用于配置园区相机自动环绕浏览功能的各项参数：
 * - 旋转中心：相机环绕的中心点坐标
 * - 旋转半径：相机与中心点的水平距离
 * - 相机高度：相机相对于中心点的垂直高度
 * - 旋转速度：相机旋转的角速度（度/秒）
 * - 恢复延迟：用户停止操作后自动恢复的等待时间
 */
export const cameraOrbitConfig: CameraOrbitConfig = {
  /** 旋转中心，默认坐标原点 [0, 0, 0] */
  center: [0, 0, 0],
  /** 旋转半径（米），默认 100 米，可根据园区尺寸调整 */
  radius: 100,
  /** 相机高度（米），默认 50 米，决定俯瞰视角高度 */
  height: 50,
  /** 旋转速度（度/秒），默认 1 度/秒（360 度/360 秒 = 6 分钟） */
  speed: 1,
  /** 恢复延迟（秒），用户停止操作后 5 秒自动恢复 */
  resumeDelay: 5,
  /** 是否启用自动环绕，默认启用 */
  enabled: true
}
