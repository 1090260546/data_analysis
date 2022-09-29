import React, { useContext, useCallback, useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import Toolbar from 'components/RichText/Toolbar'
import { RichTextNode } from 'components/RichText'
import { buildLabelBoxStyles } from 'app/containers/Display/components/Layer/RichText/util'
import { onLabelEditorStylesChange } from './util'
import { LayerContext } from '../util'
import DisplayActions from '../../../actions'
import Editor from './Editor'
import Styles from './RichText.less'

const LabelEditor: React.FC = () => {
  const dispatch = useDispatch()
  const {
    layer: {
      params: { richText },
      id: layerId,
      params
    },
    operationInfo
  } = useContext(LayerContext)
  const { boxStyles } = buildLabelBoxStyles(params)

  const editing = operationInfo?.editing

  const editorContent = richText.content

  const [value, setValue] = useState(editorContent)

  const editorChange = useCallback(
    (updatedContent: RichTextNode[]) => {
      if (updatedContent === editorContent) {
        return
      }
      setValue(updatedContent)
    },
    [editorContent]
  )

  useEffect(() => {
    if (!editing && typeof editing === 'boolean') {
      dispatch(
        DisplayActions.editSlideLayerParams(
          layerId,
          onLabelEditorStylesChange(['richText', 'content'], value)
        )
      )
    }
  }, [editing])
  return (
    <Editor
      className={Styles.editor}
      styles={boxStyles}
      value={value}
      toolbar={
        !editing ? (
          false
        ) : (
          <Toolbar.Toolbar>
            <Toolbar.Font />
            <Toolbar.Heading />
            <Toolbar.Format />
            <Toolbar.Alignment />
            <Toolbar.Link />
          </Toolbar.Toolbar>
        )
      }
      readOnly={!editing}
      onChange={editorChange}
    />
  )
}

export default LabelEditor
