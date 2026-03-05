import mitt from 'mitt'
import { UI_EVENTS } from '@/events/event-types'

type Events = {
  [key in UI_EVENTS]: any
}

const bus = mitt<Events>()

/**
 * 触发自定义事件
 * @param eventName 事件名称
 * @param detail 事件数据
 */
export function triggerEvent<T>(eventName: UI_EVENTS, payload?: T): void {
  bus.emit(eventName, payload)
}

/**
 * 监听自定义事件
 * @param eventName 事件名称
 * @param callback 回调函数
 * @returns 取消监听的函数
 */
export function listenEvent(eventName: UI_EVENTS, callback: (payload: any) => void): () => void {
  bus.on(eventName, callback)
  // 返回取消监听的函数，用于移除监听
  return () => bus.off(eventName, callback)
}
