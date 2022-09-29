import React, { FC, useCallback, forwardRef } from 'react'
import moment from 'moment'
import { IControl } from '../types'
import { DatePicker } from 'antd'
const { WeekPicker, MonthPicker } = DatePicker
const MultiDatePicker = React.lazy(() => import('components/MultiDatePicker'))
import { DatePickerFormats } from '../constants'

interface IDateProps {
  control: Omit<IControl, 'relatedItems' | 'relatedViews'>
  value?: any
  size?: 'large' | 'small' | 'default'
  onChange?: (value) => void
}

const Date: FC<IDateProps> = ({ control, value, size, onChange }, ref) => {
  const { Week, Month, Year, Datetime, DatetimeMinute } = DatePickerFormats
  const { multiple, dateFormat } = control

  const controlled = !!onChange
  if (multiple) {
    value = value || ''
    return (
      <MultiDatePicker
        ref={ref}
        placeholder="请选择"
        format={dateFormat}
        {...(size && { size })}
        {...(controlled && { value, onChange })}
      />
    )
  } else {
    value = moment.isMoment(value) ? value : null
    switch (dateFormat) {
      case Week:
        return (
          <WeekPicker
            ref={ref}
            placeholder="请选择"
            {...(size && { size })}
            {...(controlled && { value, onChange })}
          />
        )
      case Month:
      case Year:
        return (
          <MonthPicker
            ref={ref}
            placeholder="请选择"
            format={dateFormat}
            {...(size && { size })}
            {...(controlled && { value, onChange })}
          />
        )
      default:
        const isDatetimePicker = [Datetime, DatetimeMinute].includes(dateFormat)
        return (
          <DatePicker
            ref={ref}
            placeholder="请选择"
            showTime={isDatetimePicker}
            format={dateFormat}
            {...(size && { size })}
            {...(controlled && { value })}
            {...(controlled && { onChange })}
            {...(controlled && { onOk: onChange })}
          />
        )
    }
  }
}

export default forwardRef(Date)
