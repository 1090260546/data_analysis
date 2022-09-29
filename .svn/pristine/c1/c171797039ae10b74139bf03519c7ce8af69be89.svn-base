import React, { FC, forwardRef } from 'react'
import { IControl } from '../types'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker
import { DatePickerFormats } from '../constants'

interface IDateRangeProps {
  control: Omit<IControl, 'relatedItems' | 'relatedViews'>
  value?: any
  size?: 'large' | 'small' | 'default'
  onChange?: (value) => void
}

const DateRange: FC<IDateRangeProps> = (
  { control, value, size, onChange },
  ref
) => {
  const { dateFormat } = control
  const placeholder: [string, string] = ['从', '到']
  const { Datetime, DatetimeMinute } = DatePickerFormats
  const isDatetimePicker = [Datetime, DatetimeMinute].includes(dateFormat)

  return (
    <RangePicker
      placeholder={placeholder}
      value={value}
      showTime={isDatetimePicker}
      format={dateFormat}
      {...(size && { size })}
      onChange={onChange}
      onOk={onChange}
      ref={ref}
    />
  )
}

export default forwardRef(DateRange)
