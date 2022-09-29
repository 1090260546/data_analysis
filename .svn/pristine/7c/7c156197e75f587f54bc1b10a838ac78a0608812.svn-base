import React from 'react'
import { Icon } from 'antd'

export interface IDownloadCsvProps {
  shareLoading?: boolean
  downloadCsvLoading: boolean
  onDownloadCsv: () => void
}

export function DownloadCsv (props: IDownloadCsvProps) {
  const { shareLoading, downloadCsvLoading } = props
  const iconType = shareLoading || downloadCsvLoading ? 'loading' : 'download'
  return (
    <Icon type={iconType} onClick={getShareToken(props)} />
  )
}

function getShareToken (props) {
  return function () {
    props.onDownloadCsv()
  }
}

export default DownloadCsv
