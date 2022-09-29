import React, { memo } from 'react'
import { Form, Input, Row, Col, Button } from 'antd'
import { TCopyType } from '../types'
import styles from '../SharePanel.less'
const FormItem = Form.Item

interface IUrlClipboardProps {
  shareUrl: string
  password?: string
  onCopy: (copytype: TCopyType) => () => void
}

const UrlClipboard: React.FC<IUrlClipboardProps> = ({
  shareUrl,
  password,
  onCopy
}) => {
  const itemStyle = { labelCol: { span: 6 }, wrapperCol: { span: 17 } }
  return (
    shareUrl && (
      <>
        <Row gutter={8}>
          <Col span={24}>
            <FormItem label="分享链接" {...itemStyle}>
              <Input
                readOnly
                value={shareUrl}
                addonAfter={
                  <span className={styles.copy} onClick={onCopy('link')}>
                    复制链接
                  </span>
                }
              />
            </FormItem>
          </Col>
        </Row>
        {password && (
          <>
            <Row gutter={8}>
              <Col span={24}>
                <FormItem label="口令" {...itemStyle}>
                  <Input
                    readOnly
                    value={password}
                    addonAfter={
                      <span className={styles.copy} onClick={onCopy('all')}>
                        复制链接及口令
                      </span>
                    }
                  />
                </FormItem>
              </Col>
            </Row>
          </>
        )}
      </>
    )
  )
}

export default memo(UrlClipboard)
