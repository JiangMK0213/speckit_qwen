/**
 * 3D 加载组件导出
 */

import type { App } from 'vue';
import ThreeDLoading from './ThreeDLoading.vue';
import LoadingScene3D from './LoadingScene3D.vue';
import FallbackLoading from './FallbackLoading.vue';

/**
 * 注册 3D 加载组件
 */
export function registerThreeDLoading(app: App) {
  app.component('ThreeDLoading', ThreeDLoading);
  app.component('LoadingScene3D', LoadingScene3D);
  app.component('FallbackLoading', FallbackLoading);
}

export { ThreeDLoading, LoadingScene3D, FallbackLoading };
export default ThreeDLoading;
