import React from 'react'
import classnames from 'classnames'
import { ResizeHandle } from 'libs/react-resizable'

export default (handle: ResizeHandle) => {
  const cls = classnames({
    'split-pane-resize-handle': true,

    'split-pane-resize-handle-horizontal': handle === 'e' || handle === 'w',
    'split-pane-resize-handle-horizontal-1': handle === 'e',
    'split-pane-resize-handle-horizontal-2': handle === 'w',

    'split-pane-resize-handle-vertical': handle === 's' || handle === 'n',
    'split-pane-resize-handle-vertical-1': handle === 's',
    'split-pane-resize-handle-vertical-2': handle === 'n'
  })

  return <div className={cls} />
}
