import icon2d from '@/assets/icons/2d.svg'
import iconPlane from '@/assets/icons/plane.svg'

// 模块B配置
export default {
  // 视图模式
  viewModes: [
    {
      type: '2d', // 2D视角
      icon: icon2d,
      enable: true,
      defaultActive: false
    },
    {
      type: 'plane', // 平面效果
      icon: iconPlane,
      enable: true,
      defaultActive: true
    }
  ],
  // 业务互斥
  businessMutex: false,
  // 业务配置
  business: [
    {
      name: 'businessItem',
      id: 'businessItem',
      businessMutex: false, // 子菜单业务互斥
      children: [
        {
          name: 'subItemA',
          id: 'subItemA',
          legends: []
        },
        {
          name: 'subItemB',
          id: 'subItemB',
          legends: []
        }
      ]
    }
  ]
}
