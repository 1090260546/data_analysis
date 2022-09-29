import React from 'react'
import { RenderElementProps } from 'slate-react'
import Marquee from './Marquee'

const MarqueeElement: React.FC<RenderElementProps> = (props, ref) => {
  const { attributes, children } = props

  return (
    <Marquee ref={ref} {...attributes}>
      {children}
    </Marquee>
  )
}

export default React.forwardRef(MarqueeElement)
