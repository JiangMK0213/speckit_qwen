import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { DEFAULT_MENU_ID } from '@/config'

// 组件映射
const MENU_COMPONENTS: Record<string, () => Promise<any>> = {
  // 默认组件
  Default: () => import('@/views/Home/modules/Main.vue')
  // 特定菜单的组件，例如：
  // Resource: () => import('@/views/Home/modules/Resource.vue'),
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: DEFAULT_MENU_ID,
    component: () => import('@/views/Home/index.vue'),
    children: [
      {
        path: ':menuId',
        name: 'Main',
        component: MENU_COMPONENTS.Default
      }
      // 特定菜单的组件，例如：
      // {
      //   path: 'resource',
      //   name: 'Resource',
      //   component: MENU_COMPONENTS.Resource
      // }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/Error/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
