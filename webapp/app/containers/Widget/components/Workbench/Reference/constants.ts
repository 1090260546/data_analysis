import ChartTypes from 'app/containers/Widget/config/chart/ChartTypes'

export enum ReferenceType {
  Line = 'line',
  Band = 'band'
}

export enum ReferenceValueType {
  Constant = 'constant',
  Average = 'average',
  Max = 'max',
  Min = 'min'
}

export enum ReferenceLabelPosition {
  Start = 'start',
  Middle = 'middle',
  End = 'end'
}

export const ReferenceValueTypeLabels = {
  [ReferenceValueType.Constant]: '常量',
  [ReferenceValueType.Average]: '平均值',
  [ReferenceValueType.Max]: '最大值',
  [ReferenceValueType.Min]: '最小值'
}

export const ReferenceLabelPositionLabels = {
  [ReferenceLabelPosition.Start]: '起始',
  [ReferenceLabelPosition.Middle]: '中点',
  [ReferenceLabelPosition.End]: '结束'
}

export const REFERENCE_SUPPORTED_CHART_TYPES = [
  ChartTypes.Line,
  ChartTypes.Bar,
  ChartTypes.Scatter,
  ChartTypes.DoubleYAxis
]
