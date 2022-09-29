import React, {
  useCallback,
  useState,
  RefForwardingComponent,
  PropsWithChildren
} from 'react'
import { Upload as AntUpload, Spin } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload'

interface IUploadProps {
  name: string
  action: string
  onChange?: (path: string) => void
}

const Upload: RefForwardingComponent<
  AntUpload,
  PropsWithChildren<IUploadProps>
> = (props, ref) => {
  const { name, action, onChange } = props
  const [loading, setLoading] = useState(false)
  const headers = {
    authorization: `Bearer ${localStorage.getItem('TOKEN')}`
  }
  const change = useCallback((info: UploadChangeParam) => {
    const { status, response } = info.file
    if (status === 'uploading') {
      setLoading(true)
      return
    }
    if (status === 'done') {
      onChange(response.payload)
    }
    setLoading(false)
  }, [])
  return (
    <AntUpload
      ref={ref}
      showUploadList={false}
      name={name}
      action={action}
      headers={headers}
      onChange={change}
    >
      {loading ? <Spin /> : props.children}
    </AntUpload>
  )
}

export default React.forwardRef(Upload)
