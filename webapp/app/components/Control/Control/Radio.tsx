import React, { FC, forwardRef } from 'react'
import { Radio as AntRadio } from 'antd'
import { IControl, IControlOption } from '../types'
import { RadioChangeEvent } from 'antd/lib/radio'
const RadioGroup = AntRadio.Group
const RadioButton = AntRadio.Button

declare const RaduoSizes: ['default', 'large', 'small']

interface IRadioProps {
  control: Omit<IControl, 'relatedItems' | 'relatedViews'>
  value?: any
  size?: typeof RaduoSizes[number]
  onChange?: (e: RadioChangeEvent) => void
  options: IControlOption[]
}

const Radio: FC<IRadioProps> = (
  { control, value, size, onChange, options },
  ref
) => {
  const RadioOption = control.radioType === 'button' ? RadioButton : AntRadio
  return (
    <RadioGroup
      value={value}
      buttonStyle="solid"
      onChange={onChange}
      {...(size && { size })}
      ref={ref}
    >
      {options.map((o) => (
        <RadioOption key={o.value} value={o.value}>
          {o.text}
        </RadioOption>
      ))}
    </RadioGroup>
  )
}

export default forwardRef(Radio)
