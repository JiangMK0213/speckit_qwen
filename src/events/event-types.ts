// UI 界面触发的事件（发送到场景或 UI 界面）
export const enum UI_EVENTS {
  MENU_SELECTED = '选中菜单',
  MODE_CHANGE = '切换模式',
  BUSINESS_CHANGE = '激活业务',
  SUB_BUSINESS_CHANGE = '激活子业务',
  LEGEND_FILTER = '图例筛选',
  SHOW_INFO_PANEL = '显示信息面板',
  HIDE_INFO_PANEL = '隐藏信息面板',
  TOGGLE_THEME = '切换主题',
}

// 场景触发的事件（发送到 UI 界面）
export const enum SCENE_EVENTS {
  CLICK = 'click',
  DBLCLICK = 'dblclick',
  LEVEL_CHANGED = '切换层级',
  SCENE_LOADED = '场景加载完成',
  DATA_LOADED = '数据加载完成'
}
