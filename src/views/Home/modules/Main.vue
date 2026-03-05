<template>
  <div class="main-content">
    <!-- 3D场景 -->
    <Scene3D />
    <!-- 界面布局 -->
    <Layout>
      <Content>
        <!-- 工具栏 -->
        <ToolBar class="tool-bar" :items="toolItems" @mode-change="handleModeChange" />
        <!-- 业务菜单 -->
        <BusinessMenu
          class="business-menu"
          direction="horizontal"
          :items="businessItems"
          :mutex="isBusinessMutex"
          @business-change="handleBusinessChange"
          @sub-business-change="handleSubBusinessChange"
        />
        <!-- 图例 -->
        <BusinessLegend class="legends" :legends="currentLegends" @select-legend="handleLegendSelected" />
        <!-- 信息面板 -->
        <InfoPanel v-model="showInfoPanel" :title="infoTitle" :closeable="true" class="info-panel">
          <div>{{ infoContent }}</div>
        </InfoPanel>
      </Content>
      <Sider>
        <!-- 图表 -->
        <div style="width: 100%; height: 300px;">
          <BasicBar :data="[]" />
        </div>
      </Sider>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Scene3D from '../components/Scene3D.vue'
import ToolBar from '../components/ToolBar.vue'
import BusinessMenu from '../components/BusinessMenu.vue'
import BusinessLegend from '../components/BusinessLegend.vue'
import { InfoPanel } from '@/components'
import { BasicBar } from '@/chart-components'
import { useMenuStore } from '@/stores/menu'
import type { ToolItem, BusinessMenuItem, LegendData } from '@/types/component'
import { getModuleConfig } from '@/config'
import { getApp } from '@/scene3d/index'
import cloneDeep from 'lodash-es/cloneDeep'
import { useI18n } from 'vue-i18n'
import { UI_EVENTS, SCENE_EVENTS } from '@/events/event-types'

const { t } = useI18n()

const menuStore = useMenuStore()
const activeMenu = computed(() => menuStore.activeMenu)

// 获取工具栏配置
const toolItems = computed<ToolItem[]>(() => {
  const viewModes = getModuleConfig(activeMenu.value)?.viewModes || []
  // 转换配置为工具栏项
  return viewModes
    .filter(mode => mode.enable)
    .map(mode => ({
      type: mode.type,
      icon: mode.icon,
      active: mode.defaultActive || false
    }))
})

// 获取业务菜单配置
const businessItems = computed<BusinessMenuItem[]>(() => {
  return getModuleConfig(activeMenu.value).business.map(item => ({
    name: t(item.name),
    type: item.id,
    businessMutex: item.businessMutex,
    children: item.children?.map(child => ({
      name: t(child.name),
      type: child.id,
      parentType: item.id
    }))
  }))
})

// 当前业务菜单是否互斥
const isBusinessMutex = computed(() => {
  return getModuleConfig(activeMenu.value).businessMutex ?? true
})

// 获取当前业务的图例数据
const currentLegends = computed<LegendData[]>(() => {
  if (!currentBusiness.value) return []

  const businesses = getModuleConfig(activeMenu.value).business || []
  return cloneDeep((businesses.find(business => business.id === currentBusiness.value)?.legends as LegendData[]) || [])
})

// 存储激活的父菜单
const activeBusinesses = ref<string[]>([])

// 存储激活的子菜单，按父菜单分组
const activeSubBusinesses = ref<Record<string, string[]>>({})

// 计算当前应该显示的业务ID（用于图例显示）
const currentBusiness = computed(() => {
  if (activeBusinesses.value.length === 0) return undefined
  // 如果有子菜单激活，返回第一个子菜单ID
  for (const parentId of activeBusinesses.value) {
    if (activeSubBusinesses.value[parentId]?.length > 0) {
      return activeSubBusinesses.value[parentId][0]
    }
  }
  // 否则返回第一个父菜单ID
  return activeBusinesses.value[activeBusinesses.value.length - 1]
})

// 处理父菜单激活
const handleBusinessChange = async (businesses: string[]) => {
  activeBusinesses.value = businesses
  const app = await getApp()
  app.trigger(UI_EVENTS.BUSINESS_CHANGE, {
    items: businesses
  })
}

// 处理子菜单激活
const handleSubBusinessChange = async (data: { parent: string; children: string[] }) => {
  activeSubBusinesses.value[data.parent] = data.children
  const app = await getApp()
  app.trigger(UI_EVENTS.SUB_BUSINESS_CHANGE, {
    parent: data.parent,
    items: data.children
  })
}

// 处理工具栏模式切换
const handleModeChange = async (data: { mode: string; value: boolean }) => {
  const app = await getApp()
  app.trigger(UI_EVENTS.MODE_CHANGE, data)
}

// 处理图例筛选
const handleLegendSelected = async (data: any) => {
  const app = await getApp()
  console.log('图例筛选', data)
  app.trigger(UI_EVENTS.LEGEND_FILTER, data)
}

// 信息面板状态
const showInfoPanel = defineModel<boolean>({ default: false })
const infoTitle = ref('信息面板')
const infoContent = ref('信息面板内容')

// 显示信息面板
const handleShowInfoPanel = (title: string, content: string) => {
  showInfoPanel.value = true
  infoTitle.value = title
  infoContent.value = content
}

// 场景对象点击事件
const handleObjectClicked = (e: any) => {
  if (!e.object) return
  handleShowInfoPanel(e.object.name, '点击对象：' + e.object.name)
}

// 注册 app 事件
const registerSceneEvent = async () => {
  // 等待获取 ThingJS App 实例
  const app = await getApp()
  // 监听场景点击事件
  app.on(SCENE_EVENTS.CLICK, handleObjectClicked)
}

// 注销 app 事件
const unregisterSceneEvent = async () => {
  const app = await getApp()
  app.off(SCENE_EVENTS.CLICK)
}

onMounted(async () => {
  registerSceneEvent()
})

onBeforeUnmount(async () => {
  unregisterSceneEvent()
})
</script>

<style scoped>
.main-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.info-panel {
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 10;
}

.tool-bar {
  position: absolute;
  right: 12px;
  top: 4px;
  z-index: 10;
}

.business-menu {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 10;
}

.legends {
  position: absolute;
  right: 12px;
  bottom: 16px;
  z-index: 10;
}
</style>
