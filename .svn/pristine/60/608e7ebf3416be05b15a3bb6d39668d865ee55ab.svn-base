import React, { useState } from 'react'
import classnames from 'classnames'
import { ResizableBox, ResizableProps } from 'libs/react-resizable'
import ResizeHandle from './ResizeHandle'
import './SplitPane.less'

export interface ISplitPaneProps {
  className?: string
  type: 'horizontal' | 'vertical'
  invert?: boolean
  spliter?: boolean
  initialSize: number
  maxSize?: number
  minSize?: number
  onResize?: (newSize: number) => void
  onResizeStart?: () => void
  onResizeStop?: (newSize: number) => void
}

const SplitPane: React.FC<ISplitPaneProps> = (props) => {
  const {
    className,
    type,
    invert,
    spliter,
    initialSize,
    maxSize,
    minSize,
    children,
    onResize,
    onResizeStart,
    onResizeStop
  } = props

  const [child1, child2] = React.Children.toArray(
    children
  ) as React.ReactElement[]
  const [currentSize, setCurrentSize] = useState(initialSize)

  const cls = classnames({
    [className]: !!className,
    ['split-pane']: true,
    [`split-pane-${type}`]: true
  })

  const resizableProps: Partial<ResizableProps> = {
    handle: ResizeHandle,
    onResize: (e, { size }) => {
      e.stopPropagation()
      let newSize: number
      if (type === 'horizontal') {
        newSize = size.width
      } else if (type === 'vertical') {
        newSize = size.height
      }
      setCurrentSize(newSize)
      if (onResize) {
        onResize(newSize)
      }
    },
    onResizeStart: () => {
      if (onResizeStart) {
        onResizeStart()
      }
    },
    onResizeStop: (e, { size }) => {
      let newSize: number
      if (type === 'horizontal') {
        newSize = size.width
      } else if (type === 'vertical') {
        newSize = size.height
      }
      if (onResizeStop) {
        onResizeStop(newSize)
      }
    }
  }

  if (type === 'horizontal') {
    resizableProps.minConstraints = [minSize, 0]
    resizableProps.maxConstraints = [maxSize, 0]
    resizableProps.resizeHandles = invert ? ['w'] : ['e']
    resizableProps.width = currentSize
    resizableProps.axis = 'x'
  } else if (type === 'vertical') {
    resizableProps.minConstraints = [0, minSize]
    resizableProps.maxConstraints = [0, maxSize]
    resizableProps.resizeHandles = invert ? ['s'] : ['n']
    resizableProps.height = currentSize
    resizableProps.axis = 'y'
  }

  const paneCls = [
    classnames({
      ['split-pane-1']: !invert,
      ['split-pane-2']: invert,
      [`split-pane-${type}-spliter`]: spliter
    }),
    classnames({
      'split-pane-1': invert,
      'split-pane-2': !invert
    })
  ]
  const [pane1Cls, pane2Cls] = paneCls

  const partitions = [child1, child2]
  if (invert) {
    partitions[1] = (
      <ResizableBox {...resizableProps}>{partitions[1]}</ResizableBox>
    )
  } else {
    partitions[0] = (
      <ResizableBox {...resizableProps}>{partitions[0]}</ResizableBox>
    )
  }
  const [content1, content2] = partitions

  return (
    <div className={cls}>
      <div className={pane1Cls}>{content1}</div>
      <div className={pane2Cls}>{content2}</div>
    </div>
  )
}

export default SplitPane
