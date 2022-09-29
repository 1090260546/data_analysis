import React, { PureComponent } from 'react'

import { Form, Input, Modal, Select, Divider } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { IFlatRelatedView } from './ControlForm/types'
import { IControlOption } from '../types'
import styles from '../Control.less'
const FormItem = Form.Item
const Option = Select.Option

interface IOptionSettingFormProps extends FormComponentProps {
  visible: boolean
  values: IControlOption
  customOptions: IControlOption[]
  optionWithVariable: boolean
  relatedViewList: IFlatRelatedView[]
  onSave: () => void
  onCancel: () => void
  afterClose: () => void
}

class OptionSettingForm extends PureComponent<IOptionSettingFormProps> {
  public componentDidUpdate(prevProps: IOptionSettingFormProps) {
    const { form, values, optionWithVariable } = this.props
    if (values !== prevProps.values) {
      if (!values) {
        form.resetFields()
      } else {
        form.setFieldsValue({
          ...values,
          ...(optionWithVariable && values.variables)
        })
      }
    }
  }

  public render() {
    const {
      form,
      visible,
      optionWithVariable,
      relatedViewList,
      onSave,
      onCancel,
      afterClose
    } = this.props
    const { getFieldDecorator } = form

    const itemCols = {
      labelCol: { span: 8 },
      wrapperCol: { span: 12 }
    }

    return (
      <Modal
        title="编辑自定义选项"
        visible={visible}
        wrapClassName={`ant-modal-small ${styles.optionsModal}`}
        onOk={onSave}
        onCancel={onCancel}
        afterClose={afterClose}
      >
        <Form>
          <FormItem label="值" {...itemCols}>
            {getFieldDecorator('value', {
              rules: [{ required: true, message: '值不能为空' }]
            })(<Input />)}
          </FormItem>
          <FormItem label="文本" {...itemCols}>
            {getFieldDecorator('text', {})(<Input />)}
          </FormItem>
          {optionWithVariable && (
            <>
              <Divider>关联变量</Divider>
              {relatedViewList.map(({ id, name, variables }) => (
                <FormItem key={id} label={name} {...itemCols}>
                  {getFieldDecorator(
                    `${id}`,
                    {}
                  )(
                    <Select placeholder="请选择" allowClear>
                      {variables.map((v) => (
                        <Option key={v.name} value={v.name}>
                          {v.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
              ))}
            </>
          )}
        </Form>
      </Modal>
    )
  }
}

export default Form.create<IOptionSettingFormProps>()(OptionSettingForm)
