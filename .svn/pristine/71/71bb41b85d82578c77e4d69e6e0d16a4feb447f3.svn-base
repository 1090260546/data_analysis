import React, { useContext } from 'react'

import { Select } from 'antd'
const { Option } = Select
import { OptionProps } from 'antd/lib/select'

import { TextProperties } from '../Element/constants'
import { EditorContext } from '../context'

const Font: React.FC = () => {
  const { isTextPropertyActive, toggleTextProperty } = useContext(EditorContext)

  const fontFamily =
    FontSelectOptions.find(({ value }) =>
      isTextPropertyActive(TextProperties.FontFamily, value)
    )?.value || ''
  const fontSize = +isTextPropertyActive(TextProperties.FontSize) || ''

  const fontFamilyChange = (value: string) =>
    toggleTextProperty(TextProperties.FontFamily, value)

  const fontSizeChange = (value: number) =>
    toggleTextProperty(TextProperties.FontSize, value)

  return (
    <>
      <Select
        value={fontFamily}
        dropdownMatchSelectWidth={false}
        className="richtext-toolbar-select"
        style={{ width: 100 }}
        size="small"
        onChange={fontFamilyChange}
      >
        {FontSelectOptions.map(({ value, label }) => (
          <Option key={value} value={value}>
            <span style={{ fontFamily: value }}>{label}</span>
          </Option>
        ))}
      </Select>
      <Select
        value={fontSize}
        dropdownMatchSelectWidth={false}
        className="richtext-toolbar-select"
        size="small"
        onChange={fontSizeChange}
      >
        <Option value="">默认</Option>
        {FontSizeSelectOptions.map(({ value, label }) => (
          <Option key={value} value={value}>
            <span
              style={{
                fontSize: value,
                lineHeight: `${value}px`
              }}
            >
              {label}
            </span>
          </Option>
        ))}
      </Select>
    </>
  )
}

export default Font

interface FontOptionProps extends OptionProps {
  value: string
  label: string
}

const FontSelectOptions: FontOptionProps[] = [
  { value: '', label: '默认字体' },
  { value: "Microsoft Yahei", label: "微软雅黑"}, 
  { value: "SimSun", label: "宋体"}, 
  { value: "Heiti", label: "黑体"}, 
  { value: "STXihei", label: "华文细黑"}, 
  { value: "Verdana", label: "Verdana"}, 
  { value: "Arial", label: "Arial"}, 
  { value: "Times New Roman", label: "Times New Roman"}, 
  { value: "Times", label: "Times"}, 
  { value: "MS Sans Serif", label: "MS Sans Serif"},
  { value: 'Sans Serif', label: 'Sans Serif' },
  { value: 'Serif', label: 'Serif' },
  { value: 'Monospace', label: 'Monospace' },
]

const FontSizeSelectOptions: OptionProps[] = [
  10,
  12,
  13,
  14,
  15,
  16,
  18,
  20,
  24,
  28,
  32,
  36,
  40,
  48,
  56,
  64,
  72,
  96,
  128
].map((size) => ({
  value: size,
  label: `${size}px`
}))
