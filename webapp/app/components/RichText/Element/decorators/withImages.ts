import { Transforms } from 'slate'
import { ReactEditor } from 'slate-react'
import { isUrl, isImagePath } from 'utils/util'
import { ElementTypes } from '../constants'

const insertImage = (editor: ReactEditor, url: string | ArrayBuffer) => {
  const text = { text: '' }
  const image = { type: ElementTypes.Image, url, children: [text] }
  Transforms.insertNodes(editor, image)
}

const isImageUrl = (url: string) => {
  if (!url) {
    return false
  }
  if (!isUrl(url)) {
    return false
  }
  const { pathname } = new URL(url)
  return isImagePath(pathname)
}

const withImages = (editor: ReactEditor) => {
  const { insertData } = editor

  editor.insertData = (data) => {
    const text = data.getData('text/plain')
    const { files } = data

    if (files && files.length) {
      for (let idx = 0; idx < files.length; idx++) {
        const reader = new FileReader()
        const file = files[idx]
        const [mine] = file.type.split('/')
        if (mine === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result
            insertImage(editor, url)
          })
          reader.readAsDataURL(file)
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}

export default withImages
