import React, { useEffect } from 'react'
import { SlideLayerSettingForm } from './Form'

import { WrappedFormUtils } from 'antd/lib/form/Form'
import { slideSettings, GraphTypes } from './Form/constants'
import { ISlideParams } from 'containers/Viz/types'
const slideSetting = slideSettings[GraphTypes.Slide]

interface ISlideSettingFormProps {
  slideId: number
  slideParams: ISlideParams
  onChange: (changedValues: Partial<ISlideParams>) => void
}

const SlideSettingForm: React.FC<ISlideSettingFormProps> = (props) => {
  const { slideId, slideParams, onChange } = props
  const refForm = React.useRef<WrappedFormUtils>(null)

  useEffect(() => {
    if (refForm.current) {
      const fieldsValue: ISlideParams = {
        autoSlideGlobal: true,
        autoPlay: true,
        transitionGlobal: true,
        backgroundImage: undefined,
        ...slideParams
      }
      refForm.current.setFieldsValue(fieldsValue)
    }
  }, [slideParams])

  return (
    <SlideLayerSettingForm
      wrappedComponentRef={refForm}
      setting={slideSetting}
      slideId={slideId}
      onChange={onChange}
    />
  )
}

export default React.memo(SlideSettingForm)
