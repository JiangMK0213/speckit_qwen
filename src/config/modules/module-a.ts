import icon2d from '@/assets/icons/2d.svg'
import iconPlane from '@/assets/icons/plane.svg'
import iconChart from '@/assets/icons/chart.svg'

// 模块A配置
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
      defaultActive: false
    },
    {
      type: 'chart', // 图表效果
      icon: iconChart,
      enable: true,
      defaultActive: false
    }
  ],
  // 业务互斥
  businessMutex: true,
  // 业务配置
  business: [
    {
      name: 'businessA',
      id: 'businessA',
      legends: [
        {
          name: '图例组-A',
          id: 'groupA',
          items: [
            { name: '类别1', color: '#08D159' },
            { name: '类别2', color: '#2E73FF' }
          ]
        },
        {
          name: '图例组-B',
          id: 'groupB',
          items: [
            { name: '类别1', color: '#08D159' },
            { name: '类别2', color: '#2E73FF' }
          ]
        }
      ]
    },
    {
      name: 'businessB',
      id: 'businessB',
      legends: [
        {
          name: '图例组-C',
          id: 'groupC',
          items: [
            { name: '类别1', color: '#FFDC24' },
            { name: '类别2', color: '#90CC28' },
            { name: '类别3', color: '#08D159' }
          ]
        },
        {
          name: '图例组-D',
          id: 'groupD',
          items: [
            { name: '类别1', color: '#1BE0E0' },
            { name: '类别2', color: '#2E73FF' },
            { name: '类别3', color: '#8054FF' }
          ]
        }
      ]
    },
    {
      name: 'businessC',
      id: 'businessC',
      legends: [
        { name: '类别1', color: '#FFDC24', active: true },
        { name: '类别2', color: '#2E73FF', active: true },
        { name: '类别3', color: '#AA54FF', active: true },
        { name: '类别4', color: '#F0142C', active: true }
      ]
    }
  ]
}
