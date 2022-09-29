import { LayerAlignmentItemConfig, LayerAlignmentTypes } from './types'

export { LayerAlignmentTypes } from './types'

export const AlignmentGroups: LayerAlignmentItemConfig[][] = [
  [
    {
      title: '上对齐',
      type: LayerAlignmentTypes.Top,
      icon: 'icon-align-top'
    }
  ],
  [
    {
      title: '左对齐',
      type: LayerAlignmentTypes.Left,
      icon: 'icon-align-left'
    },
    {
      title: '水平居中',
      type: LayerAlignmentTypes.HorizontalCenter,
      icon: 'icon-horizontal-center'
    },
    {
      title: '垂直居中',
      type: LayerAlignmentTypes.VerticalCenter,
      icon: 'icon-vertical-center'
    },
    {
      title: '右对齐',
      type: LayerAlignmentTypes.Right,
      icon: 'icon-align-right'
    }
  ],
  [
    {
      title: '下对齐',
      type: LayerAlignmentTypes.Bottom,
      icon: 'icon-align-bottom'
    }
  ]
]
