import React, { useContext, useCallback, useRef, useState } from 'react'
import { EditorContext } from '../context'

import { ElementTypes } from '../Element'

import { Icon, Popover, Form, Input, Button } from 'antd'
import { FormItemProps, FormComponentProps } from 'antd/lib/form'
import { WrappedFormUtils } from 'antd/lib/form/Form'

const formItemStyle: Partial<FormItemProps> = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailStyle: Partial<FormItemProps> = {
  wrapperCol: { offset: 8, span: 16 }
}

const Link: React.FC = () => {
  const form = useRef<WrappedFormUtils>()
  const { insertElement } = useContext(EditorContext)
  const [visible, setVisible] = useState(false)

  const openPopover = useCallback(() => {
    setVisible(true)
  }, [])
  const insertLink = useCallback(
    ({ href, text }) => {
      insertElement(ElementTypes.Link, href, [{ text }])
      setVisible(false)
      form.current.resetFields()
    },
    [insertElement]
  )

  return (
    <Popover
      visible={visible}
      content={<LinkFormWrapper ref={form} onSave={insertLink} />}
    >
      <Icon
        type="link"
        className="richtext-toolbar-item"
        onClick={openPopover}
      />
    </Popover>
  )
}

export default Link

interface ILinkFormProps extends FormComponentProps {
  onSave: (values: { text: string; href: string }) => void
}

const LinkForm: React.FC<ILinkFormProps> = (props, ref) => {
  const { form, onSave } = props
  const { getFieldDecorator } = form

  const saveLink = useCallback(() => {
    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return
      }
      onSave(values)
    })
  }, [])

  React.useImperativeHandle(ref, () => ({ form }))

  return (
    <Form>
      <Form.Item {...formItemStyle} label="链接名称">
        {getFieldDecorator('text', {
          rules: [{ required: true, message: '链接名称不能为空' }]
        })(<Input size="small" autoFocus />)}
      </Form.Item>
      <Form.Item {...formItemStyle} label="链接地址">
        {getFieldDecorator('href', {
          rules: [
            { required: true, message: '链接地址不能为空' },
            {
              type: 'url',
              message: '链接地址不正确'
            }
          ]
        })(<Input size="small" />)}
      </Form.Item>
      <Form.Item {...tailStyle}>
        <Button type="primary" size="small" onClick={saveLink}>
          插入
        </Button>
      </Form.Item>
    </Form>
  )
}

const LinkFormWrapper = Form.create<ILinkFormProps>()(
  React.forwardRef<WrappedFormUtils>(LinkForm)
)
