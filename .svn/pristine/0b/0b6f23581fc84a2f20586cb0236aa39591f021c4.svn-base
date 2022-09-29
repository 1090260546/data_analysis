import React, { FC, forwardRef, ChangeEventHandler } from 'react'
import { Input } from 'antd'
import { InputSizes } from 'antd/lib/input/Input'
const Search = Input.Search

interface IInputTextProps {
  value?: string
  size?: typeof InputSizes[number]
  onChange?: ChangeEventHandler<HTMLInputElement>
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
}

const InputText: FC<IInputTextProps> = (
  { value, size, onChange, onSearch },
  ref
) => {
  return (
    <Search
      placeholder="请输入"
      value={value}
      {...(size && { size })}
      onChange={onChange}
      {...(onSearch && { onSearch })}
      ref={ref}
    />
  )
}

export default forwardRef(InputText)
