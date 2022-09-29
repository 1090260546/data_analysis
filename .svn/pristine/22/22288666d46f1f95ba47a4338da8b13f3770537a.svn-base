import React from 'react'
import { Select } from 'antd'
import {
  ReferenceValueTypeLabels,
  ReferenceLabelPositionLabels
} from '../constants'
import {
  PIVOT_CHART_FONT_FAMILIES,
  PIVOT_CHART_FONT_SIZES,
  PIVOT_CHART_LINE_STYLES,
  CHART_LABEL_POSITIONS
} from 'app/globalConstants'
const Option = Select.Option

export const referenceValueTypeSelectOptions = Object.entries(
  ReferenceValueTypeLabels
).map(([value, label]) => (
  <Option key={value} value={value}>
    {label}
  </Option>
))

export const lineLabelPositionOptions = Object.entries(
  ReferenceLabelPositionLabels
).map(([value, label]) => (
  <Option key={value} value={value}>
    {label}
  </Option>
))
export const bandLabelPositionOptions = CHART_LABEL_POSITIONS.map(
  ({ name, value }) => (
    <Option key={value} value={value}>
      {name}
    </Option>
  )
)
export const fontFamilyOptions = PIVOT_CHART_FONT_FAMILIES.map(
  ({ name, value }) => (
    <Option key={value} value={value}>
      {name}
    </Option>
  )
)
export const fontSizeOptions = PIVOT_CHART_FONT_SIZES.map((size) => (
  <Option key={`${size}`} value={`${size}`}>
    {size}
  </Option>
))
export const lineStyleOptions = PIVOT_CHART_LINE_STYLES.map(
  ({ name, value }) => (
    <Option key={value} value={value}>
      {name}
    </Option>
  )
)
