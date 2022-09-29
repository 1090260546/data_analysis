import React, { useCallback, useContext } from 'react'
import classnames from 'classnames'

import { Icon } from 'antd'
import { BlockProperties, BlockAlignments } from '../Element/constants'
import { EditorContext } from '../context'

const Alignment: React.FC = () => {
  const { isBlockPropertyActive, toggleBlockProperty } = useContext(
    EditorContext
  )
  const isActive = (value: BlockAlignments) =>
    !!isBlockPropertyActive(BlockProperties.TextAlign, value)
  const toggle = (value) => {
    toggleBlockProperty(BlockProperties.TextAlign, value)
  }
  return (
    <>
      <AlignmentItem
        value={BlockAlignments.AlignLeft}
        type="align-left"
        isActive={isActive}
        onToggle={toggle}
      />
      <AlignmentItem
        value={BlockAlignments.AlignCenter}
        type="align-center"
        isActive={isActive}
        onToggle={toggle}
      />
      <AlignmentItem
        value={BlockAlignments.AlignRight}
        type="align-right"
        isActive={isActive}
        onToggle={toggle}
      />
    </>
  )
}

export default Alignment

interface IAlignmentItemProps {
  value: BlockAlignments
  type: string
  isActive: (value: BlockAlignments) => boolean
  onToggle: (value: BlockAlignments) => void
}
const AlignmentItem: React.FC<IAlignmentItemProps> = (props) => {
  const { value, type, isActive, onToggle } = props
  const toggle = useCallback(() => {
    onToggle(value)
  }, [value])
  const cls = classnames({
    'richtext-toolbar-icon': true,
    'richtext-toolbar-icon-active': isActive(value)
  })
  return <Icon className={cls} type={type} onClick={toggle} />
}
