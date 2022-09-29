import React, { useState, useEffect, useCallback } from 'react'

import { WrappedFormUtils } from 'antd/lib/form/Form'
import { SlideLayerSettingForm } from './Form'

import {
  slideSettings,
  GraphTypes,
  SecondaryGraphTypes
} from './Form/constants'
import { ILayerParams } from '../types'

interface ILayerSettingFormProps {
  type: GraphTypes | SecondaryGraphTypes
  slideId: number
  layerId: number
  layerParams: ILayerParams
  onChange: (layerId: number, changedParams: Partial<ILayerParams>) => void
}

const LayerSettingForm: React.FC<ILayerSettingFormProps> = (props) => {
  const { type, slideId, layerId, layerParams, onChange } = props
  const layerSetting = slideSettings[type]
  const refForm = React.useRef<WrappedFormUtils>(null)
  const [lastLayerId, setLastLayerId] = useState<number>(null)

  useEffect(() => {
    if (refForm.current && layerId !== lastLayerId) {
      refForm.current.setFieldsValue(layerParams)
      setLastLayerId(layerId)
    }
  }, [layerParams, layerId])

  const change = (changedValues, layerId) => {
    onChange(layerId, changedValues)
  }

  return (
    <SlideLayerSettingForm
      wrappedComponentRef={refForm}
      setting={layerSetting}
      slideId={slideId}
      layerId={layerId}
      onChange={change}
    />
  )
}

export default React.memo(LayerSettingForm)
