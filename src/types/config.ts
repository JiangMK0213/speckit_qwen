// 配置相关类型定义
export interface ViewModeConfig {
  type: string // 视图模式
  icon: string // 图标
  enable: boolean // 是否启用
  defaultActive: boolean // 是否默认激活
}

export interface BusinessConfig {
  name: string // 业务名称
  id: string // 业务类型id
  icon?: string // 图标
  businessMutex?: boolean // 子业务互斥
  children?: BusinessConfig[] // 子业务
  legends?: LegendGroupConfig[] | LegendItemConfig[] // 图例配置
}

export interface LegendGroupConfig {
  name: string // 图例组名称
  id: string // 图例组id
  items: LegendItemConfig[] // 图例项
}

export interface LegendItemConfig {
  name: string // 图例项名称
  color: string // 图例颜色
  active?: boolean // 是否激活
}

// 模块配置
export interface ModuleConfig {
  name: string // 模块名称
  viewModes: ViewModeConfig[] // 模式配置
  business: BusinessConfig[] // 业务配置
  businessMutex: boolean // 业务互斥
}
