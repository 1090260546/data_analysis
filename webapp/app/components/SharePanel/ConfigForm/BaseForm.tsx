import React, { memo, useCallback } from 'react'
import moment from 'moment'
import UrlClipboard from './UrlClipboard'
import { Form, Row, Col, DatePicker, Button } from 'antd'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { TCopyType } from '../types'
import { DEFAULT_DATETIME_FORMAT } from 'app/globalConstants'
import styles from '../SharePanel.less'
const FormItem = Form.Item

interface IBaseFormProps {
  form: WrappedFormUtils
  shareUrl: string
  password?: string
  loading: boolean
  onCopy: (copytype: TCopyType) => () => void
  onGetToken: () => void
}

const BaseForm: React.FC<IBaseFormProps> = ({
  form,
  shareUrl,
  password,
  loading,
  onCopy,
  onGetToken
}) => {
  const { getFieldDecorator } = form
  const itemStyle = { labelCol: { span: 6 }, wrapperCol: { span: 17 } }

  const disabledDate = useCallback(
    (current) => current && current < moment().subtract(1, 'day').endOf('day'),
    []
  )

  return (
    <>
      <Row gutter={8}>
        <Col span={24}>
          <FormItem label="有效期" {...itemStyle}>
            {getFieldDecorator('expired', {
              rules: [{ required: true, message: '有效期不能为空' }]
            })(
              <DatePicker
                showTime
                format={DEFAULT_DATETIME_FORMAT}
                disabledDate={disabledDate}
              />
            )}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={8} type="flex" justify="center">
        <Col>
          <Button
            className={styles.generate}
            disabled={loading}
            loading={loading}
            type="link"
            onClick={onGetToken}
          >
            点击生成链接
          </Button>
        </Col>
      </Row>
      <UrlClipboard shareUrl={shareUrl} password={password} onCopy={onCopy} />
    </>
  )
}

export default memo(BaseForm)
