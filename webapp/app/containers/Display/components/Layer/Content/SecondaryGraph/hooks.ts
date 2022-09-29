import React, { useMemo } from 'react'
import { ILayerParams } from '../../../types'

export const useLabelStyle = (params: ILayerParams) => {
  const labelStyle = useMemo(() => {
    const {
      fontWeight,
      fontFamily,
      fontColor,
      fontSize,
      textAlign,
      textStyle,
      lineHeight,
      textIndent,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight
    } = params

    const style: React.CSSProperties = {
      wordBreak: 'break-all',
      overflow: 'hidden',
      fontWeight,
      fontFamily,
      color: `rgba(${fontColor.join()})`,
      fontSize: `${fontSize}px`,
      textAlign: textAlign as React.CSSProperties['textAlign'],
      lineHeight: `${lineHeight}px`,
      textIndent: `${textIndent}px`,
      paddingTop: `${paddingTop}px`,
      paddingRight: `${paddingRight}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`
    }
    if (textStyle) {
      style.fontStyle = textStyle.indexOf('italic') > -1 ? 'italic' : 'normal'
      style.textDecoration =
        textStyle.indexOf('underline') > -1 ? 'underline' : 'none'
    }
    return style
  }, [params])

  return labelStyle
}
