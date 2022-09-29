import React from 'react'
import { RenderLeafProps } from 'slate-react'

import { TextStyles } from '../Element/constants'
import { ElementPropertyList } from './constants'

interface ILeafProps extends RenderLeafProps {
  onFormatText?: (text: string) => string
}

const Leaf: React.FC<ILeafProps> = (props) => {
  const { attributes, children, leaf, onFormatText } = props
  let wrappedChildren = children
  if (leaf.text && onFormatText) {
    leaf.text = onFormatText(leaf.text)
  }
  const cssStyle: React.CSSProperties = ElementPropertyList.reduce(
    (obj, propertyName) => {
      if (leaf[propertyName]) {
        obj[propertyName] = leaf[propertyName]
      }
      return obj
    },
    {}
  )

  if (leaf[TextStyles.Bold]) {
    wrappedChildren = <strong>{wrappedChildren}</strong>
  }
  if (leaf[TextStyles.Italic]) {
    wrappedChildren = <em>{wrappedChildren}</em>
  }
  if (leaf[TextStyles.Underline]) {
    wrappedChildren = <u>{wrappedChildren}</u>
  }
  if (leaf[TextStyles.StrikeThrough]) {
    wrappedChildren = <s>{wrappedChildren}</s>
  }
  if (leaf[TextStyles.Code]) {
    wrappedChildren = <code>{wrappedChildren}</code>
  }

  return (
    <span {...attributes} style={cssStyle}>
      {wrappedChildren}
    </span>
  )
}

export default Leaf
