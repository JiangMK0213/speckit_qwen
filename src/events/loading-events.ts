/**
 * 加载页面事件类型定义
 */

/**
 * 加载事件枚举
 */
export const LOADING_EVENTS = {
  /** 加载开始 */
  LOADING_START: 'LOADING_START',
  
  /** 进度更新 */
  PROGRESS_UPDATE: 'PROGRESS_UPDATE',
  
  /** 加载完成 */
  LOADING_COMPLETE: 'LOADING_COMPLETE',
  
  /** 加载错误 */
  LOADING_ERROR: 'LOADING_ERROR',
  
  /** 加载超时 */
  LOADING_TIMEOUT: 'LOADING_TIMEOUT',
  
  /** 加载页面关闭 */
  LOADING_CLOSE: 'LOADING_CLOSE',
} as const;

/**
 * 加载事件映射
 */
export interface LoadingEventMap {
  [LOADING_EVENTS.LOADING_START]: { startTime: number };
  [LOADING_EVENTS.PROGRESS_UPDATE]: { progress: number | null };
  [LOADING_EVENTS.LOADING_COMPLETE]: { duration: number };
  [LOADING_EVENTS.LOADING_ERROR]: { error: string };
  [LOADING_EVENTS.LOADING_TIMEOUT]: { duration: number };
  [LOADING_EVENTS.LOADING_CLOSE]: void;
}
