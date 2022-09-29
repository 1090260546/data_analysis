import React, { useState, useCallback } from 'react'
import cloneDeep from 'lodash/cloneDeep'

import { Row, Button, Modal } from 'antd'
import { RichText, RichTextNode } from 'components/RichText'
import Toolbar from 'components/RichText/Toolbar'
import Preview from './Preview'

import Styles from './RichText.less'

interface IRichTextEditorProps {
  content: string | RichTextNode[]
  mapFields: object
  fieldBoundaries: [string, string]
  onChange: (value: RichTextNode[]) => void
  onFormatText: (text: string) => string
}

const RichTextEditor: React.FC<IRichTextEditorProps> = (props) => {
  const { content, mapFields, fieldBoundaries, onChange, onFormatText } = props
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewContent, setPreviewContent] = useState(null)

  const openPreview = useCallback(() => {
    // @REFACTOR temporarily resolve range selection error in Editor
    // caused by same content value reference in Editor & Preview
    const clonedContent = cloneDeep(content)
    setPreviewContent(clonedContent)
    setPreviewVisible(true)
  }, [content])
  const closePreview = useCallback(() => {
    setPreviewVisible(false)
  }, [])

  return (
    <div className={Styles.richText}>
      <RichText
        className={Styles.editor}
        value={content}
        toolbar={
          <Toolbar.Toolbar>
            <Toolbar.Font />
            <Toolbar.Heading />
            <Toolbar.Format />
            <Toolbar.Alignment />
            <Toolbar.Link />
            <Toolbar.Image />
            <Toolbar.Marquee />
            <Toolbar.Field
              mapFields={mapFields}
              fieldBoundaries={fieldBoundaries}
            />
            <Toolbar.Reset />
          </Toolbar.Toolbar>
        }
        onChange={onChange}
      />
      <Row type="flex" align="middle" justify="end" style={{ paddingTop: 16 }}>
        <Button onClick={openPreview} type="primary">
          预览
        </Button>
      </Row>
      <Modal
        title="富文本预览"
        wrapClassName="ant-modal-large"
        visible={previewVisible}
        footer={null}
        onCancel={closePreview}
      >
        <Preview content={previewContent} onFormatText={onFormatText} />
      </Modal>
    </div>
  )
}

export default RichTextEditor
