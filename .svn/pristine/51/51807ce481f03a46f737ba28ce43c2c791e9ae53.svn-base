import React, { DOMAttributes, useMemo } from 'react'
import classnames from 'classnames'
import { Transforms } from 'slate'
import {
  RenderElementProps,
  ReactEditor,
  useSelected,
  useReadOnly,
  useSlate
} from 'slate-react'
import { Resizable, ResizeCallbackData } from 'libs/react-resizable'

import './Element.less'

const ImageElement: React.FC<RenderElementProps> = (props) => {
  const { attributes, children, element } = props
  const editor = useSlate()
  const readOnly = useReadOnly()
  const selected = useSelected()

  const resize = (_, data: ResizeCallbackData) => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { width: data.size.width }, { at: path })
  }

  if (readOnly) {
    return (
      <div {...attributes}>
        {children}
        <img src={element.url} width={element.width} />
      </div>
    )
  }

  const cls = classnames({
    'richtext-image-element': true,
    'richtext-image-element-selected': selected
  })
  const width = +element.width || 400
  return (
    <div {...attributes} className={cls}>
      {children}
      <Resizable
        width={width}
        axis="x"
        resizeHandles={['e']}
        onResize={resize}
      >
        <div style={{ width }}>
          <img src={element.url} width={element.width} />
        </div>
      </Resizable>
    </div>
  )
}

export default ImageElement
