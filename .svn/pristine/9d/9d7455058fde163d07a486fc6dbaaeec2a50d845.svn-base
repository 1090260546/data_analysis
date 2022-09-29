import React, { useCallback, useContext } from 'react'

import { Icon, Upload, Tooltip } from 'antd'
import { RcCustomRequestOptions } from 'antd/lib/upload/interface'

import { getBase64 } from 'utils/util'
import { EditorContext } from '../context'
import { ElementTypes } from '../Element'

const Image: React.FC = () => {
  const { insertElement } = useContext(EditorContext)
  const handleFile = useCallback(
    (options: RcCustomRequestOptions) => {
      const { file } = options
      getBase64(file, (result: string) => {
        insertElement(ElementTypes.Image, result)
      })
    },
    [insertElement]
  )

  return (
    <Upload
      className="richtext-toolbar-item"
      accept="image/*"
      showUploadList={false}
      customRequest={handleFile}
    >
      <Tooltip title="插入图片">
        <Icon tabIndex={-1} type="picture" />
      </Tooltip>
    </Upload>
  )
}

export default Image
