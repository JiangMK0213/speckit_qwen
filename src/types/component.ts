// 组件相关类型定义
export interface LayoutContext {
  addSider: () => void
}

export interface LegendItemData {
  name: string
  color: string
  active: boolean
}

export interface LegendGroupData {
  name: string
  id: string
  active: boolean
  items: LegendItemData[]
}

export type LegendData = LegendItemData | LegendGroupData

export interface MenuItem {
  name: string
  label: string
}

export interface ToolItem {
  type: string
  icon: string
  active: boolean
  enable?: boolean
}

export interface BusinessMenuItem {
  name: string
  type: string
  children?: BusinessMenuItem[]
  parentType?: string
  businessMutex?: boolean
}
