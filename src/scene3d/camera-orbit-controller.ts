/**
 * 相机自动环绕配置接口
 */
export interface CameraOrbitConfig {
  /** 旋转中心坐标，默认 [0, 0, 0] */
  center: [number, number, number]
  /** 旋转半径（米），默认 100 */
  radius: number
  /** 相机高度（米），默认 50 */
  height: number
  /** 旋转速度（度/秒），默认 12（360 度/30 秒） */
  speed: number
  /** 恢复延迟（秒），默认 5 秒 */
  resumeDelay: number
  /** 是否启用自动环绕，默认 true */
  enabled: boolean
}

/**
 * 相机自动环绕控制器
 *
 * 负责管理园区相机的自动环绕浏览功能：
 * - 场景加载后自动启动环绕
 * - 用户交互时立即停止
 * - 用户停止操作后自动恢复
 */
export class CameraOrbitController {
  private app: any
  private config: CameraOrbitConfig
  private currentAngle: number
  private isAutoRotating: boolean
  private lastInteractionTime: number
  private resumeTimer: number | null
  private animationFrameId: number | null

  /**
   * 创建相机环绕控制器
   * @param app ThingJS App 实例
   * @param config 可选的配置参数
   */
  constructor(app: any, config?: Partial<CameraOrbitConfig>) {
    this.app = app
    this.config = {
      center: [0, 0, 0],
      radius: 100,
      height: 50,
      speed: 2,
      resumeDelay: 5,
      enabled: true,
      ...config
    }
    this.currentAngle = 0
    this.isAutoRotating = false
    this.lastInteractionTime = 0
    this.resumeTimer = null
    this.animationFrameId = null
  }

  /**
   * 启动自动旋转
   */
  start(): void {
    if (this.isAutoRotating || !this.config.enabled) {
      return
    }

    this.isAutoRotating = true
    this.updateCamera()
  }

  /**
   * 停止自动旋转
   */
  stop(): void {
    this.isAutoRotating = false
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
    }
  }

  /**
   * 恢复自动旋转
   */
  resume(): void {
    if (this.resumeTimer) {
      clearTimeout(this.resumeTimer)
      this.resumeTimer = null
    }
    this.start()
  }

  /**
   * 更新配置参数
   * @param config 新的配置参数
   */
  setConfig(config: Partial<CameraOrbitConfig>): void {
    this.config = { ...this.config, ...config }
  }

  /**
   * 销毁控制器，清理所有资源
   */
  destroy(): void {
    this.stop()
    if (this.resumeTimer) {
      clearTimeout(this.resumeTimer)
      this.resumeTimer = null
    }
  }

  /**
   * 用户交互处理
   * 当检测到用户操作时调用此方法
   */
  onUserInteraction(): void {
    // 立即停止自动旋转
    this.stop()

    // 记录最后交互时间
    this.lastInteractionTime = Date.now()

    // 调度恢复
    this.scheduleResume()
  }

  /**
   * 调度自动恢复
   * 在用户停止操作指定时间后自动恢复旋转
   */
  private scheduleResume(): void {
    if (this.resumeTimer) {
      clearTimeout(this.resumeTimer)
    }

    this.resumeTimer = window.setTimeout(() => {
      const elapsed = Date.now() - this.lastInteractionTime
      if (elapsed >= this.config.resumeDelay * 1000) {
        this.resume()
      }
    }, this.config.resumeDelay * 1000)
  }

  /**
   * 每帧更新相机位置
   * 使用 requestAnimationFrame 保证 60fps 流畅度
   */
  private updateCamera(): void {
    if (!this.isAutoRotating) {
      return
    }

    const { center, radius, height, speed } = this.config

    // 更新旋转角度（顺时针）
    this.currentAngle += (speed * Math.PI) / 180

    // 计算新位置（水平面上的圆周运动）
    const x = center[0] + radius * Math.cos(this.currentAngle)
    const z = center[2] + radius * Math.sin(this.currentAngle)
    const y = center[1] + height

    // 更新相机位置和朝向
    const camera = this.app.camera
    camera.position = [x, y, z]
    camera.target = center

    // 继续下一帧
    this.animationFrameId = requestAnimationFrame(() => this.updateCamera())
  }
}
