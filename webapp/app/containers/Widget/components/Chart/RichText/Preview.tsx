import React from 'react'

import { RichText, RichTextNode } from 'components/RichText'

interface IRichTextPreviewProps {
  content: string | RichTextNode[]
  onFormatText: (text: string) => string
}

const RichTextPreview: React.FC<IRichTextPreviewProps> = (props) => {
  const { content, onFormatText } = props

  return (
    <RichText
      readOnly
      value={content}
      toolbar={false}
      onFormatText={onFormatText}
    />
  )
}

export default RichTextPreview
