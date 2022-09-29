import { ReactEditor } from 'slate-react'
import { Editor, Range, Point } from 'slate'
import { ElementTypes } from '../constants'

const withTables = (editor: ReactEditor) => {
  const { deleteBackward, deleteForward, insertBreak } = editor

  editor.deleteBackward = (unit) => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (n) => n.type === ElementTypes.TableCell
      })
      if (cell) {
        const [, cellPath] = cell
        const start = Editor.start(editor, cellPath)
        if (Point.equals(selection.anchor, start)) {
          return
        }
      }
    }

    deleteBackward(unit)
  }

  editor.deleteForward = (unit) => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (n) => n.type === ElementTypes.TableCell
      })
      if (cell) {
        const [, cellPath] = cell
        const end = Editor.end(editor, cellPath)
        if (Point.equals(selection.anchor, end)) {
          return
        }
      }
    }

    deleteForward(unit)
  }

  editor.insertBreak = () => {
    const { selection } = editor
    if (selection) {
      const [table] = Editor.nodes(editor, {
        match: (n) => n.type === ElementTypes.Table
      })
      if (table) {
        return
      }
    }

    insertBreak()
  }

  return editor
}

export default withTables
