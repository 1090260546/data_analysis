import { ElementTypes } from 'components/RichText/Element'
import { RichTextNode } from 'components/RichText'
import { EDITOR_DEFAULT_FONT_WEIGHT_BOLD } from './contants'
import { ILayerParams } from '../../types'
import {
  IEditorSelection,
  IElementFontStyles,
  IElementTextStyles,
  IEditorBoxStyle
} from './types'

export const buildLabelBoxStyles = (params: ILayerParams) => {
  const {
    fontWeight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    textIndent,
    lineHeight
  } = params

  const boxStyles: Partial<IEditorBoxStyle> = {
    paddingTop: `${paddingTop}px`,
    paddingRight: `${paddingRight}px`,
    paddingBottom: `${paddingBottom}px`,
    paddingLeft: `${paddingLeft}px`
  }
  if (fontWeight) {
    boxStyles.fontWeight = fontWeight
  }
  if (textIndent) {
    boxStyles.textIndent = `${textIndent}px`
  }
  if (lineHeight) {
    boxStyles.lineHeight = `${lineHeight}px`
  }
  return {
    boxStyles
  }
}

export const migrationLabelRichTextStyles = (params: ILayerParams) => {
  const {
    fontWeight,
    fontFamily,
    fontColor,
    fontSize,
    textAlign,
    textStyle
  } = params

  const fontStyles: Partial<IElementFontStyles> = {
    fontSize: Number(`${fontSize}`),
    color: `rgba(${fontColor.join()})`
  }

  const textStyles: Partial<IElementTextStyles> = {
    textAlign: `${textAlign}`
  }

  fontStyles.bold = fontWeight === EDITOR_DEFAULT_FONT_WEIGHT_BOLD

  if (textStyle.includes('italic')) {
    fontStyles.italic = textStyle.indexOf('italic') > -1
  }

  if (textStyle.includes('underline')) {
    fontStyles.underline = textStyle.indexOf('underline') > -1
  }

  if (fontFamily) {
    fontStyles.fontFamily = `${fontFamily}`
  }
  return {
    fontStyles,
    textStyles
  }
}

export const migrationLabelRichTextContent = (
  text?: string,
  fontStyles?: Partial<IElementFontStyles>,
  textStyles?: Partial<IElementTextStyles>
) => {
  return {
    content: [
      {
        type: ElementTypes.Paragraph,
        children: [{ text: text || '', ...fontStyles }],
        ...textStyles
      }
    ]
  }
}

export const onLabelEditorStylesChange = (
  propPath: string[],
  value: string | RichTextNode[]
) => {
  const unitRange = {}
  propPath.reduce((subObj, propName, idx) => {
    if (idx === propPath.length - 1) {
      return (subObj[propName] = value)
    }
    return (subObj[propName] = {})
  }, unitRange)
  return unitRange
}

export const onLabelEditorSelectedRange = () => {
  const { anchorNode } = window.getSelection() as IEditorSelection
  if (!anchorNode || !anchorNode.parentNode) {
    return false
  }
  if (anchorNode.parentNode as Node) {
    return anchorNode.parentElement.hasAttribute('data-slate-string')
  }
}
