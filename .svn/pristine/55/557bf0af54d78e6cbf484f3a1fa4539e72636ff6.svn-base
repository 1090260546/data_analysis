import React, {
  useImperativeHandle,
  forwardRef
} from 'react'
import { Form, Row, Col, Input, Select, Icon, InputNumber, Spin } from 'antd'
const FormItem = Form.Item
const { Option } = Select

// validate http/https
// const URL_REG = /(https?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/

import { FormComponentProps } from 'antd/lib/form'
import { IScheduleWeChatWorkConfig } from './types'
import {
  FormItemStyle,
  LongFormItemStyle
} from './constants'

interface IScheduleWeChatWorkConfigProps
  extends FormComponentProps<IScheduleWeChatWorkConfig> {
  config: IScheduleWeChatWorkConfig
}

export const ScheduleWeChatWorkConfig: React.FC<IScheduleWeChatWorkConfigProps> = (
  props,
  ref
) => {
  const { form, config } = props
  const { getFieldDecorator } = form

  useImperativeHandle(ref, () => ({ form }))

  return (
    <Form>
      <FormItem label="机器人webhook地址" {...LongFormItemStyle}>
        {getFieldDecorator<IScheduleWeChatWorkConfig>('webHookUrl', {
          rules: [{ required: true, message: 'webhook地址不能为空' }],
          initialValue: config.webHookUrl
        })(<Input />)}
      </FormItem>
      <Row>
        <Col span={12}>
          <FormItem label="文件类型" {...FormItemStyle}>
            {getFieldDecorator<IScheduleWeChatWorkConfig>('type', {
              rules: [{ required: true }],
              initialValue: config.type
            })(
              <Select>
                <Option value="image">图片</Option>
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          {form.getFieldValue('type') !== 'excel' && (
            <FormItem label="图片宽度" {...FormItemStyle}>
              {getFieldDecorator<IScheduleWeChatWorkConfig>('imageWidth', {
                rules: [{ required: true }],
                initialValue: config.imageWidth || 1920
              })(<InputNumber min={100} />)}{' '}
              像素
            </FormItem>
          )}
        </Col>
      </Row>
    </Form>
  )
}

export default Form.create<IScheduleWeChatWorkConfigProps>()(
  forwardRef(ScheduleWeChatWorkConfig)
)
