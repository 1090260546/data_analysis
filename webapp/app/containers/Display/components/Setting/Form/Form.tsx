import React, { useImperativeHandle, forwardRef } from 'react'
import debounce from 'lodash/debounce'

import { Form } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import ItemGroup from './ItemGroup'

import { SlideLayerSetting } from './types'

import { SlideSettingContext } from './util'

import './Form.less'

interface ISettingFormProps extends FormComponentProps {
  setting: SlideLayerSetting
  slideId: number
  layerId?: number
  onChange: (
    changedValues: { [name: string]: number | string },
    layerId?: number
  ) => void
}

const SettingForm: React.FC<ISettingFormProps> = (props, ref) => {
  const { form, setting, slideId, layerId } = props
  useImperativeHandle(ref, () => form)

  return (
    <Form className="display-setting-form" labelAlign="left">
      <SlideSettingContext.Provider
        value={{ form, slideId, layerId, size: 'small' }}
      >
        {setting.params.map((param) => (
          <ItemGroup key={param.name} param={param} />
        ))}
      </SlideSettingContext.Provider>
    </Form>
  )
}

let cachedValues = {}

export default Form.create<ISettingFormProps>({
  onValuesChange: (props, changedValues, allValues) => {
    if (Object.keys(changedValues).length > 1) {
      return
    }
    cachedValues = { ...cachedValues, ...allValues, ...changedValues }
    const { onChange, layerId } = props
    const debouncedChange = debounce((layerId) => {
      onChange({ ...cachedValues }, layerId)
      cachedValues = {}
    }, 1000)
    debouncedChange(layerId)
  }
})(forwardRef(SettingForm))
