import React, { useContext } from 'react'

import { Select } from 'antd'
const { Option } = Select
import { OptionProps } from 'antd/lib/select'

import { EditorContext } from '../context'
import { HeadingElementTypes } from '../Element/constants'

const Heading: React.FC = () => {
  const { isElementActive, toggleElement } = useContext(EditorContext)

  const activeValue =
    HeadingSelectOptions.find(({ value }) => isElementActive(value))?.value ||
    HeadingElementTypes.HeadingNone

  return (
    <Select
      value={activeValue}
      dropdownMatchSelectWidth={false}
      className="richtext-toolbar-select"
      style={{ width: 90 }}
      size="small"
      onChange={toggleElement}
    >
      {HeadingSelectOptions.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  )
}

export default Heading

interface HeadingOptionProps extends OptionProps {
  value: HeadingElementTypes
}

const HeadingSelectOptions: HeadingOptionProps[] = [
  {
    value: HeadingElementTypes.HeadingOne,
    label: <h1>一级标题</h1>
  },
  {
    value: HeadingElementTypes.HeadingTwo,
    label: <h2>二级标题</h2>
  },
  {
    value: HeadingElementTypes.HeadingThree,
    label: <h3>三级标题</h3>
  },
  {
    value: HeadingElementTypes.HeadingFour,
    label: <h4>四级标题</h4>
  },
  {
    value: HeadingElementTypes.HeadingFive,
    label: <h5>五级标题</h5>
  },
  {
    value: HeadingElementTypes.HeadingSix,
    label: <h6>六级标题</h6>
  },
  {
    value: HeadingElementTypes.HeadingNone,
    label: <span>无标题</span>
  }
]
