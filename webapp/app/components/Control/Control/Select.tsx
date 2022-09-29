import React, { FC, forwardRef } from 'react'
import { Select as AntSelect } from 'antd'
import { IControl, IControlOption } from '../types'
import { SelectValue } from 'antd/lib/select'
import {
  CONTROL_MAX_TAG_COUNT,
  CONTROL_MAX_TAG_TEXT_LENGTH
} from '../constants'
import { filterSelectOption } from 'app/utils/util'
const Option = AntSelect.Option

declare const SelectSizes: ['default', 'large', 'small']

interface ISelectProps {
  control: Omit<IControl, 'relatedItems' | 'relatedViews'>
  value?: SelectValue
  size?: typeof SelectSizes[number]
  onChange?: (
    value: SelectValue,
    option: React.ReactElement<any> | Array<React.ReactElement<any>>
  ) => void
  options: IControlOption[]
}

const Select: FC<ISelectProps> = (
  { control, value, size, onChange, options },
  ref
) => {
  const { multiple } = control
  return (
    <AntSelect
      showSearch
      allowClear
      placeholder="请选择"
      value={value}
      onChange={onChange}
      dropdownMatchSelectWidth={false}
      maxTagCount={CONTROL_MAX_TAG_COUNT}
      maxTagTextLength={CONTROL_MAX_TAG_TEXT_LENGTH}
      filterOption={filterSelectOption}
      {...(size && { size })}
      {...(multiple && { mode: 'multiple' })}
      ref={ref}
    >
      {options.map((o) => (
        <Option key={o.value} value={o.value}>
          {o.text}
        </Option>
      ))}
    </AntSelect>
  )
}

export default forwardRef(Select)
