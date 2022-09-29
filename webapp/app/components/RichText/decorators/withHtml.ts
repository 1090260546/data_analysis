import { Element, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'
import { ElementTypes } from '../Element/constants'
import { parseHtml } from '../util'

const withHtml = (editor: ReactEditor) => {
  const { insertData, isInline, isVoid } = editor

  editor.isInline = (element: Element) => {
    return element.type === ElementTypes.Link ? true : isInline(element)
  }
  editor.isVoid = (element: Element) => {
    return element.type === ElementTypes.Image ? true : isVoid(element)
  }

  editor.insertData = (data) => {
    const html = data.getData('text/html')
    if (html) {
      const fragment = parseHtml(html)
      Transforms.insertFragment(editor, fragment)
      return
    }
    insertData(data)
  }

  return editor
}

export default withHtml
