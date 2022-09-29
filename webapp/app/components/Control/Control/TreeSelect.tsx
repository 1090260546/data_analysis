import React, { FC, forwardRef } from 'react'
import { TreeSelect as AntTreeSelect } from 'antd'
import { TreeNode } from 'antd/lib/tree-select'
import { IControl } from '../types'
import { CONTROL_MAX_TAG_COUNT } from '../constants'
import { filterTreeSelectOption } from 'app/utils/util'

declare const SelectSizes: ['default', 'large', 'small']

interface ITreeSelectProps {
  control: Omit<IControl, 'relatedItems' | 'relatedViews'>
  value?: string | string[]
  size?: typeof SelectSizes[number]
  onChange?: (value: string | string[]) => void
  options: TreeNode[]
}

const TreeSelect: FC<ITreeSelectProps> = (
  { control, value, size, onChange, options },
  ref
) => {
  const { multiple } = control

  return (
    <AntTreeSelect
      showSearch
      allowClear
      treeCheckable={multiple}
      treeDataSimpleMode
      placeholder="请选择"
      maxTagCount={CONTROL_MAX_TAG_COUNT}
      treeData={options}
      value={value}
      onChange={onChange}
      {...(size && { size })}
      filterTreeNode={filterTreeSelectOption}
      ref={ref}
    />
  )
}

export default forwardRef(TreeSelect)
